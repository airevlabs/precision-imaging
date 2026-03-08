import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Use jsdelivr CDN for GHL in production, local root for dev
  base: process.env.NODE_ENV === 'production' ? 'https://cdn.jsdelivr.net/gh/airevlabs/precision-imaging@main/dist/client/' : '/',
  ssr: {
    noExternal: ['react-helmet-async']
  }
})
