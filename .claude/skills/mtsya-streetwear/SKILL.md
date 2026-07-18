---
name: mtsya-streetwear
description: Use this skill to generate MTSYA streetwear garment images — flat-lay mockups and on-model shots for the DELUGE 01 line (tees, tanks, hoodies, long-sleeves, sweatpants, print/chenille tees). Contains the image model, the generation harness, the full design ethos, the prompt formula, per-category fit blocks, logo/marks rules, and the failure-mode fixes. Invoke whenever generating or iterating a MTSYA streetwear design mockup.
user-invocable: true
---

# MTSYA — Streetwear Design Generation

You generate photorealistic apparel mockups for **MTSYA**, an Indian menswear brand rooted
in the **Matsya deluge myth** (Matsya, the great fish, carried Manu's boat through the
flood). This skill is the streetwear counterpart to the quiet-luxury `mtsya-design` skill —
**never mix the two.** Everything here is self-contained: the harness is in `scripts/`, the
logo in `assets/`, base prompts in `templates/`.

---

## 0. The one non-negotiable — THE STORY RULE
Every design must carry **at least a hint of the deluge story**. Subtle is fine; absent is
not. Before finalizing any prompt, name the story element it carries: waterline/tideline
fade, the Scale, rising/receding water, the boat (hull-plank seams), indigo-as-night-of-rain,
"what survives," growth outgrowing vessels, deluge drop codes, मत्स्य. If none is present,
rework it. A design that could belong to any other brand is off-brand no matter how good.

---

## 1. The model + the harness
- **Image model:** `google/gemini-3-pro-image` on **OpenRouter**. (Also image-capable if
  needed: `gemini-3.1-flash`, `openai/gpt-5-image`, `gpt-5-image-mini`, `gpt-5.4-image-2`,
  `gemini-2.5-flash-image`. There is **no** `x-ai` image model on OpenRouter.)
- **Harness:** `scripts/generate-design.mjs`. It saves `image-*.png`, a copy of the prompt,
  and the raw response into the out-dir, so every iteration is reproducible.

```bash
OPENROUTER_API_KEY=sk-or-... node scripts/generate-design.mjs \
  --model google/gemini-3-pro-image \
  --prompt-file <out-dir>/prompt.txt \
  --out-dir <out-dir> \
  --image-file <ref1[,ref2]>
```

**Reference-image conventions (`--image-file`):**
- **Flat-lay generation:** ref 1 = the Scale logo → `assets/scale-logo.png`.
- **On-model shot:** ref 1 = the model face crop, ref 2 = the garment flat-lay (so the
  exact design lands on the model). Reproduce the model's face faithfully and the garment
  "detail for detail — do NOT redesign or move any element."

Always write the prompt to a `prompt.txt` in the out-dir first, then run the harness.

---

## 2. The winning design language (streetwear)
1. **Pattern lives in the MATERIAL** — knit structure, yarn-dye, engineered rib, wash,
   construction — **never a flat print** (except the bold-print lane, §7).
2. **Tonal, near-monochrome.** One colour family; no contrasting second colour; no loud
   graphics. Indigo is the hero; earthy alts (mud brown "Gaad", bone "Reta", terracotta,
   moss, plum) and washed black are in-palette.
3. **Quiet marks only** (see §5).
4. **Story through process, named every time** (water depth/climb/residue; hull-plank
   seams = the boat).
5. **Construction is the decoration** — exposed coverstitch, hull-plank seams, raw curled
   edges, knit trims, kinari braid.
6. **Quiet from far, revealed up close.** Heavyweight, oversized, dropped shoulders.
   Craft-luxury soul — the Kapital / 11.11 / Almost Gods lane — on a streetwear body.

**Rejected, do not revisit:** printed back graphics; dyed-in repeating scale motifs
("too programmed"); high-contrast two-colour ombre; a blue/contrasting logo; anything that
reads as an applied flat print (outside §7).

---

## 3. The five-block prompt formula
Every prompt is built from these blocks, in order:
1. **Frame** — "Generate exactly ONE image." Flat-lay = front + back **side by side, two
   separate garments, not overlapping**, on concrete-grey, dead-straight, pressed, clear
   margins. On-model = bright studio, framing per §4.
2. **Garment + GSM + named wash** — silhouette, fabric weight, the named colourway and its
   wash character (one even shade OR a receding tideline; never contrast).
3. **The hero** — the single material/craft story for this piece.
4. **Marks + placement** — the Scale, मत्स्य, the "DELUGE 01" tag (see §5).
5. **Comps + negatives** — reference lane + the explicit NOTs.

---

## 4. Per-category fit blocks (paste the right one)

**Tank (flat-lay):** broad, straight, boxy sleeveless muscle tank (Nike athlete cut). Wide
squared shoulders; small capped shoulder with the seam OUT at the natural shoulder point
covering the deltoid; armhole cut straight down; body dead straight from the armpits, hem
as wide as the chest, NO taper. Ribbed crew neckline. NOT a deep-scoop gym tank, NOT a
thin-strap vest, NOT slim-fit. Calm: one quiet texture, most of the surface plain.

**Tank (on-model):** size UP — capped shoulder extends slightly PAST the shoulder point (a
squared fabric shelf over the deltoid), deep straight-cut armhole, body wide and roomy
standing AWAY from the torso, straight sides to a wide square boxy hem at the low hip. Never
clinging. Warm-cream high-key studio; baggy dark trousers below.

