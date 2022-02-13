<script>
    import { page } from '$app/stores';
    export let to;
</script>

<a class="border-b-2 px-1 py-1.5 {$page.url.pathname === to ? 'border-black text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}"
   sveltekit:prefetch href="{to}"><slot></slot>
</a>
