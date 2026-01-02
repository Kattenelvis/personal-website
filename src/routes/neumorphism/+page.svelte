<script>
	import NeuLogo from '$lib/NeuLogo.svelte';
</script>

<main class="blue-green-gradient min-h-screen pt-6">
	<!-- <div class="z-50 rounded-full p-12 backdrop-blur-xl"></div> -->

	<!-- <button -->
	<!-- 	class="absolute top-25 left-25 z-10 inline cursor-pointer rounded-full border-black p-40 backdrop-blur-3xl" -->
	<!-- ></button> -->

	<div class="relative m-auto max-w-250">
		<div class="ephemereal absolute top-20 right-15 rounded-full"></div>
		<!-- <div class="ephemereal-2 absolute top-[70%] left-[20%] rounded-full"></div> -->
		<!-- <button class="neu-button absolute z-20 m-auto mt-24 w-full"> Click</button> -->
		<!-- <div class="absolute top-[115px] left-0 z-0 w-full bg-purple-200 p-6"></div> -->
		<!-- <div class="polygon absolute bg-indigo-500 p-40 text-white"></div> -->

		<NeuLogo Class="z-20 right-30 top-50" width="100px" name={'NixOS'} src={'NixOS.webp'} />
		<NeuLogo Class="z-20 right-15 top-20" width="100px" name={'Arch BTW'} src={'Arch_Linux.png'} />
		<NeuLogo Class="z-20 right-55 top-15" width="100px" name={'Mint'} src={'Linux_Mint.png'} />

		<div class="neu-text">
			<div class="w-[75%] font-[Rainbow]">
				Windows 11 updates without power connection eventually lead to a corrupt operating system.
				By some recommendation from friends, I downloaded Linux Mint. It was a great learning
				experience and taught me a lot about Linux. I then moved over to Omarchy. It is hyped, but
				the hype is not wrong when one doesn't now much about Linux. It includes a lot of neat
				tools, such as Hyprland, Alacritty (now Ghostty), fzf and a lot more. Many who are used to
				Arch won't like this, and some things such as the focus on Chromium I dislike. But Omarchy
				is just the beginning. I have a NixOS installation that I will be fully customizing,
				inspired by Omarchy.
			</div>
		</div>
	</div>
</main>

<style>
	.neu-text {
		color: white;
		background: #ff2bff;
		background: linear-gradient(125deg, rgba(255, 43, 255, 1) 0%, rgba(145, 121, 212, 1) 100%);
		width: 80%;
		margin: auto;
		border-radius: 2rem;
	}

	.neu-text > div {
		backdrop-filter: blur(100px);
		padding: 1rem;
	}

	@keyframes changeColor {
		0% {
			box-shadow: 2px 2px 7rem 3rem rgb(0, 245, 130);
		}
		100% {
			box-shadow: 2px 2px 7rem 3rem rgb(0, 200, 185);
		}
	}

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
		animation: rotate 2s linear infinite;
	}

	.polygon {
		clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
	}

	.ephemereal {
		display: inline;
		border-radius: 100px;
		transition: box-shadow linear 0.2s;
		animation: changeColor 4s linear infinite alternate;
	}

	.ephemereal-2 {
		display: inline;
		border-radius: 100px;
		box-shadow: 2px 2px 22rem 8rem rgb(0, 200, 185);
		transition: box-shadow linear 0.2s;
	}

	.ephemereal:hover {
		box-shadow: 2px 2px 25rem 6rem rgb(100, 255, 200);
	}

	.blue-green-gradient {
		background: rgb(20, 70, 80);
		/* background: #2442c7; */
		/* background: linear-gradient(30deg, rgba(36, 66, 199, 1) 0%, rgba(35, 232, 97, 1) 100%); */
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

	.neu-button {
		border-radius: 50px;
		box-shadow:
			inset 4px 4px 5px 4px #bcbcbc,
			inset -4px -4px 5px 4px #ffffff;
		color: #fdfdfd;
		cursor: pointer;
		font-size: 18px;
		padding: 15px 40px;
		transition: all 0.2s ease-in-out;
		border: 2px solid rgb(206, 206, 206);
		backdrop-filter: blur(25px);
	}

	.neu-button:hover {
		box-shadow:
			inset 2px 2px 5px #bcbcbc,
			inset -2px -2px 5px #ffffff,
			2px 2px 5px #bcbcbc,
			-2px -2px 5px #ffffff;
	}

	.neu-button:focus {
		outline: none;
		box-shadow:
			inset 2px 2px 5px #bcbcbc,
			inset -2px -2px 5px #ffffff,
			2px 2px 5px #bcbcbc,
			-2px -2px 5px #ffffff;
	}
</style>
