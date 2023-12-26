import { c as create_ssr_component } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Michroma&display=swap");@import url("https://fonts.googleapis.com/css2?family=Tinos&display=swap");main.svelte-1m7it8j{display:flex;width:100%;justify-content:center;align-items:center;flex-direction:column}.container.svelte-1m7it8j{margin-top:25px;padding:35px;text-align:justify}h3.svelte-1m7it8j,h5.svelte-1m7it8j{color:black;text-align:center;font-family:"Michroma", sans-serif}h3.svelte-1m7it8j{margin-top:20px}h5.svelte-1m7it8j{margin-top:25px;padding:10px;word-spacing:4px}.paragraph.svelte-1m7it8j{padding:10px;display:block;margin-top:40px;margin-left:auto;margin-right:auto;font-family:"Tinos", serif;font-size:medium;color:#fff;font-weight:lighter}img.svelte-1m7it8j{padding:10px;display:block;margin-left:auto;margin-right:auto;border-radius:25px;opacity:0.7}img.svelte-1m7it8j:hover{opacity:1}.icons.svelte-1m7it8j{padding:10px;text-align:center;word-spacing:20px}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="content svelte-1m7it8j"><div class="container svelte-1m7it8j"><div class="row"><div class="col-sm-12"><h3 class="svelte-1m7it8j">About Me</h3>
        <p class="paragraph svelte-1m7it8j">Web Development for me started a few years back when I wanted to share
          pictures with friends and family. Facebok, Instagram and all of
          today&#39;s social media was not a thing for sharing online just yet. It
          was around this time I started experimenting with HTML, CSS, and
          JavaScript. I used these tools to buil a photo album and since then
          building websites became an obcession. Seeing the front-end result of
          my work online, and being able to share it with the entire world was a
          rewarding experience.
        </p></div></div>
    

    <div class="row"><div class="col-sm-6"><img src="portrait.JPG" alt="portrait" width="70%" class="svelte-1m7it8j"></div>
      <div class="col-sm-6"><p class="paragraph svelte-1m7it8j">Today my interests have changed a little and so has the Web
          Development world. I have come to realise that knowing the server side
          of web development is also exiting. I like how different technologies
          on the back-end of a website can dinamycally update and display
          information.
        </p>

        <p class="paragraph svelte-1m7it8j">Hi, my name is Antonio Herrera. I&#39;m a self thought web developer. My
          mode is keep it simple. The web is already out there, lets make it
          better !
        </p></div></div>
    

    <div class="row"><h5 class="svelte-1m7it8j">Tools of the trade</h5>
      <div class="col-sm-12"><div class="icons svelte-1m7it8j"><i class="fa-brands fa-html5 fa-2x" style="color: orange;"></i>
          <i class="fa-brands fa-css3-alt fa-2x" style="color: DodgerBlue;"></i>
          <i class="fa-brands fa-js fa-2x" style="color: orange;"></i>
          <i class="fa-brands fa-python fa-2x" style="color: SteelBlue;"></i>
          <i class="fa-brands fa-node-js fa-2x" style="color: green;"></i>
          <i class="fa-brands fa-bootstrap fa-2x" style="color: magenta;"></i>
          <i class="fa-brands fa-vuejs fa-2x" style="color: green;"></i>
          <i class="fa-brands fa-github fa-2x" style="color: black;"></i>
          <i class="fa-brands fa-react fa-2x" style="color:aqua;"></i></div></div></div></div>
</main>`;
});
export {
  Page as default
};
