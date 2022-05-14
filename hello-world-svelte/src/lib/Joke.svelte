<script context="module">
    export const prerender = true;
    import {onMount, onDestroy} from "svelte";
    import SpinButton from '$lib/SpinButton.svelte';
</script>

<script>
    let joke;
    let waiting = false;
    let timerId;

    function fetchJoke() {
        joke = null;
        waiting = true;
        fetch('https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart')
            .then(response => response.json())
            .then(json => {
                joke = json;
                timerId = setTimeout(() => waiting = false, 5000);
            });
    }

    onMount(async () => {
        fetchJoke();
    });

    onDestroy(async () => {
        clearTimeout(timerId);
    })
</script>

<div>
    <div class="mb-2">
        <h3 class="text-xl font-normal">Okay, Here's a Joke</h3>
        <h3 class="mt-2 ml-3 text-lg font-normal text-gray-800">{joke ? joke.setup : 'Loading a joke...'}</h3>
        <h3 class={`ml-3 text-lg font-medium${waiting ? ' text-gray-500 animate-pulse' : ''}`}>{joke && !waiting ? joke.delivery : 'Calculating the optimal comedic timing'}</h3>
    </div>
    <SpinButton clickHandler={() => fetchJoke()} waiting={waiting}>{waiting ? 'Wait for it...' : 'Next Joke'}</SpinButton>
</div>
