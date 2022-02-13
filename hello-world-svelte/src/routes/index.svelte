<script context="module">
	export const prerender = true;
	import Tile from '$lib/Tile.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>

	<Tile>
		<h3 class="text-xl font-normal">Welcome to my sample SvelteKit app!</h3>
		<p class="mt-1 text-md text-gray-700 font-light">
			I've made a few components. Use the navigation links above to check them out.
		</p>
		<p class="mt-1 text-md text-gray-700 font-light">
			There is also an <a sveltekit:prefetch href="/about" class="text-blue-500 hover:border-b hover:border-blue-400">about page</a>
			that illustrates the use of the page based routing in Svelte.
		</p>
	</Tile>

</section>
