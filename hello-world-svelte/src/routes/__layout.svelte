<script>
	import '../app.css';
	import NavLink from '$lib/NavLink.svelte';
</script>

<main class="text-gray-900 mx-4 my-4 max-w-5xl lg:mx-auto">
	<div class="flex items-center">
		<h1 class="text-4xl font-bold">Hello SvelteKit!</h1>
		<nav class="ml-8 space-x-6">
			<NavLink to="/">Home</NavLink>
			<NavLink to="/simple">Simple Components</NavLink>
			<NavLink to="/jokes">Jokes</NavLink>
			<NavLink to="/forms">Forms</NavLink>
			<NavLink to="/dialogs">Dialogs</NavLink>
		</nav>
	</div>
	<div class="mt-5">
		<slot />
	</div>
</main>
