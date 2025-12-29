<script lang="ts">
	import { randomInt } from 'node:crypto';
	import { onMount } from 'svelte';

	const X = 10,
		Y = 10;
	let grid = new Array(Y).fill(new Array(X).fill(0));

	const gameTick = () => {
		for (let i = 0; i < grid.length; i++) {
			for (let j = 0; j < grid[i].length; j++) {
				const element: HTMLElement | null = document.querySelector(`#block-${i}-${j}`);
				if (!element) continue;

				let random = randomInt(255);
				if (i % 3 === 0) element.style.backgroundColor = `rgb(${random},200,220)`;
			}
		}
	};

	onMount(() => {
		let automata: HTMLElement | null = document.querySelector('#automata');

		if (!automata) return;

		automata.style.display = 'grid';
		automata.style.gridTemplateColumns = 'repeat(10, 1fr)';
		automata.style.gridTemplateRows = 'repeat(10, 1fr)';
		gameTick();
	});
</script>

<div id="automata" class="h-screen w-full">
	{#each grid as y, i}
		{#each y as x, j}
			<div id={`block-${i}-${j}`} class="bg-blue-500"></div>
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
