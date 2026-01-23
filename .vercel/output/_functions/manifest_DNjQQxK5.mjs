import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_B-dP9hC8.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_VKNQr0jQ.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///app/","cacheDir":"file:///app/node_modules/.astro/","outDir":"file:///app/dist/","srcDir":"file:///app/src/","publicDir":"file:///app/public/","buildClientDir":"file:///app/dist/client/","buildServerDir":"file:///app/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BKlZA57W.css"}],"routeData":{"route":"/ajutoare-sociale","isIndex":true,"type":"page","pattern":"^\\/ajutoare-sociale\\/?$","segments":[[{"content":"ajutoare-sociale","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ajutoare-sociale/index.astro","pathname":"/ajutoare-sociale","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BKlZA57W.css"}],"routeData":{"route":"/bioscan","isIndex":true,"type":"page","pattern":"^\\/bioscan\\/?$","segments":[[{"content":"bioscan","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/bioscan/index.astro","pathname":"/bioscan","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BKlZA57W.css"}],"routeData":{"route":"/carbon","isIndex":true,"type":"page","pattern":"^\\/carbon\\/?$","segments":[[{"content":"carbon","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/carbon/index.astro","pathname":"/carbon","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BKlZA57W.css"}],"routeData":{"route":"/facultati","isIndex":true,"type":"page","pattern":"^\\/facultati\\/?$","segments":[[{"content":"facultati","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/facultati/index.astro","pathname":"/facultati","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BKlZA57W.css"}],"routeData":{"route":"/finantari","isIndex":true,"type":"page","pattern":"^\\/finantari\\/?$","segments":[[{"content":"finantari","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/finantari/index.astro","pathname":"/finantari","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BKlZA57W.css"}],"routeData":{"route":"/fiscal","isIndex":true,"type":"page","pattern":"^\\/fiscal\\/?$","segments":[[{"content":"fiscal","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fiscal/index.astro","pathname":"/fiscal","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BKlZA57W.css"}],"routeData":{"route":"/imobiliare","isIndex":true,"type":"page","pattern":"^\\/imobiliare\\/?$","segments":[[{"content":"imobiliare","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/imobiliare/index.astro","pathname":"/imobiliare","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BKlZA57W.css"}],"routeData":{"route":"/inflatie","isIndex":true,"type":"page","pattern":"^\\/inflatie\\/?$","segments":[[{"content":"inflatie","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/inflatie/index.astro","pathname":"/inflatie","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BKlZA57W.css"}],"routeData":{"route":"/investitii/aur","isIndex":false,"type":"page","pattern":"^\\/investitii\\/aur\\/?$","segments":[[{"content":"investitii","dynamic":false,"spread":false}],[{"content":"aur","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/investitii/aur.astro","pathname":"/investitii/aur","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BKlZA57W.css"}],"routeData":{"route":"/investitii","isIndex":true,"type":"page","pattern":"^\\/investitii\\/?$","segments":[[{"content":"investitii","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/investitii/index.astro","pathname":"/investitii","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BKlZA57W.css"}],"routeData":{"route":"/salariu-real","isIndex":true,"type":"page","pattern":"^\\/salariu-real\\/?$","segments":[[{"content":"salariu-real","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/salariu-real/index.astro","pathname":"/salariu-real","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BKlZA57W.css"}],"routeData":{"route":"/weekend/[id]","isIndex":false,"type":"page","pattern":"^\\/weekend\\/([^/]+?)\\/?$","segments":[[{"content":"weekend","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/weekend/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BKlZA57W.css"}],"routeData":{"route":"/weekend","isIndex":true,"type":"page","pattern":"^\\/weekend\\/?$","segments":[[{"content":"weekend","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/weekend/index.astro","pathname":"/weekend","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_id_.BKlZA57W.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://manualul.ro","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/app/src/pages/ajutoare-sociale/[id].astro",{"propagation":"none","containsHead":true}],["/app/src/pages/ajutoare-sociale/index.astro",{"propagation":"none","containsHead":true}],["/app/src/pages/bioscan/[id].astro",{"propagation":"none","containsHead":true}],["/app/src/pages/bioscan/index.astro",{"propagation":"none","containsHead":true}],["/app/src/pages/carbon/[id].astro",{"propagation":"none","containsHead":true}],["/app/src/pages/carbon/index.astro",{"propagation":"none","containsHead":true}],["/app/src/pages/facultati/[id].astro",{"propagation":"none","containsHead":true}],["/app/src/pages/facultati/index.astro",{"propagation":"none","containsHead":true}],["/app/src/pages/finantari/[id].astro",{"propagation":"none","containsHead":true}],["/app/src/pages/finantari/index.astro",{"propagation":"none","containsHead":true}],["/app/src/pages/fiscal/index.astro",{"propagation":"none","containsHead":true}],["/app/src/pages/imobiliare/index.astro",{"propagation":"none","containsHead":true}],["/app/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/app/src/pages/inflatie/index.astro",{"propagation":"none","containsHead":true}],["/app/src/pages/investitii/aur.astro",{"propagation":"none","containsHead":true}],["/app/src/pages/investitii/index.astro",{"propagation":"none","containsHead":true}],["/app/src/pages/salariu-real/index.astro",{"propagation":"none","containsHead":true}],["/app/src/pages/weekend/[id].astro",{"propagation":"none","containsHead":true}],["/app/src/pages/weekend/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/ajutoare-sociale/[id]@_@astro":"pages/ajutoare-sociale/_id_.astro.mjs","\u0000@astro-page:src/pages/ajutoare-sociale/index@_@astro":"pages/ajutoare-sociale.astro.mjs","\u0000@astro-page:src/pages/bioscan/[id]@_@astro":"pages/bioscan/_id_.astro.mjs","\u0000@astro-page:src/pages/bioscan/index@_@astro":"pages/bioscan.astro.mjs","\u0000@astro-page:src/pages/carbon/[id]@_@astro":"pages/carbon/_id_.astro.mjs","\u0000@astro-page:src/pages/carbon/index@_@astro":"pages/carbon.astro.mjs","\u0000@astro-page:src/pages/facultati/[id]@_@astro":"pages/facultati/_id_.astro.mjs","\u0000@astro-page:src/pages/facultati/index@_@astro":"pages/facultati.astro.mjs","\u0000@astro-page:src/pages/finantari/[id]@_@astro":"pages/finantari/_id_.astro.mjs","\u0000@astro-page:src/pages/finantari/index@_@astro":"pages/finantari.astro.mjs","\u0000@astro-page:src/pages/fiscal/index@_@astro":"pages/fiscal.astro.mjs","\u0000@astro-page:src/pages/imobiliare/index@_@astro":"pages/imobiliare.astro.mjs","\u0000@astro-page:src/pages/inflatie/index@_@astro":"pages/inflatie.astro.mjs","\u0000@astro-page:src/pages/investitii/aur@_@astro":"pages/investitii/aur.astro.mjs","\u0000@astro-page:src/pages/investitii/index@_@astro":"pages/investitii.astro.mjs","\u0000@astro-page:src/pages/salariu-real/index@_@astro":"pages/salariu-real.astro.mjs","\u0000@astro-page:src/pages/weekend/[id]@_@astro":"pages/weekend/_id_.astro.mjs","\u0000@astro-page:src/pages/weekend/index@_@astro":"pages/weekend.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DNjQQxK5.mjs","/app/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DOihLrvS.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_id_.BKlZA57W.css","/favicon.svg","/robots.txt"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"i6PkGwNXHqk8ba1nMom40RNZWo22nBbgG/zoS7gaUeI="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
