<template>
  <div>
    <h3>Setup</h3>
    <p>{{ setup }}</p>
    <h3>Punch Line</h3>
    <p>{{ punchLine }}</p>
    <button @click.stop="fetchJoke" :disabled="waiting">Next Joke</button>
  </div>
</template>

<script>
export default {
  name: "Joke",
  data: () => ({
    setup: '',
    punchLine: '',
    waiting: false,
  }),
  methods: {
    fetchJoke() {
      this.waiting = true;
      this.setup = 'Loading next joke...';
      this.punchLine = 'Wait for it...';
      fetch('https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart')
          .then(response => response.json())
          .then(joke => {
            this.setup = joke.setup;
            setTimeout(() => {
              this.punchLine = joke.delivery;
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
