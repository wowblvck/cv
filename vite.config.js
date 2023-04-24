import autoprefixer from "autoprefixer";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@assets": resolve(__dirname, "./src/assets"),
    },
  },
});
