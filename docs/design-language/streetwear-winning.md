# Streetwear — The Winning Design Language

The hard-won taste signal from a full generate → review → iterate loop. This anchors all
MTSYA streetwear generation; do not re-explore the rejected lanes.

## The rules that win
1. **Pattern lives in the MATERIAL** — knit structure, yarn-dye, engineered rib, wash —
   **never a print** (except the deliberately-opened bold-print lane, below).
2. **Tonal, near-monochrome** — one colour family; no contrasting second colour, no loud
   graphics.
3. **Quiet marks only** — the four-scale Scale small in tonal stitch on the left chest,
   मत्स्य centred at the nape, a woven "DELUGE 01" hem tag.
4. **Story through process, named every time** — water depth/climb/residue; hull-plank
   diagonal seams = the boat. See [story-rule.md](story-rule.md).
5. **Construction is the decoration** — exposed coverstitch, hull seams, raw curled edges,
   knit trims.
6. **Quiet from far, revealed up close** — heavyweight, oversized, dropped shoulders;
   craft-luxury soul (the 11.11 / Kapital / Almost Gods lane) on a streetwear tee.

## Rejected — do not revisit
Printed back graphics; dyed-in repeating scale motifs ("too programmed"); high-contrast
two-colour ombre; blue/contrasting logo; anything that reads as an applied flat print.

## The bold-print lane (deliberate exception, opened later)
A separate, user-sanctioned lane for heavy print: dense Indian folk (Madhubani/Mithila)
illustration as high-density **puff print**, and **chenille/tufted varsity patches** — one
loud hero motif (the Matsya fish) on an otherwise quiet washed heavyweight body. The story
rule is satisfied by the fish itself. See `research/streetwear-decode/iterations/`
`v01-chitra-print-tee` (puff) and `v01-resham-chenille-tee` (chenille).

## Logo handling
Generate via `scripts/generate-design.mjs` with `google/gemini-3-pro-image`, passing
`research/streetwear-decode/scale-logo.png` as the reference. Harden and top/left-place the
logo instruction (see [../logos/README.md](../logos/README.md)).
