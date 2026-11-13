import { exec } from 'node:child_process'
import { createReadStream, existsSync } from 'node:fs'
import { realpath, stat } from 'node:fs/promises'
import { createServer } from 'node:http'
import { extname, isAbsolute, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { productionPolicy } from './policy.mjs'

const directory = fileURLToPath(new URL('../dist/', import.meta.url))
const host = '127.0.0.1'
const port = 4173
const address = 'http://' + host + ':' + port + '/'
const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.json': 'application/json; charset=utf-8',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.wasm': 'application/wasm',
  '.task': 'application/octet-stream',
}

const pages = ['index.html', 'corte.html', 'poligonos.html']
if (!pages.every(page => existsSync(resolve(directory, page)))) {
  console.error('Pasta dist incompleta. Extraia o ZIP inteiro ou execute npm.cmd run build.')
  process.exit(1)
}

const root = await realpath(directory)
const localHosts = new Set([host + ':' + port, 'localhost:' + port])

const server = createServer(async (request, response) => {
  if (!localHosts.has(request.headers.host?.toLowerCase())) {
    response.writeHead(403).end()
    return
  }

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' }).end()
    return
  }

  try {
    const url = new URL(request.url || '/', address)
    const path = url.pathname === '/' ? '/index.html' : decodeURIComponent(url.pathname)
    const file = await realpath(resolve(root, '.' + path))
    const subpath = relative(root, file)
    if (subpath === '..' || subpath.startsWith('../') || subpath.startsWith('..\\') || isAbsolute(subpath)) {
      response.writeHead(404).end()
      return
    }

    const info = await stat(file)
    if (!info.isFile()) {
      response.writeHead(404).end()
      return
    }

    response.writeHead(200, {
      'Content-Type': contentTypes[extname(file).toLowerCase()] || 'application/octet-stream',
      'Content-Length': info.size,
      'Cache-Control': 'no-cache',
      'Content-Security-Policy': productionPolicy,
      'X-Content-Type-Options': 'nosniff',
    })
    if (request.method === 'HEAD') {
      response.end()
      return
    }

    const stream = createReadStream(file)
    stream.on('error', () => response.destroy())
    response.on('close', () => stream.destroy())
    stream.pipe(response)
  } catch {
    response.writeHead(404).end()
  }
})

server.on('error', error => {
  console.error(
    error.code === 'EADDRINUSE'
      ? 'A porta 4173 já está em uso. Feche o terminal anterior e tente novamente.'
      : error.message,
  )
  process.exitCode = 1
})

server.listen(port, host, () => {
  console.log('Mostra de Profissões 2026 · CACCO')
  console.log('Abra ' + address + ' no Chrome ou no Edge.')
  console.log('Mantenha esta janela aberta enquanto estiver jogando. Ctrl+C encerra o jogo.')

  if (process.platform === 'win32' && process.argv.includes('--open')) {
    exec('start "" ' + address, { windowsHide: true })
  }
})
