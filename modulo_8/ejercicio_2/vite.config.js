import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt", "icons/*"],
      manifest: {
        name: "Sinapsis",
        short_name: "Sinapsis",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#007bff",
        icons: [
          {
            src: "/src/assets//icons/logo_192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/src/assets/icons/logo_512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      devOptions: {
        enabled: true, // Enable PWA in dev mode
        type: "module",
        navigateFallback: "/index.html",
      },
    }),
  ],
});