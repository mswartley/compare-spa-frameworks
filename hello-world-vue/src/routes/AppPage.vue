<template>
  <div id="app" class="text-gray-900 mx-4 my-4 max-w-5xl lg:mx-auto">
    <div class="flex items-center">
      <h1 class="text-4xl font-bold">Hello VueJS!</h1>
      <nav class="ml-8 space-x-6">
        <app-router-link to="/">Home</app-router-link>
        <app-router-link to="/simple">Simple Components</app-router-link>
        <app-router-link to="/jokes">Jokes</app-router-link>
        <app-router-link to="/forms">Forms</app-router-link>
        <app-router-link to="/dialogs">Dialogs</app-router-link>
      </nav>
    </div>
    <div class="mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppRouterLink from '@/components/AppRouterLink'

export default {
  name: 'App',
  components: {
    'app-router-link': AppRouterLink,
  },
}
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
