import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://only-czesio.github.io/Marek_Kamyk_Personal_Website/",
})
