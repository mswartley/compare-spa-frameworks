<script>
    import {onMount, onDestroy} from 'svelte';

    let time = new Date();
    let intervalId;

    onMount(async () => {
        intervalId = setInterval(() => time = new Date(), 1000);
        console.log(`Started intervalId ${intervalId}`);
        // return (() => {
        //     console.log(`Clearing intervalId ${intervalId}`);
        //     clearInterval(intervalId);
        // });
    });
    // Note that I *should* be able to return the function to run onDestroy() (per the Svelte docs),
    // but that does not appear to be working right now. Thus the explicit onDestroy() handler below:
    onDestroy(async () => {
        console.log(`Clearing intervalId ${intervalId}`);
        clearInterval(intervalId);
    });
</script>

<h3 class="text-xl font-normal">Current Time: { time.toLocaleTimeString() }</h3>
