<template>
  <div>
    <h3 class="mb-1 text-xl font-normal">Counter: {{ count }}</h3>
    <Button :onClick="() => count += 1">Add 1</Button>
    <Button :onClick="() => count -= 1">Subtract 1</Button>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "Counter",
  components: {
      Button
  },
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
