import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// ✅ Final Vite Config
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "dist/spa",
    chunkSizeWarningLimit: 1000,
  },
  plugins: [react(), expressPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

// ✅ Express Plugin for Vite Dev
function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // only in dev
    configureServer(server) {
      // ✅ Prevent index.ts from running local server
      process.env.START_EXPRESS = "false";

      const { createServer } = require("./server"); // 👈 make sure your `createServer` is exported
      const app = createServer();

      server.middlewares.use(app); // ✅ inject express middleware
    },
  };
}
