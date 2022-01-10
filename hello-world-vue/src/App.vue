<template>
  <div id="app" class="text-gray-900 mx-4 my-4 max-w-5xl lg:mx-auto">
    <nav>
      <nav-button :onClick="() => showCounter = !showCounter">{{ showCounterButtonText }}</nav-button>
      <nav-button :onClick="() => showTime = !showTime">{{ showOrHide(showTime) }} Time</nav-button>
      <nav-button :onClick="() => showJoke = !showJoke">{{ showOrHide(showJoke) }} Joke</nav-button>
    </nav>
    <main class="mt-4">
      <h1 class="text-4xl font-bold">Hello VueJS!</h1>
      <tile v-if="showCounter">
        <counter :initial-count="0"></counter>
      </tile>
      <tile v-if="showTime">
        <current-time/>
      </tile>
      <tile v-if="showJoke">
        <joke/>
      </tile>
      <tile>
        <manual-form/>
      </tile>
      <tile>
        <vee-validate-form/>
      </tile>
      <tile>
        <vue-formulate-form/>
      </tile>
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
import VueFormulateForm from "@/components/VueFormulateForm";
import VeeValidateForm from "@/components/VeeValidateForm";

export default {
  name: 'App',
  components: {
    'tile': Section,
    'nav-button': NavButton,
    'joke': Joke,
    'current-time': CurrentTime,
    'counter': Counter,
    'manual-form': Form,
    'vue-formulate-form': VueFormulateForm,
    'vee-validate-form': VeeValidateForm,
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
