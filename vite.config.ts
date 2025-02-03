import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/Vsc-Clone/",
  plugins: [react()],
  server: {
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      clientPort: 5173,
    },
    watch: {
      usePolling: true, 
    },
    fs: {
      strict: false,
      allow: ['.'],
    },
    host: true, 
  },
  build: {
    minify: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    target: 'esnext', 
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});
