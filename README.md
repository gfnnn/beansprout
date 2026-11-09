# Beansprout v1: tattoo portfolio site

**Status: the current live site at [beansprout.ink](https://beansprout.ink), due to be
replaced.** Version 2 is in development in [Beanstalk](https://github.com/gfnnn/Beanstalk).
This repo will be retired after the switch-over.

**An unpaid personal project** for Roxy, a self-employed tattoo artist in Winchester.

## What it is

A small static site: a home page, a tattoo gallery with a zoomable lightbox, and an
aftercare guide. Bookings are handled through Instagram and Facebook messages. It's
hosted free on GitHub Pages.

**Built with:** HTML, CSS and JavaScript (no framework, no build step), self-hosted
Lora and Poppins fonts.

## How it was built

I built the first version in early 2025. The May 2026 review fixes (accessibility,
HTML structure, gallery load speed and the homepage redesign) were made with Claude,
Anthropic's AI coding assistant, and those commits are co-authored with it.

## Run it locally

There's nothing to install. Serve the folder with any static server, for example:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Copyright and content

No open-source licence is granted, so all rights are reserved.

- **Code:** © Harrison Fisher.
- **Artwork, tattoo photos, logo and written content:** © Beansprout Tattoo, published
  with the artist's permission for this site only. Not licensed for reuse.
- **Fonts:** Lora and Poppins, under the SIL Open Font License (see `fonts/OFL-*.txt`).
