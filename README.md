# Elena Vance Portfolio

Vite + React + TypeScript + MUI portfolio with light/dark themes, Motion transitions, and a Formspree-powered contact form.

## Quick start

```bash
npm install
cp .env.example .env
npm run dev
```

Open http://localhost:5173

## Contact form (Formspree)

1. Create a free form at [formspree.io](https://formspree.io)
2. Copy the form ID from the endpoint (`https://formspree.io/f/XXXXXX` → `XXXXXX`)
3. Put it in `.env`:

```env
VITE_FORMSPREE_ID=XXXXXX
VITE_SITE_URL=https://your-domain.com
```

4. In Formspree, set the notification email to your inbox and confirm the address
5. Restart `npm run dev` after changing env vars

Submissions post to Formspree and show an on-page success confirmation.

## Scripts

```bash
npm run dev      # local development
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Deploy

Build output is a static site in `dist/`.

### Vercel

```bash
npm i -g vercel
vercel
```

Add `VITE_FORMSPREE_ID` and `VITE_SITE_URL` in the Vercel project Environment Variables, then redeploy.

### Netlify

```bash
npm run build
# drag-and-drop dist/ in Netlify UI, or:
npx netlify deploy --prod --dir=dist
```

Set the same env vars in Netlify → Site settings → Environment variables (needed at **build** time).

### GitHub Pages

1. Set `base: '/repo-name/'` in `vite.config.ts` if deploying to a project page
2. Build and publish `dist/` with [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages) or similar

After deploy, update `public/sitemap.xml` and Open Graph URLs to your live domain.

## Performance notes

- Project/headshot images are WebP (~25–65KB each)
- Below-fold images use `loading="lazy"`
- Vendor chunks split for React / MUI / Motion
- Fonts load with `display=swap`

## Stack

- Vite + React 19 + TypeScript
- MUI 6 (light/dark from design tokens)
- Motion for subtle section animations
- Formspree for contact delivery
