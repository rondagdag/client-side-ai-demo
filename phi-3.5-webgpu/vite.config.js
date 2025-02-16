import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/phi-3.5-webgpu/dist/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});
