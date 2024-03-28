import * as server from '../entries/pages/contact/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/contact/+page.server.js";
export const imports = ["_app/immutable/nodes/4.9ad52e16.js","_app/immutable/chunks/index.419ba70f.js"];
export const stylesheets = ["_app/immutable/assets/4.b7b1dbb4.css"];
export const fonts = [];
