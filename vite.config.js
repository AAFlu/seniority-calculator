import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'docs', // Changed from 'dist' to 'docs' for GitHub Pages
    assetsDir: 'assets',
    sourcemap: false
  },
  base: process.env.NODE_ENV === 'production' ? '/seniority-calculator/' : '/'
})
