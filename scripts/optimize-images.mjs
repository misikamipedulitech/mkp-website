// Optimises images in public/images in place: resizes, strips metadata and
// re-encodes. Files are only overwritten when the result is meaningfully
// smaller, so re-running doesn't re-compress (and degrade) optimised images.
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "../public/images");
const MIN_SAVING = 0.1;

const MAX_WIDTH = 2400;

function encode(pipeline, ext) {
  return ext === ".png"
    ? pipeline.png({ compressionLevel: 9, palette: true })
    : pipeline.jpeg({ quality: 80, mozjpeg: true, progressive: true });
}

function formatKb(bytes) {
  return `${Math.round(bytes / 1024)} KB`;
}

async function optimize(file) {
  const ext = path.extname(file).toLowerCase();
  const input = await readFile(file);
  const pipeline = sharp(input)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true });
  const output = await encode(pipeline, ext).toBuffer();
  const name = path.relative(ROOT, file);

  if (output.length > input.length * (1 - MIN_SAVING)) {
    console.log(`  skipped  ${name} (already optimised)`);
    return;
  }

  await writeFile(file, output);
  console.log(
    `  ${name}: ${formatKb(input.length)} → ${formatKb(output.length)}`,
  );
}

const entries = await readdir(ROOT, { recursive: true, withFileTypes: true });
const files = entries
  .filter((entry) => entry.isFile() && /\.(jpe?g|png)$/i.test(entry.name))
  .map((entry) => path.join(entry.parentPath, entry.name));

console.log(`Optimising ${files.length} images in public/images`);
for (const file of files) {
  await optimize(file);
}
