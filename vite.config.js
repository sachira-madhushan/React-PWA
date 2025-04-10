import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  VitePWA({
    registerType: 'prompt', 
    devOptions: {
      enabled: true
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,png,svg,ico,json}"],
    },
    includeAssets: ["favicon.ico", "robots.txt"],
      manifest: {
        name: "My React PWA",
        short_name: "ReactPWA",
        description: "A React PWA application",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
  })
  ],
})
