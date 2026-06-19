import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'animation'
            if (id.includes('react-router-dom') || id.includes('react-helmet-async')) return 'vendor'
            if (id.includes('react') || id.includes('react-dom')) return 'vendor'
            return 'vendor'
          }
          return undefined
        },
      },
    },
  },
})