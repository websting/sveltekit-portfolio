import { c as create_ssr_component, e as escape } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Michroma&display=swap");@import url("https://fonts.googleapis.com/css2?family=Tangerine&display=swap");body{margin:0;padding:0}.container.svelte-axj7jo{display:flex;width:100%;height:100vh;justify-content:center;align-items:center;flex-direction:column;line-height:25px}h1.svelte-axj7jo{color:rgb(39, 27, 29);font-family:"Michroma", sans-serif;font-size:xx-large;line-height:25px;text-align:center}h2.svelte-axj7jo{color:#fff;font-family:"Michroma", sans-serif;font-size:medium;opacity:0}p.svelte-axj7jo{width:30px;color:#fff;font-family:"Michroma", sans-serif;opacity:0;font-weight:lighter}.slide-left.svelte-axj7jo{animation:svelte-axj7jo-slide-left 1s linear forwards}@keyframes svelte-axj7jo-slide-left{0%{transform:translate(100px);opacity:0}100%{transform:translate(0px);opacity:1}}h2.slide-left.svelte-axj7jo{animation-delay:2s}p.slide-left.svelte-axj7jo{animation-delay:4s}@media only screen and (max-width: 480px){h1.svelte-axj7jo,h2.svelte-axj7jo,p.svelte-axj7jo{text-align:center;font-size:medium;margin-left:10px;margin-right:10px}}',
  map: null
};
let name = "Antonio Herrera";
let title = "Full Stack Web Developer";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let content = `I build websites so you don't have to.`;
  $$result.css.add(css);
  return `<main class="container svelte-axj7jo"><h1 class="slide-left svelte-axj7jo">${escape(name)}</h1>
  <h2 class="slide-left svelte-axj7jo">${escape(title)}</h2>
  <p class="slide-left svelte-axj7jo">${escape(content)}</p>
</main>`;
});
export {
  Page as default
};
