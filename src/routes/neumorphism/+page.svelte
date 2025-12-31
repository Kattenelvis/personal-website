<main class="blue-green-gradient min-h-screen">
	<!-- <div class="z-50 rounded-full p-12 backdrop-blur-xl"></div> -->

	<div
		class="absolute top-25 left-25 z-10 inline rounded-full border-black p-40 backdrop-blur-3xl"
	></div>
	<div class="ephemereal absolute top-1/2 left-1/2 rounded-full"></div>
	<div class="ephemereal-2 absolute top-[70%] left-[20%] rounded-full"></div>
	<button class="neu-button z-20 m-auto mt-24 w-full">Click</button>
	<div class="absolute top-[120px] left-0 z-0 w-full bg-red-400 p-6"></div>
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
		backdrop-filter: blur(250px);
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
