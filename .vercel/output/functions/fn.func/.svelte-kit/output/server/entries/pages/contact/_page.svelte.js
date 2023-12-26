import { c as create_ssr_component } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Michroma&display=swap");@import url("https://fonts.googleapis.com/css2?family=Tinos&display=swap");.container.svelte-dv6oip{margin-top:25px;padding:35px;text-align:justify}h3.svelte-dv6oip{text-align:center;font-family:"Michroma", sans-serif;margin-top:35px;padding:25px;color:black}p.svelte-dv6oip{text-align:center}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main><div class="container svelte-dv6oip"><h3 class="svelte-dv6oip">Contact me</h3>
    <p class="svelte-dv6oip">Your comments are important. All information will remain confidential.
    </p>

    <form method="POST">
      <div class="form-outline mb-4"><input type="text" name="name" id="form4Example1" class="form-control">
        <label class="form-label" for="form4Example1">Name</label></div>

      
      <div class="form-outline mb-4"><input type="email" name="email" id="form4Example2" class="form-control">
        <label class="form-label" for="form4Example2">Email address</label></div>

      
      <div class="form-outline mb-4"><textarea class="form-control" name="message" id="form4Example3" rows="4"></textarea>
        <label class="form-label" for="form4Example3">Message</label></div>

      
      <button type="submit" class="btn btn-primary btn-block mb-4">Send</button></form></div>
</main>`;
});
export {
  Page as default
};
