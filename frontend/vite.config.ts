import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vercel from 'vite-plugin-vercel'

export default defineConfig({
  plugins: [
    react(),
    vercel()
  ],
  server: {
    port: Number(process.env.PORT) || 3000
  }
})
