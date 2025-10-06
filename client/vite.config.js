import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@safe-globalThis/safe-ethers-adapters": "@safe-global/safe-ethers-adapters",
      "@safe-globalThis/safe-core-sdk": "@safe-global/safe-core-sdk",
    },
  },
  define: {
    global: "globalThis",
    "process.env": {},
  },
  build: {
    rollupOptions: {
      external: ["@safe-global/safe-ethers-adapters", "@safe-global/safe-core-sdk"],
    },
  },
});