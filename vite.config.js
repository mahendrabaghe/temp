import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * Automatically discovers any images placed in public/images/
 * and keeps src/data/detectedImages.js updated so images appear
 * in the website immediately without manual configuration.
 */
function publicImagesWatcherPlugin() {
  const imagesDir = path.resolve(__dirname, 'public/images')
  const outputFile = path.resolve(__dirname, 'src/data/detectedImages.js')
  const allowedExts = new Set(['.webp', '.jpg', '.jpeg', '.png', '.gif', '.avif', '.svg', '.bmp'])

  function syncImages() {
    if (!fs.existsSync(imagesDir)) return
    const files = fs
      .readdirSync(imagesDir)
      .filter((file) => allowedExts.has(path.extname(file).toLowerCase()))
      .sort((a, b) => a.localeCompare(b))

    const content = `// Auto-generated: Lists all image files in public/images/\n// This file is automatically updated by Vite when pictures are added, changed or removed in public/images/\nexport const detectedImages = ${JSON.stringify(files, null, 2)};\n`

    if (fs.existsSync(outputFile)) {
      const existing = fs.readFileSync(outputFile, 'utf8')
      if (existing === content) return
    }
    fs.writeFileSync(outputFile, content, 'utf8')
  }

  return {
    name: 'public-images-watcher',
    buildStart() {
      syncImages()
    },
    configureServer(server) {
      syncImages()
      server.watcher.add(imagesDir)
      const handleChange = (filePath) => {
        if (filePath.startsWith(imagesDir)) {
          syncImages()
        }
      }
      server.watcher.on('add', handleChange)
      server.watcher.on('unlink', handleChange)
      server.watcher.on('change', handleChange)
    },
  }
}

// GitHub Pages project sites are served from /<repository-name>/.
// Change this default if your repository has a different name, or set
// VITE_BASE="/your-repo-name/" in a local .env file.
const base = process.env.VITE_BASE || '/pichera-temple/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [publicImagesWatcherPlugin(), react(), tailwindcss()],
})
