<script lang="ts">
	let { href = '', logo = '', name = '' } = $props();
</script>

<div class="flex gap-2 font-bold">
	{#if logo}
		<img width="20px" src={logo} alt={`logo for ${href}`} />
	{/if}

	<a class="hover:underline" {href} target="_blank">{name}</a>
</div>
