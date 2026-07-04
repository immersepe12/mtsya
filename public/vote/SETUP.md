# DELUGE 01 — voting page

A self-contained voting page for the streetwear designs. It lives at **`/vote/`** on the
deployed site (e.g. `https://your-project.vercel.app/vote/`). No database, no server —
each vote is POSTed straight to a **Formspree** form, and you read results in Formspree
(or export them as CSV).

## Status

The Formspree form is already wired in (`FORMSPREE_ID = "mnjkloza"` in `index.html`).
Just push and publish on Vercel, then share the `/vote/` link. The **first** real submission
will ask you to confirm the form once in Formspree; after that every vote flows in. The free
tier allows 50 submissions/month.

## How people vote

- Enter their name (required).
- Give **every design a 1–5 rating** (1 = not for me, 3 = it's fine, 5 = would buy today).
  A running "X of 8 rated · your avg Y" counter shows at the top.
- Optional comment box at the bottom, then Submit.
- At least one rating is required to submit.

## Reading the results

Each submission in Formspree carries:
- `name`, `comment`, `rated_count`
- one column per design — `rating_TIDE`, `rating_DELUGE`, `rating_CURRENT`, `rating_DEPTH`,
  `rating_STRATA`, `rating_ABYSS`, `rating_RIPPLE`, `rating_GHAT` (blank if they skipped it)
- `ratings_summary` — a readable one-liner like `TIDE:4, CURRENT:5, ABYSS:2`

Use **Export → CSV** in Formspree, then average each `rating_<CODE>` column to rank the drop.
Averaging per-design ratings gives a much clearer signal than a yes/no — a piece everyone
rates 4 beats one that's a few people's 5 and everyone else's 1.

## Adding / removing / reordering designs

Data-driven. In `public/vote/index.html`, edit the `DESIGNS` array:
```js
const DESIGNS = [
  { code:"TIDE", name:"Tide", img:"designs/01-tide.png",
    fabric:"Washed jersey · back scale field", story:"…" },
  …
];
```
Drop a new image into `public/vote/designs/` and add an entry (its `code` is the CSV column
name — keep codes short and unique). Remove an entry to drop it from the vote.

## Notes

- Plain static HTML with inline CSS/JS — **not** built by Next.js, so it's unaffected by the
  site's `output: 'export'` / `basePath` config and works on Vercel or any static host. Image
  paths are relative, so it survives a base path too.
- No cookies, no tracking, no external fonts — nothing loads except the design images and the
  Formspree POST on submit.
