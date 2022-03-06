<script>
    export let type = 'button';
    export let disabled = false;
    export let clickHandler;
</script>

<button {type}
        {disabled}
        class={`inline-block mx-1 border py-0 px-3 rounded-md border-black text-white bg-black ${disabled ? 'cursor-not-allowed opacity-40' : 'hover:text-black hover:bg-white'}`}
        on:click={clickHandler}>
    <slot></slot>
</button>
