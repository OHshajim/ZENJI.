# ZENJI — Anime Inspired Streetwear

A dark, editorial front-end storefront for a fictional anime-rooted streetwear label, built with Next.js 16, React 19, and Tailwind CSS v4 — complete with a dōjutsu custom cursor, katakana nav hovers, and a chakra-bubble menu.

**Live:** _pending first deploy — see [Deployment](#deployment)_
**GitHub:** <https://github.com/OHshajim/ZENJI.>

## Features

- Editorial storefront: hero, seamless infinite marquee, featured drop, editorial break, newsletter
- Full shop with live search, category filters, and sorting
- Product detail pages with gallery, size/color pickers, and related pieces
- Cart and wishlist — both persisted to `localStorage`; adding a wished piece to the bag removes it from the wishlist
- Frontend-only checkout with order summary and confirmation state (no payment is processed)
- Support pages: [Shipping](/shipping), [Returns](/returns), and [Size Guide](/size-guide) with measurement tables
- Custom dōjutsu cursor that slowly rotates and morphs between the Rinnegan and Sharingan
- Anime motion: staggered hero entrance with red slash sweep, scroll-reveal sections, slash underlines, chakra bubbles in the fullscreen menu
- Katakana label-flip hover on the nav, working footer links, responsive down to mobile
- Reduced-motion support and accessible controls

## Tech Stack

- Next.js 16 (App Router, Turbopack)
- React 19 + TypeScript
- Tailwind CSS v4
- Lucide React icons
- Vercel Analytics

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deployment

Deploy to Vercel with the CLI:

```bash
vercel login
vercel --prod
```

Or import the GitHub repository in the [Vercel dashboard](https://vercel.com/new) — zero config needed.

---

This is a frontend assessment implementation. Checkout, backend, authentication, payments, and email delivery are intentionally mocked or local-only.

Made by [Shajim Ahmed](https://shajim-portfolio.vercel.app/).
