<script context="module">
    export const prerender = true;
    import NavButton from '$lib/NavButton.svelte';
    import SuccessDialog from '$lib/SuccessDialog.svelte';
</script>

<script>
    let showDialog = false;
</script>

<div>
    <nav>
        <NavButton clickHandler={() => showDialog = !showDialog}>{showDialog ? 'Hide' : 'Show'} Dialog</NavButton>
    </nav>
    <SuccessDialog open={showDialog} closeHandler={() => showDialog = false}/>
</div>
