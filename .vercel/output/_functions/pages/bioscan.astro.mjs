import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_B-dP9hC8.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_Dxlj8ZoZ.mjs';
import { readFileSync } from 'fs';
import { parse } from 'csv-parse/sync';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const fileContent = readFileSync("./src/data/bioscan.csv", "utf-8");
  const produse = parse(fileContent, { columns: true, skip_empty_lines: true, trim: true });
  const categorii = [...new Set(produse.map((p) => p.categorie))].sort();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "BioScan - Calculatorul Pre\u021Bului Real al M\xE2nc\u0103rii", "description": "Analizeaz\u0103 diferen\u021Ba de pre\u021B \u0219i de calitate dintre produsele de supermarket \u0219i cele certificate organic." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-6xl mx-auto px-4 pb-20"> <header class="py-16 text-center"> <h1 class="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
Bio<span class="text-lime-600">Scan</span> </h1> <p class="text-xl text-gray-600 max-w-2xl mx-auto">
Cât costă sănătatea ta? Compară prețurile și ingredientele. <br> <span class="text-lime-700 font-bold">Verde = Bio</span> vs <span class="text-gray-400 font-bold line-through">Gri = Convențional</span> </p> </header> <div class="space-y-16"> ${categorii.map((categorie) => renderTemplate`<section> <h2 class="text-2xl font-black text-gray-800 uppercase tracking-widest border-b border-gray-100 pb-4 mb-8"> ${categorie} </h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${produse.filter((p) => p.categorie === categorie).map((item) => renderTemplate`<a${addAttribute(`/bioscan/${item.id}`, "href")} class="group"> <div class="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all h-full flex flex-col group-hover:border-lime-400"> <div class="flex justify-between items-start mb-4"> <h3 class="text-xl font-bold text-gray-900 group-hover:text-lime-600 transition-colors"> ${item.produs} </h3> <span class="text-[10px] font-bold bg-gray-100 px-2 py-1 rounded text-gray-500 uppercase">${item.unitate}</span> </div> <div class="flex items-center gap-4 mb-6 bg-gray-50 p-4 rounded-2xl"> <div class="flex-1 text-center border-r border-gray-200 pr-2"> <p class="text-[10px] uppercase font-bold text-gray-400">Convențional</p> <p class="text-lg font-black text-gray-400 line-through decoration-red-400 decoration-2">${item.pret_standard} Lei</p> </div> <div class="flex-1 text-center pl-2"> <p class="text-[10px] uppercase font-bold text-lime-600">Certificat Bio</p> <p class="text-2xl font-black text-lime-600">${item.pret_bio} Lei</p> </div> </div> <div class="mt-auto text-center"> <span class="text-xs font-bold text-gray-400 group-hover:text-lime-700 transition-colors flex items-center justify-center gap-1">
Calculează impactul anual →
</span> </div> </div> </a>`)} </div> </section>`)} </div> </main> ` })}`;
}, "/app/src/pages/bioscan/index.astro", void 0);

const $$file = "/app/src/pages/bioscan/index.astro";
const $$url = "/bioscan";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
