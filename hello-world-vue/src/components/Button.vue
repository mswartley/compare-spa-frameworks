<template>
  <button :type="type"
          @click.stop="onClick"
          :disabled="disabled"
          :class="[ disabled ? 'cursor-not-allowed opacity-40' : 'hover:text-black hover:bg-white' ]"
          class="inline-block mx-1 border py-0 px-3 rounded-md border-black text-white bg-black">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: 'button',
    },
    onClick: {
      type: Function,
      default: () => {},
    },
    disabled: Boolean,
  },
}
</script>

<style scoped>

</style>
