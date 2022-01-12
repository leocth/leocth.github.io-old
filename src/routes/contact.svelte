<script lang="ts">
	import Header from '$lib/header.svelte';
	import Links from './_links.svelte';
	import BotsPlsGoAway from '$lib/bots_pls_go_away.svelte';
</script>

<Header>
	<h1>contact</h1>
	<Links />
</Header>
<ul>
	<li>
		Obviously I'm on
		<a href="https://github.com/leocth">GitHub</a>.
	</li>
	<li>
		I use Discord a lot, and here's an
		<a href="https://discord.gg/NeNfePzCx8">invite</a>
		to my cozy hideout, just for you. <span class="joking">(Not really)</span>
	</li>
	<li>
		I upload videos occasionally on
		<a href="https://youtube.com/channel/UCfVDQlFd1pGiNfjFdG-Gamw">YouTube</a>
		and
		<a href="https://space.bilibili.com/401096522">Bilibili</a>.
	</li>
	<li>
		If you wish to contact me by email, the address's
		<BotsPlsGoAway>
			<code>leocth31@gmail.com</code>
		</BotsPlsGoAway>.
	</li>
	<li>
		I have a
		<a href="https://twitter.com/@leocth31">Tw*tter account</a>, but I don't use it 'cause Tw*tter's
		a shitty platform.
	</li>
	<li>
		I don't have a
		<a href="https://facebook.com">Facebook</a> nor an
		<a href="https://instagram.com">Instagram</a> account, since they're almost equally as bad.
	</li>
</ul>

<p>
	I actually have a <a href="https://linktr.ee/leocth">LinkTree</a> page containing much of the same
	links you see here. Yup, that's also an option!
</p>

<style>
	.joking {
		color: #777;
		font-weight: lighter;
		font-style: italic;
	}
</style>
