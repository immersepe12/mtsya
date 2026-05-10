# MTSYA Design System

> मत्स्य · the wardrobe that endures the deluge

A quiet-luxury Indian menswear brand. Five plain shirts and five plain T-shirts in Egyptian Giza cotton × TENCEL Lyocell at ₹3,000 each. Named for **Matsya**, the first avatar of Vishnu — the fish that guided Manu's boat through the deluge.

This system is the working brand reference for designers and design tools. It descends from two source documents (kept in `uploads/`):

- `MTSYA_Brand_Book.pdf` — the myth, the name, the wardrobe philosophy (Edition 2.0, May 2026)
- `MTSYA_Design_Guidelines.pdf` — tokens, components, page layouts, anti-patterns (Edition 1.0, May 2026)

Plain-text extracts of both live in `uploads/extracted_*.txt` if the PDFs are not viewable.

---

## Brand at a glance

- **Category** — Quiet-luxury Indian menswear; men's daily-wear.
- **Range** — 5 plain shirts + 5 plain T-shirts. ₹3,000 each. Three fits (slim / modern / relaxed). Five sizes (XS–XL). Restocked every eight weeks; silhouettes do not change.
- **Fabric** — Egyptian Giza cotton woven with TENCEL Lyocell.
- **Origin & founder** — Made in India. Founder writes from `kushal at mtsya` (lowercase, no title).
- **Reference brands** — The Row, Lemaire, Toteme, Brunello Cucinelli, Loro Piana, Hermès, Aesop, 11.11, Nicobar, Raw Mango.
- **Brand promise** — "the wardrobe that endures the deluge."

### The five shirts (product palette only — never UI)

| Name           | Hex       | Meaning                       |
| -------------- | --------- | ----------------------------- |
| Manu White     | `#F4EFE5` | the boat — what carries       |
| Deluge Indigo  | `#1B2A47` | the night — when the rain came |
| Veda Cream     | `#EFE6D2` | old paper — preserved         |
| Tide Stone     | `#B8BCB6` | wet rock — the boat rested    |
| Coast Olive    | `#545A3D` | dry land — life again         |

### Why "MTSYA" with no vowels

In older Indian grammar vowels are *breath*, consonants are *bone*. Strip the vowels and only the structure remains — what would be left after the deluge. The customer supplies the breath when they read the name aloud (mat-syaa). The act of reading is the brand's first idea.

---

## CONTENT FUNDAMENTALS

The voice is a long-form magazine essay, not a marketing email. Calm, considered, never urgent. Every page rewards a slow read.

### Tone & register

- **First-person plural is rare.** The founder writes in first person ("I"), the brand otherwise speaks in declarative third person ("MTSYA makes those things"). Customers are addressed as "you" sparingly.
- **Sentences are short, then long.** Mix short declarative beats with longer reflective sentences. Example from the brand book: *"It was alive in his palm. And then, impossibly, it was speaking."*
- **Cadence over information.** Repetition for rhythm is allowed: *"The fish grew. He carried it… The fish grew. He carried it…"*
- **No urgency, no hype.** Never "Hurry, only 2 left." Never "limited edition." Never "drop." The price is the price.
- **No exclamation marks.** Almost never. A period is enough.

### Casing

- **Wordmark** is always lowercase: `mtsya`. Never `MTSYA` outside of typeset display contexts (headers in the design doc, the brand book chapter labels), and never `Mtsya`.
- **Body and headline copy** — sentence case. Page titles like *the five shirts*, *the story*, *the journal* are lowercase, always.
- **All-caps allowed only for**: button labels, eyebrows, the wordmark in stretched display use.
- **Section labels in long-form pages** use letter-spaced caps: `C H A P T E R T W O`.

### Words to never use

> premium · luxury · curated · drop · alert · amazing · crafted · must-have · hurry · sale · limited · exclusive · iconic · timeless

These are marketing words. MTSYA earns trust by writing better, not by claiming more.

### Punctuation & symbols

- **Smart quotes always.** Never straight quotes.
- **Em dash with hair-spaces or surrounded by single spaces** for a long pause: `the boat — what carries`.
- **₹** always for prices. Never `Rs.`, `INR`, `₹3000.00`. Use `₹3,000` with a comma and no decimals.
- **Numerals**: oldstyle figures in body, lining figures in tables and prices.
- **Italics** only for foreign words (matsya, pralaya, sloka) and inside the brand book itself. Never in headlines, never for emphasis.
- **No bold body text.** The voice does not need to shout. Use a heading or a separate line.
- **No emoji** anywhere customer-facing.

### Examples (verbatim from brand book / guidelines)

