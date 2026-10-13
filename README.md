# Walk with Eji: coaching website

A one-page static website, hosted on Cloudflare Workers.

- `public/index.html`: the page (text and design)
- `public/eji.jpg`: the photo
- `wrangler.jsonc`: tells Cloudflare to serve the `public` folder

## Still to add
Search `index.html` for `TODO (Eji)`:
1. Prices for The Compass and Walking Home
2. One or two sentences of your own story (About section)
3. Your waiting-list link for the Masterclasses (it points to the booking page for now)

## Deploying on Cloudflare
In the Cloudflare dashboard: **Workers & Pages → Create → Import a repository**, choose this repo,
leave the build command empty, and use `npx wrangler deploy` as the deploy command.
Each change pushed to the main branch then goes live on its own.
