# Eji Eze Stenlund: coaching website

A static website on Cloudflare Workers, serving two domains (preliminary set-up, 26 October 2026;
the pages will be reworked once the premium offer is finished).

| Address | Shows | File |
| --- | --- | --- |
| ejiezestenlund.com | Personal coaching homepage | `public/home.html` |
| theownershipreset.com and theownershipreset.com/leaders | Leaders page (The Ownership Reset sales page) | `public/leaders.html` |
| theownershipreset.com/owners | Owners page: **paused**, kept and reachable by direct link only, not linked from any other page | `public/owners.html` |

- `worker.js` does the routing: www addresses redirect to the address without www; other pages on
  ejiezestenlund.com redirect to theownershipreset.com; theownershipreset.com/home redirects to ejiezestenlund.com.
- `public/index.html` is the earlier main page ("The Ownership Reset Method"). It is no longer shown; kept for reference.
- Photos: `eji-hero-bg.jpg` (stage photo: homepage and leaders hero), `eji-hero-sunrise.jpg` (not in use), `eji-about.jpg` (portraits),
  `eji-hero-portrait.jpg` (social media preview).

## Still to add
Testimonials, prices and dates: add only real ones, once the offer is finished.

## Booking and sign-ups
- Bookings: the "Book your Discovery Conversation" section embeds Calendly
  (`calendly.com/eji-ezestenlund/30min`). Change the `data-url` in `home.html`, and the Calendly links in `leaders.html`, to use another event.
- Register interest (programme and/or masterclass): the form sends to Formspree, which emails you each sign-up and keeps a list
  (form `xoejpvjz`, set in the form's `action` in `leaders.html`).

## Deploying on Cloudflare
In the Cloudflare dashboard: **Workers & Pages → Create → Import a repository**, choose this repo,
leave the build command empty, and use `npx wrangler deploy` as the deploy command.
Each change pushed to the main branch then goes live on its own.

