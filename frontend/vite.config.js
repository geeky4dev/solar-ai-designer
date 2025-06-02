import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
//  build: {
//    rollupOptions: {
//      external: ['some-module'],  // aquí pones el nombre del módulo externo
//    },
//  },
  server: {
    proxy: {
      '/ai': 'http://localhost:5000',
    },
  },
})