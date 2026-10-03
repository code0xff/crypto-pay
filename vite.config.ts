import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Project Pages are served from /<repo>/.
// Default matches the planned repo name. Override with VITE_BASE
// (for example VITE_BASE=/ when the site is a user site or custom domain).
export default defineConfig({
  base: process.env.VITE_BASE || '/crypto-pay-directory/',
  plugins: [react(), tailwindcss()],
})
