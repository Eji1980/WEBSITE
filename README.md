# Walk with Eji: coaching website

A one-page static website, hosted on Cloudflare Workers.

- `public/index.html`: the page (text and design)
- `public/eji-hero-bg.jpg`: the background photo filling the top of the page (blurred placeholder until a professional photo is ready; replace this file to swap it)
- `public/eji-hero-portrait.jpg`: the portrait shown when the site is shared on social media (no longer on the page itself)
- `public/eji-hero-sunrise.jpg`: the sunrise photo (not used at the moment), kept in case you want it back
- `public/eji-about.jpg`: the photo in the About section
- `wrangler.jsonc`: tells Cloudflare to serve the `public` folder

## Still to add
Search `index.html` for `TODO (Eji)`:
1. Prices for The Compass and Walking Home
2. One or two sentences of your own story (About section)

## Booking and sign-ups
- Bookings: the "Book your Discovery Conversation" section embeds Calendly
  (`calendly.com/eji-ezestenlund/30min`). Change the `data-url` in `index.html` to use another event.
- Masterclass interest: the form sends to Formspree, which emails you each sign-up and keeps a list
  (form `xoejpvjz`, set in the form's `action` in `index.html`).

## Deploying on Cloudflare
In the Cloudflare dashboard: **Workers & Pages → Create → Import a repository**, choose this repo,
leave the build command empty, and use `npx wrangler deploy` as the deploy command.
Each change pushed to the main branch then goes live on its own.

