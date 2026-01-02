<script lang="ts">
	import { onMount } from 'svelte';

	let opened = false,
		width = 0;

	const viewportInRem = () => {
		const remPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
		return window.innerWidth / remPx;
	};

	onMount(() => {
		window.addEventListener('resize', () => (width = viewportInRem()));
	});
</script>

<header class="sticky top-0 z-50 w-full">
	<nav
		class="flex flex-col items-center justify-center gap-3 bg-gray-800 p-3 text-white sm:flex-row"
	>
		<button onclick={() => (opened = !opened)} class="glassy sm:invisible">=</button>
		{#if (width < 40 && opened) || width > 40}
			<a class="glassy" href="/">Home</a>
			<a class="gradient glassy" href="/aero">Aero!</a>
			<a class="glassy bg-purple-600" href="/skills">Skills</a>
			<a class="glassy bg-green-500" href="/contact">Contact</a>
		{/if}
	</nav>
</header>

<style>
	.glassy {
		border-radius: 10px;
		display: inline;
		position: relative;
		box-shadow:
			0 0 0.5rem 0 white,
			inset 0 0 0.5rem 0 white;
		text-align: center;
		font-family: Neuropol;
		text-shadow: 0rem 0rem 0.1rem white;
		padding-left: 0.8rem;
		padding-right: 0.8rem;
		transition: box-shadow 0.1s linear;
		max-width: 200px;
	}

	.glassy:hover {
		box-shadow:
			0 0 0.7rem 0 white,
			inset 0 0 0.7rem 0 white;
	}

	.glassy:active {
		box-shadow:
			0 0 0.6rem 0 white,
			inset 0 0 0.6rem 0 white;
	}
</style>
