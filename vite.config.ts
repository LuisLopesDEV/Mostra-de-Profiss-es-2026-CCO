import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import { developmentPolicy, productionPolicy } from './scripts/policy.mjs'

export default defineConfig({
  base: './',
  worker: { format: 'es' },
  build: {
    rollupOptions: {
      input: {
        lobby: fileURLToPath(new URL('./index.html', import.meta.url)),
        corte: fileURLToPath(new URL('./corte.html', import.meta.url)),
        poligonos: fileURLToPath(new URL('./poligonos.html', import.meta.url)),
        solar: fileURLToPath(new URL('./solar.html', import.meta.url)),
        voo: fileURLToPath(new URL('./voo.html', import.meta.url)),
        tiro: fileURLToPath(new URL('./tiro.html', import.meta.url)),
      },
    },
  },
  server: { headers: { 'Content-Security-Policy': developmentPolicy } },
  preview: { headers: { 'Content-Security-Policy': productionPolicy } },
})
