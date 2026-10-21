/**
 * Generates the custom SVG artwork used across the website.
 * These are original illustrations — not photographs of the temple.
 *
 * Run: node scripts/generate-images.mjs
 * Output: public/images/*.svg
 *
 * To use real photographs instead, drop JPG/WebP files into public/images/
 * and update the paths in src/data/gallery.js, src/data/deities.js and
 * src/data/events.js. See README.md for details.
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { templeExterior, templeEntrance, templeInterior, villageSunset, rangoliScene, aartiScene, festivalLights } from './art/scenes-temple.mjs'
import { bhoomiArt, paritArt, shivaArt, ramArt, balajiArt } from './art/deities.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, '..', 'public', 'images')
mkdirSync(OUT, { recursive: true })

const files = {
  'temple-exterior.svg': templeExterior,
  'temple-entrance.svg': templeEntrance,
  'temple-interior.svg': templeInterior,
  'deity-bhoomi.svg': bhoomiArt,
  'deity-parit.svg': paritArt,
  'deity-shiva.svg': shivaArt,
  'deity-ram.svg': ramArt,
  'deity-balaji.svg': balajiArt,
  'festival-rangoli.svg': rangoliScene,
  'aarti-thali.svg': aartiScene,
  'village-sunset.svg': villageSunset,
  'festival-lights.svg': festivalLights,
}

let total = 0
for (const [name, render] of Object.entries(files)) {
  const svg = render()
  writeFileSync(join(OUT, name), svg, 'utf8')
  total += svg.length
  console.log(`${name.padEnd(26)} ${(svg.length / 1024).toFixed(1)} KB`)
}

console.log(`\nGenerated ${Object.keys(files).length} illustrations (${(total / 1024).toFixed(1)} KB total).`)