**Sweatpants:** loose, boxy, BAGGY WIDE-LEG, relaxed drop rise, OPEN un-cuffed straight hem
(NOT tapered, no ribbed/elastic cuff), elasticated waist + flat tonal drawcord, side-seam
pockets only. Fabric: very thick plush brushed-back loopback fleece **~500–550 GSM**
(Roxylane hand) — reads thick and cushioned, never thin/papery. Flat-lay: legs DEAD STRAIGHT
and parallel, hems in a clean horizontal line — must NOT curl/bow/hook. On-model full-body,
one soft hem break, no heavy puddling.

**Tee / long-sleeve / hoodie:** oversized, boxy, dropped shoulders, heavyweight cloth
(260–300 GSM tees; ~480–500 GSM fleece for crew/hoodie). Ribbed collar/cuffs/hem; on-model
the body stands away from the torso, roomy sleeves, low boxy hem.

**On-model studio (cohesion default):** bright HIGH-KEY studio, seamless cool-grey → warm-
white backdrop (tanks use warm-cream), oversized drop fit, baggy black wide-leg trousers,
thighs-up (tops) or full-body (bottoms), squared to camera, calm gaze, minimal styling
(steel watch / thin chain). This is the DELUGE 01 lookbook look.

---

## 5. Logo + marks (get these exactly right)
- **The Scale** (`assets/scale-logo.png`) — EXACTLY four fish-scales in a 1-2-1 diamond:
  one top, two middle, one bottom point. Each a **rounded scallop**, NOT a sharp
  geometric diamond/rhombus. Small, **thin outline / tonal stitch only**, never a bright
  printed graphic. On dark cloth stitch it **one shade lighter** so it reads.
  - **Placement:** LEFT CHEST on tops (centre-chest reliably inflates it to 6+ scales —
    avoid). Left pocket / low left thigh on bottoms. Guard the count and shape in words.
- **मत्स्य** tonal-embroidered, centred at the back nape (tops) / centre-back waistband
  (bottoms).
- **"DELUGE 01"** — small woven deep-indigo tag at the side/left hem.
- Nothing else. No wordmark spam, no god imagery, no second colour.

---

## 6. Failure modes → fixes (bake these into prompts)
- **Logo inflates / becomes a cross or star** → keep it LEFT-placed; state "EXACTLY four,
  1-2-1, rounded scallop, NOT a cross/star, do not add scales"; reroll.
- **Logo invisible on dark plush** → thread ONE SHADE LIGHTER on a calm flat patch.
- **Pant legs curl/bow in flat-lay** → "laid dead straight and parallel, must NOT curl,
  bend, bow, hook, twist or splay."
- **Wrinkles** → "neatly pressed and smooth, no large wrinkles."
- **Allover wash (salt bloom) drifts to tie-dye** → restructure the design (e.g. clean upper
  + a single tideline) instead of re-rolling.
- **Model won't make a surgical geometric edit** (relocating one line/seam) → edit the
  **reference image itself** (clone clean cloth over the flaw with PIL), regenerate from
  that cleaned base; if the reroll shifts the wash, **colour-transfer** the original palette
  back onto the corrected geometry (Reinhard per-channel mean/std).
- **Hem-tag text garbles** ("BELUGE 01") → cosmetic render flake; ignore for the design
  record or reroll.

---

## 7. The bold-print lane (deliberate exception)
A user-sanctioned exception to "no print": ONE loud hero of the **Matsya fish** on an
otherwise quiet washed heavyweight body.
- **HD puff print:** dense Indian folk (Madhubani/Mithila) fish — body packed with scallop
  scales, hatching, dotted borders — as thick **raised puff print** (ink sits 2–3 mm off the
  cloth, rounded pillowed edges, catches light). Earthy 4–5 colour palette on washed black.
- **Chenille patch:** an elongated ornate Indian folk fish as a plush **tufted chenille
  varsity patch** with a felt border, appliquéd; fine interior detail in flat embroidery.
  Keep it modest (¼–⅓ chest width), an elegant Mithila fish — never a cute koi/mascot.
The story rule is satisfied by the fish itself.

---

## 8. Worked example (a tank flat-lay)
Write to `prompt.txt`, then run the harness with `assets/scale-logo.png` as ref 1:

> Generate exactly ONE image. Photorealistic apparel mockup of a premium sleeveless tank,
> front + back laid FLAT SIDE BY SIDE (two separate garments, not overlapping) on concrete-
> grey, dead straight, pressed, clear margins. [FIT: tank flat-lay block, §4.] FABRIC: smooth
> heavyweight cotton jersey. COLOUR/WASH: "Kajal" washed black, one even garment-washed kohl
> shade, only fine pale salt-abrasion ghosting along collar/armhole/hem edges. HERO: the calm
> body is the point — one quiet wash, most of the surface plain. MARKS: the four-scale Scale
> (EXACTLY four, 1-2-1, rounded scallops, thin tonal outline one shade lighter — match the
> reference) small on the LEFT CHEST; मत्स्य tonal at the back nape; woven "DELUGE 01" side-hem
> tag. NEGATIVES: no print, no second colour, no god imagery, not slim-fit, not a deep-scoop
> gym tank. Lane: Kapital / 11.11 / Almost Gods, material-led and restrained.

Base templates for tee / tank / bottom / on-model / print live in `templates/`.

---

## 9. Where things live (in the MTSYA repo)
- Design language in full: `docs/design-language/` · logos + rules: `docs/logos/`
- Prompts per design: `research/streetwear-decode/iterations/<piece>/prompt.txt`
- Curated finals: `research/first-drop/` (tees `model-images/`, tanks `tank-images/`,
  bottoms `pant-images/`)
- Draft renders + raw shoots are git-ignored and regenerable from prompts.

**When invoked without specifics:** ask what garment + colourway/wash, whether flat-lay or
on-model (and which model), then build the prompt from the blocks above, write it to a
`prompt.txt`, and run the harness. Always name the story element before generating.
