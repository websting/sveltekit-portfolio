

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/work/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.5259b1b8.js","_app/immutable/chunks/index.419ba70f.js"];
export const stylesheets = ["_app/immutable/assets/5.0f554324.css"];
export const fonts = [];
