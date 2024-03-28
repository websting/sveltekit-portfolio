

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.580158cc.js","_app/immutable/chunks/index.419ba70f.js","_app/immutable/chunks/singletons.b3e09283.js"];
export const stylesheets = [];
export const fonts = [];
