import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/syncnote-client-web/",
  plugins: [react()],
  server: {
    port: 8000,
  }
})
