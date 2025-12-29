<script>
	import Cellular from '$lib/Cellular.svelte';
	import Link from '$lib/Link.svelte';
</script>

<main class="vaporwave relative min-h-screen text-gray-300">
	<div class="relative z-10 m-auto max-w-250">
		<h1 class="title-shadow w-full pt-12 text-center font-[Vorpal] text-6xl">
			Hello! I am Kattenelvis (or Emil)
		</h1>

		<div class="mt-12 flex w-full flex-col justify-between gap-6 sm:flex-row">
			<video class="m-auto" src="mysite.mp4" loop autoplay width="200px">
				<track kind="captions" />
			</video>

			<img class="m-auto" src="niko-oneshot.gif" width="200px" alt="Clippy tapping the screen" />
			<img class="m-auto" src="clippy.gif" width="200px" alt="Clippy tapping the screen" />
		</div>

		<div
			class="edge z-10 m-auto mt-12 flex w-[70%] flex-col rounded-2xl bg-blue-600 p-6 font-bold text-shadow-purple-600 text-shadow-xs"
		>
			<span>
				Hello! My name is Emil, often known as Kattenelvis online. I love philosophy, programming,
				logic, maps, tech and more. I currently work for the non-profit "association for digital
				democracy" which develops Flowback, a tool for better, more rational decision making. We're
				a non profit and Flowback is completely open source.
			</span>
			<span class="mt-4">
				This website was made in 2025. This website is not AI slop made. The website is open source,
				check out the source code here.
			</span>
		</div>

		<div class="edge m-auto mt-12 flex w-[70%] flex-col rounded-2xl bg-blue-600 p-6">
			<Link name="GitHub" href="https://github.com/kattenelvis" logo="Github.svg" />
			<Link name="Soundcloud" href="https://soundcloud.com/katten-elvis" logo="soundcloud.svg" />
			<Link name="YouTube" href="https://www.youtube.com/@kattenelvis1778" logo="YouTube.svg" />
			<Link name="Scratch" href="https://scratch.mit.edu/users/kattenelvis/" logo="scratch.svg" />
			<Link
				name="Philosophy Blog"
				href="https://thephilosophyaddict.wordpress.com/"
				logo="Phi.svg"
			/>
		</div>
	</div>
	<Cellular Class="z-0 top-0 absolute" />
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

	.title-shadow {
		text-shadow:
			3px 3px 4rem rgb(150, 100, 255),
			-3px -3px 1rem rgb(200, 200, 200);
	}
</style>
