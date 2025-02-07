import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import gzipPlugin from 'rollup-plugin-gzip'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern"
      }
    }
  },
  build: {
    rollupOptions: {
      plugins: [gzipPlugin()],
    },
  },
})
