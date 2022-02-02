<template>
  <tile>
    <h3 class="text-xl font-normal">Welcome to my sample VueJS app!</h3>
    <p class="mt-1 text-md text-gray-700 font-light">
      I've made a few components. Use the navigation links above to check them out.
    </p>
    <p class="mt-1 text-md text-gray-700 font-light">
      There is also an <router-link to="/about" class="text-blue-500 hover:border-b hover:border-blue-400">about page</router-link>
      that illustrates the use of client-side routing with React Router.
    </p>
  </tile>
</template>

<script>
import Section from "@/components/Section";

export default {
  name: "HomePage",
  components: {
    'tile': Section,
  },
}
</script>

<style scoped>

</style>
