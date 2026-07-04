# MATSYA streetwear decode — digest

*What this folder holds: `design-decode.md` (the full market research + decoded design system, July 2026, live Shopify catalog data) and `prompts.md` (the two DELUGE 01 image-generation prompts built from it). This README is the digest: the core idea, how the prompts were constructed line by line, the reusable prompt formula, and how this direction relates to the quiet-luxury system in `/design-system`.*

---

## 1. The strategic core, in one paragraph

Every premium Indian streetwear brand at the ₹2k tier is doing acid wash as an *effect*. MATSYA makes the wash the *mythology*: garments are "survivors of the flood" — every fade, salt-line, and mottle is narrative, not decoration. Where Roxylane owns concrete/stone as its material vocabulary, MATSYA owns **the deluge / water as process**. This occupies the one open lane the research identified: **mythology executed through process, not printed clip-art** — desi codes (Devanagari, indigo, myth) on technical silhouettes, without calendar-art fish or god imagery. Roxylane is the proof-of-concept for the exact price band (₹1,920–2,500 process-led tees, 17 of 19 SKUs sold out, only ~17K followers).

## 2. The brand codes (the system's atoms)

| Code | Spec | Borrowed mechanic |
|---|---|---|
| Metaphor | The Deluge — wash/fade/salt-line as story | Nobody else's; the ownable idea |
| Wordmark | MTSYA in engraved/etched serif; मत्स्य small (nape, hem, pocket) | Sits between Almost Gods' blackletter and Roxylane's industrial sans |
| Symbol | **The Scale** — two overlapping crescents, one geometric fish-scale. One scale = chest hit; tessellated = hero graphic, jacquard, embroidery | The "one ownable symbol repeated forever" rule (Almost Gods' Alpha Cross, Huemn's gorilla) |
| Accent | **Deep indigo** — water + India's oldest dye; unused in the ₹2k band (only 11.11 at ₹27k) | Bluorng owns orange, so MATSYA owns indigo |
| Label | Woven indigo label with drop number: "DELUGE 01 — 1/150" | Numbered-drop scarcity (Urban Monkey, Bluorng no-restock) |
| Signature process | **Tide Wash**: garment-dye → apply tonal mark → salt/acid-wash so the mark survives as a ghost — *earned, not printed*; no two pieces identical | Roxylane's proven logo-reveal, re-authored through water |

Palette (all named in-world): Abyss (washed black, blue cast — anchor) · Pearl (bone) · Silt (warm sand) · Monsoon (washed grey-blue — signature) · Depth (deep indigo — accent) · Moss (olive-teal) · Riverbed (mocha — the 2026 riser). Color *names* are marketing copy at this tier.

Product ladder: tees ₹1,900 (Ghat) / ₹2,150 (Tide — **the wedge, drops first**) / ₹2,499 (Deluge, ombre depth-fade); pants ₹2,800 (Riverbed sweat) / ₹3,400 (Ghat Utility — hero) / ₹3,800 (Monsoon Denim, washed-indigo gap). Drops: 3 tees + 1 bottom + 1 accent, 100–150 units, never restocked; deadstock fabric makes the scarcity real ("when the bolt ends, the piece ends").

## 3. How the prompts were made — line-by-line anatomy

Every clause in both prompts traces to a decoded rule. Nothing is aesthetic whim.

### Prompt 1 — Tide Tee

| Prompt element | Source in the decode |
|---|---|
| "photorealistic apparel mockup, front and back view, flat-lay, neutral concrete-grey background" | Standard premium product-photography frame; front+back because **the back is the hero** (tee rule 5); neutral ground keeps attention on texture |
| "boxy oversized fit, drop shoulders, heavyweight 260 GSM cotton jersey with visible fabric texture, ribbed collar" | Tee rule 1: 230–280 GSM oversized is the entry ticket; 260 = Bluorng's premium sweet spot; GSM is *published* because it's the credibility number |
| "Monsoon — washed grey-blue, acid/salt-wash, uneven mottled fading **like it survived a flood**" | Palette (Monsoon = signature wash) + the core metaphor + in-world color naming (rule 6) |
| "wash must look organic and irregular, **not printed**" | Tee rule 2 (texture beats print; flat DTG is dead at this tier) — and a generator instruction so the model doesn't render a printed texture |
| "small tonal fish-scale emblem, left chest… revealed lighter through the wash (ghost mark, 'earned not printed')" | The Tide Wash signature process = Roxylane's logo-reveal mechanic; the Scale as the single ownable symbol (rule 4) |
| "back: tessellating scales rising from hem, dissolving toward shoulders **like a receding waterline**, deep indigo tone-on-tone" | Rule 5 (big back statement) + Scale tessellation + the flood-line motif + Depth indigo accent |
| "MTSYA in engraved etched-serif" | Wordmark spec — positioned between blackletter (art-lux) and grotesque caps (mid-premium) |
| "small Devanagari मत्स्य at back nape" | Placement grid + Neo-Desi Futurism; Devanagari used *typographically, not decoratively* |
| "in the lane of Roxylane and Almost Gods — mythology through process, not clip-art" | Style anchoring by named comps; the open-lane thesis (rule 8) |
| "**No** fish illustrations, **no** god imagery, **no** loud colors" | The motif NOT-list, encoded as negative constraints for the image model |
| "woven indigo hem label 'DELUGE 01'" | Label detail + named-numbered drop system |

