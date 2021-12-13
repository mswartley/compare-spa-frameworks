<template>
  <div>
    <h3>Counter: {{ count }}</h3>
    <button @click.stop="count += 1">&nbsp;+&nbsp;</button>
    <button @click.stop="count -= 1" :style="{marginLeft: '4px'}">&nbsp;-&nbsp;</button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: {
    initialCount: Number,
  },
  data: function() {
    return {
      count: this.initialCount,
    }
  },
}
</script>

<style scoped>

</style>
