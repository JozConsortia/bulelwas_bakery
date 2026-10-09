import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Support older phones and browsers (iOS 14+, Android Chrome 87+).
    target: ['es2020', 'chrome87', 'edge88', 'firefox78', 'safari14'],
  },
})
