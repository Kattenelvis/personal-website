<script lang="ts">
	let { href = '', logo = '' } = $props();
</script>

{#if logo}
	<img src={logo} alt={`logo for ${href}`} />
{/if}

<a {href} target="_blank">GitHub</a>
