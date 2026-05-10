---
name: mtsya-design
description: Use this skill to generate well-branded interfaces and assets for MTSYA — a quiet-luxury Indian menswear brand whose promise is "the wardrobe that endures the deluge." Contains essential design guidelines, colours, type, fonts, assets, and UI kit components for prototyping or production.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files. The README is the canonical reference; `colors_and_type.css` is the running source of truth for tokens; `ui_kits/website/` contains pixel-fidelity React components for the homepage, listing, product detail, bag, and checkout.

**Hard rules to internalise before writing anything:**

- **No icons in UI.** Every icon is replaced with a word: `bag (2)`, `menu`, `search`, `account`, `instagram`. The fish emblem is the only graphic mark.
- **Colour stays narrow.** Paper Cream `#F5F1EA` (75 %), Deep Ink `#1F3A4D` (20 %), Stone, Quiet, Rule under 5 %, Terracotta `#C9603A` 1 % wax-seal only. The five product hexes (Manu White, Deluge Indigo, Veda Cream, Tide Stone, Coast Olive) live only inside product photography.
- **Type — three families:** Caslon (display + body), Optima (UI), Mukta Mahee (Devanagari). Free fallbacks: EB Garamond, Inter. Body justified-left, never bold, never italic in headlines, oldstyle figures, smart quotes, ₹ always.
- **No drop shadows. No gradients. Radius 0. No carousels. No pop-ups. No animation on scroll. No stock photography. No bold body. No emoji.**
- **Spacing scale: 8 / 16 / 24 / 48 / 96 / 128.** 12-column grid, 1440 max, 24 gutter. Always more whitespace than feels comfortable.
- **Voice:** calm, considered, never urgent. No exclamation marks. Never "premium / luxury / curated / drop / amazing / crafted / must-have." Closer to a long-form magazine essay than a marketing email.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets from `assets/` and use the tokens in `colors_and_type.css`. If working on production code, read `ui_kits/website/` for component implementations and copy the patterns.

If the user invokes this skill without other guidance, ask them what they want to build, ask a few questions about audience and surface, and act as an expert designer who outputs HTML artifacts or production code. Always prefer an existing pattern in `ui_kits/website/` over inventing one.
