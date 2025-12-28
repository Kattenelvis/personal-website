<script>
	import Skill from '$lib/Skill.svelte';
</script>

<div>
	I have a lot of technical skills I will mention here, in case anyone is interested in some
	service. Frontend I am primarily experienced as a front-end developer, I love Svelte
	<div class="inline-block">
		<img alt="svelte-logo" width="12px" src="Svelte_Logo.png" />
	</div>
	, it's probably the best front-end framework there is, only comparable to vue. I also have experience
	in React but react is kinda garbo in comparison.
</div>

<div class="flex gap-2">
	<Skill logo={'Svelte_Logo.png'} alt="Svelte Logo" />
	<Skill logo={'Vue_Logo.png'} alt="Vue Logo" />
	<Skill logo={'React_Logo.png'} alt="React Logo" />
</div>

<div class="flex flex-col gap-6">
	<div>
		When it comes to styling I know CSS, SCSS (Saas) and of course Tailwind that everyone is always
		on about. (Some more logos here)
	</div>

	<div>
		Typescript is nice. I used to hate Javascript because of all the issues with ===, but the Just
		in time compilation of many Javascript runtimes makes up for it. Typescript also makes life so
		much easier.
	</div>

	<img src="Javascript.png" width="680px" alt="Cursed Javascript" />

	<div>Linux is Awesome</div>

	<img src="Rotating_Tux.gif" width="180px" alt="Rotating Linux Penguin" />
	<div class="flex gap-2">
		<Skill logo={'NixOS.webp'} alt="NixOS Logo" />
		<Skill logo={'Linux_Mint.png'} alt="Linux Mint Logo" />
		<Skill logo={'Arch_Linux.png'} alt="Arch Logo" />
		<Skill logo={'Hyprland.png'} alt="Hyprland Logo" />
	</div>
</div>
