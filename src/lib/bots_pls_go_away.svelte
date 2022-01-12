<!-- 
    Bots, please go as far as you (in)humanly can. The internet and I deserve better.
    Also, if you run one of these F██████ bots, I swear I will find your address
    like how you've scraped my inbox.
    F███ off.

    Anyhow.
-->
<script lang="ts">
	export let swipeProgress = 300.0;
	export let sensitivity = 6.0;

	$: shouldShowText = swipeProgress <= 0;

	function swipe(event: MouseEvent) {
		if (!shouldShowText) {
			const movX = event.movementX;
			const movY = event.movementY;
			const mag = Math.sqrt(movX * movX + movY * movY);
			if (mag > sensitivity) {
				swipeProgress -= mag;
			}
		}
	}
</script>

<span on:mousemove={swipe}>
	{#if shouldShowText}
		<slot />
	{:else}
		<code>[scrub me to see, <em>repeatedly</em>]</code>
	{/if}
</span>
