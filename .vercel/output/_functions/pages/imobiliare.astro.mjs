import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B-dP9hC8.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_Dxlj8ZoZ.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Chirie vs. Rat\u0103 | Manualul.ro", "description": "Compar\u0103 direct costul lunar \u0219i profitul pe termen lung \xEEntre chirie \u0219i rat\u0103." }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", `<main class="max-w-5xl mx-auto px-4 pb-32"> <nav class="py-6"> <a href="/" class="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-2">\u2190 \xCEnapoi</a> </nav> <header class="mb-12 text-center"> <h1 class="text-4xl font-black text-gray-900 mb-2">Chirie vs. Rat\u0103</h1> <p class="text-gray-500 font-medium text-lg">Separ\u0103m cheltuielile de profit.</p> </header> <div class="grid grid-cols-1 lg:grid-cols-12 gap-8"> <div class="lg:col-span-4 space-y-6 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm"> <h3 class="font-black uppercase text-xs tracking-widest text-indigo-600">Configurare</h3> <div> <label class="block text-xs font-bold text-gray-400 mb-2 uppercase">Pre\u021B Apartament (EUR)</label> <input type="number" id="pret" value="100000" class="w-full bg-gray-50 border-2 border-gray-100 rounded-xl p-3 font-black outline-none focus:border-indigo-500"> </div> <div> <label class="block text-xs font-bold text-gray-400 mb-2 uppercase">Chirie Lunar\u0103 (EUR)</label> <input type="number" id="chirie" value="500" class="w-full bg-gray-50 border-2 border-gray-100 rounded-xl p-3 font-black outline-none focus:border-indigo-500"> </div> <div> <label class="block text-xs font-bold text-gray-400 mb-2 uppercase">Dob\xE2nd\u0103 Anual\u0103 (%)</label> <input type="number" id="dobanda" value="5.5" step="0.1" class="w-full bg-gray-50 border-2 border-gray-100 rounded-xl p-3 font-black outline-none focus:border-indigo-500"> </div> <div> <label class="block text-xs font-bold text-gray-400 mb-2 uppercase">Perioad\u0103 (Ani)</label> <input type="number" id="ani" value="20" class="w-full bg-gray-50 border-2 border-gray-100 rounded-xl p-3 font-black outline-none focus:border-indigo-500"> </div> </div> <div class="lg:col-span-8 space-y-8"> <section class="bg-white rounded-[32px] border border-gray-100 p-8 shadow-sm"> <h2 class="text-xl font-black mb-6 flex items-center gap-2">\u{1F4B3} 1. C\xE2t pl\u0103te\u0219ti \xEEn fiecare lun\u0103?</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="p-6 bg-gray-50 rounded-2xl border-l-4 border-indigo-500"> <p class="text-xs font-bold text-gray-400 uppercase">Rat\u0103 Bancar\u0103</p> <p id="resRata" class="text-3xl font-black text-gray-900">0 EUR</p> </div> <div class="p-6 bg-gray-50 rounded-2xl border-l-4 border-gray-300"> <p class="text-xs font-bold text-gray-400 uppercase">Chirie</p> <p id="resChirie" class="text-3xl font-black text-gray-900">0 EUR</p> </div> </div> </section> <section class="bg-indigo-900 text-white rounded-[32px] p-8 shadow-xl relative overflow-hidden"> <h2 class="text-xl font-black mb-6 relative z-10 text-indigo-200">\u{1F4B0} 2. Cu ce r\u0103m\xE2i dup\u0103 <span class="dispAni">20</span> ani?</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"> <div class="space-y-4"> <div class="bg-white/10 p-6 rounded-2xl border border-white/10"> <p class="text-xs font-bold uppercase opacity-60">Valoare Proprietate</p> <p id="resCasa" class="text-3xl font-black text-white">0 EUR</p> <p class="text-[10px] mt-2 opacity-50 italic">Calculat la o cre\u0219tere de 2% / an a pie\u021Bei.</p> </div> </div> <div class="space-y-4"> <div class="bg-indigo-500/30 p-6 rounded-2xl border border-indigo-400/30"> <p class="text-xs font-bold uppercase text-indigo-200">Investi\u021Bie Diferen\u021B\u0103</p> <p id="resInvest" class="text-3xl font-black text-indigo-300">0 EUR</p> <p class="text-[10px] mt-2 text-indigo-200/60 italic">Dac\u0103 investe\u0219ti avansul + diferen\u021Ba (Rat\u0103-Chirie) la un randament de 8% / an.</p> </div> </div> </div> <div id="verdict" class="mt-8 p-4 bg-white text-indigo-900 rounded-2xl text-center font-black uppercase tracking-tight relative z-10">
Calcul\u0103m...
</div> </section> </div> </div> </main> <script>
        function calculate() {
            const pret = parseFloat(document.getElementById('pret').value) || 0;
            const chirie = parseFloat(document.getElementById('chirie').value) || 0;
            const dobandaAn = (parseFloat(document.getElementById('dobanda').value) || 0) / 100 / 12;
            const ani = parseInt(document.getElementById('ani').value) || 1;
            const luni = ani * 12;

            const avans = pret * 0.15;
            const sumaCredit = pret - avans;

            // 1. Calcul Rata
            const rata = sumaCredit * (dobandaAn * Math.pow(1 + dobandaAn, luni)) / (Math.pow(1 + dobandaAn, luni) - 1);

            // 2. Proiec\u021Bie Proprietate (2% apreciere/an)
            const valoareCasa = pret * Math.pow(1 + 0.02, ani);

            // 3. Proiec\u021Bie Investi\u021Bie (8% randament/an = 0.66%/lun\u0103)
            const rInv = 0.08 / 12;
            let totalInvestit = avans * Math.pow(1 + rInv, luni);
            const diferenta = rata - chirie;

            if (diferenta > 0) {
                // Dac\u0103 rata e mai mare, investim diferen\u021Ba care altfel s-ar fi dus la banc\u0103
                totalInvestit += diferenta * (Math.pow(1 + rInv, luni) - 1) / rInv;
            }

            // UI Update
            document.getElementById('resRata').innerText = Math.round(rata).toLocaleString() + " \u20AC";
            document.getElementById('resChirie').innerText = Math.round(chirie).toLocaleString() + " \u20AC";
            document.getElementById('resCasa').innerText = Math.round(valoareCasa).toLocaleString() + " \u20AC";
            document.getElementById('resInvest').innerText = Math.round(totalInvestit).toLocaleString() + " \u20AC";
            document.querySelectorAll('.dispAni').forEach(el => el.innerText = ani);

            const v = document.getElementById('verdict');
            if(valoareCasa > totalInvestit) {
                v.innerText = "\u2B50 Imobiliarul C\xE2\u0219tig\u0103: Casa valoreaz\u0103 mai mult dec\xE2t investi\u021Bia.";
            } else {
                v.innerText = "\u{1F4C8} Investi\u021Bia C\xE2\u0219tig\u0103: Ai mai mul\u021Bi bani dac\u0103 stai \xEEn chirie \u0219i investe\u0219ti.";
            }
        }

        ['pret', 'chirie', 'dobanda', 'ani'].forEach(id => document.getElementById(id).addEventListener('input', calculate));
        calculate();
    <\/script> `])), maybeRenderHead()) })}`;
}, "/app/src/pages/imobiliare/index.astro", void 0);

const $$file = "/app/src/pages/imobiliare/index.astro";
const $$url = "/imobiliare";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
