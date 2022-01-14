<!-- 
    Bots, please go as far as you (in)humanly can. The internet and I deserve better.
    Also, if you run one of these F██████ bots, I swear I will find your address
    like how you've scraped my inbox.
    F███ off.

    Anyhow.
-->
<script lang="ts">
	export const initialSwipeProgress = 500.0;
	export const sensitivity = {
		min: 6.0,
		max: 50.0
	};

	enum Feedback {
		ScrubMe,
		KeepGoing,
		Done
	}

	let swipeProgress = initialSwipeProgress;
	let feedback = Feedback.ScrubMe;
	$: feedback = updateFeedback(swipeProgress);

	function updateFeedback(progress: number): Feedback {
		if (swipeProgress <= 0.0) {
			return Feedback.Done;
		} else if (swipeProgress >= initialSwipeProgress) {
			return Feedback.ScrubMe;
		} else {
			return Feedback.KeepGoing;
		}
	}

	$: done = feedback == Feedback.Done;

	function swipe(event: MouseEvent) {
		if (!done) {
			const movX = event.movementX;
			const movY = event.movementY;
			const mag = Math.sqrt(movX * movX + movY * movY);
			if (mag > sensitivity.min && mag < sensitivity.max) {
				swipeProgress -= mag;
			}
		}
	}
</script>

<span on:mousemove={swipe}>
	{#if feedback == Feedback.Done}
		<slot />
	{:else if feedback == Feedback.KeepGoing}
		<code>[<em>keep going...</em>]</code>
	{:else}
		<code>[scrub me to see, <em>repeatedly</em>]</code>
	{/if}
</span>
