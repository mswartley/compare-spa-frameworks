<template>
  <div>
    <h3>This is a Form</h3>
    <div>
      <label htmlFor="firstName">First Name</label>
      <input name="firstName"/>
    </div>
    <div>
      <label htmlFor="lastName">Last Name</label>
      <input name="lastName"/>
    </div>
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
