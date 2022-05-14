<script context="module">
    export const prerender = true;
    import Joke from '$lib/Joke.svelte';
    import NavButton from '$lib/NavButton.svelte';
    import Tile from '$lib/Tile.svelte';
</script>

<script>
    let showJoke = true;
</script>

<div>
    <nav>
        <NavButton clickHandler={() => showJoke = !showJoke}>{showJoke ? 'Hide' : 'Show'} Joke</NavButton>
    </nav>
    <Tile show={showJoke}>
        <Joke/>
    </Tile>
</div>
