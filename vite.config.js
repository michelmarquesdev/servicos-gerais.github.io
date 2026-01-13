import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Para repositório username.github.io, use '/'
  // Para repositório de projeto, use '/nome-do-repositorio/'
  base: '/',
})