- Hero subtitle, founder's letter close — none. The image is the welcome.
- Cart trust statement: *"Returns within 30 days, no questions, no need to explain."*
- Cart shipping line: *"Free shipping in India."* (Always true, not an offer.)
- 404 copy: *"This page is not here. The brand is small. Most of it is at /shirts."*
- Order email subject: *"Your MTSYA shirt is ordered."*
- Shipping email body: *"Your MTSYA shirt left the studio this morning. It will arrive in 2–4 days. Track it here."*
- Listing-page subtitle: *"— and five plain T-shirts."*
- Product subtitle: *"the boat — what carries"*, *"the night — when the rain came"*, etc.

If a piece of copy could appear on any other quiet-luxury brand without changing a word, it is wrong. MTSYA copy is rooted in the myth.

---

## VISUAL FOUNDATIONS

### Colour

The system is intentionally narrow.

| Role            | Hex       | Share | Use                                  |
| --------------- | --------- | ----- | ------------------------------------ |
| Paper Cream     | `#F5F1EA` | 75 %  | Default background — the brand's air |
| Deep Ink        | `#1F3A4D` | 20 %  | Text, wordmark, fish, primary button |
| Stone           | `#5A6B78` | 3 %   | Captions, secondary text             |
| Quiet           | `#9DA8B2` | 1 %   | Disabled, placeholders, tertiary     |
| Rule            | `#BFC4C9` | 1 %   | Hairline dividers, image frames      |
| Terracotta      | `#C9603A` | 1 %   | Wax-seal accent only — never a fill  |
| MFG Black       | `#000000` | 0 %   | Care labels in print only — never web |

The product photography palette (`Manu White`, `Deluge Indigo`, `Veda Cream`, `Tide Stone`, `Coast Olive`) lives only inside images. **Never** as section background, button colour, link, or chrome.

### Type

Three families, no more.

- **Display / wordmark** — Adobe Caslon Pro Bold (free fallback **EB Garamond Bold**). Lowercase `mtsya`, +200 letter-spacing.
- **Headlines & body** — Adobe Caslon Pro Roman (free fallback **EB Garamond**). Body justified-left, ragged-right, 17–18 px, line-height 1.55, 65 ch column.
- **Functional UI** — Optima (free fallback **Inter**). Buttons, prices, captions, navigation labels, eyebrows.
- **Devanagari** — Mukta Mahee (Ek Type Mumbai) for *मत्स्य* and any Hindi/Sanskrit text.

> **Font substitution flag —** EB Garamond is now self-hosted from `fonts/` (variable, italic + roman). Adobe Caslon Pro and Optima are still licensed and not provided; the system uses **EB Garamond** as the Caslon stand-in and loads **Inter** from Google Fonts as the Optima stand-in. **Please supply the licensed Caslon and Optima files** so we can swap them in.

Type rules (the ones designers forget):

- No italics in headlines.
- No bold weights in body.
- Oldstyle figures in body, lining figures in tables / prices.
- All-caps allowed only on buttons, eyebrows, and the wordmark.
- Smart quotes always.

### Spacing & layout

- **Spacing scale (px only):** 8 · 16 · 24 · 48 · 96 · 128. Nothing in between.
- **Grid:** 12 columns, 24 px gutters, max content width **1440 px**.
- **Side margins:** 80 px desktop, 24 px mobile.
- **Vertical rhythm:** 8 px increments, but section gaps are 96 / 128 px on the homepage. The Loro Piana / The Row generosity rule — *always more whitespace than feels comfortable.*

### Backgrounds

- Plain Paper Cream surfaces. Always.
- **No gradients.** Anywhere. Ever.
- **No textures, patterns, or repeating motifs** in chrome. The fish in the logo carries the cultural pattern; the brand world does not need more.
- **Full-bleed images** are reserved for the hero (`100vw × 100vh`) and below-fold lifestyle moments. They sit on Paper Cream margins, never bleed-bleed across sections without breathing.

### Imagery

- Cream backgrounds, soft natural light, slight Indian morning warmth. Never a cold studio sweep.
- Two moods: **Worn** (a real man wearing the shirt in his life) and **Still** (the shirt photographed alone). Hero rotates seasonally between them.
- Macro fabric details on product pages — close-up of weave, cuff, placket.
- **No stock photography.** Ever.
- Aspect ratios allowed: 4:5 (product), 3:2 (lifestyle), 1:1 (Instagram crop only).
- Images load with a 200 ms opacity fade. Never a shimmer skeleton.

### Animation & motion

- **No animation on scroll.** No parallax, no fade-in cascades, no AOS-style entrances.
- The only motion in the entire system: a 200 ms `ease` transition on hover (button colour, image opacity to 0.85), and a 200 ms image fade-in on load.
- No bounces, no springs, no Lottie illustrations.

### Hover & press states

- **Primary button hover** — background darkens to `#15293A` (Deep Ink ~10 % darker), 200 ms.
- **Ghost button hover** — fills to Deep Ink, text flips to Paper Cream.
- **Product card hover** — image opacity drops to 0.85, 200 ms. Nothing else.
- **Text link hover** — underline appears (offset 4 px), no colour change.
- **Press state** — no shrink, no shadow, no scale. The button accepts the click.
- **Focus ring** — 2 px Deep Ink solid border, no glow.

