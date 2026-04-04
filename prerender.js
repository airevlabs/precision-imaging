import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8');
let renderPath = './dist/server/entry-server.js';
const serverAssetsDir = toAbsolute('dist/server/assets');
if (fs.existsSync(serverAssetsDir)) {
    const serverFiles = fs.readdirSync(serverAssetsDir)
        .filter(f => f.match(/^entry-server-.*\.js$/))
        .map(f => ({ name: f, time: fs.statSync(path.join(serverAssetsDir, f)).mtime.getTime() }))
        .sort((a, b) => b.time - a.time);
    if (serverFiles.length > 0) {
        renderPath = `./dist/server/assets/${serverFiles[0].name}`;
    }
}
const { render } = await import(renderPath);

// Helper to find latest assets
const assetsDir = toAbsolute('dist/client/assets');
const getLatestAsset = (pattern) => {
    const files = fs.readdirSync(assetsDir)
        .filter(f => f.match(pattern))
        .map(f => ({ name: f, time: fs.statSync(path.join(assetsDir, f)).mtime.getTime() }))
        .sort((a, b) => b.time - a.time);
    return files.length > 0 ? files[0].name : null;
};

const latestJS = getLatestAsset(/^index-.*\.js$/);
const latestCSS = getLatestAsset(/.*\.css$/);

if (latestJS) {
    fs.copyFileSync(path.join(assetsDir, latestJS), path.join(assetsDir, 'index.js'));
    console.log(`Copied ${latestJS} to index.js`);
}
if (latestCSS) {
    fs.copyFileSync(path.join(assetsDir, latestCSS), path.join(assetsDir, 'style.css'));
    console.log(`Copied ${latestCSS} to style.css`);
}

const routesToPrerender = [
    { url: '/services/abdomen-ultrasound', name: 'abdomen-ultrasound' },
    { url: '/services/aorta-screening', name: 'aorta-screening' },
    { url: '/services/breast-ultrasound', name: 'breast-ultrasound' },
    { url: '/services/carotid-screening', name: 'carotid-screening' },
    { url: '/services/echocardiogram', name: 'echocardiogram' },
    { url: '/services/kidneys-bladder-ultrasound', name: 'kidneys-bladder-ultrasound' },
    { url: '/services/ob-ultrasound', name: 'ob-ultrasound' },
    { url: '/services/pediatric-imaging', name: 'pediatric-imaging' },
    { url: '/services/pelvic-ultrasound', name: 'pelvic-ultrasound' },
    { url: '/services/soft-tissue-ultrasound', name: 'soft-tissue-ultrasound' }
];

for (const { url, name } of routesToPrerender) {
    const helmetContext = {};
    const appHtml = render(url, helmetContext);
    const { helmet } = helmetContext;

    let html = template
        .replace(`<!--app-head-->`, helmet ? Array.from([helmet.title.toString(), helmet.meta.toString(), helmet.link.toString(), helmet.script.toString()]).join('\n') : '')
        .replace(`<!--app-html-->`, appHtml);

    // Replace hashed assets with unhashed versions for GHL stability
    html = html.replace(/assets\/[a-zA-Z0-9_-]+\.css/g, 'assets/style.css');
    html = html.replace(/assets\/index-[a-zA-Z0-9_-]+\.js/g, 'assets/index.js');
    
    // Safety check for raw source paths if Vite didn't transform them
    html = html.replace(/src="\/src\/main\.jsx"/, 'src="https://cdn.jsdelivr.net/gh/airevlabs/precision-imaging@main/dist/client/assets/index.js"');

    const outDir = toAbsolute('dist/ssg');
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }

    const filePath = path.join(outDir, `${name}.html`);
    fs.writeFileSync(filePath, html);
    console.log(`Pre-rendered ${filePath}`);
}
