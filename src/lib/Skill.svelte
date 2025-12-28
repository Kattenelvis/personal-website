<script lang="ts">
	let { logo = '', alt = '' } = $props();
</script>

<div class="skill-shadow inline-block border border-white p-4">
	<img {alt} width="40px" src={logo} />
</div>

<style>
	.skill-shadow {
		box-shadow:
			1px 1px 1px 1px rgb(0, 255, 0),
			inset 1px 1px 1px 1px rgb(0, 255, 255);
	}
</style>
