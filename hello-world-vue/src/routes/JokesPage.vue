<template>
  <div>
    <nav>
      <nav-button :onClick="() => showJokes = !showJokes">{{ showJokes ? 'Hide' : 'Show' }} Jokes</nav-button>
    </nav>
    <tile v-if="showJokes">
      <jokes/>
    </tile>
  </div>
</template>

<script>
import Joke from "@/components/Joke";
import NavButton from "@/components/NavButton";
import Section from "@/components/Section";

export default {
  name: "JokesPage",
  components: {
    'nav-button': NavButton,
    'jokes': Joke,
    'tile': Section,
  },
  data: () => ({
    showJokes: true,
  }),
}
</script>

<style scoped>

</style>
