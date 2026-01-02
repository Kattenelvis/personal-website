<script>
	import NeuLogo from '$lib/NeuLogo.svelte';
</script>

<main class="blue-green-gradient min-h-screen">
	<!-- <div class="z-50 rounded-full p-12 backdrop-blur-xl"></div> -->

	<!-- <button -->
	<!-- 	class="absolute top-25 left-25 z-10 inline cursor-pointer rounded-full border-black p-40 backdrop-blur-3xl" -->
	<!-- ></button> -->
	<!-- <div class="ephemereal absolute top-1/2 left-1/2 rounded-full"></div> -->
	<!-- <div class="ephemereal-2 absolute top-[70%] left-[20%] rounded-full"></div> -->
	<!-- <button class="neu-button absolute z-20 m-auto mt-24 w-full"> Click</button> -->
	<!-- <div class="absolute top-[115px] left-0 z-0 w-full bg-purple-200 p-6"></div> -->

	<!-- <div class="polygon absolute bg-indigo-500 p-40 text-white"></div> -->
	<NeuLogo name={'Arch BTW'} src={'Arch_Linux.png'} />
</main>

<style>
	@keyframes changeColor {
		0% {
			box-shadow: 2px 2px 22rem 8rem rgb(0, 245, 130);
		}
		100% {
			box-shadow: 2px 2px 22rem 8rem rgb(0, 200, 185);
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
		box-shadow: 2px 2px 22rem 8rem rgb(0, 245, 130);
		transition: box-shadow linear 0.2s;
		animation: changeColor 1s linear infinite alternate;
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
