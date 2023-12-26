import { c as create_ssr_component, v as validate_component, f as each, b as add_attribute, e as escape } from "../../../chunks/index.js";
const images = [
  {
    name: "JavaScript - Vue",
    url: "employeeot.png",
    keyword: "vue",
    descr: "Employee overtime app",
    link: "https://employeeovertimeapi.web.app/"
  },
  {
    name: "JavaScript - React",
    url: "list.png",
    keyword: "react",
    descr: "Simple shooping list app",
    link: "https://ahlist.netlify.app/"
  },
  {
    name: "JavaScript - Sveltekit",
    url: "blogapi.png",
    keyword: "sveltekit",
    descr: "Portal for web dev newbies",
    link: "https://sveltekit-blog-api.vercel.app/"
  },
  {
    name: "Django - REST framework",
    url: "djangorest.png",
    keyword: "django",
    descr: "24/7 API",
    link: "http://websting.pythonanywhere.com/"
  }
];
const categories = ["all", "vue", "sveltekit", "django", "react"];
const ButtonContainer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "#myBtnContainer.svelte-1yeucvb{margin-bottom:1rem}",
  map: null
};
const ButtonContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div id="myBtnContainer" class="svelte-1yeucvb">${slots.default ? slots.default({}) : ``}</div>`;
});
const Gallery_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".row.svelte-1kyqgnq{width:100%;display:flex;flex-wrap:wrap}",
  map: null
};
const Gallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="row svelte-1kyqgnq">${slots.default ? slots.default({}) : ``}</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');@import url('https://fonts.googleapis.com/css2?family=Tinos&display=swap');main.svelte-pec1x8.svelte-pec1x8{margin-top:25px;padding:35px;max-width:100vw;display:flex;flex-direction:column;align-items:center;justify-content:center}h3.svelte-pec1x8.svelte-pec1x8{color:black;text-align:center;font-family:'Michroma', sans-serif;margin-top:20px;margin-bottom:25px}h5.svelte-pec1x8.svelte-pec1x8{text-align:center;font-family:'Michroma', sans-serif;font-size:small;margin-top:5px;padding:2px;color:indigo}p.svelte-pec1x8.svelte-pec1x8{padding-left:10px;margin:3px;position:relative;color:grey;font-family:'Tinos', serif;text-align:center}p.svelte-pec1x8 a.svelte-pec1x8{text-decoration:none}.column.svelte-pec1x8.svelte-pec1x8{width:33.33%;display:none;justify-content:center;margin:10px 0}.content.svelte-pec1x8.svelte-pec1x8{background-color:white;border-radius:5px;margin:15px;box-shadow:1px 1px 5px black}.show.svelte-pec1x8.svelte-pec1x8{display:flex}.btn.svelte-pec1x8.svelte-pec1x8{width:150px;text-transform:uppercase;font-weight:bold;font-size:1.2rem;letter-spacing:1px;border:none;outline:none;margin:5px;padding:14px 16px 12px;background-color:rgb(228, 66, 66);box-shadow:1px 1px 5px black;color:white;cursor:pointer;transition:.1s ease-in-out}.btn.svelte-pec1x8.svelte-pec1x8:hover{background-color:teal}.btn.svelte-pec1x8.svelte-pec1x8:active,.active.svelte-pec1x8.svelte-pec1x8{background-color:#FF8C00;color:white;font-weight:bold}@media only screen and (max-width: 768px){.column.svelte-pec1x8.svelte-pec1x8{width:100%}.content.svelte-pec1x8.svelte-pec1x8{width:100vw}.btn.svelte-pec1x8.svelte-pec1x8{margin-left:30px;width:100%;text-transform:uppercase;font-weight:200;font-size:x-small;margin:3px;padding:7px 8px 6px;border-radius:50%}img.svelte-pec1x8.svelte-pec1x8{width:max-content}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected = "all";
  $$result.css.add(css);
  return `<main class="svelte-pec1x8"><h3 class="svelte-pec1x8">My Work</h3>
	${validate_component(ButtonContainer, "ButtonContainer").$$render($$result, {}, {}, {
    default: () => {
      return `${each(categories, (category) => {
        return `<button class="${["btn svelte-pec1x8", selected === category ? "active" : ""].join(" ").trim()}"${add_attribute("data-name", category, 0)}>${escape(category)}
			</button>`;
      })}`;
    }
  })}

	
	${validate_component(Gallery, "Gallery").$$render($$result, {}, {}, {
    default: () => {
      return `${each(images, ({ name, url, keyword, descr, link }) => {
        return `${`<div class="show column svelte-pec1x8"><div class="content svelte-pec1x8"><img${add_attribute("src", url, 0)}${add_attribute("alt", name, 0)} style="width:100%" class="svelte-pec1x8">
						<h5 class="svelte-pec1x8">${escape(name)}</h5>
						<p class="descr svelte-pec1x8">${escape(descr)} <a${add_attribute("href", link, 0)} target="new" class="svelte-pec1x8">Live-Demo</a></p></div>
				</div>`}`;
      })}`;
    }
  })}
</main>`;
});
export {
  Page as default
};
