<template>
  <div class="mt-2 border border-gray-300 shadow rounded-md p-2">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "Section",
  props: {
    show: {
      type: Boolean,
    },
  }
}
</script>

<style scoped>

</style>
