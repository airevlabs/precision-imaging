import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Replace this with your actual GitHub Pages URL when deploying
  base: process.env.VITE_BASE_URL || 'https://airevlabs.github.io/precision-imaging/',
  ssr: {
    noExternal: ['react-helmet-async']
  }
})
