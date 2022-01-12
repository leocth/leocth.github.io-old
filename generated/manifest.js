const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/projects.svelte"),
	() => import("../../../src/routes/contact.svelte"),
	() => import("../../../src/routes/rfab/__layout.svelte"),
	() => import("../../../src/routes/rfab/progress.svelte"),
	() => import("../../../src/routes/rfab/what.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/projects.svelte
	[/^\/projects\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/contact.svelte
	[/^\/contact\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/rfab/progress.svelte
	[/^\/rfab\/progress\/?$/, [c[0], c[5], c[6]], [c[1]]],

	// src/routes/rfab/what.svelte
	[/^\/rfab\/what\/?$/, [c[0], c[5], c[7]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];