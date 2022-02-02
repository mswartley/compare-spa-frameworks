<template>
  <main class="mt-4 text-gray-900 mx-4 my-4 max-w-5xl lg:mx-auto">
    <tile>
      <h3 class="text-xl font-normal">About Hello React!</h3>
      <p class="mt-1 text-md text-gray-700 font-light">
        This app contains components that illustrate everything that I have learned about React so far.
      </p>
      <p class="mt-1 text-md text-gray-700 font-light">
        The use of React Router allows you to go back via this
        <router-link to="/" class="text-blue-500 border-blue-400 hover:border-b">link to the home page</router-link>,
        <i>or</i> by using the back button of your browser.
      </p>
    </tile>
  </main>
</template>

<script>
import Section from "@/components/Section";

export default {
  name: "AboutPage",
  components: {
    'tile': Section,
  },
}
</script>

<style scoped>

</style>
