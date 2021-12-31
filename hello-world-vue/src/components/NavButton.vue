<template>
  <button @click.stop="onClick" class="inline-block mx-1 border py-0 px-3 rounded-md border-black hover:text-white hover:bg-black">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: "NavButton",
  props: {
    onClick: {
      type: Function,
      required: true,
    },
  },
  data: function() {
    return {
      count: this.initialCount,
    }
  },
}
</script>

<style scoped>

</style>
