import react from "@vitejs/plugin-react-swc"
import path from "path"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  build: {
    minify: false, // Disable minification for easier debugging
    sourcemap: true, // Generate source maps for better debugging
    rollupOptions: {
      input: {
        popup: path.resolve(__dirname, "index.html"),
        popupHtml: path.resolve(__dirname, "popup.html"),
        background: path.resolve(__dirname, "src/background.ts")
      },
      output: {
        entryFileNames: (chunkInfo) => {
          // Ensure content and background scripts are named correctly
          return chunkInfo.name === "background" ? "background.js" : "[name].js"
        },
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]"
      }
    },
    outDir: "dist",
    emptyOutDir: true,
    target: "chrome130" // Specify Chrome target for better compatibility
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  // Ensure content script is processed correctly
  optimizeDeps: {
    include: ["react", "react-dom"]
  },
  // Disable code splitting for background and content scripts
  experimental: {
    renderBuiltUrl(filename, { type }) {
      if (type === "asset") {
        return filename
      }
      return { relative: true }
    }
  }
})
