<header>
	<slot />
</header>
<hr />

<style>
	header {
		display: grid;
		grid-template-areas:
			'title nav'
			'hr hr';
	}
	::slotted {
		grid-area: title;
	}
	:global(links) {
		grid-area: nav;
		display: flex;
		justify-content: right;
		align-items: flex-end;
	}
	:global(links > li) {
		display: inline-block;
		margin: 10px;
	}
	hr {
		grid-area: hr;
		margin-bottom: 40px;
	}
</style>
