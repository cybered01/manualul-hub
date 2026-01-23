import { f as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B-dP9hC8.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_Dxlj8ZoZ.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_b || (_b = __template(['<script type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "WebApplication",\n  "name": "Calculator Infla\u021Bie Rom\xE2nia (2000-2026)",\n  "url": "https://manualul.ro/inflatie",\n  "description": "Afl\u0103 c\xE2t s-au devalorizat banii t\u0103i. Simulator de infla\u021Bie bazat pe datele istorice INS \u0219i prognozele BNR.",\n  "applicationCategory": "FinanceApplication",\n  "operatingSystem": "Any",\n  "offers": {\n    "@type": "Offer",\n    "price": "0",\n    "priceCurrency": "RON"\n  }\n}\n<\/script> ', ""])), renderComponent($$result, "Layout", $$Layout, { "title": "Calculator Infla\u021Bie Rom\xE2nia: C\xE2t valoreaz\u0103 banii t\u0103i?", "description": "Vezi c\xE2t s-au devalorizat banii t\u0103i din 2000 p\xE2n\u0103 azi. Simulator infla\u021Bie bazat pe datele INS." }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", `<main class="max-w-5xl mx-auto px-4 pb-32"> <nav class="py-6"> <a href="/" class="text-sm font-bold text-red-600 hover:underline flex items-center gap-2">
\u2190 \xCEnapoi la meniul principal
</a> </nav> <header class="mb-12 text-center"> <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-[10px] font-black uppercase tracking-widest border border-red-200 mb-4 inline-block">
Manualul de Criz\u0103
</span> <h1 class="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
Eroziunea Banilor
</h1> <p class="text-xl text-gray-600 max-w-2xl mx-auto">
Afl\u0103 c\xE2\u021Bi lei trebuie s\u0103 ai ast\u0103zi \xEEn buzunar pentru a cump\u0103ra acelea\u0219i lucruri pe care le luai cu 100 de lei \xEEn trecut.
</p> </header> <div class="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl border-t-8 border-red-600 mb-12 relative overflow-hidden"> <div class="absolute -right-20 -top-20 text-[200px] opacity-5 text-red-600 font-black pointer-events-none">%</div> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10"> <div class="space-y-8"> <div> <label class="block text-xs font-black uppercase text-gray-400 mb-2 tracking-widest">Suma ini\u021Bial\u0103 (Lei)</label> <input type="number" id="sumaVeche" value="100" class="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 text-3xl font-black text-gray-900 focus:bg-white focus:border-red-500 outline-none transition-all"> </div> <div> <label class="block text-xs font-black uppercase text-gray-400 mb-2 tracking-widest">Anul de referin\u021B\u0103</label> <select id="anReferinta" class="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 text-xl font-bold text-gray-900 focus:bg-white focus:border-red-500 outline-none transition-all cursor-pointer"></select> </div> <div class="bg-red-50 p-6 rounded-2xl border border-red-100"> <p class="text-sm text-red-800 font-medium">
\u{1F4C9} <span class="font-bold">\u0218tiai c\u0103?</span> Infla\u021Bia cumulat\u0103 erodeaz\u0103 economiile \u021Binute "la saltea". Acest calculator folose\u0219te datele oficiale INS.
</p> </div> </div> <div class="flex flex-col justify-center text-center md:text-left border-t md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0 md:pl-12"> <p class="text-sm font-bold text-gray-400 uppercase mb-2">Putere de cump\u0103rare (Echivalent Azi)</p> <p id="rezultatAzi" class="text-6xl md:text-7xl font-black text-red-600 tracking-tighter mb-4">0 Lei</p> <p class="text-sm text-gray-500 mb-1">Infla\u021Bie cumulat\u0103:</p> <div class="inline-block bg-gray-900 text-white px-4 py-1 rounded-lg font-bold text-lg" id="inflatieTotala">
0%
</div> <p class="text-xs text-gray-400 mt-6 italic">
"Ce cump\u0103rai atunci cu <span id="textSumaVeche">100</span> lei, azi te cost\u0103 <span id="textSumaNoua">...</span> lei."
</p> </div> </div> </div> <div id="stickyBar" class="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-red-100 p-4 shadow-[0_-10px_25px_rgba(0,0,0,0.1)] md:hidden z-40"> <div class="flex justify-between items-center"> <div> <p class="text-[10px] font-black uppercase text-gray-400 leading-none mb-1">Echivalent Azi</p> <p id="stickyTotal" class="text-2xl font-black text-red-600 leading-none">0 Lei</p> </div> <button onclick="window.scrollTo({top: 0, behavior: 'smooth'})" class="bg-gray-900 text-white px-4 py-2 rounded-xl text-xs font-bold active:scale-95 transition-transform">
Schimb\u0103 \u2191
</button> </div> </div> <a id="whatsappBtn" href="https://wa.me/" target="_blank" class="fixed bottom-24 md:bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 z-50 group flex items-center gap-3 pr-6 cursor-pointer"> <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path> </svg> <div class="flex flex-col text-left"> <span class="text-[10px] uppercase font-bold opacity-80 leading-none">Trimite rezultatul</span> <span class="font-bold leading-none mt-1">pe WhatsApp</span> </div> </a> </main> <script>
        // DATE INFLA\u021AIE ROM\xC2NIA (2000 - 2026 est)
        // Sursa: INS & Prognoze BNR
        const inflationRates = {
            2000: 45.7, 2001: 30.3, 2002: 17.8, 2003: 14.1, 2004: 9.3,
            2005: 8.6, 2006: 4.9, 2007: 6.6, 2008: 6.3, 2009: 4.7,
            2010: 8.0, 2011: 3.1, 2012: 5.0, 2013: 1.6, 2014: 0.8,
            2015: -0.6, 2016: -0.5, 2017: 3.3, 2018: 3.3, 2019: 4.0,
            2020: 2.1, 2021: 8.2, 2022: 16.4, 2023: 6.6, 2024: 5.0,
            2025: 4.0, 2026: 3.5
        };

        const inputSuma = document.getElementById('sumaVeche');
        const selectAn = document.getElementById('anReferinta');
        const dispRezultat = document.getElementById('rezultatAzi');
        const dispInflatie = document.getElementById('inflatieTotala');
        const txtSumaVeche = document.getElementById('textSumaVeche');
        const txtSumaNoua = document.getElementById('textSumaNoua');
        const btnWhatsapp = document.getElementById('whatsappBtn');
        const stickyTotal = document.getElementById('stickyTotal');

        // Populare Select An
        const startYear = 2000;
        const currentYear = 2026;

        for (let y = startYear; y < currentYear; y++) {
            const opt = document.createElement('option');
            opt.value = y;
            opt.innerText = y;
            if(y === 2015) opt.selected = true; // Default
            selectAn.appendChild(opt);
        }

        function calculate() {
            const suma = parseFloat(inputSuma.value) || 0;
            const anStart = parseInt(selectAn.value);

            let multiplicator = 1;

            // Calcul compus: Suma * (1 + rata/100) * (1 + rata/100)...
            for (let y = anStart; y <= currentYear; y++) {
                // Dac\u0103 avem date pentru anul respectiv, aplic\u0103m infla\u021Bia
                if (inflationRates[y] !== undefined) {
                    multiplicator = multiplicator * (1 + inflationRates[y] / 100);
                }
            }

            const sumaAzi = suma * multiplicator;
            const procentTotal = ((sumaAzi - suma) / suma) * 100;

            // UI Update
            dispRezultat.innerText = Math.round(sumaAzi).toLocaleString() + " Lei";
            dispInflatie.innerText = "+" + Math.round(procentTotal).toLocaleString() + "%";
            txtSumaVeche.innerText = suma;
            txtSumaNoua.innerText = Math.round(sumaAzi);

            if(stickyTotal) stickyTotal.innerText = Math.round(sumaAzi).toLocaleString() + " Lei";

            // WhatsApp Update
            if (btnWhatsapp) {
                const mesaj = \`Incredibil! \u{1F4C9}\\nCei \${suma} Lei din \${anStart} ar trebui s\u0103 fie ast\u0103zi \${Math.round(sumaAzi)} Lei ca s\u0103 aib\u0103 aceea\u0219i putere de cump\u0103rare.\\nInfla\u021Bie cumulat\u0103: \${Math.round(procentTotal)}% \u{1F631}\`;
                const link = \`https://api.whatsapp.com/send?text=\${encodeURIComponent(mesaj + "\\n\\nCalculeaz\u0103 \u0219i tu aici: " + window.location.href)}\`;
                btnWhatsapp.href = link;
            }
        }

        inputSuma.addEventListener('input', calculate);
        selectAn.addEventListener('change', calculate);

        calculate();
    <\/script> `], [" ", `<main class="max-w-5xl mx-auto px-4 pb-32"> <nav class="py-6"> <a href="/" class="text-sm font-bold text-red-600 hover:underline flex items-center gap-2">
\u2190 \xCEnapoi la meniul principal
</a> </nav> <header class="mb-12 text-center"> <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-[10px] font-black uppercase tracking-widest border border-red-200 mb-4 inline-block">
Manualul de Criz\u0103
</span> <h1 class="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
Eroziunea Banilor
</h1> <p class="text-xl text-gray-600 max-w-2xl mx-auto">
Afl\u0103 c\xE2\u021Bi lei trebuie s\u0103 ai ast\u0103zi \xEEn buzunar pentru a cump\u0103ra acelea\u0219i lucruri pe care le luai cu 100 de lei \xEEn trecut.
</p> </header> <div class="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl border-t-8 border-red-600 mb-12 relative overflow-hidden"> <div class="absolute -right-20 -top-20 text-[200px] opacity-5 text-red-600 font-black pointer-events-none">%</div> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10"> <div class="space-y-8"> <div> <label class="block text-xs font-black uppercase text-gray-400 mb-2 tracking-widest">Suma ini\u021Bial\u0103 (Lei)</label> <input type="number" id="sumaVeche" value="100" class="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 text-3xl font-black text-gray-900 focus:bg-white focus:border-red-500 outline-none transition-all"> </div> <div> <label class="block text-xs font-black uppercase text-gray-400 mb-2 tracking-widest">Anul de referin\u021B\u0103</label> <select id="anReferinta" class="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 text-xl font-bold text-gray-900 focus:bg-white focus:border-red-500 outline-none transition-all cursor-pointer"></select> </div> <div class="bg-red-50 p-6 rounded-2xl border border-red-100"> <p class="text-sm text-red-800 font-medium">
\u{1F4C9} <span class="font-bold">\u0218tiai c\u0103?</span> Infla\u021Bia cumulat\u0103 erodeaz\u0103 economiile \u021Binute "la saltea". Acest calculator folose\u0219te datele oficiale INS.
</p> </div> </div> <div class="flex flex-col justify-center text-center md:text-left border-t md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0 md:pl-12"> <p class="text-sm font-bold text-gray-400 uppercase mb-2">Putere de cump\u0103rare (Echivalent Azi)</p> <p id="rezultatAzi" class="text-6xl md:text-7xl font-black text-red-600 tracking-tighter mb-4">0 Lei</p> <p class="text-sm text-gray-500 mb-1">Infla\u021Bie cumulat\u0103:</p> <div class="inline-block bg-gray-900 text-white px-4 py-1 rounded-lg font-bold text-lg" id="inflatieTotala">
0%
</div> <p class="text-xs text-gray-400 mt-6 italic">
"Ce cump\u0103rai atunci cu <span id="textSumaVeche">100</span> lei, azi te cost\u0103 <span id="textSumaNoua">...</span> lei."
</p> </div> </div> </div> <div id="stickyBar" class="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-red-100 p-4 shadow-[0_-10px_25px_rgba(0,0,0,0.1)] md:hidden z-40"> <div class="flex justify-between items-center"> <div> <p class="text-[10px] font-black uppercase text-gray-400 leading-none mb-1">Echivalent Azi</p> <p id="stickyTotal" class="text-2xl font-black text-red-600 leading-none">0 Lei</p> </div> <button onclick="window.scrollTo({top: 0, behavior: 'smooth'})" class="bg-gray-900 text-white px-4 py-2 rounded-xl text-xs font-bold active:scale-95 transition-transform">
Schimb\u0103 \u2191
</button> </div> </div> <a id="whatsappBtn" href="https://wa.me/" target="_blank" class="fixed bottom-24 md:bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 z-50 group flex items-center gap-3 pr-6 cursor-pointer"> <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path> </svg> <div class="flex flex-col text-left"> <span class="text-[10px] uppercase font-bold opacity-80 leading-none">Trimite rezultatul</span> <span class="font-bold leading-none mt-1">pe WhatsApp</span> </div> </a> </main> <script>
        // DATE INFLA\u021AIE ROM\xC2NIA (2000 - 2026 est)
        // Sursa: INS & Prognoze BNR
        const inflationRates = {
            2000: 45.7, 2001: 30.3, 2002: 17.8, 2003: 14.1, 2004: 9.3,
            2005: 8.6, 2006: 4.9, 2007: 6.6, 2008: 6.3, 2009: 4.7,
            2010: 8.0, 2011: 3.1, 2012: 5.0, 2013: 1.6, 2014: 0.8,
            2015: -0.6, 2016: -0.5, 2017: 3.3, 2018: 3.3, 2019: 4.0,
            2020: 2.1, 2021: 8.2, 2022: 16.4, 2023: 6.6, 2024: 5.0,
            2025: 4.0, 2026: 3.5
        };

        const inputSuma = document.getElementById('sumaVeche');
        const selectAn = document.getElementById('anReferinta');
        const dispRezultat = document.getElementById('rezultatAzi');
        const dispInflatie = document.getElementById('inflatieTotala');
        const txtSumaVeche = document.getElementById('textSumaVeche');
        const txtSumaNoua = document.getElementById('textSumaNoua');
        const btnWhatsapp = document.getElementById('whatsappBtn');
        const stickyTotal = document.getElementById('stickyTotal');

        // Populare Select An
        const startYear = 2000;
        const currentYear = 2026;

        for (let y = startYear; y < currentYear; y++) {
            const opt = document.createElement('option');
            opt.value = y;
            opt.innerText = y;
            if(y === 2015) opt.selected = true; // Default
            selectAn.appendChild(opt);
        }

        function calculate() {
            const suma = parseFloat(inputSuma.value) || 0;
            const anStart = parseInt(selectAn.value);

            let multiplicator = 1;

            // Calcul compus: Suma * (1 + rata/100) * (1 + rata/100)...
            for (let y = anStart; y <= currentYear; y++) {
                // Dac\u0103 avem date pentru anul respectiv, aplic\u0103m infla\u021Bia
                if (inflationRates[y] !== undefined) {
                    multiplicator = multiplicator * (1 + inflationRates[y] / 100);
                }
            }

            const sumaAzi = suma * multiplicator;
            const procentTotal = ((sumaAzi - suma) / suma) * 100;

            // UI Update
            dispRezultat.innerText = Math.round(sumaAzi).toLocaleString() + " Lei";
            dispInflatie.innerText = "+" + Math.round(procentTotal).toLocaleString() + "%";
            txtSumaVeche.innerText = suma;
            txtSumaNoua.innerText = Math.round(sumaAzi);

            if(stickyTotal) stickyTotal.innerText = Math.round(sumaAzi).toLocaleString() + " Lei";

            // WhatsApp Update
            if (btnWhatsapp) {
                const mesaj = \\\`Incredibil! \u{1F4C9}\\\\nCei \\\${suma} Lei din \\\${anStart} ar trebui s\u0103 fie ast\u0103zi \\\${Math.round(sumaAzi)} Lei ca s\u0103 aib\u0103 aceea\u0219i putere de cump\u0103rare.\\\\nInfla\u021Bie cumulat\u0103: \\\${Math.round(procentTotal)}% \u{1F631}\\\`;
                const link = \\\`https://api.whatsapp.com/send?text=\\\${encodeURIComponent(mesaj + "\\\\n\\\\nCalculeaz\u0103 \u0219i tu aici: " + window.location.href)}\\\`;
                btnWhatsapp.href = link;
            }
        }

        inputSuma.addEventListener('input', calculate);
        selectAn.addEventListener('change', calculate);

        calculate();
    <\/script> `])), maybeRenderHead()) }));
}, "/app/src/pages/inflatie/index.astro", void 0);

const $$file = "/app/src/pages/inflatie/index.astro";
const $$url = "/inflatie";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
