import { c as create_ssr_component, e as escape } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Michroma&display=swap");@import url("https://fonts.googleapis.com/css2?family=Tangerine&display=swap");body{margin:0;padding:0}.container.svelte-dzy6rm{display:flex;width:100%;height:100vh;justify-content:center;align-items:center;flex-direction:column;line-height:25px}h1.svelte-dzy6rm{color:rgb(39, 27, 29);font-family:"Michroma", sans-serif;font-size:xx-large;line-height:25px;text-align:center}h2.svelte-dzy6rm{color:#fff;font-family:"Michroma", sans-serif;font-size:medium;opacity:0}p.svelte-dzy6rm{color:#fff;font-family:"Michroma", sans-serif;opacity:0;font-weight:lighter}.slide-left.svelte-dzy6rm{animation:svelte-dzy6rm-slide-left 1s linear forwards}@keyframes svelte-dzy6rm-slide-left{0%{transform:translate(100px);opacity:0}100%{transform:translate(0px);opacity:1}}h2.slide-left.svelte-dzy6rm{animation-delay:2s}p.slide-left.svelte-dzy6rm{animation-delay:4s}@media only screen and (max-width: 480px){h1.svelte-dzy6rm,h2.svelte-dzy6rm,p.svelte-dzy6rm{text-align:center;font-size:medium;margin-left:10px;margin-right:10px}}',
  map: null
};
let name = "Antonio Herrera";
let title = "Full Stack Web Developer";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let content = `I build websites so you don't have to.`;
  $$result.css.add(css);
  return `<main class="container svelte-dzy6rm"><h1 class="slide-left svelte-dzy6rm">${escape(name)}</h1>
  <h2 class="slide-left svelte-dzy6rm">${escape(title)}</h2>
  <p class="slide-left svelte-dzy6rm">${escape(content)}</p>
</main>`;
});
export {
  Page as default
};
