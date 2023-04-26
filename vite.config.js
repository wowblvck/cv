import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { obfuscator } from 'rollup-obfuscator';

export default defineConfig({
  plugins: [obfuscator()],
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
});
