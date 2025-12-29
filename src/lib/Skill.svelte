<script lang="ts">
	let { logo = '', alt = '' } = $props();
</script>

<div class="skill-shadow border border-white p-4">
	<img {alt} width="40px" src={logo} />
</div>

<style>
	.skill-shadow {
		transition: cubic-bezier(0.09, 0.79, 0.75, 1.26) 0.3s box-shadow;
		box-shadow:
			0 0 1px 1px rgb(0, 120, 0),
			inset 0 0 1px 2px rgb(0, 120, 120);
	}

	.skill-shadow:hover {
		box-shadow:
			0 0 2px 2px rgb(0, 255, 0),
			inset 0 0 10px 4px rgb(0, 255, 255);
	}
</style>
