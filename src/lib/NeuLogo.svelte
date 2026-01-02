<script lang="ts">
	let { Class = '', src = '', name = '', width = '200px' } = $props();
</script>

<div class={`neu-logo absolute ${Class} rounded-full`}>
	{#if src}
		<img {width} {src} alt={`logo for ${name}`} class="rounded-full" />
	{/if}

	<div
		class="rotating absolute top-1/2 left-1/2 -translate-1/2 rounded-full border-l-2 border-white p-15"
	></div>
</div>

<style>
	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(180deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.rotating {
		animation: rotate 3s linear infinite;
	}

	.neu-logo {
		box-shadow:
			inset 0 0 0 0 #bcbcbc,
			4px 4px 15px 4px #bcbcbc,
			-4px -4px 5px 4px #ffffff;
		transition: box-shadow 0.2s ease-in-out;
		color: #fdfdfd;
		cursor: pointer;
		backdrop-filter: blur(25px);
	}

	.neu-logo:hover {
		box-shadow:
			inset 4px 4px 5px 4px #bcbcbc,
			4px 4px 5px 4px #bcbcbc,
			-4px -4px 15px 4px #ffffff;
		color: #fdfdfd;
		cursor: pointer;
		backdrop-filter: blur(25px);
	}
</style>
