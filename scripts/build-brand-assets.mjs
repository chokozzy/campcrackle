// Regenerates the logo SVGs and favicons in /public from the sources in /design.
// Run with: node scripts/build-brand-assets.mjs
// Not part of `npm run build`; the generated files are committed.
import fs from 'node:fs';
import sharp from 'sharp';

const FOREST = '#0F3D2E';
const CAMPFIRE = '#F57C2B';
const CREAM = '#FBF4EA';
const OUT = 'public';

// ---------- Logo ----------
// Logo.svg is a three-layer trace: a full-canvas sand layer (dropped here so the
// logo is transparent), a forest layer and a campfire layer. Each layer is one
// path made of many subpaths, which we split by position into icon / wordmark / tagline.
const svg = fs.readFileSync('design/Logo.svg', 'utf8');
const [sand, green, orange] = [...svg.matchAll(/<path d="([^"]+)"/g)].map((m) =>
  m[1].split(/(?=M)/).map((d) => {
    const n = d.match(/-?\d+(\.\d+)?/g).map(Number);
    const ys = n.filter((_, i) => i % 2 === 1);
    return { d, top: Math.min(...ys), bottom: Math.max(...ys) };
  })
);

const WORDMARK_TOP = 550; // icon sits above this line
const TAGLINE_TOP = 725; // "TRUCK BED CAMPING" and its rules sit below this line
const isIcon = (s) => s.bottom < WORDMARK_TOP;
const isWordmark = (s) => s.top >= WORDMARK_TOP && s.top < TAGLINE_TOP;
const isTagline = (s) => s.top >= TAGLINE_TOP;
const join = (subs) => subs.map((s) => s.d).join('');
const path = (d, fill) => `<path fill="${fill}" fill-rule="evenodd" d="${d}"/>`;

// The truck body was "painted" by the sand layer. Keep just those enclosed
// islands (subpath 0 is the canvas, 1 is the outline around the whole icon)
// so the truck stays cream on any background.
const truckBody = join(sand.slice(2).filter(isIcon));

const icon = path(truckBody, CREAM) + path(join(green.filter(isIcon)), FOREST) + path(join(orange.filter(isIcon)), CAMPFIRE);
const wordmark = (ink) => path(join(green.filter(isWordmark)), ink) + path(join(orange.filter(isWordmark)), CAMPFIRE);
const tagline = (ink) => path(join(green.filter(isTagline)), ink);

const wrap = (viewBox, body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" role="img" aria-label="CampCrackle">${body}</svg>\n`;

// Full logo: icon over wordmark over tagline, cropped to the artwork.
const full = (ink) => wrap('151 116 1042 658', icon + wordmark(ink) + tagline(ink));

// Compact logo: icon on the left, wordmark on the right, no tagline.
// Icon artwork spans x 299..1031, y 128..547; wordmark spans x 163..1181, y 560..718.
const compact = (ink) =>
  wrap(
    '0 0 1560 320',
    `<g transform="translate(-228 -98) scale(.764)">${icon}</g>` +
      `<g transform="translate(446 -403) scale(.94)">${wordmark(ink)}</g>`
  );

// "-light" files have a light wordmark for dark backgrounds. The icon is shared:
// on forest the green linework disappears and the cream truck reads like the app icon.
fs.writeFileSync(`${OUT}/logo-full.svg`, full(FOREST));
fs.writeFileSync(`${OUT}/logo-full-light.svg`, full(CREAM));
fs.writeFileSync(`${OUT}/logo-compact.svg`, compact(FOREST));
fs.writeFileSync(`${OUT}/logo-compact-light.svg`, compact(CREAM));

// ---------- Favicons ----------
// logo2.png is an opaque RGB square: the rounded icon on a white canvas.
// Flood-fill the white from each corner into transparency, keeping a soft edge.
const { data, info } = await sharp('design/logo2.png').ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: w, height: h } = info;
const [fr, fg, fb] = [data[(w >> 1) * 4], data[(w >> 1) * 4 + 1], data[(w >> 1) * 4 + 2]]; // icon green, sampled top-centre
const whiteness = (i) => Math.min(1, Math.max(0, (data[i] - fr) / (253 - fr)));
const seen = new Uint8Array(w * h);
const stack = [0, w - 1, (h - 1) * w, h * w - 1];
while (stack.length) {
  const p = stack.pop();
  if (seen[p]) continue;
  seen[p] = 1;
  const t = whiteness(p * 4);
  if (t < 0.04) continue; // solid icon colour: stop
  data.set([fr, fg, fb, Math.round(255 * (1 - t))], p * 4);
  const x = p % w;
  if (x > 0) stack.push(p - 1);
  if (x < w - 1) stack.push(p + 1);
  if (p >= w) stack.push(p - w);
  if (p < w * (h - 1)) stack.push(p + w);
}
const rounded = () => sharp(data, { raw: { width: w, height: h, channels: 4 } });
const png = (size) => rounded().resize(size, size).png({ compressionLevel: 9, palette: size > 256 }).toBuffer();

fs.writeFileSync(`${OUT}/favicon-32x32.png`, await png(32));
fs.writeFileSync(`${OUT}/icon-512.png`, await png(512));
// iOS applies its own corner mask and paints transparency black, so the touch icon is full-bleed.
fs.writeFileSync(
  `${OUT}/apple-touch-icon.png`,
  await rounded().flatten({ background: { r: fr, g: fg, b: fb } }).resize(180, 180).png({ compressionLevel: 9 }).toBuffer()
);

// favicon.ico holding PNG-encoded 16, 32 and 48 px images.
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map(png));
const header = Buffer.alloc(6 + 16 * sizes.length);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
sizes.forEach((size, i) => {
  const e = 6 + 16 * i;
  header.writeUInt8(size, e);
  header.writeUInt8(size, e + 1);
  header.writeUInt16LE(1, e + 4);
  header.writeUInt16LE(32, e + 6);
  header.writeUInt32LE(images[i].length, e + 8);
  header.writeUInt32LE(offset, e + 12);
  offset += images[i].length;
});
fs.writeFileSync(`${OUT}/favicon.ico`, Buffer.concat([header, ...images]));

console.log('Brand assets written to /public');
