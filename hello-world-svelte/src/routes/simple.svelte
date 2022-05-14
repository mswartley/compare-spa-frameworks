<script context="module">
    export const prerender = true;
    import Counter from '$lib/Counter.svelte';
    import CurrentTime from '$lib/CurrentTime.svelte';
    import NavButton from '$lib/NavButton.svelte';
    import Tile from '$lib/Tile.svelte';
</script>

<script>
    let showCounter = true;
    let showTimer = true;
</script>

<div>
    <nav>
        <NavButton clickHandler={() => showCounter = !showCounter}>{showCounter ? 'Hide' : 'Show'} Counter</NavButton>
        <NavButton clickHandler={() => showTimer = !showTimer}>{showTimer ? 'Hide' : 'Show'} Timer</NavButton>
    </nav>
    <Tile show={showCounter}>
        <Counter initialCount="5" />
    </Tile>
    <Tile show={showTimer}>
        <CurrentTime />
    </Tile>
</div>
