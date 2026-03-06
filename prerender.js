import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8');
const { render } = await import('./dist/server/entry-server.js');

const routesToPrerender = [
    { url: '/services/abdomen-ultrasound', name: 'abdomen-ultrasound' }
];

for (const { url, name } of routesToPrerender) {
    const helmetContext = {};
    const appHtml = render(url, helmetContext);
    const { helmet } = helmetContext;

    const html = template
        .replace(`<!--app-head-->`, helmet ? Array.from([helmet.title.toString(), helmet.meta.toString(), helmet.link.toString(), helmet.script.toString()]).join('\\n') : '')
        .replace(`<!--app-html-->`, appHtml);

    const outDir = toAbsolute('dist/ssg');
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }

    const filePath = path.join(outDir, `${name}.html`);
    fs.writeFileSync(filePath, html);
    console.log(`Pre-rendered ${filePath}`);
}
