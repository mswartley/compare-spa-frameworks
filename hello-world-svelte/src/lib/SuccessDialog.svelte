<script>
    import Button from '$lib/Button.svelte'
    import { Icon, Check } from "svelte-hero-icons";

    export let open = false;
    export let closeHandler;

    function handleWindowKeyUp(event) {
        if (event.key === 'Escape') {
            open = false;
        }
    }
</script>

<!--
  -- Note that the "Esc" key handling is very simple here. The 'tabindex="0" enables the div to get focus
  -- events, which allows the 'v-on:keyup.esc="onClose" to work. The limitation is that the component needs
  -- to have focus (either by a click on the background or by 'tab') in order to see that the "Esc" key was pressed.
  -->
{#if open}
<div on:keyup={handleWindowKeyUp} tabindex="0" class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen">
        <!-- Use 'v-on' to set up a click handler so that clicking on the background closes the dialog as well. -->
        <div on:click={closeHandler} class="fixed inset-0 bg-gray-500 opacity-75"></div>
        {{ /* This element is to trick the browser into centering the modal contents. */ }}
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="relative border border-gray-400 bg-white rounded-lg max-w-sm mx-auto px-4 pt-5 pb-4">
            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <Icon src={Check} class="h-6 w-6 text-green-600" aria-hidden="true" />
            </div>
            <div class="mt-3 text-center sm:mt-5">
                <div class="text-lg leading-6 font-semibold text-gray-900">
                    Something Succeeded!
                </div>
                <p class="mt-2 text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
                </p>
            </div>
            <div class="mt-4 text-center">
                <Button clickHandler={closeHandler}>Close</Button>
            </div>
        </div>
    </div>
</div>
{/if}
