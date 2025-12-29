<script lang="ts">
	let { href = '', logo = '' } = $props();
</script>

<div class="flex gap-2">
	{#if logo}
		<img width="20px" src={logo} alt={`logo for ${href}`} />
	{/if}

	<a {href} target="_blank">GitHub</a>
</div>
