<script lang="ts">
	import { onMount } from 'svelte';

	const X = 10,
		Y = 10;
	let grid = new Array(Y).fill(new Array(X).fill(0));

	onMount(() => {
		let automata: HTMLElement | null = document.querySelector('#automata');

		if (!automata) return;

		automata.style.display = 'grid';
		automata.style.gridTemplateColumns = 'repeat(10, 1fr)';
		automata.style.gridTemplateRows = 'repeat(10, 1fr)';
	});
</script>

<div id="automata" class="h-screen w-full">
	{#each grid as y, i}
		{#each y as x, j}
			<div class="bg-blue-500"></div>
		{/each}
	{/each}
</div>

<style>
	/* .automata { */
	/* 	display: grid; */
	/* 	grid-column: repeat(1fr, var(--X)); */
	/* 	grid-row: repeat(1fr, var(--Y)); */
	/* 	width: 100vw; */
	/* } */
</style>
