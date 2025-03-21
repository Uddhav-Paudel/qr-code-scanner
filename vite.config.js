import { fileURLToPath, URL } from 'node:url'
import { VitePWA } from 'vite-plugin-pwa'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'QRCS',
        short_name: 'QRCS',
        theme_color: '#ffffff',
        orientation: 'portrait',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        background_color: '#ffffff',
        description: 'QR Code Scanner',
        launch_handler: true,
        screenshots: [
          {
            src: '/screenshot-1.png',
            sizes: '1280x720',
            type: 'image/png',
          },
        ],
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
