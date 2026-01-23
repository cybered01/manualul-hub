import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_B-dP9hC8.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_Dxlj8ZoZ.mjs';
import { readFileSync } from 'fs';
import { parse } from 'csv-parse/sync';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const fileContent = readFileSync("./src/data/ajutoare.csv", "utf-8");
  const ajutoare = parse(fileContent, { columns: true, skip_empty_lines: true, trim: true });
  const categorii = [...new Set(ajutoare.map((item) => item.categorie))];
  const getCategoryIcon = (cat) => {
    if (cat === "Familie") return "\u{1F476}";
    if (cat === "Vulnerabili") return "\u{1F6E1}\uFE0F";
    if (cat === "Utilit\u0103\u021Bi") return "\u{1F525}";
    if (cat === "Elevi") return "\u{1F4DA}";
    return "\u{1F4CB}";
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Manualul Ajutoarelor Sociale 2026 - Ghiduri Procedurale", "description": "Toate ajutoarele de stat explicate pas cu pas: acte necesare, institu\u021Bii \u0219i termene limit\u0103." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4 pb-20"> <header class="py-12 text-center"> <h1 class="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
Manualul <span class="text-green-600">Ajutoarelor Sociale</span> </h1> <p class="text-xl text-gray-600 max-w-2xl mx-auto">
Informații oficiale despre drepturile tale bănești, simplificate pentru a fi înțelese de oricine.
</p> </header> <div class="space-y-16"> ${categorii.map((categorie) => renderTemplate`<section> <div class="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4"> <span class="text-3xl">${getCategoryIcon(categorie)}</span> <h2 class="text-2xl font-black text-gray-800 uppercase tracking-wider">${categorie}</h2> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${ajutoare.filter((item) => item.categorie === categorie).map((item) => renderTemplate`<a${addAttribute(`/ajutoare-sociale/${item.id}`, "href")} class="group block"> <div class="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex justify-between items-center group-hover:border-green-200"> <div class="flex-grow"> <div class="flex items-center gap-2 mb-2"> <span${addAttribute(`text-[10px] font-bold px-2 py-0.5 rounded border ${item.status === "Deschis" ? "bg-green-50 text-green-700 border-green-100" : "bg-amber-50 text-amber-700 border-amber-100"}`, "class")}> ${item.status} </span> </div> <h3 class="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors"> ${item.titlu} </h3> <p class="text-sm text-gray-500 mt-1">${item.valoare_ajutor}</p> </div> <div class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </div> </div> </a>`)} </div> </section>`)} </div> <div class="mt-20 p-10 bg-gray-900 rounded-[40px] text-white overflow-hidden relative"> <div class="relative z-10"> <h3 class="text-2xl font-bold mb-4">Ai nevoie de ajutor suplimentar?</h3> <p class="text-gray-400 mb-0 max-w-lg text-sm leading-relaxed">
Dacă nu regăsești un program specific în manualul nostru sau dacă datele s-au schimbat în localitatea ta, te rugăm să te adresezi Direcției de Asistență Socială din cadrul primăriei tale.
</p> </div> <div class="absolute right-[-20px] bottom-[-20px] text-[150px] opacity-10 pointer-events-none">🏛️</div> </div> </main> ` })}`;
}, "/app/src/pages/ajutoare-sociale/index.astro", void 0);

const $$file = "/app/src/pages/ajutoare-sociale/index.astro";
const $$url = "/ajutoare-sociale";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
