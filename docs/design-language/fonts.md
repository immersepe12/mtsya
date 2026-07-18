# Fonts (final)

The brand's type stack is **final** — not placeholders awaiting licensed Caslon/Optima.

| Role | Typeface | Files in repo |
|------|----------|---------------|
| Display + body | **EB Garamond** | `design-system/fonts/` |
| UI | **Inter** | `design-system/uploads/Inter-*.ttf` |
| Devanagari (मत्स्य) | **Mukta Mahee** | `design-system/uploads/MuktaMahee-*.ttf` |

Some older `design-system/` docs still call EB Garamond and Inter "substitutes" awaiting
Adobe Caslon Pro and Optima — that is outdated. Treat EB Garamond / Inter / Mukta Mahee as
canonical; do not ask for licensed Caslon/Optima. If touching font loading, prefer
self-hosting from the repo files over the Google Fonts `@import` in
`design-system/colors_and_type.css`.
