# Riverton Baseball

Website for [rivertonbaseball.ipalmer.me](https://rivertonbaseball.ipalmer.me), built with React, Vite, and Tailwind CSS.

## Development

Requires Node.js 20.19 or newer.

```sh
npm install
npm run dev       # local dev server
npm run build     # production build into dist/
npm run deploy    # build and publish to the gh-pages branch
```

## Updating for a new season

Most season-specific content lives in `src/pages/`:

- `Home.jsx`: important dates list and season summary
- `Registration.jsx`: Fall Ball details (the division calculator picks the season year automatically)
- `Tournament.jsx`: tournament dates and links
- `CoachsCorner.jsx`: practice field availability and closures
- `FAQ.jsx`: refund deadlines, evaluation and schedule timing
- `AboutUs.jsx`: board members and contacts
- `Sponsors.jsx`: sponsors
