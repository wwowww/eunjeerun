import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import gzipPlugin from 'rollup-plugin-gzip'
import tsconfigPaths from 'vite-tsconfig-paths'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    ViteImageOptimizer({
      webp: { quality: 80 },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern"
      }
    }
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=86400',
    },
  },
  build: {
    rollupOptions: {
      plugins: [gzipPlugin()],
      output: {
        manualChunks: (id) => {
          if (id.indexOf("node_modules") !== -1) {
            const module = id.split("node_modules/").pop();
            if (module) {
              return `vendor-${module.split("/")[0]}`;
            } else {
              return 'vendor-unknown';
            }
          }
        },
      }
    },
    target: 'esnext',
    sourcemap: false,
    chunkSizeWarningLimit: 500,
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
    },
  },
})
