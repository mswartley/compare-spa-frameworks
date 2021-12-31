<template>
  <div id="app" class="text-gray-900 mx-4 my-4 max-w-5xl lg:mx-auto">
    <nav>
      <NavButton :onClick="() => showCounter = !showCounter">{{ showCounterButtonText }}</NavButton>
      <NavButton :onClick="() => showTime = !showTime">{{ showOrHide(showTime) }} Time</NavButton>
      <NavButton :onClick="() => showJoke = !showJoke">{{ showOrHide(showJoke) }} Joke</NavButton>
    </nav>
    <main class="mt-4">
      <h1 class="text-4xl font-bold">Hello VueJS!</h1>
      <Section v-if="showCounter">
        <Counter :initial-count="0"></Counter>
      </Section>
      <Section v-if="showTime">
        <CurrentTime/>
      </Section>
      <Section v-if="showJoke">
        <Joke/>
      </Section>
      <Section>
        <Form/>
      </Section>
    </main>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import CurrentTime from "@/components/CurrentTime";
import Joke from "@/components/Joke";
import Form from "@/components/Form";
import NavButton from "@/components/NavButton";
import Section from "@/components/Section";

export default {
  name: 'App',
  components: {
    Section,
    NavButton,
    Joke,
    CurrentTime,
    Counter,
    Form
  },
  data: () => ({
    showCounter: true,
    showTime: true,
    showJoke: true,
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
