# Soft Robotics Lab

Website for Soft Robotics Lab (Hanoi University of Industry), hosted on GitHub Pages.

Static site, no build step — edit and push:

- `index.html` — page structure
- `style.css` — styling
- `data.js` — content (research areas, projects, publications, team, news, honors) — edit this for routine updates
- `script.js` — renders `data.js` into the page

## Local preview

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

Push to `main` — GitHub Pages serves the repo root directly.
