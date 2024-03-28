

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.142e6d40.js","_app/immutable/chunks/index.419ba70f.js"];
export const stylesheets = ["_app/immutable/assets/0.4f5de0ea.css"];
export const fonts = [];
