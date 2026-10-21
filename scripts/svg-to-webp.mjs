/**
 * Convert all SVG files in public/images/ to WebP using sharp.
 * Renders SVGs at 1600×1600 density, then saves lossless WebP.
 */
import sharp from 'sharp'
import { readdir, unlink } from 'fs/promises'
import { join, basename, extname } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const imgDir = join(__dirname, '../public/images')

const files = await readdir(imgDir)
const svgs = files.filter((f) => extname(f) === '.svg')

console.log(`Found ${svgs.length} SVG files — converting to WebP…\n`)

for (const svg of svgs) {
  const src = join(imgDir, svg)
  const dest = join(imgDir, basename(svg, '.svg') + '.webp')

  try {
    await sharp(src, { density: 192, limitInputPixels: false })
      .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: false })
      .webp({ lossless: false, quality: 90, effort: 4 })
      .toFile(dest)

    console.log(`✓  ${svg}  →  ${basename(dest)}`)
  } catch (err) {
    console.error(`✗  ${svg}: ${err.message}`)
  }
}

console.log('\nDone.')
