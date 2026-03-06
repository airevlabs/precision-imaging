import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use jsdelivr CDN for GHL
  base: 'https://cdn.jsdelivr.net/gh/airevlabs/precision-imaging@main/dist/client/',
  ssr: {
    noExternal: ['react-helmet-async']
  }
})
