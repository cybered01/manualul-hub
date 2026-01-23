import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_B-dP9hC8.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_Dxlj8ZoZ.mjs';
import { readFileSync } from 'fs';
import { parse } from 'csv-parse/sync';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const fileContent = readFileSync("./src/data/carbon.csv", "utf-8");
  const tipuriTeren = parse(fileContent, { columns: true, skip_empty_lines: true, trim: true });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Simulator Credite Carbon - Alege Tipul de Teren", "description": "Calculeaz\u0103 c\xE2t po\u021Bi c\xE2\u0219tiga din v\xE2nzarea certificatelor de carbon \xEEn func\u021Bie de terenul t\u0103u: p\u0103dure, agricultur\u0103 sau p\u0103\u0219une." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 pb-12"> <nav class="py-4 mb-4"> <a href="/" class="text-sm text-gray-500 hover:text-emerald-700 flex items-center gap-1 transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg>
Înapoi la meniul principal
</a> </nav> <header class="py-8 text-center mb-8"> <h1 class="text-4xl font-black text-gray-900 mb-4 tracking-tight">
Transformă natura în <span class="text-emerald-600">venit pasiv</span> </h1> <p class="text-xl text-gray-600 max-w-2xl mx-auto">
Alege tipul de ecosistem pe care îl gestionezi pentru a simula numărul de credite de carbon sechestrate anual.
</p> </header> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${tipuriTeren.map((item) => renderTemplate`<a${addAttribute(`/carbon/${item.id}`, "href")} class="group"> <div class="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col"> <div class="p-8"> <div class="flex justify-between items-start mb-4"> <span class="text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2 py-1 rounded"> ${item.categorie} </span> <span class="text-2xl">🌿</span> </div> <h2 class="text-xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors mb-2"> ${item.titlu} </h2> <p class="text-gray-500 text-sm line-clamp-2 mb-6"> ${item.descriere} </p> <div class="pt-4 border-t border-gray-50"> <div class="flex justify-between items-center text-sm font-medium"> <span class="text-gray-400">Absorbție:</span> <span class="text-emerald-600">${item.absorbtie_t_ha} t/ha/an</span> </div> <div class="flex justify-between items-center text-sm font-medium mt-1"> <span class="text-gray-400">Preț credit:</span> <span class="text-gray-900">${item.pret_credit}</span> </div> </div> </div> <div class="px-8 py-4 bg-emerald-50 group-hover:bg-emerald-600 transition-colors text-center mt-auto"> <span class="text-sm font-bold text-emerald-700 group-hover:text-white transition-colors">
Calculează Profitul
</span> </div> </div> </a>`)} </div> </main> ` })}`;
}, "/app/src/pages/carbon/index.astro", void 0);

const $$file = "/app/src/pages/carbon/index.astro";
const $$url = "/carbon";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
