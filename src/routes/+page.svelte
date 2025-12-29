<script>
	import Link from '$lib/Link.svelte';
</script>

<main class="vaporwave min-h-screen pb-12 text-gray-300">
	<div class="m-auto max-w-250">
		<h1 class="w-full pt-12 text-center font-[Vorpal] text-6xl">
			Hello! I am Kattenelvis (or Emil)
		</h1>

		<div class="mt-12 flex w-full flex-col justify-between gap-6 sm:flex-row">
			<video class="m-auto" src="mysite.mp4" loop autoplay width="200px">
				<track kind="captions" />
			</video>

			<img class="m-auto" src="niko-oneshot.gif" width="200px" alt="Clippy tapping the screen" />
			<img class="m-auto" src="clippy.gif" width="200px" alt="Clippy tapping the screen" />
		</div>
		<div class="edge m-auto mt-12 flex w-[70%] flex-col rounded-2xl bg-blue-700 p-6">
			<Link href="https://github.com/kattenelvis" logo="github.svg" />
			<a href="https://github.com/kattenelvis" target="_blank">GitHub</a>
			<a href="https://soundcloud.com/katten-elvis" target="_blank">Soundcloud</a>
			<a href="https://www.youtube.com/@kattenelvis1778" target="_blank">Youtube</a>
			<a href="https://scratch.mit.edu/users/kattenelvis/" target="_blank">Scratch</a>
			<a href="https://thephilosophyaddict.wordpress.com/" target="_blank">Philosophy Blog</a>
		</div>
	</div>
</main>

<style>
	.vaporwave {
		background: #ff2bff;
		background: linear-gradient(125deg, rgba(255, 43, 255, 1) 0%, rgba(145, 121, 212, 1) 100%);
	}

	.edge {
		box-shadow:
			rgba(255, 43, 255, 1) 0 0 2rem 0.2rem,
			inset rgba(145, 121, 212, 1) 0 0 1rem 0.2rem;
	}
</style>
