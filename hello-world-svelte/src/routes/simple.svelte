<script context="module">
    export const prerender = true;
</script>

<script>
    import Counter from '$lib/Counter.svelte';
    import CurrentTime from '$lib/CurrentTime.svelte';
    import NavButton from '$lib/NavButton.svelte';
    import Tile from '$lib/Tile.svelte';

    let showCounter = true;
    let showTimer = true;
</script>

<div>
    <nav>
        <NavButton clickHandler={() => showCounter = !showCounter}>{showCounter ? 'Hide' : 'Show'} Counter</NavButton>
        <NavButton clickHandler={() => showTimer = !showTimer}>{showTimer ? 'Hide' : 'Show'} Timer</NavButton>
    </nav>
    {#if showCounter}
    <Tile>
        <Counter initialCount="5" />
    </Tile>
    {/if}
    {#if showTimer}
    <Tile>
        <CurrentTime />
    </Tile>
    {/if}
</div>
