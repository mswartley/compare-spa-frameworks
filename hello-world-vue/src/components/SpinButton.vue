<template>
  <button @click.stop="onClick"
          :disabled="waiting"
          :class="[ waiting ? 'cursor-not-allowed' : 'hover:text-black hover:bg-white' ]"
          class="inline-flex items-center mx-1 border py-0 px-3 rounded-md border-black text-white bg-black"
  >
    <svg v-if="waiting" class="animate-spin h-3 w-3 -ml-1 mr-3 text-white" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    onClick: {
      type: Function,
      required: true,
    },
    waiting: Boolean,
  },
}
</script>

<style scoped>

</style>
