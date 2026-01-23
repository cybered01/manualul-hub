import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_B-dP9hC8.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_Dxlj8ZoZ.mjs';
import { readFileSync } from 'fs';
import { parse } from 'csv-parse/sync';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const fileContent = readFileSync("./src/data/weekend.csv", "utf-8");
  const locatii = parse(fileContent, { columns: true, skip_empty_lines: true, trim: true });
  const regiuni = [...new Set(locatii.map((l) => l.regiune))].sort();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Weekend Rom\xE2nia - Harta Costurilor de Vacan\u021B\u0103", "description": "Alege destina\u021Bia \u0219i calculeaz\u0103 bugetul de weekend. Peste 50 de loca\u021Bii din Rom\xE2nia cu pre\u021Buri actualizate." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-6xl mx-auto px-4 pb-20"> <header class="py-16 text-center"> <h1 class="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
Weekend <span class="text-orange-600">România</span> </h1> <p class="text-xl text-gray-600 max-w-2xl mx-auto">
Unde plecăm sâmbătă? Alege o destinație și simulează costurile de transport, cazare și masă.
</p> </header> <div class="space-y-20"> ${regiuni.map((regiune) => renderTemplate`<section> <div class="flex items-center gap-4 mb-10 border-b border-orange-100 pb-4"> <h2 class="text-3xl font-black text-gray-800 uppercase tracking-tighter">${regiune}</h2> <span class="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold"> ${locatii.filter((l) => l.regiune === regiune).length} locații
</span> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${locatii.filter((l) => l.regiune === regiune).map((item) => renderTemplate`<a${addAttribute(`/weekend/${item.id}`, "href")} class="group"> <div class="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all h-full flex flex-col group-hover:border-orange-200"> <h3 class="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">${item.destinatie}</h3> <p class="text-sm text-gray-500 line-clamp-2 mb-6 flex-grow">${item.descriere}</p> <div class="pt-4 border-t border-gray-50 flex justify-between items-center"> <div class="text-[10px] font-black uppercase text-gray-400">
Buget mediu/zi: <span class="text-gray-900 block text-sm">${parseInt(item.pret_masa) + parseInt(item.pret_cazare) / 2} Lei</span> </div> <div class="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
→
</div> </div> </div> </a>`)} </div> </section>`)} </div> </main> ` })}`;
}, "/app/src/pages/weekend/index.astro", void 0);

const $$file = "/app/src/pages/weekend/index.astro";
const $$url = "/weekend";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
