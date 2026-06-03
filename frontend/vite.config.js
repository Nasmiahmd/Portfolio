import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import tailwindcssMotion from 'tailwindcss-motion'

export default defineConfig({
  plugins: [
    tailwindcss(),
    tailwindcssmotion(),
  ],
})