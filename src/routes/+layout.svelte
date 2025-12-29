<script lang="ts">
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<header class="fixed z-50 w-full">
	<nav class="flex gap-2 bg-gray-800 p-2 text-white">
		<a class="glassy" href="/">Home</a>
		<a class="gradient glassy" href="/aero">Fruity!</a>
		<a class="glassy bg-purple-600" href="/skills">Skills!</a>
	</nav>
</header>

{@render children()}
<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>
			{locale}
		</a>
	{/each}
</div>

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
	}
</style>
