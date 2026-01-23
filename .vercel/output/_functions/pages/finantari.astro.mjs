import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_B-dP9hC8.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_Dxlj8ZoZ.mjs';
import { readFileSync } from 'fs';
import { parse } from 'csv-parse/sync';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const fileContent = readFileSync("./src/data/finantari.csv", "utf-8");
  const finantari = parse(fileContent, { columns: true, skip_empty_lines: true, trim: true });
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "deschis":
        return "bg-green-100 text-green-700 border-green-200";
      case "\xEEn cur\xE2nd":
        return "bg-amber-100 text-amber-700 border-amber-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ghid Finan\u021B\u0103ri IMM 2026 - Fonduri Nerambursabile", "description": "Lista complet\u0103 a programelor de finan\u021Bare pentru firme \xEEn 2026. Calculeaz\u0103 cofinan\u021Barea pentru Digitalizare, Start-up Nation \u0219i alte granturi europene." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 pb-12"> <header class="py-12 text-center"> <h1 class="text-4xl font-black text-gray-900 mb-4 tracking-tight">
Manualul Finanțărilor <span class="text-blue-700 text-3xl block md:inline">pentru IMM</span> </h1> <p class="text-xl text-gray-600 max-w-2xl mx-auto">
Selectează programul dorit pentru a vedea condițiile de eligibilitate și pentru a calcula cofinanțarea necesară.
</p> </header> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${finantari.map((item) => renderTemplate`<a${addAttribute(`/finantari/${item.id}`, "href")} class="group"> <div class="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col"> <div class="p-6 flex-grow"> <div class="flex justify-between items-start mb-4"> <span class="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded"> ${item.categorie} </span> <span${addAttribute(`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded border ${getStatusClass(item.status)}`, "class")}> ${item.status} </span> </div> <h2 class="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors mb-2"> ${item.titlu} </h2> <p class="text-gray-500 text-sm line-clamp-2 mb-6"> ${item.descriere} </p> <div class="grid grid-cols-2 gap-4 pt-4 border-t border-gray-50"> <div> <p class="text-[10px] text-gray-400 uppercase font-bold">Grant Max.</p> <p class="font-black text-gray-700">${item.valoare_maxima}</p> </div> <div> <p class="text-[10px] text-gray-400 uppercase font-bold">Cofinanțare</p> <p class="font-black text-gray-700">${item.cofinantare}</p> </div> </div> </div> <div class="px-6 py-4 bg-gray-50 group-hover:bg-blue-700 transition-colors text-center"> <span class="text-sm font-bold text-blue-700 group-hover:text-white transition-colors">
Deschide Ghidul →
</span> </div> </div> </a>`)} </div> <section class="mt-20 p-8 bg-blue-700 rounded-3xl text-white text-center"> <h3 class="text-2xl font-bold mb-2">Nu ai găsit ce căutai?</h3> <p class="opacity-80 mb-6">Actualizăm zilnic Manualul cu noi linii de finanțare din PNRR și Bugetul de Stat.</p> <button class="bg-white text-blue-700 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
Abonează-te la Alerte
</button> </section> </main> ` })}`;
}, "/app/src/pages/finantari/index.astro", void 0);

const $$file = "/app/src/pages/finantari/index.astro";
const $$url = "/finantari";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
