<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;

	import Tile from '$lib/Tile.svelte';
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<section>
	<Tile>
		<h3 class="text-xl font-normal">About Hello SvelteKit!</h3>
		<p class="mt-2 text-md text-gray-700 font-light">
			This app contains components that illustrate everything that I have learned about SvelteKit so far.
			The page based routing in Svelte allows you to go back via this
			<a sveltekit:prefetch href="/" class="text-blue-500 border-blue-400 hover:border-b">link to the home page</a>,
			<i>or</i> by using the back button of your browser.
		</p>
		<p class="mt-2 text-md text-gray-700 font-light">
			This "about" page is purely static HTML, with no client-side interactivity needed.
			Because of that, no JavaScript is loaded. Try viewing the page's source, or opening the devtools
			network panel and reloading.
		</p>
		<p class="mt-2 text-md text-gray-700 font-light">
			The <a sveltekit:prefetch href="/todos" class="text-blue-500 border-blue-400 hover:border-b">TODOs</a>
			page illustrates SvelteKit's data loading and form handling. Try using it with JavaScript disabled!
		</p>
	</Tile>
</section>

