import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Ensure the output directory matches what Cloudflare expects
    outDir: 'dist',
    emptyOutDir: true,
  }
});