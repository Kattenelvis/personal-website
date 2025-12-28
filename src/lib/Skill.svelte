<script lang="ts">
	let { logo = '', alt = '' } = $props();
</script>

<div class="inline-block border border-white p-4 shadow-md shadow-white">
	<img {alt} width="40px" src={logo} />
</div>
