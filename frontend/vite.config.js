import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // Se for o comando de build (GitHub), usa /lampejo/. Se for local (dev), usa /
    base: command === 'build' ? '/lampejo/' : '/',
  }
})