import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'my-forkfolio',
  plugins: [react()],
  server: {
    port: 5175
  }
})
