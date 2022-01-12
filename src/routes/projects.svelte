<script lang="ts">
	import Header from '$lib/header.svelte';
	import Links from './_links.svelte';
	import ProjectCard from '$lib/project_card.svelte';
</script>

<Header>
	<h1>projects</h1>
	<Links />
</Header>

<h2 id="active">· active</h2>
<cards>
	<ProjectCard>
		<span slot="header">Rust (for absolute beginners)</span>
		<p slot="body">
			A series of recorded live tutorials where I teach absolute beginners
			<a href="https://rust-lang.org">Rust</a>, my personal favorite general-purpose language. I
			believe that Rust, contrary to its reputation of being complex and requiring previous
			programming experience to comprehend, can be taught successfully to beginners, and this series
			is my attempt at doing so.
		</p>
		<a href="/rfab/what" slot="footer">[see more]</a>
	</ProjectCard>
</cards>

<h2 id="on-hold">~ on hold</h2>
<cards>
	<ProjectCard>
		<span slot="header">
			Quinstaller
			<em>(temporary name)</em>
		</span>
		<div slot="body">
			<p>
				An all-in-one installer/interactive guide developed for RfAB that installs
				<a href="https://rust-lang.org">Rust</a>
				(via
				<code><a href="https://rustup.rs">rustup</a></code>
				),
				<a href="https://code.visualstudio.com">Visual Studio Code</a> and
				<a href="https://git-scm.com/">Git</a>.
			</p>
			<p>
				Currently based on
				<a href="https://tauri.studio">Tauri</a>,
				<a href="https://vitejs.dev">Vite.js</a> and
				<a href="https://v3.vuejs.org">Vue.js 3</a> (subject to change)
			</p>
		</div>
		<a href="https://github.com/leocth/quinstaller" slot="footer">[github (to be made public)]</a>
	</ProjectCard>
	<ProjectCard>
		<span slot="header">Tips and Tricks</span>
		<p slot="body">
			An assortment of Tips and Tricks about a variety of things, Currently mostly about Minecraft
			modding with
			<a href="https://quiltmc.org">QuiltMC</a> and/or
			<a href="https://fabricmc.net">FabricMC</a>.
		</p>
		<a href="https://github.com/leocth/tips-and-tricks" slot="footer">[github]</a>
	</ProjectCard>
</cards>

<h2 id="inactive">- inactive</h2>
<cards>
	<ProjectCard>
		<span slot="header">Gravity Guns</span>
		<div slot="body">
			<p>A Minecraft mod that adds the Gravity Gun from Half-Life 2. Entry for ModFest 1.17.</p>
			<p>
				It only works on 1.17.x, it's buggy, it lags your computer, I had to coax it together before
				the ModFest deadline, it's horrible, use with caution.
			</p>
		</div>
		<ul slot="footer">
			<li>
				<a href="https://github.com/leocth/gravity-guns">[github]</a>
			</li>
			<li>
				<a href="https://modrinth.com/mod/gravity-guns">[modrinth]</a>
			</li>
		</ul>
	</ProjectCard>
	<ProjectCard>
		<span slot="header">Drunk Fletchin' Table</span>
		<div slot="body">
			<p>
				A Minecraft mod that adds some additional and questionable functions to the as-of-now unused
				Fletching Table.
			</p>
			<p>
				Published versions only target 1.16.x. A 1.17.x version was in the making before being
				abandoned.
			</p>
		</div>
		<ul slot="footer">
			<li>
				<a href="https://github.com/leocth/drunk-fletchin-table">[github]</a>
			</li>
			<li>
				<a href="https://www.curseforge.com/minecraft/mc-mods/drunk-fletchin-table">[curseforge]</a>
			</li>
		</ul>
	</ProjectCard>
	<ProjectCard>
		<span slot="header">RGBable</span>
		<div slot="body">
			<p>
				A Minecraft mod that adds
				<span class="faaaaaaancyyyyyyy">colorful</span> blocks.
			</p>
			<p>
				Published versions only target 1.16.x. There's a copy on my computer that works on 1.17.x
				but I kinda got lazy and never published it.
			</p>
			<p>
				<del>
					Just use
					<a href="https://modrinth.com/mod/painters-blocks">Painter's Blocks</a>
					instead, Juuz is a much more competent modder than I am lol
				</del>
			</p>
		</div>
		<ul slot="footer">
			<li>
				<a href="https://github.com/leocth/rgbable">[github]</a>
			</li>
			<li>
				<a href="https://www.curseforge.com/minecraft/mc-mods/rgbable">[curseforge]</a>
			</li>
		</ul>
	</ProjectCard>
	<ProjectCard>
		<span slot="header">Less Annoying Piglins</span>
		<div slot="body">
			<p>A small Minecraft mod that makes piglins non-aggressive after bartering.</p>
			<p>Verified to work on 1.16.x., probably also works on 1.17.x.</p>
		</div>
		<ul slot="footer">
			<li>
				<a href="https://github.com/leocth/LessAnnoyingPiglins">[github]</a>
			</li>
			<li>
				<a href="https://modrinth.com/mod/OhCCsdMD">[modrinth]</a>
			</li>
		</ul>
	</ProjectCard>
	<ProjectCard>
		<span slot="header">
			Better
			<code>rsqrt</code>
		</span>
		<p slot="body">
			An extremely small, one-mixin mod that replaces the constants Minecraft used in their
			<a href="https://en.wikipedia.org/wiki/Fast_inverse_square_root"
				>fast reciprocal square root</a
			> method, with supposedly more accurate alternatives.
		</p>
		<ul slot="footer">
			<li>
				<a href="https://github.com/leocth/better-rsqrt">[github]</a>
			</li>
			<li>
				<a href="https://modrinth.com/mod/better-rsqrt">[modrinth]</a>
			</li>
		</ul>
	</ProjectCard>
</cards>

<style scoped>
	cards {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(500px, auto));
		grid-auto-rows: minmax(100px, auto);

		gap: 30px;
		margin: 50px;
	}

	#active {
		color: rgb(104, 245, 33);
		font-family: var(--font-monospace);
	}
	#on-hold {
		color: rgb(233, 219, 23);
		font-family: var(--font-monospace);
	}
	#inactive {
		color: rgb(83, 83, 83);
		font-family: var(--font-monospace);
	}

	ul {
		display: flex;
		align-items: flex-end;
		padding: 0;
	}
	ul > li {
		display: inline-block;
		margin-right: 10px;
	}

	.faaaaaaancyyyyyyy {
		background: linear-gradient(
			to right,
			rgb(138, 10, 10),
			rgb(143, 97, 13),
			rgb(168, 168, 14),
			rgb(22, 133, 22),
			rgb(31, 31, 136),
			rgb(88, 27, 131)
		);
	}
</style>
