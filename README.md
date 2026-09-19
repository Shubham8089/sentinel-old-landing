# Sentinel site

Marketing landing page for Sentinel, the consent, trust and rights layer for DPDP. Nuxt 3, Tailwind, deployed on Vercel.

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
- Fonts (Fraunces, Inter, JetBrains Mono) are loaded through `@nuxt/fonts`.
- `server/api/waitlist.post.ts` validates the email and **logs it only**. It does not persist anything yet. See the `TODO(waitlist-sink)` comment there before promoting the waitlist.
- This is a separate project from the app repo. Do not import from it.
