import sharp from 'sharp'
import { readFileSync } from 'fs'

// Convert SVG to 32×32 PNG, then rename as .ico (single-size ICO is valid)
const svg = readFileSync('./public/logos/logo-mark-favicon.svg')
await sharp(svg)
  .resize(32, 32)
  .png()
  .toFile('./public/favicon.ico')

console.log('favicon.ico generated at 32×32')
