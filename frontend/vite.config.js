import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['nombre-del-modulo-a-excluir'], // ejemplo: ['fs', 'path']
    }
  },
  server: {
    proxy: {
      '/ai': 'http://localhost:5000',
    },
  },
})