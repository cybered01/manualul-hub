import { e as createAstro, f as createComponent, r as renderTemplate, k as renderComponent, u as unescapeHTML, m as maybeRenderHead, h as addAttribute, l as defineScriptVars } from '../../chunks/astro/server_B-dP9hC8.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_Dxlj8ZoZ.mjs';
import { readFileSync } from 'fs';
import { parse } from 'csv-parse/sync';
import { g as getCentralData } from '../../chunks/api_C94zg6yx.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro("https://manualul.ro");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const fileContent = readFileSync("./src/data/weekend.csv", "utf-8");
  const records = parse(fileContent, { columns: true, skip_empty_lines: true, trim: true });
  const info = records.find((r) => r.id === id);
  if (!info) {
    return Astro2.redirect("/404");
  }
  const centralData = await getCentralData();
  const gasolinePrice = centralData.fuel.gasoline;
  return renderTemplate(_b || (_b = __template(['<script type="application/ld+json">', "<\/script> ", ""])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Buget Weekend " + info.destinatie,
    "url": "https://manualul.ro/weekend/" + info.id,
    "description": "Calculator de costuri turistice pentru " + info.destinatie + ". Include pre\u021Buri medii la cazare, m\xE2ncare \u0219i transport.",
    "applicationCategory": "TravelApplication",
    "operatingSystem": "Any",
    "contentLocation": {
      "@type": "Place",
      "name": info.destinatie,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "RO",
        "addressRegion": info.regiune
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "RON"
    }
  })), renderComponent($$result, "Layout", $$Layout, { "title": `Buget Weekend: ${info.destinatie}`, "description": `Calculator personalizat pentru ${info.destinatie}. Ajusteaz\u0103 costurile \u0219i afl\u0103 bugetul total.` }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<main class="max-w-4xl mx-auto px-4 pb-20"> <nav class="py-6"> <a href="/weekend" class="text-sm font-bold text-orange-700 hover:underline">\u2190 \xCEnapoi la list\u0103</a> </nav> <header class="mb-10 text-center"> <h1 class="text-4xl md:text-5xl font-black text-gray-900">', '</h1> <p class="text-orange-600 font-bold uppercase tracking-widest text-xs mt-2">', '</p> </header> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> <div class="lg:col-span-2 space-y-6"> <div class="bg-white rounded-[40px] shadow-2xl border border-orange-100 overflow-hidden"> <div class="p-8 bg-gray-900 text-white grid grid-cols-1 md:grid-cols-3 gap-6"> <div> <label class="block text-[10px] font-black uppercase mb-2 opacity-50">Persoane</label> <input type="number" id="persInput" value="2" class="w-full bg-white/10 border border-white/20 rounded-xl p-3 text-white font-bold outline-none"> </div> <div> <label class="block text-[10px] font-black uppercase mb-2 opacity-50">Nop\u021Bi</label> <input type="number" id="noptiInput" value="2" class="w-full bg-white/10 border border-white/20 rounded-xl p-3 text-white font-bold outline-none"> </div> <div> <label class="block text-[10px] font-black uppercase mb-2 opacity-50">Distan\u021B\u0103 KM</label> <input type="number" id="kmInput"', ' class="w-full bg-white/10 border border-white/20 rounded-xl p-3 text-white font-bold outline-none"> </div> </div> <div class="p-8 md:p-12 space-y-8"> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> <div class="space-y-2"> <label class="text-[10px] font-black text-orange-600 uppercase">Cazare/noapte</label> <input type="number" id="costCazareInput"', ' class="w-full border-2 border-gray-100 rounded-2xl p-4 font-black text-xl outline-none focus:border-orange-500"> </div> <div class="space-y-2"> <label class="text-[10px] font-black text-orange-600 uppercase">M\xE2ncare/zi/pers</label> <input type="number" id="costMancareInput"', ' class="w-full border-2 border-gray-100 rounded-2xl p-4 font-black text-xl outline-none focus:border-orange-500"> </div> <div class="space-y-2"> <label class="text-[10px] font-black text-orange-600 uppercase">Distrac\u021Bie/zi/pers</label> <input type="number" id="costDistractieInput" value="100" class="w-full border-2 border-gray-100 rounded-2xl p-4 font-black text-xl outline-none focus:border-orange-500"> </div> </div> <div class="mt-12 pt-10 border-t-4 border-dashed border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6"> <div> <p class="text-[10px] font-black uppercase text-gray-400">Total Estimat</p> <p class="text-6xl font-black text-orange-600" id="totalDisplay">0 Lei</p> </div> <div class="text-right text-xs text-gray-500 space-y-1"> <p>\u{1F525} Benzin\u0103: <span id="benzinaSum" class="font-bold text-gray-800">0 Lei</span></p> <p>\u{1F3E8} Cazare: <span id="cazareSum" class="font-bold text-gray-800">0 Lei</span></p> <p>\u{1F374} Mas\u0103/Play: <span id="masaSum" class="font-bold text-gray-800">0 Lei</span></p> </div> </div> </div> </div> </div> <div class="space-y-6"> <div class="bg-gray-900 text-white p-8 rounded-[40px]"> <h3 class="font-bold mb-4">Atrac\u021Bii</h3> <p class="text-sm text-gray-400 italic mb-4">"', '"</p> <div class="text-xs text-orange-300">\u{1F4A1} ', '</div> </div> <div class="bg-orange-50 p-8 rounded-[40px] border border-orange-100"> <p class="text-sm text-orange-800 leading-relaxed">', '</p> </div> </div> </div> <footer class="mt-12 flex items-center justify-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest"> <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>\nDate live: Benzin\u0103: ', " RON | Actualizat la: ", ` </footer> </main> <div class="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-orange-100 p-4 shadow-[0_-10px_25px_rgba(0,0,0,0.1)] md:hidden z-40" id="stickyBar"> <div class="flex justify-between items-center"> <div> <p class="text-[10px] font-black uppercase text-gray-400 leading-none mb-1">Total Estimat</p> <p class="text-2xl font-black text-orange-600 leading-none" id="stickyTotal">0 Lei</p> </div> <button onclick="window.scrollTo({top: 200, behavior: 'smooth'})" class="bg-gray-900 text-white px-4 py-2 rounded-xl text-xs font-bold">
Ajusteaz\u0103 \u2191
</button> </div> </div> <a id="whatsappBtn" href="https://wa.me/" target="_blank" class="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 z-50 group flex items-center gap-3 pr-6 cursor-pointer"> <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path> </svg> <div class="flex flex-col text-left"> <span class="text-[10px] uppercase font-bold opacity-80 leading-none">Trimite rezultatul</span> <span class="font-bold leading-none mt-1">pe WhatsApp</span> </div> </a> <script>(function(){`, `
    // Prelu\u0103m elementul buton
    const btnWhatsapp = document.getElementById('whatsappBtn');

    // Func\u021Bie simpl\u0103 de citire valori
    function val(id) {
        const el = document.getElementById(id);
        return el ? (parseFloat(el.value) || 0) : 0;
    }

    // Func\u021Bia Principala
    function updateCalculator() {
        // 1. Citim datele
        const p = val('persInput');
        const n = val('noptiInput');
        const k = val('kmInput');
        const pretCazare = val('costCazareInput');
        const pretMancare = val('costMancareInput');
        const pretDistractie = val('costDistractieInput');

        // 2. Calcule
        const totalCazare = n * pretCazare;
        const totalMasa = (n + 1) * p * (pretMancare + pretDistractie);
        const totalBenzina = (k / 100) * 8 * gasolinePrice;
        const total = Math.round(totalCazare + totalMasa + totalBenzina);
        const dispStickyTotal = document.getElementById('stickyTotal');
if(dispStickyTotal) dispStickyTotal.innerText = total.toLocaleString() + " Lei";

        // 3. Actualizam ecranul
        const dispCazare = document.getElementById('cazareSum');
        const dispMasa = document.getElementById('masaSum');
        const dispBenzina = document.getElementById('benzinaSum');
        const dispTotal = document.getElementById('totalDisplay');

        if(dispCazare) dispCazare.innerText = Math.round(totalCazare).toLocaleString() + " Lei";
        if(dispMasa) dispMasa.innerText = Math.round(totalMasa).toLocaleString() + " Lei";
        if(dispBenzina) dispBenzina.innerText = Math.round(totalBenzina).toLocaleString() + " Lei";
        if(dispTotal) dispTotal.innerText = total.toLocaleString() + " Lei";

        // 4. ACTUALIZARE LINK WHATSAPP (Fix pentru Mobil)
        if (btnWhatsapp) {
            const mesaj = \`Am calculat bugetul pentru \${dest} pe Manualul.ro! \u{1F697}\\n\\n\u{1F4B0} Cost Total: \${total.toLocaleString()} Lei\\n(pentru \${p} persoane, \${n} nop\u021Bi)\`;
            const myUrl = window.location.href;

            // FOLOSIM api.whatsapp.com/send - Este formatul cel mai sigur pentru mobil
            const finalLink = \`https://api.whatsapp.com/send?text=\${encodeURIComponent(mesaj + "\\n\\nVezi aici: " + myUrl)}\`;

            btnWhatsapp.href = finalLink;
        }
    }

    // 5. Pornim ascultatorii
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', updateCalculator);
    });

    // 6. Rulam imediat
    updateCalculator();
})();<\/script> `], [" ", '<main class="max-w-4xl mx-auto px-4 pb-20"> <nav class="py-6"> <a href="/weekend" class="text-sm font-bold text-orange-700 hover:underline">\u2190 \xCEnapoi la list\u0103</a> </nav> <header class="mb-10 text-center"> <h1 class="text-4xl md:text-5xl font-black text-gray-900">', '</h1> <p class="text-orange-600 font-bold uppercase tracking-widest text-xs mt-2">', '</p> </header> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> <div class="lg:col-span-2 space-y-6"> <div class="bg-white rounded-[40px] shadow-2xl border border-orange-100 overflow-hidden"> <div class="p-8 bg-gray-900 text-white grid grid-cols-1 md:grid-cols-3 gap-6"> <div> <label class="block text-[10px] font-black uppercase mb-2 opacity-50">Persoane</label> <input type="number" id="persInput" value="2" class="w-full bg-white/10 border border-white/20 rounded-xl p-3 text-white font-bold outline-none"> </div> <div> <label class="block text-[10px] font-black uppercase mb-2 opacity-50">Nop\u021Bi</label> <input type="number" id="noptiInput" value="2" class="w-full bg-white/10 border border-white/20 rounded-xl p-3 text-white font-bold outline-none"> </div> <div> <label class="block text-[10px] font-black uppercase mb-2 opacity-50">Distan\u021B\u0103 KM</label> <input type="number" id="kmInput"', ' class="w-full bg-white/10 border border-white/20 rounded-xl p-3 text-white font-bold outline-none"> </div> </div> <div class="p-8 md:p-12 space-y-8"> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> <div class="space-y-2"> <label class="text-[10px] font-black text-orange-600 uppercase">Cazare/noapte</label> <input type="number" id="costCazareInput"', ' class="w-full border-2 border-gray-100 rounded-2xl p-4 font-black text-xl outline-none focus:border-orange-500"> </div> <div class="space-y-2"> <label class="text-[10px] font-black text-orange-600 uppercase">M\xE2ncare/zi/pers</label> <input type="number" id="costMancareInput"', ' class="w-full border-2 border-gray-100 rounded-2xl p-4 font-black text-xl outline-none focus:border-orange-500"> </div> <div class="space-y-2"> <label class="text-[10px] font-black text-orange-600 uppercase">Distrac\u021Bie/zi/pers</label> <input type="number" id="costDistractieInput" value="100" class="w-full border-2 border-gray-100 rounded-2xl p-4 font-black text-xl outline-none focus:border-orange-500"> </div> </div> <div class="mt-12 pt-10 border-t-4 border-dashed border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6"> <div> <p class="text-[10px] font-black uppercase text-gray-400">Total Estimat</p> <p class="text-6xl font-black text-orange-600" id="totalDisplay">0 Lei</p> </div> <div class="text-right text-xs text-gray-500 space-y-1"> <p>\u{1F525} Benzin\u0103: <span id="benzinaSum" class="font-bold text-gray-800">0 Lei</span></p> <p>\u{1F3E8} Cazare: <span id="cazareSum" class="font-bold text-gray-800">0 Lei</span></p> <p>\u{1F374} Mas\u0103/Play: <span id="masaSum" class="font-bold text-gray-800">0 Lei</span></p> </div> </div> </div> </div> </div> <div class="space-y-6"> <div class="bg-gray-900 text-white p-8 rounded-[40px]"> <h3 class="font-bold mb-4">Atrac\u021Bii</h3> <p class="text-sm text-gray-400 italic mb-4">"', '"</p> <div class="text-xs text-orange-300">\u{1F4A1} ', '</div> </div> <div class="bg-orange-50 p-8 rounded-[40px] border border-orange-100"> <p class="text-sm text-orange-800 leading-relaxed">', '</p> </div> </div> </div> <footer class="mt-12 flex items-center justify-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest"> <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>\nDate live: Benzin\u0103: ', " RON | Actualizat la: ", ` </footer> </main> <div class="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-orange-100 p-4 shadow-[0_-10px_25px_rgba(0,0,0,0.1)] md:hidden z-40" id="stickyBar"> <div class="flex justify-between items-center"> <div> <p class="text-[10px] font-black uppercase text-gray-400 leading-none mb-1">Total Estimat</p> <p class="text-2xl font-black text-orange-600 leading-none" id="stickyTotal">0 Lei</p> </div> <button onclick="window.scrollTo({top: 200, behavior: 'smooth'})" class="bg-gray-900 text-white px-4 py-2 rounded-xl text-xs font-bold">
Ajusteaz\u0103 \u2191
</button> </div> </div> <a id="whatsappBtn" href="https://wa.me/" target="_blank" class="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 z-50 group flex items-center gap-3 pr-6 cursor-pointer"> <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path> </svg> <div class="flex flex-col text-left"> <span class="text-[10px] uppercase font-bold opacity-80 leading-none">Trimite rezultatul</span> <span class="font-bold leading-none mt-1">pe WhatsApp</span> </div> </a> <script>(function(){`, `
    // Prelu\u0103m elementul buton
    const btnWhatsapp = document.getElementById('whatsappBtn');

    // Func\u021Bie simpl\u0103 de citire valori
    function val(id) {
        const el = document.getElementById(id);
        return el ? (parseFloat(el.value) || 0) : 0;
    }

    // Func\u021Bia Principala
    function updateCalculator() {
        // 1. Citim datele
        const p = val('persInput');
        const n = val('noptiInput');
        const k = val('kmInput');
        const pretCazare = val('costCazareInput');
        const pretMancare = val('costMancareInput');
        const pretDistractie = val('costDistractieInput');

        // 2. Calcule
        const totalCazare = n * pretCazare;
        const totalMasa = (n + 1) * p * (pretMancare + pretDistractie);
        const totalBenzina = (k / 100) * 8 * gasolinePrice;
        const total = Math.round(totalCazare + totalMasa + totalBenzina);
        const dispStickyTotal = document.getElementById('stickyTotal');
if(dispStickyTotal) dispStickyTotal.innerText = total.toLocaleString() + " Lei";

        // 3. Actualizam ecranul
        const dispCazare = document.getElementById('cazareSum');
        const dispMasa = document.getElementById('masaSum');
        const dispBenzina = document.getElementById('benzinaSum');
        const dispTotal = document.getElementById('totalDisplay');

        if(dispCazare) dispCazare.innerText = Math.round(totalCazare).toLocaleString() + " Lei";
        if(dispMasa) dispMasa.innerText = Math.round(totalMasa).toLocaleString() + " Lei";
        if(dispBenzina) dispBenzina.innerText = Math.round(totalBenzina).toLocaleString() + " Lei";
        if(dispTotal) dispTotal.innerText = total.toLocaleString() + " Lei";

        // 4. ACTUALIZARE LINK WHATSAPP (Fix pentru Mobil)
        if (btnWhatsapp) {
            const mesaj = \\\`Am calculat bugetul pentru \\\${dest} pe Manualul.ro! \u{1F697}\\\\n\\\\n\u{1F4B0} Cost Total: \\\${total.toLocaleString()} Lei\\\\n(pentru \\\${p} persoane, \\\${n} nop\u021Bi)\\\`;
            const myUrl = window.location.href;

            // FOLOSIM api.whatsapp.com/send - Este formatul cel mai sigur pentru mobil
            const finalLink = \\\`https://api.whatsapp.com/send?text=\\\${encodeURIComponent(mesaj + "\\\\n\\\\nVezi aici: " + myUrl)}\\\`;

            btnWhatsapp.href = finalLink;
        }
    }

    // 5. Pornim ascultatorii
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', updateCalculator);
    });

    // 6. Rulam imediat
    updateCalculator();
})();<\/script> `])), maybeRenderHead(), info.destinatie, info.regiune, addAttribute(info.distanta_ref * 2, "value"), addAttribute(info.pret_cazare, "value"), addAttribute(info.pret_masa, "value"), info.atractii, info.tips, info.descriere, centralData.fuel.gasoline.toFixed(2), centralData.updated, defineScriptVars({ dest: info.destinatie, gasolinePrice })) }));
}, "/app/src/pages/weekend/[id].astro", void 0);

const $$file = "/app/src/pages/weekend/[id].astro";
const $$url = "/weekend/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
