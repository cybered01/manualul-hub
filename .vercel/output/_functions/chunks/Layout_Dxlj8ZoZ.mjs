import { f as createComponent, r as renderTemplate, m as maybeRenderHead, e as createAstro, h as addAttribute, n as renderHead, o as renderSlot, k as renderComponent } from './astro/server_B-dP9hC8.mjs';
import 'piccolore';
/* empty css                        */
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$CookieConsent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<div id="cookie-banner" class="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] p-6 z-[60] hidden flex-col md:flex-row items-center justify-between gap-4"> <div class="text-sm text-gray-600 max-w-3xl"> <p class="font-bold text-gray-900 mb-1">\u{1F36A} Politica de Confiden\u021Bialitate</p> <p>
Folosim cookie-uri pentru a analiza traficul \u0219i pentru a \xEEmbun\u0103t\u0103\u021Bi experien\u021Ba pe Manualul.ro.
            Datele sunt anonimizate prin Google Analytics.
</p> </div> <div class="flex gap-3 w-full md:w-auto"> <button id="btn-reject" class="flex-1 md:flex-none px-6 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-bold hover:bg-gray-50 transition text-sm">
Refuz
</button> <button id="btn-accept" class="flex-1 md:flex-none px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition text-sm shadow-lg shadow-blue-200">
Accept
</button> </div> </div> <script>
    // ID-ul t\u0103u Google Analytics
    const GA_ID = 'G-F58T7Y0Y8K';

    const banner = document.getElementById('cookie-banner');
    const btnAccept = document.getElementById('btn-accept');
    const btnReject = document.getElementById('btn-reject');

    // Func\u021Bia care \xEEncarc\u0103 efectiv Google Analytics
    function loadGoogleAnalytics() {
        // 1. Inser\u0103m scriptul extern
        const script = document.createElement('script');
        script.src = \`https://www.googletagmanager.com/gtag/js?id=\${GA_ID}\`;
        script.async = true;
        document.head.appendChild(script);

        // 2. Configur\u0103m dataLayer
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', GA_ID);

        console.log('\u2705 GA4 Loaded via Cookie Consent');
    }

    // Verific\u0103m ce a decis utilizatorul \xEEn trecut
    const consent = localStorage.getItem('manualul_consent');

    if (consent === 'granted') {
        loadGoogleAnalytics();
    } else if (consent === 'denied') {
        // Nu facem nimic, respect\u0103m decizia
    } else {
        // Nu a decis \xEEnc\u0103 -> Ar\u0103t\u0103m bannerul
        banner.classList.remove('hidden');
        banner.classList.add('flex');
    }

    // Eveniment: ACCEPT
    btnAccept.addEventListener('click', () => {
        localStorage.setItem('manualul_consent', 'granted');
        banner.classList.add('hidden');
        loadGoogleAnalytics(); // Pornim tracking-ul acum
    });

    // Eveniment: REFUZ
    btnReject.addEventListener('click', () => {
        localStorage.setItem('manualul_consent', 'denied');
        banner.classList.add('hidden');
        // Nu \xEEnc\u0103rc\u0103m nimic
    });
<\/script>`], ["", `<div id="cookie-banner" class="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] p-6 z-[60] hidden flex-col md:flex-row items-center justify-between gap-4"> <div class="text-sm text-gray-600 max-w-3xl"> <p class="font-bold text-gray-900 mb-1">\u{1F36A} Politica de Confiden\u021Bialitate</p> <p>
Folosim cookie-uri pentru a analiza traficul \u0219i pentru a \xEEmbun\u0103t\u0103\u021Bi experien\u021Ba pe Manualul.ro.
            Datele sunt anonimizate prin Google Analytics.
</p> </div> <div class="flex gap-3 w-full md:w-auto"> <button id="btn-reject" class="flex-1 md:flex-none px-6 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-bold hover:bg-gray-50 transition text-sm">
Refuz
</button> <button id="btn-accept" class="flex-1 md:flex-none px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition text-sm shadow-lg shadow-blue-200">
Accept
</button> </div> </div> <script>
    // ID-ul t\u0103u Google Analytics
    const GA_ID = 'G-F58T7Y0Y8K';

    const banner = document.getElementById('cookie-banner');
    const btnAccept = document.getElementById('btn-accept');
    const btnReject = document.getElementById('btn-reject');

    // Func\u021Bia care \xEEncarc\u0103 efectiv Google Analytics
    function loadGoogleAnalytics() {
        // 1. Inser\u0103m scriptul extern
        const script = document.createElement('script');
        script.src = \\\`https://www.googletagmanager.com/gtag/js?id=\\\${GA_ID}\\\`;
        script.async = true;
        document.head.appendChild(script);

        // 2. Configur\u0103m dataLayer
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', GA_ID);

        console.log('\u2705 GA4 Loaded via Cookie Consent');
    }

    // Verific\u0103m ce a decis utilizatorul \xEEn trecut
    const consent = localStorage.getItem('manualul_consent');

    if (consent === 'granted') {
        loadGoogleAnalytics();
    } else if (consent === 'denied') {
        // Nu facem nimic, respect\u0103m decizia
    } else {
        // Nu a decis \xEEnc\u0103 -> Ar\u0103t\u0103m bannerul
        banner.classList.remove('hidden');
        banner.classList.add('flex');
    }

    // Eveniment: ACCEPT
    btnAccept.addEventListener('click', () => {
        localStorage.setItem('manualul_consent', 'granted');
        banner.classList.add('hidden');
        loadGoogleAnalytics(); // Pornim tracking-ul acum
    });

    // Eveniment: REFUZ
    btnReject.addEventListener('click', () => {
        localStorage.setItem('manualul_consent', 'denied');
        banner.classList.add('hidden');
        // Nu \xEEnc\u0103rc\u0103m nimic
    });
<\/script>`])), maybeRenderHead());
}, "/app/src/components/CookieConsent.astro", void 0);

const $$Astro = createAstro("https://manualul.ro");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  const ogImage = `https://og-image.vercel.app/${encodeURIComponent(title)}.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Femojicdn.elk.sh%2F%F0%9F%93%98`;
  return renderTemplate`<html lang="ro"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="sitemap" href="/sitemap-index.xml"><title>${title} | Manualul.ro</title><meta name="description"${addAttribute(description, "content")}><meta name="robots" content="index, follow"><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(ogImage, "content")}><meta name="google-site-verification" content="CODUL_TAU_DE_LA_SEARCH_CONSOLE">${renderHead()}</head> <body class="bg-gray-50 text-gray-900 font-sans flex flex-col min-h-screen"> <nav class="bg-white border-b py-4 shadow-sm mb-8"> <div class="max-w-5xl mx-auto px-4"> <a href="/" class="text-2xl font-bold text-blue-700">Manualul<span class="text-gray-400">.ro</span></a> </div> </nav> <div class="flex-grow"> ${renderSlot($$result, $$slots["default"])} </div> <footer class="text-center py-10 text-gray-400 text-sm border-t mt-20 bg-white"> <p>&copy; 2026 Manualul.ro - Decizii informate, bazate pe cifre.</p> </footer> ${renderComponent($$result, "CookieConsent", $$CookieConsent, {})} </body></html>`;
}, "/app/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
