import { f as createComponent, k as renderComponent, r as renderTemplate, l as defineScriptVars, m as maybeRenderHead } from '../../chunks/astro/server_B-dP9hC8.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_Dxlj8ZoZ.mjs';
import { g as getCentralData } from '../../chunks/api_C94zg6yx.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Aur = createComponent(async ($$result, $$props, $$slots) => {
  const centralData = await getCentralData();
  const goldPrice = centralData.bnr.gold;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cota\u021Bie Aur: Calculator Investi\u021Bie | Manualul.ro", "description": "Afl\u0103 cota\u021Bia curent\u0103 a aurului \xEEn RON \u0219i calculeaz\u0103 valoarea investi\u021Biei tale. Pre\u021B actualizat zilnic de la BNR." }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<main class="max-w-4xl mx-auto px-4 pb-20"> <nav class="py-6"> <a href="/investitii" class="text-sm font-bold text-yellow-700 hover:underline flex items-center gap-2">\n\u2190 \xCEnapoi la investi\u021Bii\n</a> </nav> <header class="mb-12 text-center"> <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-[10px] font-black uppercase tracking-widest border border-yellow-200 mb-4 inline-block">\nActive de Refugiu\n</span> <h1 class="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">\nCota\u021Bie Aur\n</h1> <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-8">\nPre\u021Bul aurului de 24K, conform cota\u021Biilor oficiale ale B\u0103ncii Na\u021Bionale a Rom\xE2niei.\n</p> <div class="inline-block bg-white border-2 border-yellow-400 px-8 py-4 rounded-3xl shadow-xl"> <p class="text-xs font-bold text-gray-400 uppercase mb-1">Cota\u021Bie BNR Azi</p> <p class="text-4xl font-black text-gray-900">', ' <span class="text-lg text-yellow-600">RON/g</span></p> </div> </header> <div class="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl border-b-8 border-yellow-400 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12"> <div class="space-y-6"> <div> <label class="block text-xs font-black uppercase text-gray-400 mb-2 tracking-widest">Am grame (g)</label> <div class="relative"> <input type="number" id="inGrame" value="10" class="w-full bg-yellow-50/50 border-2 border-yellow-100 rounded-2xl p-4 text-3xl font-black text-gray-900 focus:bg-white focus:border-yellow-500 outline-none transition-all"> <span class="absolute right-4 top-1/2 -translate-y-1/2 text-yellow-600 font-bold">g</span> </div> </div> <div> <label class="block text-xs font-black uppercase text-gray-400 mb-2 tracking-widest">Am RON (Lei)</label> <div class="relative"> <input type="number" id="inRon" class="w-full bg-yellow-50/50 border-2 border-yellow-100 rounded-2xl p-4 text-3xl font-black text-gray-900 focus:bg-white focus:border-yellow-500 outline-none transition-all" placeholder="Introdu suma"> <span class="absolute right-4 top-1/2 -translate-y-1/2 text-yellow-600 font-bold">RON</span> </div> </div> </div> <div class="bg-gray-900 text-white rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden"> <div class="absolute top-0 right-0 w-48 h-48 bg-yellow-500 rounded-full blur-[80px] opacity-20 pointer-events-none"></div> <p class="text-sm font-bold text-gray-400 uppercase mb-2 relative z-10" id="labelRezultat">Valoarea \xEEn RON</p> <p id="outRezultat" class="text-5xl md:text-6xl font-black text-yellow-400 mb-4 relative z-10">0 Lei</p> <a id="whatsappBtn" href="https://wa.me/" target="_blank" class="mt-4 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 relative z-10 text-sm">\nTrimite pe WhatsApp\n</a> </div> </div> </div> <footer class="mt-8 flex items-center justify-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest"> <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>\nDate live: AUR: ', " RON/g | Actualizat la: ", " </footer> </main> <script>(function(){", `
        const inGrame = document.getElementById('inGrame');
        const inRon = document.getElementById('inRon');
        const outRezultat = document.getElementById('outRezultat');
        const labelRezultat = document.getElementById('labelRezultat');
        const btnWhatsapp = document.getElementById('whatsappBtn');

        function updateFromGrame() {
            const grame = parseFloat(inGrame.value) || 0;
            const valoare = grame * goldPrice;

            labelRezultat.innerText = "Valoarea \xEEn RON";
            outRezultat.innerText = Math.round(valoare).toLocaleString() + " Lei";
            inRon.value = ""; // Clear the other input to avoid confusion

            updateWhatsapp(grame, valoare, true);
        }

        function updateFromRon() {
            const ron = parseFloat(inRon.value) || 0;
            const grame = ron / goldPrice;

            labelRezultat.innerText = "Po\u021Bi cump\u0103ra";
            outRezultat.innerText = grame.toFixed(2) + " g";
            inGrame.value = ""; // Clear the other input to avoid confusion

            updateWhatsapp(grame, ron, false);
        }

        function updateWhatsapp(grame, ron, isGramsToRon) {
            if (btnWhatsapp) {
                let mesaj = "";
                if (isGramsToRon) {
                    mesaj = \`Cota\u021Bie Aur pe Manualul.ro \u{1F3C6}\\n\\nPre\u021B: \${goldPrice.toFixed(2)} Lei/gram\\nCantitate: \${grame}g\\nValoare total\u0103: \${Math.round(ron).toLocaleString()} Lei\`;
                } else {
                    mesaj = \`Cota\u021Bie Aur pe Manualul.ro \u{1F3C6}\\n\\nPre\u021B: \${goldPrice.toFixed(2)} Lei/gram\\nCu \${Math.round(ron).toLocaleString()} Lei po\u021Bi cump\u0103ra: \${grame.toFixed(2)}g de Aur\`;
                }
                btnWhatsapp.href = \`https://api.whatsapp.com/send?text=\${encodeURIComponent(mesaj + "\\n\\nVezi aici: " + window.location.href)}\`;
            }
        }

        inGrame.addEventListener('input', updateFromGrame);
        inRon.addEventListener('input', updateFromRon);

        // Initial
        updateFromGrame();
    })();<\/script> `], [" ", '<main class="max-w-4xl mx-auto px-4 pb-20"> <nav class="py-6"> <a href="/investitii" class="text-sm font-bold text-yellow-700 hover:underline flex items-center gap-2">\n\u2190 \xCEnapoi la investi\u021Bii\n</a> </nav> <header class="mb-12 text-center"> <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-[10px] font-black uppercase tracking-widest border border-yellow-200 mb-4 inline-block">\nActive de Refugiu\n</span> <h1 class="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">\nCota\u021Bie Aur\n</h1> <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-8">\nPre\u021Bul aurului de 24K, conform cota\u021Biilor oficiale ale B\u0103ncii Na\u021Bionale a Rom\xE2niei.\n</p> <div class="inline-block bg-white border-2 border-yellow-400 px-8 py-4 rounded-3xl shadow-xl"> <p class="text-xs font-bold text-gray-400 uppercase mb-1">Cota\u021Bie BNR Azi</p> <p class="text-4xl font-black text-gray-900">', ' <span class="text-lg text-yellow-600">RON/g</span></p> </div> </header> <div class="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl border-b-8 border-yellow-400 mb-12"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12"> <div class="space-y-6"> <div> <label class="block text-xs font-black uppercase text-gray-400 mb-2 tracking-widest">Am grame (g)</label> <div class="relative"> <input type="number" id="inGrame" value="10" class="w-full bg-yellow-50/50 border-2 border-yellow-100 rounded-2xl p-4 text-3xl font-black text-gray-900 focus:bg-white focus:border-yellow-500 outline-none transition-all"> <span class="absolute right-4 top-1/2 -translate-y-1/2 text-yellow-600 font-bold">g</span> </div> </div> <div> <label class="block text-xs font-black uppercase text-gray-400 mb-2 tracking-widest">Am RON (Lei)</label> <div class="relative"> <input type="number" id="inRon" class="w-full bg-yellow-50/50 border-2 border-yellow-100 rounded-2xl p-4 text-3xl font-black text-gray-900 focus:bg-white focus:border-yellow-500 outline-none transition-all" placeholder="Introdu suma"> <span class="absolute right-4 top-1/2 -translate-y-1/2 text-yellow-600 font-bold">RON</span> </div> </div> </div> <div class="bg-gray-900 text-white rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden"> <div class="absolute top-0 right-0 w-48 h-48 bg-yellow-500 rounded-full blur-[80px] opacity-20 pointer-events-none"></div> <p class="text-sm font-bold text-gray-400 uppercase mb-2 relative z-10" id="labelRezultat">Valoarea \xEEn RON</p> <p id="outRezultat" class="text-5xl md:text-6xl font-black text-yellow-400 mb-4 relative z-10">0 Lei</p> <a id="whatsappBtn" href="https://wa.me/" target="_blank" class="mt-4 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 relative z-10 text-sm">\nTrimite pe WhatsApp\n</a> </div> </div> </div> <footer class="mt-8 flex items-center justify-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest"> <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>\nDate live: AUR: ', " RON/g | Actualizat la: ", " </footer> </main> <script>(function(){", `
        const inGrame = document.getElementById('inGrame');
        const inRon = document.getElementById('inRon');
        const outRezultat = document.getElementById('outRezultat');
        const labelRezultat = document.getElementById('labelRezultat');
        const btnWhatsapp = document.getElementById('whatsappBtn');

        function updateFromGrame() {
            const grame = parseFloat(inGrame.value) || 0;
            const valoare = grame * goldPrice;

            labelRezultat.innerText = "Valoarea \xEEn RON";
            outRezultat.innerText = Math.round(valoare).toLocaleString() + " Lei";
            inRon.value = ""; // Clear the other input to avoid confusion

            updateWhatsapp(grame, valoare, true);
        }

        function updateFromRon() {
            const ron = parseFloat(inRon.value) || 0;
            const grame = ron / goldPrice;

            labelRezultat.innerText = "Po\u021Bi cump\u0103ra";
            outRezultat.innerText = grame.toFixed(2) + " g";
            inGrame.value = ""; // Clear the other input to avoid confusion

            updateWhatsapp(grame, ron, false);
        }

        function updateWhatsapp(grame, ron, isGramsToRon) {
            if (btnWhatsapp) {
                let mesaj = "";
                if (isGramsToRon) {
                    mesaj = \\\`Cota\u021Bie Aur pe Manualul.ro \u{1F3C6}\\\\n\\\\nPre\u021B: \\\${goldPrice.toFixed(2)} Lei/gram\\\\nCantitate: \\\${grame}g\\\\nValoare total\u0103: \\\${Math.round(ron).toLocaleString()} Lei\\\`;
                } else {
                    mesaj = \\\`Cota\u021Bie Aur pe Manualul.ro \u{1F3C6}\\\\n\\\\nPre\u021B: \\\${goldPrice.toFixed(2)} Lei/gram\\\\nCu \\\${Math.round(ron).toLocaleString()} Lei po\u021Bi cump\u0103ra: \\\${grame.toFixed(2)}g de Aur\\\`;
                }
                btnWhatsapp.href = \\\`https://api.whatsapp.com/send?text=\\\${encodeURIComponent(mesaj + "\\\\n\\\\nVezi aici: " + window.location.href)}\\\`;
            }
        }

        inGrame.addEventListener('input', updateFromGrame);
        inRon.addEventListener('input', updateFromRon);

        // Initial
        updateFromGrame();
    })();<\/script> `])), maybeRenderHead(), goldPrice.toFixed(2), goldPrice.toFixed(2), centralData.updated, defineScriptVars({ goldPrice })) })}`;
}, "/app/src/pages/investitii/aur.astro", void 0);

const $$file = "/app/src/pages/investitii/aur.astro";
const $$url = "/investitii/aur";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Aur,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
