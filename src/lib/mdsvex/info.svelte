<script>
	// TypeScript support is flaky at best.

	export let title; //: string;
	export let lastUpdated; //: string;

	$: lastUpdatedDate = lastUpdated ? new Date(lastUpdated).toLocaleDateString() : 'unknown';
</script>

<header>
	<h1 id="title">{title ? title : '<untitled>'}</h1>
	<h4 class="info">last updated: {lastUpdatedDate}</h4>
</header>
<hr />
<slot />

<style>
	header {
		display: grid;
		grid-template-areas:
			'title info'
			'nav   nav '
			'hr    hr'
			'body  body';
	}
	#title {
		grid-area: title;
	}
	.info {
		grid-area: info;
		text-align: right;
	}
	/* nav {
		grid-area: nav;
		display: flex;
		justify-content: right;
		align-items: flex-end;
	}
	nav > a {
		display: inline-block;
		margin: 10px;
	} */
	hr {
		grid-area: hr;
		margin-bottom: 40px;
	}
</style>