### Borders, radii, shadows

- **Radius — 0**, always. The single allowed exception is `2px` and only when geometry truly demands it.
- **Hairline** — `1px solid #BFC4C9` (Rule) for table rows, image frames, dividers.
- **Emphasis border** — `2px solid #1F3A4D` (Deep Ink) for selected pills and focus.
- **Shadows — never.** Drop shadows betray the brand. There is no inner shadow system, no elevation, no `z-depth` scale. Layering is achieved by whitespace and image composition.

### Cards & containers

There are **no card components.** No rounded panels, no shadowed boxes, no left-border-accent containers. Layout is achieved with whitespace, hairline rules where division is essential, and the natural framing of well-shot images. *The image is the card.*

### Transparency & blur

- The header is transparent over the hero image, and becomes solid Paper Cream after scroll past the fold.
- No glass-morphism, no backdrop blur, no translucent overlays anywhere else.

### Layout rules (fixed elements)

- The header is sticky-on-scroll *only* after leaving the hero.
- No "back to top" arrow. No live chat. No floating CTA. No cookie banner pop-up.
- No drawer / slide-over carts unless explicitly approved — `/bag` is its own page.

### Anti-patterns (canonical list)

Drop shadows · gradients · rounded corners > 2 px · carousels · pop-ups · stock photography · animation on scroll · skeleton shimmer · scroll-to-top arrows · live chat · trust-seal badges · third-party review widgets · discount countdown timers · star ratings · "as seen in" press bars · bold body · sans-serif body · emoji in customer copy.

---

## ICONOGRAPHY

**The single hardest rule of the system: NO ICONS IN THE UI.** Every icon is replaced with a word.

| Convention                | MTSYA equivalent                |
| ------------------------- | ------------------------------- |
| Cart icon 🛒              | `bag (2)` text link             |
| Hamburger ≡               | `menu` text link                |
| Search 🔍                 | `search` text link              |
| Account 👤                | `account` (or `sign in`)        |
| Heart / wishlist          | (no wishlist exists)            |
| Social icons              | `instagram`, `twitter` text     |
| Star ratings ★★★★★        | (no ratings exist)              |
| Arrow pagination ← →      | `previous` / `next` as text     |

**The single graphic mark in the entire UI is the fish emblem itself.** It is used at:

1. The close of the founder's letter.
2. The favicon.
3. A small mark at the end of email footers.
4. The chapter break inside `the story` pages.

Nothing else. No icon font, no icon library, no Lucide / Heroicons / Font Awesome. If a CDN icon set is loaded into a MTSYA page, it is a bug.

The fish lives at:

- `assets/mtsya-logo.png` — full lockup, 4000×4000 px, Deep Ink fish on Paper Cream, lowercase `mtsya` wordmark below.

If a fish-only or wordmark-only SVG is needed for tighter placements, **flag it back to the user** — these need to be commissioned cleanly from the master illustration; do not generate them.

The fish is drawn in the lineage of **Madhubani painting** — the Mithila tradition of Bihar, where for a thousand years women have painted Indian myths in pattern, line, and devotion on the walls of their homes. The patterns inside the fish are not decoration — they are how a story is held. Treat the emblem with that respect. Do not recolour it. Do not crop it tightly. Do not place it on a non-cream background.

---

## Index — what's in this folder

```
README.md                   ← you are here
SKILL.md                    ← cross-compatible Agent Skill manifest
colors_and_type.css         ← CSS variables for all tokens + type
fonts/                      ← (empty until licensed faces arrive — see flag above)
assets/
  mtsya-logo.png            ← full fish + wordmark lockup, 4000×4000
preview/                    ← Design-System tab cards (colours, type, spacing, components, brand)
ui_kits/
  website/                  ← homepage, /shirts, product detail, /bag, checkout — clickable
uploads/
  MTSYA_Brand_Book.pdf
  MTSYA_Design_Guidelines.pdf
  extracted_*.txt           ← plain-text extracts of the above
```

### UI kits

- **`ui_kits/website/`** — desktop web at 1440 px. Homepage with full-bleed hero and founder's letter, the five-shirts listing, a product detail page with fabric story, the bag, and the three-step checkout. Click-through.

### Caveats & flags

- **Fonts** — Adobe Caslon Pro and Optima are licensed and not provided. EB Garamond + Inter are the active substitutes. Please supply the licensed font files.
- **Logo variants** — only the full lockup is on hand. A fish-only emblem and a wordmark-only mark are needed for tight placements (favicon, email footer, header). Please commission and drop into `assets/`.
- **Photography** — no MTSYA photography exists yet. Hero and product images use Paper-Cream placeholders with the product name. Replace with real "Worn" and "Still" photographs as they are shot.
