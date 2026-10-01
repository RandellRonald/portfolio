# Randell Ronald portfolio

A complete React + Vite portfolio using Tailwind CSS, Framer Motion and Lucide React.

## Run

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

Deploy the generated `dist` directory to any static website host. No backend, secrets, account, or AI service is required.

## Edit

- Personal links, skill groups and project descriptions: `src/data/profile.js`
- Sections: `src/App.jsx`
- Navigation: `src/components/Navbar.jsx`
- Animation primitives: `src/components/Motion.jsx`
- Base responsive styles: `src/styles.css`
- Neo-Brutalist visual system: `src/neobrutal.css`
- Local images: `public/images/`

The portrait is the user's original photograph, isolated with a local alpha matte. The transparent portrait asset preserves the hair, shoulders and crossed arms, with no polygon clipping or bottom fade. Empty transparent margins were trimmed without cropping the person. The existing monochrome treatment is retained. Repository screenshots are stored locally for reliable loading. Google Fonts are optional; the site falls back to system sans-serif when offline.

All contact links use real mailto/tel/profile URLs. No nonfunctional contact form is included. Pointer animation is restricted to fine pointers, and reduced-motion preferences disable movement and smooth scrolling.

Only the portrait was attached; the layout follows the user's detailed written reference composition.

## Frontend redesign verification

Run the dev server, then `node verify.mjs` and `node verify-redesign.mjs` (Microsoft Edge required). Checks cover links, navigation, mobile menu, loaded assets, JavaScript errors, six viewport widths, pointer interactions and reduced motion. Project data and destinations are unchanged. This repository is a static frontend and contains no backend, authentication or API integration.
