<script>
	import Button from '$lib/Button.svelte';

	export let initialCount = 0; // The 'export' indicates that this is a "prop"
	let count = Number(initialCount);
	$: doubled = count * 2; // This is a "reactive declaration" - 'doubled' will always stay up to date with 'counter'
	$: { // This is a "reactive statement block (can be multiple statements)
		console.log('the count is ' + count);
	}
</script>

<div>
	<h3 class="mb-1 text-xl font-normal">Counter: {count}</h3>
	<!-- Need to do this weird thing (below) because the whitespace between elements *is*
	  -- significant, (I believe) mostly because the Button elements are "inline-block".
	  -->
	<Button clickHandler={() => count += 1}>Add 1
	</Button><Button clickHandler={() => count -= 1}>Subtract 1</Button>
</div>
