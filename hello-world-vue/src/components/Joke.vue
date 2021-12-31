<template>
  <div>
    <div class="mb-2">
      <h3 class="text-xl font-normal">Okay, Here's a Joke</h3>
      <h3 class="mt-1 ml-3 text-lg font-normal text-gray-800">{{ setup }}</h3>
      <h3 class="ml-3 text-lg font-normal" :class="{ 'text-gray-500 animate-pulse': waiting }">{{ punchLine }}</h3>
    </div>
    <Button :onClick="() => fetchJoke()" :waiting="waiting">{{ waiting ? 'Wait for it...' : 'Next Joke' }}</Button>
  </div>
</template>

<script>
import Button from "@/components/SpinButton";

export default {
  name: "Joke",
  components: {
    Button,
  },
  data: () => ({
    joke: null,
    waiting: false,
  }),
  computed: {
    setup: function() {
      return this.joke ? this.joke.setup : 'Loading a joke...' ;
    },
    punchLine: function() {
      return this.joke && !this.waiting ? this.joke.delivery : 'Calculating the optimal comedic timing';
    },
  },
  methods: {
    fetchJoke() {
      this.joke = null;
      this.waiting = true;
      fetch('https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart')
          .then(response => response.json())
          .then(joke => {
            this.joke = joke;
            setTimeout(() => {
              this.waiting = false;
            }, 5000);
          });
    },
  },
  mounted() {
    this.fetchJoke();
  }
}
</script>

<style scoped>

</style>
