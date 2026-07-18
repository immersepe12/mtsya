# MTSYA

**MTSYA** (मत्स्य — *Matsya*, the fish) is an Indian menswear brand rooted in the **deluge
myth**: Matsya, the great fish, carried Manu's boat through the flood. That story is the
brand's root and the **one non-negotiable rule** — every design must carry at least a hint
of it. See [`docs/design-language/story-rule.md`](docs/design-language/story-rule.md).

This repository holds the brand's design system, the streetwear design research, the
generation pipeline, and the finalized **DELUGE 01** first drop.

---

## Two coexisting directions
MTSYA deliberately runs two brand systems that share the myth but contradict each other on
purpose — **do not reconcile them** ([details](docs/design-language/two-directions.md)):

| | Quiet luxury | Streetwear |
|---|---|---|
| Home | `design-system/` | `research/streetwear-decode/` |
| Feel | plain shirts ~₹3,000, lowercase `mtsya` | flood-washed heavyweight, numbered drops |
| Logo | Madhubani **Matsya fish** | the four-scale **Scale** emblem |
| Graphics | none | wash/knit/construction as story |

**Logos (use the right one): [`docs/logos/`](docs/logos/).** The two marks are never mixed.

---

## DELUGE 01 — the first drop

The finalized drop lives, curated, in **[`research/first-drop/`](research/first-drop/)**
(with per-category READMEs). Draft renders and raw shoots are kept local and are
reproducible from their prompts.

### Tees (6) — `research/first-drop/model-images/`
Depth · Net · Ripple · Abyss · Current · Rekha. Material-led and tonal — knit structure,
engineered rib, washes and hull-seams as the story. One cohesive cool-grey high-key studio
(benchmarked to Current-on-Karan), oversized drop-shoulder fit, on Arjun / Karan / Rehan.

### Tanks (7) — `research/first-drop/tank-images/`
Jamun · Dhoop · Kajal · Mitti · Bhanwar · Kagaz · Namak. Broad straight athlete muscle-tank
fit, calm one-texture wash, left-chest Scale. Warm-cream studio.
Language: [`docs/design-language/tanks.md`](docs/design-language/tanks.md).

### Bottoms (3) — `research/first-drop/pant-images/`
Bel · Gaad · Reta. Baggy wide-leg, open un-cuffed hem, ~500–550 GSM plush fleece,
single-shade stone-wash, hull-plank seams / kinari braid.
Language: [`docs/design-language/bottoms.md`](docs/design-language/bottoms.md).

### New bold-print lane (in progress)
A deliberately-opened exception to the "no print" rule: dense Madhubani **puff print** and
**chenille varsity patches** of the Matsya fish on quiet washed bodies —
`research/streetwear-decode/iterations/v01-chitra-print-tee` and `v01-resham-chenille-tee`.

---

## How the designs are made
Nothing is hand-painted. Each design is a **prompt + reference image** run through an image
model, and every iteration keeps its `prompt.txt` so it can be regenerated or forked.
Full pipeline, the five-block prompt formula, and the reliability lessons:
**[`docs/generation.md`](docs/generation.md)**.

```bash
OPENROUTER_API_KEY=sk-or-... node scripts/generate-design.mjs \
  --model google/gemini-3-pro-image \
  --prompt-file research/streetwear-decode/iterations/<piece>/prompt.txt \
  --out-dir research/streetwear-decode/iterations/<piece> \
  --image-file research/streetwear-decode/scale-logo.png
```

---

## Design language (start here)
- [`story-rule.md`](docs/design-language/story-rule.md) — the one non-negotiable
- [`two-directions.md`](docs/design-language/two-directions.md) — quiet-luxury vs streetwear
- [`streetwear-winning.md`](docs/design-language/streetwear-winning.md) — the rules that win + rejects
- [`tanks.md`](docs/design-language/tanks.md) · [`bottoms.md`](docs/design-language/bottoms.md)
- [`fonts.md`](docs/design-language/fonts.md) — EB Garamond / Inter / Mukta Mahee (final)
- [`docs/logos/`](docs/logos/) — the two marks and their rules

---

## Repository map
```
app/                         Next.js app (site surfaces)
design-system/               Quiet-luxury system: colours_and_type.css, brand-assets,
                             fonts, brand book PDF, component previews, Matsya fish logo
docs/                        ← Documentation (this handoff)
  design-language/           The written design language
  generation.md              The generation pipeline & prompt formula
  logos/                     Both canonical logos + usage rules
research/
  streetwear-decode/         Streetwear research
    README.md                Streetwear direction & prompt formula
    WINNING-DIRECTION.md     Round-1 winning tee breakdown
    scale-logo.png/.svg      The streetwear Scale emblem (logo reference for generation)
    iterations/<piece>/      prompt.txt per design (draft renders git-ignored)
  first-drop/                ← Curated DELUGE 01 finals (tees / tanks / bottoms)
  models/                    Raw on-model shoot archive (git-ignored, local only)
scripts/generate-design.mjs  The generation harness
```

## Notes for anyone picking this up
- **Read the story rule first** — it gates everything.
- To make or fork a design: copy the nearest `prompt.txt`, edit, and run the harness with
  the Scale logo as the reference image. Keep the prompt in the iteration folder.
- Final images you can rely on are in `research/first-drop/`. Iteration `image-*` and
  `research/models/` are **git-ignored** to keep the repo lean — regenerate from prompts.
- Don't mix the two logos or the two directions.
