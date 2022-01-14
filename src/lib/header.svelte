<!-- <script>
	import { base } from '$app/paths';

	export let posts;

	function processPath(path) {
		console.log(path);
		return path == './index.md' ? '' : path.replace('.md', '');
	}
</script>

<nav>
	{#each posts as { path, metadata: { title } }}
		<a sveltekit:prefetch href={`${base}/${processPath(path)}`}>{title}</a>
	{/each}
</nav>
<hr />
<slot /> -->
