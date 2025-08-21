import { defineConfig } from "vite";
import path from "path";

// ✅ Backend build config for Railway & Local
export default defineConfig({
  build: {
    ssr: "server/server.js", // ✅ this is your actual backend entry file
    outDir: "dist/server",
    target: "node18", // use node22 if you're sure, else node18
    emptyOutDir: true,
    rollupOptions: {
      input: "server/server.js",
      external: [
        "fs", "path", "url", "http", "https", "os", "crypto",
        "stream", "util", "events", "buffer", "querystring", "child_process",
        "express", "cors", "mongoose", "nodemailer", "dotenv"
      ],
      output: {
        format: "es",
        entryFileNames: "node-build.mjs" // ✅ this should match `npm start`
      },
    },
    sourcemap: false,
    minify: false,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});
