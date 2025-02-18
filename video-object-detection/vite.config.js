import { defineConfig } from "vite";
export default defineConfig({
  base: '/video-object-detection/dist/',
  build: {
    target: "esnext",
    outDir: 'dist',
    assetsDir: 'assets'
  },
});