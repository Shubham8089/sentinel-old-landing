# pactbase site

Marketing landing page for pactbase, the trust layer between a business and its customers — consent, a trust
center, and data requests, handled on your own front door. Nuxt 3, Tailwind, deployed on Vercel.

Everything interactive on the page (consent banner, rights demo, trust page) is a **mock**: local state only, no calls to the real product.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run typecheck
```

## Notes

- Design tokens live in `assets/css/main.css` and are wired into `tailwind.config.ts`.
- Fonts (Geist, Geist Mono) are loaded through `@nuxt/fonts`.
- Brand assets live in `public/`: `favicon.svg` (icon, also used as the app icon), `pactbase-wordmark.svg` (the
  lowercase wordmark used in the header and footer), and `keeper.svg` (the mascot, used once, in the homepage
  hero). No raster fallbacks are checked in; generate PNGs from the SVGs if a platform needs them.
- The Trust Center URL and the three module blurbs (Consent, Trust Center, Rights) are the single source of
  truth in `utils/site.ts`.
- `pages/covered.vue` makes factual claims about what pactbase handles under DPDP, what it supports, and what
  stays with the customer. Keep it accurate as the product changes.
- This is a separate project from the app repo (`dpdp-prod`). Do not import from it.
