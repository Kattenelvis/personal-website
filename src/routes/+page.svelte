<div class="gradient h-[100vh] bg-red-300">
	<h1>Welcome to SvelteKit</h1>
	<p>
		Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
	</p>

	Hello! I am Kattenelvis (or Emil)

	<!-- TODO: They all go to soundcloud, fix later -->
	<a href="https://soundcloud.com/katten-elvis" target="_blank">Soundcloud</a>
	<a href="https://soundcloud.com/katten-elvis" target="_blank">Youtube</a>
	<a href="https://soundcloud.com/katten-elvis" target="_blank">Scratch</a>
	<a href="https://soundcloud.com/katten-elvis" target="_blank">GitHub</a>
	<a href="https://soundcloud.com/katten-elvis" target="_blank">Philosophy Blog</a>

	<br />
	<form>
		<div>Contact me!</div>
		<input class="block" type="text" placeholder="Name" />
		<textarea class="mt-2 block" placeholder="Message" />
	</form>
</div>

<style>
	.gradient {
		background: #2b8eff;
		background: linear-gradient(
			180deg,
			rgba(43, 142, 255, 1) 0%,
			rgba(56, 0, 102, 1) 61%,
			rgba(24, 107, 39, 1) 85%,
			rgba(86, 227, 187, 1) 100%
		);
	}
</style>
