import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DFfoXWz-.mjs';
import { manifest } from './manifest_BQE_ysoR.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/ajutoare-sociale/_id_.astro.mjs');
const _page2 = () => import('./pages/ajutoare-sociale.astro.mjs');
const _page3 = () => import('./pages/bioscan/_id_.astro.mjs');
const _page4 = () => import('./pages/bioscan.astro.mjs');
const _page5 = () => import('./pages/carbon/_id_.astro.mjs');
const _page6 = () => import('./pages/carbon.astro.mjs');
const _page7 = () => import('./pages/facultati/_id_.astro.mjs');
const _page8 = () => import('./pages/facultati.astro.mjs');
const _page9 = () => import('./pages/finantari/_id_.astro.mjs');
const _page10 = () => import('./pages/finantari.astro.mjs');
const _page11 = () => import('./pages/fiscal.astro.mjs');
const _page12 = () => import('./pages/imobiliare.astro.mjs');
const _page13 = () => import('./pages/inflatie.astro.mjs');
const _page14 = () => import('./pages/investitii/aur.astro.mjs');
const _page15 = () => import('./pages/investitii.astro.mjs');
const _page16 = () => import('./pages/salariu-real.astro.mjs');
const _page17 = () => import('./pages/weekend/_id_.astro.mjs');
const _page18 = () => import('./pages/weekend.astro.mjs');
const _page19 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/ajutoare-sociale/[id].astro", _page1],
    ["src/pages/ajutoare-sociale/index.astro", _page2],
    ["src/pages/bioscan/[id].astro", _page3],
    ["src/pages/bioscan/index.astro", _page4],
    ["src/pages/carbon/[id].astro", _page5],
    ["src/pages/carbon/index.astro", _page6],
    ["src/pages/facultati/[id].astro", _page7],
    ["src/pages/facultati/index.astro", _page8],
    ["src/pages/finantari/[id].astro", _page9],
    ["src/pages/finantari/index.astro", _page10],
    ["src/pages/fiscal/index.astro", _page11],
    ["src/pages/imobiliare/index.astro", _page12],
    ["src/pages/inflatie/index.astro", _page13],
    ["src/pages/investitii/aur.astro", _page14],
    ["src/pages/investitii/index.astro", _page15],
    ["src/pages/salariu-real/index.astro", _page16],
    ["src/pages/weekend/[id].astro", _page17],
    ["src/pages/weekend/index.astro", _page18],
    ["src/pages/index.astro", _page19]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "f2f939cb-5c25-4079-8c19-7e0d2706c3bb",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
