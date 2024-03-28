import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/index.js";
const nav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#side-nav.svelte-18wda2g a.svelte-18wda2g{margin-top:30px;position:absolute;left:-80px;transition:0.3s;padding:15px;width:100px;text-decoration:none;font-size:15px;color:white;border-radius:0 5px 5px 0}#side-nav.svelte-18wda2g a.svelte-18wda2g:hover{left:0}#home.svelte-18wda2g.svelte-18wda2g{top:20px;background-color:#04AA6D}#about.svelte-18wda2g.svelte-18wda2g{top:80px;background-color:#2196F3}#work.svelte-18wda2g.svelte-18wda2g{top:140px;background-color:#f44336}#contact.svelte-18wda2g.svelte-18wda2g{top:200px;background-color:#555}#blog.svelte-18wda2g.svelte-18wda2g{top:260px;background-color:#FF8C00}@media only screen and (max-width: 768px){#side-nav.svelte-18wda2g a.svelte-18wda2g{padding:10px;font-size:small;width:90px}}",
  map: null
};
const home = "/";
const about = "/about";
const work = "/work";
const contact = "/contact";
const blog = "https://aherrerablog.netlify.app/";
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<main class="container"><div id="side-nav" class="sidenav svelte-18wda2g"><a${add_attribute("href", home, 0)} id="home" class="svelte-18wda2g">Home</a>
        <a${add_attribute("href", about, 0)} id="about" class="svelte-18wda2g">About</a>
        <a${add_attribute("href", work, 0)} id="work" class="svelte-18wda2g">Work</a>
        <a${add_attribute("href", contact, 0)} id="contact" class="svelte-18wda2g">Contact</a>
        <a${add_attribute("href", blog, 0)} id="blog" target="blank" class="svelte-18wda2g">Blog</a></div> 
</main>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{background-image:url(gradient.jpg);color:lightgrey;background-size:cover;background-repeat:no-repeat;background-position:center;height:100vh;background-attachment:fixed}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
