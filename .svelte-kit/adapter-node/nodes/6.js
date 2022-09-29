import * as server from '../entries/pages/todos/_page.server.ts.js';

export const index = 6;
export const component = async () => (await import('../entries/pages/todos/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/todos/_page.svelte-3b73ab1e.js';
export { server };
export const imports = ["_app/immutable/components/pages/todos/_page.svelte-3b73ab1e.js","_app/immutable/chunks/index-7b9ea8f7.js","_app/immutable/chunks/navigation-bfb6bd44.js","_app/immutable/chunks/singletons-97dbc110.js"];
export const stylesheets = ["_app/immutable/assets/_page-bf3fc389.css"];
