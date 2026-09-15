import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' // 1. Import Tailwind

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss() // 2. Add the plugin here
  ],
})
