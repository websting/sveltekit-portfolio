

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.b82eb1c6.js","_app/immutable/chunks/index.419ba70f.js"];
export const stylesheets = ["_app/immutable/assets/3.6180736d.css"];
export const fonts = [];
