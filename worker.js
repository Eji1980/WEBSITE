// Serves the Ownership Reset page on its own domain.
// - theownershipreset.com/        -> shows public/owners.html
// - www.theownershipreset.com     -> redirects to theownershipreset.com
// - ejiezestenlund.com/owners     -> redirects to theownershipreset.com
// Everything else is served from /public as before.
const NEW_HOST = "theownershipreset.com";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === "www." + NEW_HOST) {
      url.hostname = NEW_HOST;
      return Response.redirect(url.toString(), 301);
    }

    if (url.hostname === NEW_HOST) {
      if (url.pathname === "/" || url.pathname === "/index.html") {
        url.pathname = "/owners";
        return env.ASSETS.fetch(new Request(url.toString(), request));
      }
      if (url.pathname === "/owners" || url.pathname === "/owners.html") {
        return Response.redirect("https://" + NEW_HOST + "/" + url.search, 301);
      }
      return env.ASSETS.fetch(request);
    }

    if (url.pathname === "/owners" || url.pathname === "/owners.html") {
      return Response.redirect("https://" + NEW_HOST + "/" + url.search, 301);
    }

    return env.ASSETS.fetch(request);
  },
};
