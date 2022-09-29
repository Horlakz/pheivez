export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"_app/immutable/start-363c9762.js","imports":["_app/immutable/start-363c9762.js","_app/immutable/chunks/index-7b9ea8f7.js","_app/immutable/chunks/singletons-97dbc110.js"],"stylesheets":[]},
		nodes: [
			() => import('.//nodes/0.js'),
			() => import('.//nodes/1.js'),
			() => import('.//nodes/2.js'),
			() => import('.//nodes/3.js'),
			() => import('.//nodes/4.js'),
			() => import('.//nodes/5.js'),
			() => import('.//nodes/6.js')
		],
		routes: [
			{
				id: "todos",
				pattern: /^\/todos\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};