<template>
  <div>
    <h3 class="text-xl font-normal">This is a Form with Hand-Coded Validation</h3>
    <form @submit.prevent="handleSubmit">
      <div class="mt-2 grid grid-cols-5 gap-4 items-baseline">
        <label for="firstName">First Name</label>
        <input id="firstName" v-model="firstName" class="col-span-2 px-2 py-1 shadow-sm border text-md border-gray-300 rounded-md"/>
        <div class="col-span-2 lg:text-base text-sm text-red-500">
          {{ formErrors.firstName }}
        </div>
      </div>
      <div class="mt-2 grid grid-cols-5 gap-4 items-baseline">
        <label for="lastName">Last Name</label>
        <input id="lastName" v-model="lastName" class="col-span-2 px-2 py-1 shadow-sm border text-md border-gray-300 rounded-md"/>
        <div class="col-span-2 lg:text-base text-sm text-red-500">
          {{ formErrors.lastName }}
        </div>
      </div>
      <div class="mt-2 grid grid-cols-5 gap-4 items-baseline">
        <label for="checkbox">Checkbox</label>
        <div>
          <input id="checkbox" type="checkbox" v-model="checkbox"/>
          <span class="ml-2">Yes?</span>
          {{ checkbox ? "Yes!" : "Sadly, no." }}
        </div>
      </div>
      <div class="mt-2 grid grid-cols-5 gap-4 items-baseline">
        <label>Checkboxes</label>
        <div>
          <input type="checkbox" id="jack" value="Jack" v-model="checkedNames"/>
          <label class="ml-2" for="jack">Jack</label><br/>
          <input type="checkbox" id="john" value="John" v-model="checkedNames"/>
          <label class="ml-2" for="john">John</label><br/>
          <input type="checkbox" id="mike" value="Mike" v-model="checkedNames"/>
          <label class="ml-2" for="mike">Mike</label><br/>
        </div>
        <div class="col-span-3">
          Checked names: <span class="text-gray-500">{{
            checkedNames.length === 0 ? 'None' : checkedNames.join(', ')
          }}</span>
        </div>
      </div>
      <div class="mt-2 grid grid-cols-5 gap-4 items-baseline">
        <label>Radio Buttons</label>
        <div>
          <input type="radio" id="one" value="One" v-model="oneOfThree"/>
          <label class="ml-2" for="one">One</label><br/>
          <input type="radio" id="two" value="Two" v-model="oneOfThree"/>
          <label class="ml-2" for="two">Two</label><br/>
          <input type="radio" id="three" value="Three" v-model="oneOfThree"/>
          <label class="ml-2" for="three">Three</label><br/>
        </div>
        <div class="col-span-3">
          Picked: <span class="text-gray-500">{{ oneOfThree || 'None' }}</span>
        </div>
      </div>
      <div class="mt-2 grid grid-cols-5 gap-4 items-baseline">
        <label for="selectedOne">Select One</label>
        <select id="selectedOne" class="col-span-2 px-2 py-1.5 shadow-sm border text-md border-gray-300 rounded-md"
                v-model="selectedOne">
          <option value="">Please select one</option>
          <option value="A">Letter A</option>
          <option value="B">Letter B</option>
          <option value="C">Letter C</option>
        </select>
        <div class="col-span-2 lg:text-base text-sm text-red-500">
          {{ formErrors.selectedOne }}
        </div>
      </div>
      <div class="mt-2 grid grid-cols-5 gap-4 items-baseline">
        <div class="col-start-2 col-span-4">
          <Button type="submit" :disabled="!isFormValid">Submit</Button>
          <Button :onClick="() => handleReset()">Clear</Button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Button from '@/components/Button';

export default {
  name: "Form",
  components: {
    Button,
  },
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
  computed: {
    formErrors: function() {
      const errors = {};
      if (this.firstName === '') {
        errors.firstName = 'First Name is required.';
      }
      if (this.lastName === '') {
        errors.lastName = 'Last Name is required.';
      } else if (this.lastName.length < 5) {
        errors.lastName = 'Last Name should be at least 5 characters long.';
      }
      if (this.selectedOne === '') {
        errors.selectedOne = 'Please select something.';
      }
      return errors;
    },
    isFormValid: function() {
      return this.firstName !== '' && this.lastName.length >= 5 && this.selectedOne !== '';
    }
  },
  methods: {
    handleSubmit() {
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        checkbox: this.checkbox,
        checkedNames: this.checkedNames,
        oneOfThree: this.oneOfThree,
        selectedOne: this.selectedOne,
      };
      console.log('Submitted', JSON.stringify(data));
    },
    handleReset() {
      this.firstName = '';
      this.lastName = '';
      this.checkbox = false;
      this.checkedNames = [];
      this.oneOfThree = '';
      this.selectedOne = '';
    }
  }
}
</script>

<style scoped>

</style>
