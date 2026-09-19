# Viraj Hole — Portfolio

A simple, professional single-page portfolio built with React + Vite.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
```

This outputs a static `dist/` folder you can deploy anywhere (Vercel, Netlify, GitHub Pages, etc.).

## Where to edit content

Everything text-based (name, bio, experience, projects, skills, education,
contact info) lives in one place: **`src/data.js`**. Edit that file and the
whole site updates — you shouldn't need to touch the components themselves
for content changes.

Things worth adding once you have them:
- GitHub / LinkedIn links — add them in `src/components/Contact.jsx`
  (there's a commented example) and optionally in the hero spec sheet.
- Live demo / repo links per project — add a `link` field to each project
  in `src/data.js` and wire it into `src/components/Projects.jsx`.
- A profile photo — drop an image into `public/` and reference it in
  `src/components/Hero.jsx`.

## Design

Dark, immersive theme: near-black background, bold Space Grotesk display
type, Inter for body copy, IBM Plex Mono for tags/metadata, with a
periwinkle-blue + amber accent pair. The hero has a subtly rotating 3D
wireframe (Three.js) behind the headline, and every section fades/slides
into view on scroll (respects `prefers-reduced-motion`).

- 3D background: `src/components/HeroCanvas.jsx`
- Scroll-reveal logic: `src/useReveal.js` and `src/components/Reveal.jsx`
