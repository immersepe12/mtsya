# MTSYA streetwear — the winning design language (as of iteration round 1)

Three pieces Kushal confirmed work best. This file distills *why*, so every future piece is judged against it.

## The three winners
- **v01-strata-tee** — fine heavyweight KNIT; irregular yarn-dyed indigo bands on near-black ink ground; bands dense at hem, thinning/dispersing toward chest = water depth layers. Soft bleeding yarn-dyed edges.
- **v05-deluge-tee-rib-logofix** — two-tone ottoman RIB (indigo face yarn / undyed white core); wash exposes pale core on rib peaks; indigo ombre hem→shoulder; raglan exposed coverstitch; diagonal hull-plank seams at hem.
- **v06-deluge-tee-mono** — ~90% ONE washed indigo; the rest is the same indigo breathing in its own shades (soft lighter wash patches, darker seam pooling); two-tone rib underneath; hull seams.

## The shared DNA (the actual rules)
1. **The pattern lives in the MATERIAL, never in a print.** Interest comes from knit structure, yarn-dye, engineered rib, wash behavior — revealed by construction/wash, not applied on top. Every printed-graphic and dyed-in-motif attempt was rejected (Tide Tee back print, the "too programmed" scale-resist v2).
2. **Tonal near-monochrome indigo.** No second contrasting color, no loud graphics. The eye reads texture, not color. Blue-outline logo was rejected in favor of tonal stitch.
3. **Quiet marks only.** The four-scale logo SMALL, tonal embroidered stitch (lighter thread on dark ground). मत्स्य centered at the back nape. "DELUGE 01" woven hem tag. Nothing else.
4. **Story through process, named every time.** Water depth (strata), water climbing (ombre), water residue (patchy mono). The hull-plank diagonal seams = the boat. Subtle, always present.
5. **Construction is the decoration.** Exposed coverstitch seams, hull-plank diagonal panels, raw curled knit edges, knit rib trims — the making shows.
6. **Quiet from far, revealed up close.** Almost solid at a distance; layered and crafted in the hand.
7. Heavyweight, oversized/boxy, dropped shoulders. Craft-luxury soul on a streetwear silhouette (the 11.11 lane pulled onto a tee).

## Rejected (do not revisit)
- Printed back hero graphics · dyed-in repeating scale motifs ("too programmed") · high-contrast two-color ombre · blue/contrasting logo · anything that reads as applied print rather than made cloth.

## Prompt-craft learnings
- Harden the logo instruction ("EXACTLY four scales: one top, two middle, one bottom point; do not add scales") and put it at the TOP, or the model drifts to 6+ scales.
- Letter-for-letter spelling makes small woven-tag text render; still unreliable at tiny sizes — treat the tag as a post-production comp for finals.
- The model often returns 2 near-identical frames regardless of "ONE image" — stochastic on Google's side, not a second API call.
- Side-by-side "not overlapping" is only sometimes honored; for finals, render front-only and back-only separately.
