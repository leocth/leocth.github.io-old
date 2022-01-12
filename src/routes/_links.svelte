<script lang="ts">
	import { base } from '$app/paths';
</script>

<nav>
	<a sveltekit:prefetch href="{base}/">home</a>
	<a sveltekit:prefetch href="{base}/projects">projects</a>
	<a sveltekit:prefetch href="{base}/contact">contact</a>
</nav>
