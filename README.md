# katchannels.com

Landing page for Kat Channels (animal communication and channeling), built with [Astro](https://astro.build).

## Run it locally

Requires Node 22.22 or newer.

```
npm install
npm run dev
```

Then open http://localhost:4321.

## Where things live

- `src/data/site.ts`: session copy and prices, process steps, FAQ, and the chosen design defaults (layout, card style, button style).
- `src/components/`: one file per section.
- `src/styles/global.css`: colors, type and all section styles.
- `public/images/`: every image on the page.

## Dev-only extras (never shipped)

On localhost only:

- A switcher in Sessions for layout, card style and button style. Your picks are remembered in your browser. When you settle on one, set it in `design` in `src/data/site.ts`.
- DRAFT badges on FAQ answers that still need confirming.
- Links to preview the after-payment pop-up.

## After-payment pop-up

The page shows the "You're booked" pop-up when opened with `?booked=animal` or `?booked=channeling`. Set each Cal.com event type's success redirect to:

- Written and live readings: `https://katchannels.com/?booked=animal`
- Channeling: `https://katchannels.com/?booked=channeling`

## Still to do

- Cal.com inline embed in `src/components/Book.astro`
- Intake form link for "Share your animal's details" in `src/components/BookedModal.astro`
- Real Instagram, TikTok and email links in `src/components/Footer.astro`
- Confirm the three draft policy answers in `src/data/site.ts`
