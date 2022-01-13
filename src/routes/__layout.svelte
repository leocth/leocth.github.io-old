<main>
	<slot />
</main>

<style>
	:global(body) {
		font-family: var(--font-normal);
		background-color: #2d2d2d;
		color: #eee;
		line-height: 1.5em;
		font-size: 16pt;
		font-weight: 330;
		padding: 15px;
	}
	:global(h1) {
		font-size: 40pt;
	}
	:global(h2) {
		font-size: 25pt;
	}
	:global(p) {
		margin-top: 0pt;
		margin-bottom: 20pt;
	}
	:global(a) {
		color: #bdff97;
	}
	:global(a:visited) {
		color: #a7df86;
	}
	:global(code) {
		font-family: var(--font-monospace);
	}
	:global(*) {
		--font-normal: 'Sarasa UI SC', 'Noto Sans', 'Avenir', 'Helvetica Neue', 'Helvetica', sans-serif;
		--font-monospace: 'Sarasa Mono SC', 'JetBrains Mono', 'Fira Code', 'Noto Sans Mono', 'Consolas',
			monospace;
	}
</style>
