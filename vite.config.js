import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: command === 'build' ? 'https://cdn.jsdelivr.net/gh/airevlabs/precision-imaging@main/dist/client/' : '/',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/style.css';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  },
  ssr: {
    noExternal: ['react-helmet-async']
  }
}))
