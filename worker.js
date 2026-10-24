// One main domain: theownershipreset.com
// - theownershipreset.com/          -> main page (public/index.html)
// - theownershipreset.com/owners    -> owners and founders page (public/owners.html)
// - theownershipreset.com/leaders   -> leaders page (public/leaders.html)
// - www.theownershipreset.com, ejiezestenlund.com and www.ejiezestenlund.com
//                                   -> redirect (301) to the same path on theownershipreset.com
// Everything else is served from /public as is.
const MAIN_HOST = "theownershipreset.com";
const REDIRECT_HOSTS = ["www.theownershipreset.com", "ejiezestenlund.com", "www.ejiezestenlund.com"];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (REDIRECT_HOSTS.includes(url.hostname)) {
      url.hostname = MAIN_HOST;
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
