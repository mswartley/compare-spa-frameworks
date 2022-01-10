<template>
  <div>
    <h3 class="text-xl font-normal">This is a Form with VeeValidate</h3>
    <ValidationObserver v-slot="{ handleSubmit, reset, invalid }">
      <form @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="onReset(reset)">
        <validation-provider name="First Name" rules="required" v-slot="{ errors }">
          <div class="mt-2 grid grid-cols-5 gap-4 items-baseline">
            <label for="veeFirstName">First Name</label>
            <input id="veeFirstName" v-model="firstName" class="col-span-2 px-2 py-1 shadow-sm border text-md border-gray-300 rounded-md"/>
            <div class="col-span-2 lg:text-base text-sm text-red-500">
              {{ errors[0] }}
            </div>
          </div>
        </validation-provider>
        <validation-provider name="Last Name" rules="required|min:5" v-slot="{ errors }">
          <div class="mt-2 grid grid-cols-5 gap-4 items-baseline">
            <label for="veeLastName">Last Name</label>
            <input id="veeLastName" v-model="lastName" class="col-span-2 px-2 py-1 shadow-sm border text-md border-gray-300 rounded-md"/>
            <div class="col-span-2 lg:text-base text-sm text-red-500">
              {{ errors[0] }}
            </div>
          </div>
        </validation-provider>
        <div class="mt-2 grid grid-cols-5 gap-4 items-baseline">
          <label for="veeCheckbox">Checkbox</label>
          <div>
            <input id="veeCheckbox" type="checkbox" v-model="checkbox"/>
            <span class="ml-2">Yes?</span>
            {{ checkbox ? "Yes!" : "Sadly, no." }}
          </div>
        </div>
        <div class="mt-2 grid grid-cols-5 gap-4 items-baseline">
          <label>Checkboxes</label>
          <div>
            <input type="checkbox" id="veeJack" value="Jack" v-model="checkedNames"/>
            <label class="ml-2" for="veeJack">Jack</label><br/>
            <input type="checkbox" id="veeJohn" value="John" v-model="checkedNames"/>
            <label class="ml-2" for="veeJohn">John</label><br/>
            <input type="checkbox" id="veeMike" value="Mike" v-model="checkedNames"/>
            <label class="ml-2" for="veeMike">Mike</label><br/>
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
            <input type="radio" id="veeOne" value="One" v-model="oneOfThree"/>
            <label class="ml-2" for="veeOne">One</label><br/>
            <input type="radio" id="veeTwo" value="Two" v-model="oneOfThree"/>
            <label class="ml-2" for="veeTwo">Two</label><br/>
            <input type="radio" id="veeThree" value="Three" v-model="oneOfThree"/>
            <label class="ml-2" for="veeThree">Three</label><br/>
          </div>
          <div class="col-span-3">
            Picked: <span class="text-gray-500">{{ oneOfThree || 'None' }}</span>
          </div>
        </div>
        <validation-provider name="Select One" rules="required" v-slot="{ errors }">
          <div class="mt-2 grid grid-cols-5 gap-4 items-baseline">
            <label for="veeSelectedOne">Select One</label>
            <select id="veeSelectedOne" class="col-span-2 px-2 py-1.5 shadow-sm border text-md border-gray-300 rounded-md"
                    v-model="selectedOne">
              <option value="">Please select one</option>
              <option value="A">Letter A</option>
              <option value="B">Letter B</option>
              <option value="C">Letter C</option>
            </select>
            <div class="col-span-2 lg:text-base text-sm text-red-500">
              {{ errors[0] }}
            </div>
          </div>
        </validation-provider>
        <div class="mt-2 grid grid-cols-5 gap-4 items-baseline">
          <div class="col-start-2 col-span-4">
            <Button type="submit" :disabled="invalid">Submit</Button>
            <Button type="reset">Clear</Button>
          </div>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import Button from '@/components/Button';

export default {
  name: "VeeValidateForm",
  components: {
    ValidationObserver,
    ValidationProvider,
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
  methods: {
    onSubmit() {
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
    onReset(formResetFunc) {
      formResetFunc();
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
