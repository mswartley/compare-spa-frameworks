<template>
  <div>
    <nav>
      <nav-button :onClick="() => showCounter = !showCounter">{{ showOrHide(showCounter) }} Counter</nav-button>
      <nav-button :onClick="() => showTime = !showTime">{{ showOrHide(showTime) }} Time</nav-button>
    </nav>
    <tile v-if="showCounter">
      <counter :initialCount="5"/>
    </tile>
    <tile v-if="showTime">
      <timer/>
    </tile>
  </div>
</template>

<script>
import Counter from "@/components/Counter";
import NavButton from "@/components/NavButton";
import Section from "@/components/Section";
import Timer from "@/components/CurrentTime";

export default {
  name: "SimplePage",
  components: {
    'counter': Counter,
    'nav-button': NavButton,
    'timer': Timer,
    'tile': Section,
  },
  data: () => ({
    showCounter: true,
    showTime: true,
  }),
  methods: {
    showOrHide: function(show) {
      return show ? 'Hide' : 'Show';
    },
  },
}
</script>

<style scoped>

</style>
