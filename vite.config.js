import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { obfuscator } from 'rollup-obfuscator';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import DEFAULT_OPTIONS from './image-optimizer.config';

export default defineConfig({
  plugins: [obfuscator(), ViteImageOptimizer(DEFAULT_OPTIONS)],
  base: './',
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@assets': resolve(__dirname, './src/assets'),
      '@styles': resolve(__dirname, './src/scss'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('i18next')) {
            return 'i18n';
          }
          return null;
        },
      },
    },
  },
});
