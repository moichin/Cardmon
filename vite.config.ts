import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

const url = "8fc6-2800-860-71b7-7b6f-7160-cc0-2ad1-5589.ngrok-free.app";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
      verboseFileRoutes: false,
    }),
    react(),
    tailwindcss()
  ],
  server: {
    allowedHosts: [url],
  }
})
