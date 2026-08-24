import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command, mode }) => {
  // Determine which site to build based on environment variable
  const site = process.env.VITE_SITE || "en";
  
  return {
    plugins: [react(), tailwindcss()],
    base: `/${site}/`,
    build: {
      outDir: `dist/${site}`,
      emptyOutDir: false, // Keep other language builds intact
    },
    server: {
      host: "0.0.0.0",
      port: 3000,
      strictPort: true,
      hmr: {
        port: 3000,
      },
    },
  };
});
