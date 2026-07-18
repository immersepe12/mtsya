#!/usr/bin/env node
// MTSYA design iteration harness — generates images via OpenRouter.
//
// Usage:
//   OPENROUTER_API_KEY=sk-or-... node scripts/generate-design.mjs \
//     --model <openrouter-model-id> \
//     --prompt-file <path/to/prompt.txt> \
//     --out-dir research/streetwear-decode/iterations/v01-tide-tee \
//     [--n 1] [--image-file ref1.png,ref2.png]
//
// Saves image-<i>.png plus a copy of the prompt and the raw API response
// into the out-dir, so every iteration is fully reproducible.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const args = {};
const argv = process.argv.slice(2);
for (let i = 0; i < argv.length; i++) {
  if (argv[i].startsWith('--')) args[argv[i].slice(2)] = argv[i + 1];
}

const apiKey = process.env.OPENROUTER_API_KEY;
const model = args.model;
const promptFile = args['prompt-file'];
const outDir = args['out-dir'];
const n = parseInt(args.n ?? '1', 10);

if (!apiKey || !model || !promptFile || !outDir) {
  console.error('Missing required input. Need OPENROUTER_API_KEY env var, --model, --prompt-file, --out-dir.');
  process.exit(1);
}

const prompt = readFileSync(promptFile, 'utf8').trim();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'prompt.txt'), prompt + '\n');

const mimeByExt = { png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp' };
const refImages = (args['image-file'] ?? '')
  .split(',')
  .filter(Boolean)
  .map((path) => {
    const ext = path.split('.').pop().toLowerCase();
    const mime = mimeByExt[ext] ?? 'image/png';
    const b64 = readFileSync(path).toString('base64');
    return { type: 'image_url', image_url: { url: `data:${mime};base64,${b64}` } };
  });

const content = refImages.length
  ? [{ type: 'text', text: prompt }, ...refImages]
  : prompt;

async function generateOne(index) {
  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      messages: [{ role: 'user', content }],
      modalities: ['image', 'text'],
    }),
  });

  const raw = await res.text();
  writeFileSync(join(outDir, `response-${index}.json`), raw);

  if (!res.ok) {
    console.error(`Request ${index} failed (${res.status}): ${raw.slice(0, 500)}`);
    return false;
  }

  const data = JSON.parse(raw);
  const message = data.choices?.[0]?.message ?? {};
  const images = message.images ?? [];

  if (images.length === 0) {
    console.error(`Request ${index}: no images in response. Text was: ${(message.content ?? '').slice(0, 300)}`);
    return false;
  }

  images.forEach((img, j) => {
    const url = img.image_url?.url ?? img.url ?? '';
    const match = url.match(/^data:image\/(\w+);base64,(.+)$/s);
    if (!match) {
      console.error(`Request ${index} image ${j}: unexpected image format (not a base64 data URL).`);
      return;
    }
    const [, ext, b64] = match;
    const file = join(outDir, `image-${index}${images.length > 1 ? `-${j}` : ''}.${ext}`);
    writeFileSync(file, Buffer.from(b64, 'base64'));
    console.log(`saved ${file}`);
  });
  return true;
}

let ok = 0;
for (let i = 1; i <= n; i++) {
  if (await generateOne(i)) ok++;
}
console.log(`${ok}/${n} generations succeeded → ${outDir}`);
process.exit(ok > 0 ? 0 : 1);
