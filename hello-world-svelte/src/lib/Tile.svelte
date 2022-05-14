<script>
    export let show = true;
</script>

{#if show }
<div class="mt-2 border border-gray-300 shadow rounded-md p-2">
    <slot></slot>
</div>
{/if}
