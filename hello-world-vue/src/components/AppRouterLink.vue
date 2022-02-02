<template>
  <router-link exact :to="to" active-class="border-b-2 px-1 py-1.5 border-black hover:border-gray-900 text-gray-900 hover:text-gray-900" class="border-b-2 px-1 py-1.5 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700">
    <slot/>
  </router-link>
</template>

<script>
export default {
  name: "AppRouterLink",
  props: {
    to: String,
  },
}
</script>

<style scoped>

</style>
