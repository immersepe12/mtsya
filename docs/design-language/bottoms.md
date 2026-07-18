# Bottoms (Sweatpant / Trouser) Design Language

Locked July 2026 after the **Sindhu** iteration was signed off as "very good." Applies to
all sweatpants/trousers. Sibling to [streetwear-winning.md](streetwear-winning.md); the
[story rule](story-rule.md) governs.

## Fit (non-negotiable)
Loose, boxy, **baggy wide-leg** with a relaxed drop rise. **Open, un-cuffed, straight hem**
that finishes clean and breaks softly over the shoe — NOT tapered, NOT slim, NO ribbed /
elastic ankle cuff. Elasticated waistband + flat tonal drawcord only. On-model the length
should **just break** at the shoe with one soft fold — never heavy puddling/stacking.

## Fabric (the hand that sells it)
Very thick, heavyweight, **plush brushed-back loopback cotton fleece ~500–550 GSM** — the
buttery-soft, cushioned Roxylane-type hand. Must read thick and cushioned with soft rolling
folds; never thin, flat or papery (thin renders are a fail).

## Wash / colour (always one colour family, no contrast)
- **Single even shade, heavily stone-washed** (the Sindhu benchmark) — uniform depth
  waist-to-hem, salted/abraded surface, organic mottling, but NO fade / tideline / two-tone.
- Or a receding **waterline/tideline fade** (Vaha, Naav) — deeper at waist, paler toward hem.

Indigo is the hero; "Silt"/stone-grey and earthy tones (Gaad mud brown, Reta bone) are alts.

## Construction = the decoration (a signature)
Diagonal **hull-plank panel seams** down the legs (the planks of Manu's boat), joined with a
crisp, raised, exposed tonal coverstitch. Treat the seam play as a hero identity element,
not optional trim. Keep the seams sharp and legible against the plush cloth (if they blur
into the wash it's a fail). Clean side-seam pockets only; no cargo, flaps or hardware.

The **Bel** family adds a fine embroidered **kinari braid** line (tiny fish-scale crescents
+ ripple zigzag) as the hero instead of plank seams — see the DELUGE 01 bottoms below.

## Quiet marks
Four-scale Scale on the left pocket / low left thigh — stitch **one shade lighter** than the
dark cloth on a calm flat patch so it reads (tonal-darker disappears on deep fleece = fail).
Optional "मत्स्य" tonal at centre-back waistband; woven deep-indigo "DELUGE 01" tag at the
left hem.

## Flat-lay
Front + back side by side, legs **dead straight and parallel**, hems in a clean horizontal
line — legs must NOT curl/bow/hook at the bottom (a recurring failure).

## DELUGE 01 finalized bottoms
- **Bel** — washed indigo, diagonal kinari braid on the front-left leg.
- **Gaad** — muddy river-mud brown, kinari braid: front chevron / back diamond (the front
  braid connects to the back diamond at the side seams — see the first-drop corrections log).
- **Reta** — bone/ecru, hull-plank diamond leg seams.

Final flat-lays + on-model: [`research/first-drop/pant-images/`](../../research/first-drop/pant-images/).
(Sindhu, the indigo hull-plank benchmark pant, is the fit/fabric reference but is NOT part
of the three-piece bottoms drop.)

## How to apply
Generate via `scripts/generate-design.mjs` + `google/gemini-3-pro-image`, passing
`research/streetwear-decode/scale-logo.png` as reference. Base template:
`research/streetwear-decode/iterations/v01-sindhu-sweatpant/prompt.txt`.
