<template>
  <div>
    <h3>Setup</h3>
    <p>{{ setup }}</p>
    <h3>Punch Line</h3>
    <p>{{ punchLine }}</p>
    <button @click.stop="fetchJoke" :disabled="!joke || waiting">Next Joke</button>
  </div>
</template>

<script>
export default {
  name: "Joke",
  data: () => ({
    joke: null,
    waiting: false,
  }),
  computed: {
    setup: function() {
      return this.joke ? this.joke.setup : 'Loading a joke...' ;
    },
    punchLine: function() {
      return this.joke && !this.waiting ? this.joke.delivery : 'Wait for it...';
    }
  },
  methods: {
    fetchJoke() {
      this.joke = null;
      fetch('https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart')
          .then(response => response.json())
          .then(joke => {
            this.waiting = true;
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
