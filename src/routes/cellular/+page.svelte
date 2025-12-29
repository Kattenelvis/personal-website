<script lang="ts">
	import { onMount } from 'svelte';

	const X = 50,
		Y = 50;
	let grid = new Array(Y).fill(new Array(X).fill(0));

	const gameTick = () => {
		for (let i = 0; i < grid.length; i++) {
			for (let j = 0; j < grid[i].length; j++) {
				const element: HTMLElement | null = document.querySelector(`#block-${i}-${j}`);
				if (!element) continue;

				let random = Math.floor(Math.random() * 200);
				element.style.backgroundColor = `rgb(${55 + random},100,210)`;
			}
		}
	};

	onMount(() => {
		let automata: HTMLElement | null = document.querySelector('#automata');

		if (!automata) return;

		automata.style.display = 'grid';
		automata.style.gridTemplateColumns = `repeat(${X}, 1fr)`;
		automata.style.gridTemplateRows = `repeat(${Y}, 1fr)`;
		setInterval(gameTick, 1000);
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
