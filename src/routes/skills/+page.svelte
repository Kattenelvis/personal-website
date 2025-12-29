<script>
	import Skill from '$lib/Skill.svelte';
</script>

<main class="vaporwave flex justify-center text-gray-300">
	<div class="skill-shadow my-6 w-[70vw] max-w-250 bg-gray-800 p-6">
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
				When it comes to styling I know CSS, SCSS (Saas) and of course Tailwind that everyone is
				always on about. (Some more logos here)
			</div>

			<div>
				Typescript is nice. I used to hate Javascript because of all the issues with ===, but the
				Just in time compilation of many Javascript runtimes makes up for it. Typescript also makes
				life so much easier.
			</div>

			<img src="Javascript.png" width="680px" alt="Cursed Javascript" />

			<div>Linux is Awesome</div>

			<span
				>Windows 11 updates without power connection eventually lead to a corrupt operating system.
				By some recommendation from friends, I downloaded Linux Mint. It was a great learning
				experience and taught me a lot about Linux. I then moved over to Omarchy. It is hyped, but
				the hype is not wrong when one doesn't now much about Linux. It includes a lot of neat
				tools, such as Hyprland, Alacritty (now Ghostty), fzf and a lot more. Many who are used to
				Arch won't like this, and some things such as the focus on Chromium I dislike. But Omarchy
				is just the beginning. I have a NixOS installation that I will be fully customizing,
				inspired by Omarchy.</span
			>
			<img src="Rotating_Tux.gif" width="180px" alt="Rotating Linux Penguin" />
			<div class="flex gap-2">
				<Skill logo={'Linux_Mint.png'} alt="Linux Mint Logo" />
				<Skill logo={'Arch_Linux.png'} alt="Arch Logo" />
				<Skill logo={'Hyprland.png'} alt="Hyprland Logo" />
				<Skill logo={'NixOS.webp'} alt="NixOS Logo" />
			</div>
		</div>

		Other skills I will add later:
		<ul>
			<li>Backend</li>
			<li>Databases</li>
			<li>Formal Verification, Logic, Haskell</li>
			<li>Playwright testing and so on</li>
			<li>CI/CD, Docker stuff</li>
			<li>Python, Data Analysis, RL, AI Agents</li>
			<li>Low level (Rust, C++)</li>
			<li>Game Dev</li>
			<li>IDE's like Neovim</li>
			<li>Computer Science, Math</li>
			<li>Blockchain</li>
		</ul>
	</div>
</main>

<style>
	.skill-shadow {
		box-shadow: 0 0 2rem 0.3rem indigo;
	}

	.vaporwave {
		background: #ff2bff;
		background: linear-gradient(125deg, rgba(255, 43, 255, 1) 0%, rgba(145, 121, 212, 1) 100%);
	}
</style>
