import sharp from "sharp"
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const images = join(root, "public/images")

const targets = ["crossvenue-architecture.svg", "relaydb-architecture.svg"]

for (const name of targets) {
  const svgPath = join(images, name)
  const pngName = name.replace(/\.svg$/i, ".png")
  const pngPath = join(images, pngName)
  await sharp(svgPath, { density: 200 })
    .resize({ width: 1280 })
    .png({ compressionLevel: 9 })
    .toFile(pngPath)
  console.log("wrote", pngName)
}
