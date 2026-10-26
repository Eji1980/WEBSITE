// Two domains, one site (preliminary set-up, 26 Oct 2026):
// - ejiezestenlund.com/                -> personal coaching homepage (public/home.html)
//   any other page on ejiezestenlund.com -> redirect (301) to the same path on theownershipreset.com
//   (images and other files are served directly so the homepage can use them)
// - theownershipreset.com/             -> leaders page (public/leaders.html)
// - theownershipreset.com/leaders      -> leaders page (same page)
// - theownershipreset.com/owners       -> owners page (paused: kept, reachable by direct link only)
// - theownershipreset.com/home         -> redirect to ejiezestenlund.com
// - www. addresses                     -> redirect to the same address without www.
// The old main page (public/index.html, "The Ownership Reset Method") is no longer shown.
const MAIN_HOST = "theownershipreset.com";
const HOME_HOST = "ejiezestenlund.com";
const FILE = /\.(jpe?g|png|webp|gif|svg|ico|css|js|txt|xml|woff2?)$/i;

function redirect(url, host, path) {
  const to = new URL(url.toString());
  to.protocol = "https:";
  to.hostname = host;
  if (path !== undefined) to.pathname = path;
  return Response.redirect(to.toString(), 301);
}

function serve(request, env, path) {
  const url = new URL(request.url);
  url.pathname = path;
  return env.ASSETS.fetch(new Request(url.toString(), request));
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const host = url.hostname;
    const path = url.pathname;

    if (host === "www." + HOME_HOST) return redirect(url, HOME_HOST);
    if (host === "www." + MAIN_HOST) return redirect(url, MAIN_HOST);

    if (host === HOME_HOST) {
      if (path === "/" || path === "/index.html" || path === "/home" || path === "/home.html") {
        return serve(request, env, "/home");
      }
      if (FILE.test(path)) return env.ASSETS.fetch(request);
      return redirect(url, MAIN_HOST);
    }

    // theownershipreset.com (and any other host, such as the workers.dev preview)
    if (path === "/" || path === "/index.html") return serve(request, env, "/leaders");
    if (path === "/home" || path === "/home.html") return redirect(url, HOME_HOST, "/");
    return env.ASSETS.fetch(request);
  },
};