### Prompt 2 — Ghat Utility Pant

| Prompt element | Source in the decode |
|---|---|
| "380 GSM French terry, visible loopback texture" | Pants rule 2: Roxylane's proven knit-utility hybrid (380 GSM terry, 11 pockets, ₹4,750, selling through) + rule 6 (320–380 GSM = credibility) |
| "Abyss — washed black with blue-indigo cast, fading concentrated at knees and hem **like a waterline**" | Anchor colorway + wash-as-narrative; fade placement tells the flood story on the body |
| "8 pockets, 3D pentagon cargo pockets with snap flaps" | Pocket-count inflation ("the number IS the spec") + pentagon pockets from the parachute playbook (rule 5) |
| "elastic waistband with heavy drawcord" | Rule 6: elastic + drawcord below ₹6k (button/zip fly is for denim above) |
| "exposed contrast stitching in warm sand 'Silt'" | Palette + the contrast-stitch convention from the denim anchor SKU |
| "tonal embroidered Scale at lower left calf" | Symbol repetition across the range (same placement as Riverbed sweatpant spec) |
| "woven deep-indigo label 'MTSYA — DELUGE 01'" | Label + drop code |
| "between a cargo pant and a sweatpant, Roxylane's utility line" | The exact hybrid positioning of the hero pant |
| "no models, no props" | Flat-lay product mockup; texture must stay the subject |

### The reusable prompt formula

Future MATSYA garment prompts should assemble the same five blocks, in order:

1. **Frame** — photorealistic apparel mockup · views (front + back for tees; front + ¾ back for pants) · flat-lay · neutral concrete-grey ground · moody editorial lighting · no models, no props.
2. **Garment** — fit + published GSM + fabric with *visible* texture + in-world colorway name with plain-English translation + wash described as organic/irregular/narrative ("like it survived a flood"), never "printed."
3. **Marks** — the Scale (always described as "two overlapping crescents" so the generator draws geometry, not a fish) · tonal/ghost execution · MTSYA etched serif · मत्स्य small · woven indigo label with drop code.
4. **Placement** — small chest hit + large back hero (tees); calf emblem + pocket label (pants). Never front-dominant.
5. **Style anchors + negatives** — named comps (Roxylane, Almost Gods), "mythology through process, not clip-art," then the explicit NOT-list: no fish illustrations, no god imagery, no loud colors.

### Deliberate deltas worth knowing (prompt vs. spec sheet)

- Prompt 2 says **380 GSM** where the §3.4 spec sheet says 360 — the prompt rounds up to Roxylane's proven number (visually irrelevant, but keep the tech pack at whatever is actually sourced).
- Prompt 1's title calls the Tide Tee the "drop hero," while the ladder names the ₹2,499 **Deluge Tee** as the drop hero; per the drop sequence, the Tide Tee (₹2,150) is the *wedge* — first to market. The prompt content matches the Tide Tee spec (reveal mark + back hero).
- The wordmark renders as caps **MTSYA** here; the quiet-luxury system mandates lowercase `mtsya`. This is a streetwear-line choice, not an error (see §4).

## 4. Relationship to `/design-system` (the quiet-luxury system)

These are **two directions sharing one myth, not one system**. Shared DNA: the Matsya/deluge story, the vowel-dropped name, deep indigo/ink territory, Devanagari as a secondary mark, restraint about literal fish imagery, "the price is the price" honesty (here made physical through deadstock scarcity).

Where they deliberately part ways — do not "fix" one to match the other:

| | `/design-system` (quiet luxury) | `research/streetwear-decode` |
|---|---|---|
| Product | 5 plain shirts + 5 tees, ₹3,000, restocked every 8 weeks | Washed heavyweight tees ₹1,900–2,499 + pants, numbered drops, never restocked |
| Mark | Madhubani fish (never redrawn, never recolored) | The geometric Scale (new, generative, tessellates) |
| Wordmark | lowercase `mtsya`, Caslon/EB Garamond | MTSYA caps, engraved/etched serif |
| Surface | Paper Cream, no texture, no graphics | Concrete grey, wash-as-graphic, back heroes |
| Language | "drop / limited" are banned words | "DELUGE 01," drop culture is the model |
| Scarcity | Anti-scarcity ("the price is the price") | Scarcity as design feature (made honest via deadstock) |

The quiet-luxury system's banned-word list and no-icon rule apply to *that* brand world; the streetwear decode is its own lane with its own codes. If both ever ship under one roof, the myth is the bridge and the indigo is the shared thread.

## 5. Provenance

Research dated July 2026; prices pulled live from brand storefronts (Shopify catalog data). Nine catalogs surveyed (Bluorng, Almost Gods, Jaywalking, Roxylane, Chapter 2 Drip, Warping Theories, Urban Monkey, Six5Six, 11.11) — full source list at the bottom of `design-decode.md`. No additional verification was needed at digest time; if acting on prices or sellout claims after ~Q4 2026, re-pull the storefronts.
