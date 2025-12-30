<main class="blue-green-gradient min-h-screen">
	<!-- <div class="z-50 rounded-full p-12 backdrop-blur-xl"></div> -->

	<div
		class="absolute top-25 left-25 inline rounded-full border-black p-40 backdrop-blur-3xl"
	></div>
	<div class="ephemereal absolute top-1/2 left-1/2 rounded-full"></div>
	<div class="ephemereal-2 absolute top-[70%] left-[20%] rounded-full"></div>
</main>

<style>
	.ephemereal {
		display: inline;
		border-radius: 100px;
		box-shadow: 2px 2px 22rem 8rem rgb(0, 245, 130);
		transition: box-shadow linear 0.2s;
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
</style>
