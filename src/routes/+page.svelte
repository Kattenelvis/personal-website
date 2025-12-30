<script>
	import Cellular from '$lib/Cellular.svelte';
	import Link from '$lib/Link.svelte';
</script>

<main class="cell-bg-color-match relative min-h-screen pb-6 text-gray-300">
	<div class="pointer-events-none relative z-10 m-auto max-w-250">
		<h1
			class="title-shadow w-full pt-12 text-center font-[Vorpal] text-2xl sm:text-4xl md:text-6xl"
		>
			Hello! I am Kattenelvis (or Emil)
		</h1>

		<div
			class="edge pointer-events-auto m-auto mt-12 flex w-[90%] flex-col rounded-2xl bg-blue-600 p-4 font-bold text-shadow-purple-600 text-shadow-xs sm:w-[80%] sm:p-6 md:w-[70%]"
		>
			<span>
				Hello! My name is Emil, often known as Kattenelvis online. I love philosophy, programming,
				logic, maps, tech and more. I currently work for the non-profit "Association for Digital
				Democracy" where I'm currently developing Flowback, a tool for better, more rational
				decision making. We're a non profit and Flowback is completely open source.
			</span>
			<span class="mt-4">
				This website was made in 2025. This website is not AI slop made. The website is open source,
				check out the source code <a
					class="hover:underline"
					href="https://github.com/Kattenelvis/personal-website"
					target="_blank">here.</a
				>
			</span>
		</div>

		<div
			class="edge pointer-events-auto m-auto mt-12 flex w-[70%] flex-col rounded-2xl bg-blue-600 p-6"
		>
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

		<div class="my-12 flex w-full flex-col justify-between gap-6 sm:flex-row">
			<video class="pointer-events-auto m-auto" src="mysite.mp4" loop autoplay width="200px">
				<track kind="captions" />
			</video>

			<img
				class="pointer-events-auto m-auto"
				src="niko-oneshot.gif"
				width="200px"
				alt="Clippy tapping the screen"
			/>
			<img
				class="pointer-events-auto m-auto"
				src="clippy.gif"
				width="200px"
				alt="Clippy tapping the screen"
			/>
		</div>
	</div>
	<Cellular Class="z-0 top-0 absolute bottom-0" />
</main>

<style>
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

	.cell-bg-color-match {
		background: rgb(255, 100, 210);
	}
</style>
