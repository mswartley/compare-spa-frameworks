<template>
  <div id="app">
    <h1>Hello VueJS!</h1>
    <button @click.stop="showCounter = !showCounter">{{ showCounterButtonText }}</button>
    <button :style="{marginLeft: '4px'}" @click.stop="showTime = !showTime">{{ this.showOrHide(showTime) }} Time</button>
    <template v-if="showCounter">
      <hr/>
      <Counter :initial-count="13"></Counter>
    </template>
    <template v-if="showTime">
      <hr/>
      <CurrentTime/>
    </template>
    <hr/>
    <Joke/>
    <hr/>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import CurrentTime from "@/components/CurrentTime";
import Joke from "@/components/Joke";

export default {
  name: 'App',
  components: {
    Joke,
    CurrentTime,
    Counter
  },
  data: () => ({
    showCounter: true,
    showTime: true,
  }),
  computed: {
    showCounterButtonText: function () {
      return this.showCounter ? 'Hide Counter' : 'Show Counter';
    },
  },
  methods: {
    showOrHide: function(show) {
      return show ? 'Hide' : 'Show';
    },
  },
}
</script>

<style>
.timer-btn {
  margin-left: 4px;
}
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
