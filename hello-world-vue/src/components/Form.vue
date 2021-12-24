<template>
  <div>
    <h3>This is a Form</h3>
    <form @submit.prevent="handleSubmit">
      <div className="mt-2 grid grid-cols-5 gap-4 items-baseline">
        <label htmlFor="firstName">First Name</label>
        <input v-model="firstName"/> TODO: Required message
      </div>
      <div className="mt-2 grid grid-cols-5 gap-4 items-baseline">
        <label htmlFor="lastName">Last Name</label>
        <input v-model="lastName"/> TODO: Required and min length message
      </div>
      <div className="mt-2 grid grid-cols-5 gap-4 items-baseline">
        <label htmlFor="checkbox">Checkbox</label>
        <div>
          <input type="checkbox" v-model="checkbox"/>
          <span className="ml-2">Yes?</span>
          {{ checkbox ? "Yes!" : "Sadly, no." }}
        </div>
      </div>
      <div className="mt-2 grid grid-cols-5 gap-4 items-baseline">
        <label htmlFor="checkedNames">Checkboxes</label>
        <div>
          <input type="checkbox" id="jack" value="Jack" v-model="checkedNames"/>
          <label className="ml-2" htmlFor="jack">Jack</label><br/>
          <input type="checkbox" id="john" value="John" v-model="checkedNames"/>
          <label className="ml-2" htmlFor="john">John</label><br/>
          <input type="checkbox" id="mike" value="Mike" v-model="checkedNames"/>
          <label className="ml-2" htmlFor="mike">Mike</label><br/>
        </div>
        <div className="col-span-3">
          Checked names: <span className="text-gray-500">{{
            checkedNames.length === 0 ? 'None' : checkedNames.join(', ')
          }}</span>
        </div>
      </div>
      <div className="mt-2 grid grid-cols-5 gap-4 items-baseline">
        <label htmlFor="checkedNames">Radio Buttons</label>
        <div>
          <input type="radio" id="one" value="One" v-model="oneOfThree"/>
          <label className="ml-2" htmlFor="one">One</label><br/>
          <input type="radio" id="two" value="Two" v-model="oneOfThree"/>
          <label className="ml-2" htmlFor="two">Two</label><br/>
          <input type="radio" id="three" value="Three" v-model="oneOfThree"/>
          <label className="ml-2" htmlFor="three">Three</label><br/>
        </div>
        <div className="col-span-3">
          Picked: <span className="text-gray-500">{{ oneOfThree || 'None' }}</span>
        </div>
      </div>
      <div className="mt-2 grid grid-cols-5 gap-4 items-baseline">
        <label htmlFor="selectedOne">Select One</label>
        <select className="col-span-2 px-2 py-1.5 shadow-sm border text-md border-gray-300 rounded-md"
                v-model="selectedOne">
          <option disabled value="">Please select one</option>
          <option value="A">Letter A</option>
          <option value="B">Letter B</option>
          <option value="C">Letter C</option>
        </select>{{ selectedOne }}
        <div className="col-span-2 lg:text-base text-sm text-red-500">
          TODO: Required message?
        </div>
      </div>
      <div className="mt-2 grid grid-cols-5 gap-4 items-baseline">
        <div className="col-start-2 col-span-4">
          <button type="submit">Submit</button>
          <button type="reset">Clear</button>
          TODO: disable submit button when form is not valid, actual reset of model data
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data: function () {
    return {
      firstName: '',
      lastName: '',
      checkbox: false,
      checkedNames: [],
      oneOfThree: '',
      selectedOne: '',
    }
  },
  methods: {
    handleSubmit() {
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
      };
      console.log('Submitted', JSON.stringify(data));
    }
  }
}
</script>

<style scoped>

</style>
