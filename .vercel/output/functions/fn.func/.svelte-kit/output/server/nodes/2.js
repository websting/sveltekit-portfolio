

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.663447b9.js","_app/immutable/chunks/index.419ba70f.js"];
export const stylesheets = ["_app/immutable/assets/2.4c645e78.css"];
export const fonts = [];
