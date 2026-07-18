# Generation Pipeline — how the designs are made

Every MTSYA streetwear render is produced by one small, reproducible harness. Nothing is
hand-painted; each design is a **prompt + reference image(s)** run through an image model,
and every iteration keeps its `prompt.txt` so it can be regenerated or forked.

## The harness
`scripts/generate-design.mjs` — a Node script that calls the OpenRouter chat/completions
API with image output, and saves `image-*.png`, a copy of `prompt.txt`, and the raw API
response into the out-dir.

```bash
OPENROUTER_API_KEY=sk-or-... node scripts/generate-design.mjs \
  --model google/gemini-3-pro-image \
  --prompt-file research/streetwear-decode/iterations/<piece>/prompt.txt \
  --out-dir research/streetwear-decode/iterations/<piece> \
  --image-file research/streetwear-decode/scale-logo.png[,<second-ref>]
```

- **Model:** `google/gemini-3-pro-image` (the workhorse). Other image-capable OpenRouter
  models seen during this project: `gemini-3.1-flash` variants, `openai/gpt-5-image`,
  `gpt-5-image-mini`, `gpt-5.4-image-2`, `gemini-2.5-flash-image`. Note: there is **no**
  `x-ai` image-output model on OpenRouter.
- **`--image-file`** takes comma-separated reference images (base64-embedded). Conventions:
  - **Flat-lay generation:** ref 1 = the Scale logo (`scale-logo.png`).
  - **On-model shot:** ref 1 = the model face crop, ref 2 = the garment flat-lay (so the
    exact design is reproduced on the model).

## The five-block prompt formula (streetwear)
1. **Frame** — "generate exactly ONE image", flat-lay front+back side by side / or the
   studio on-model framing; dead-straight, pressed, clear margins.
2. **Garment + GSM + named wash** — silhouette, fabric weight, the named colourway/wash.
3. **The hero** — the one material/craft story (knit, rib, hull-plank seams, kinari braid,
   tideline, puff print, chenille patch).
4. **Marks + placement** — the four-scale Scale (left chest / left thigh, one shade lighter,
   rounded scallops, exactly four), मत्स्य at nape/waistband, "DELUGE 01" woven tag.
5. **Comps + negatives** — reference lane (Kapital / 11.11 / Almost Gods), and the explicit
   NOTs (no print unless in the bold-print lane, no god imagery, no second colour, etc.).

## Reliability lessons baked into the prompts
- **Logo:** centre-chest inflates the four scales → use **left chest**; guard "rounded
  scallop, NOT sharp diamond"; on dark cloth stitch **one shade lighter** or it vanishes.
- **Pant legs** curl/bow in flat-lays → "laid dead straight, must not curl/bend/bow/hook".
- **Wrinkles** → "neatly pressed and smooth, no large wrinkles".
- **Allover wash concepts** (salt bloom) drift into tie-dye → restructure the design
  (e.g. clean upper + single tideline) rather than re-rolling.
- **Surgical edits** the model resists (relocating one line) → edit the *reference image*
  itself (clone clean cloth over the flaw) then regenerate; recolour afterward if the reroll
  shifts the wash (see the Gaad fix in the first-drop corrections log).

## Where things live
- Prompts: `research/streetwear-decode/iterations/<piece>/prompt.txt` (tracked in git).
- Draft renders: `research/streetwear-decode/iterations/<piece>/image-*` (git-ignored, local
  only — regenerate from the prompt).
- On-model draft shoots: `research/models/` (git-ignored, local only — heavy archive).
- **Final curated drop images:** `research/first-drop/` (tracked — the deliverable).
