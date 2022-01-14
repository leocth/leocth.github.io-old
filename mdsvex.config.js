const config = {
	extensions: ['.svelte.md', '.md', '.svx'],
	layout: "src/lib/mdsvex/info.svelte",
	smartypants: {
		quote: true,
		ellipses: true,

		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
};

export default config;
