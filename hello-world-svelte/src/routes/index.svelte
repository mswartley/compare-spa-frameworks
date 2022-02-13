<script context="module">
	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>Hello Svelte(Kit)!</h1>
	<div>
		<h3 class="text-xl font-normal">Welcome to my sample VueJS app!</h3>
		<p class="mt-1 text-md text-gray-700 font-light">
			I've made a few components. Use the navigation links above to check them out.
		</p>
		<p class="mt-1 text-md text-gray-700 font-light">
			There is also an <a sveltekit:prefetch href="/about" class="text-blue-500 hover:border-b hover:border-blue-400">about page</a>
			that illustrates the use of the page based routing in Svelte.
		</p>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
