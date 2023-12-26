export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["blogapi.png","djangorest.png","employeeot.png","gradient.jpg","list.png","portrait.JPG","shoppinglist.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".JPG":"image/jpeg"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.2e265e59.js","imports":["_app/immutable/entry/start.2e265e59.js","_app/immutable/chunks/index.419ba70f.js","_app/immutable/chunks/singletons.7b197858.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.c2060200.js","imports":["_app/immutable/entry/app.c2060200.js","_app/immutable/chunks/index.419ba70f.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/work",
				pattern: /^\/work\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
