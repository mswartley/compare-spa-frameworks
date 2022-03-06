<script>
    export let clickHandler; // The 'export' indicates that this is a "prop"
</script>

<button class="inline-block mx-1 border py-0 px-3 rounded-md border-black hover:text-white hover:bg-black"
        on:click={clickHandler}>
    <slot></slot>
</button>
