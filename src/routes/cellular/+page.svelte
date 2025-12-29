<script lang="ts">
	import { deepCopy } from '$lib';
	import { onMount } from 'svelte';

	const X = 50,
		Y = 50;
	let grid = $state(new Array(Y).fill(new Array(X).fill(255)));

	const gameTick = () => {
		let newGrid = deepCopy(grid);

		for (let i = 0; i < grid.length; i++) {
			for (let j = 0; j < grid[i].length; j++) {
				const element: HTMLElement | null = document.querySelector(`#block-${i}-${j}`);
				if (!element) continue;

				let random = Math.floor(Math.random() * 500);

				const cutoff = 20;
				if (i > 0 && grid[i - 1][j] < cutoff) newGrid[i][j] = 0;
				if (i < grid.length - 1 && grid[i + 1][j] < cutoff) newGrid[i][j] = 0;
				if (j > 0 && grid[i][j - 1] < cutoff) newGrid[i][j] = 0;
				if (j < grid[i].length - 1 && grid[i][j + 1] < cutoff) newGrid[i][j] = 0;
				if (random === 0) newGrid[i][j] = 0;

				newGrid[i][j] += 10;

				element.style.backgroundColor = `rgb(${180 + newGrid[i][j]},100,210)`;
			}
		}

		grid = newGrid;
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
			<div id={`block-${i}-${j}`}></div>
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
