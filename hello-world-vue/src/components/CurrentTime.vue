<template>
  <h3 class="text-xl font-normal">Current Time: {{ time.toLocaleTimeString() }}</h3>
</template>

<script>
export default {
  name: "CurrentTime",
  data: () => ({
    intervalId: null,
    time: new Date(),
  }),
  mounted() {
    this.intervalId = setInterval(() => this.time = new Date(), 1000);
    console.log(`Started intervalId ${this.intervalId}`);
  },
  beforeDestroy() {
    console.log(`Clearing intervalId ${this.intervalId}`);
    clearInterval(this.intervalId);
  }
}
</script>

<style scoped>

</style>
