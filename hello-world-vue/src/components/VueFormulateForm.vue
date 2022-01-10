<template>
  <div>
    <h3 class="text-xl font-normal">This is a Vue Formulate Form</h3>
    <FormulateForm name="vfform" v-model="values" #default="{hasErrors}" @submit="handleSubmit">
      <FormulateInput
          type="text"
          name="firstName"
          label="First Name"
          outer-class="mt-2 grid grid-cols-5 gap-4 items-center"
          wrapper-class="col-span-3 grid grid-cols-3 gap-4"
          element-class="col-span-2"
          input-class="px-2 py-1 w-full shadow-sm border text-md border-gray-300 rounded-md"
          errors-class="col-span-2 lg:text-base text-sm text-red-500"
          validation="required"
      />
      <FormulateInput
          type="text"
          name="lastName"
          label="Last Name"
          outer-class="mt-2 grid grid-cols-5 gap-4 items-center"
          wrapper-class="col-span-3 grid grid-cols-3 gap-4"
          element-class="col-span-2"
          input-class="px-2 py-1 w-full shadow-sm border text-md border-gray-300 rounded-md"
          errors-class="col-span-2 lg:text-base text-sm text-red-500"
          validation="required"
      />
      <div class="mt-2 grid grid-cols-5 gap-4 items-baseline">
        <label>Checkbox</label>
        <FormulateInput
            type="checkbox"
            name="checkbox"
            label="Yes?"
            wrapper-class="flex"
            label-class="ml-2"
        />
        <div>{{ values.checkbox ? "Yes!" : "Sadly, no." }}</div>
      </div>
      <div class="mt-2 grid grid-cols-5 gap-4 items-baseline">
        <label>Checkboxes</label>
        <FormulateInput
            type="checkbox"
            name="checkedNames"
            :options="{Jack: 'Jack', John: 'John', Mike: 'Mike'}"
        />
        <div class="col-span-3">
          Checked names: <span class="text-gray-500">{{
            values.checkedNames.length === 0 ? 'None' : values.checkedNames.join(', ')
          }}</span>
        </div>
      </div>
      <div class="mt-2 grid grid-cols-5 gap-4 items-baseline">
        <label>Radio Buttons</label>
        <FormulateInput
            type="radio"
            name="oneOfThree"
            :options="{One: 'One', Two: 'Two', Three: 'Three'}"
        />
        <div class="col-span-3">
          Picked: <span class="text-gray-500">{{ values.oneOfThree || 'None' }}</span>
        </div>
      </div>
      <FormulateInput
          type="select"
          name="selectedOne"
          label="Select One"
          :options="{A: 'Letter A', B: 'Letter B', C: 'Letter C'}"
          placeholder="Please select one"
          outer-class="mt-2 grid grid-cols-5 gap-4 items-center"
          wrapper-class="col-span-3 grid grid-cols-3 gap-4"
          element-class="col-span-2"
          input-class="px-2 py-1 w-full shadow-sm border text-md border-gray-300 rounded-md"
          errors-class="col-span-2 lg:text-base text-sm text-red-500"
          validation="required"
      />
      <div class="mt-2 grid grid-cols-5 gap-4 items-baseline">
        <div class="col-start-2 col-span-4">
          <Button type="submit" :disabled="hasErrors">Submit</Button>
          <Button :onClick="() => handleReset()">Clear</Button>
        </div>
      </div>
    </FormulateForm>
  </div>
</template>

<script>
import Button from '@/components/Button';

export default {
  name: "VueFormulateForm",
  components: {
    Button,
  },
  data: function () {
    return {
      values: initialValues(),
    }
  },
  methods: {
    handleSubmit() {
      console.log('Submitted', JSON.stringify(this.values));
    },
    handleReset() {
      // TODO: This _should_ work, however, I am getting a TypeError
      //Error in v-on handler: "TypeError: Cannot read properties of undefined (reading 'hideErrors')"
      //TypeError: Cannot read properties of undefined (reading 'hideErrors')
      //this.$formulate.resetValidation('vfform');
      this.values = initialValues();
    }
  }
}

function initialValues() {
  return {
    firstName: '',
    lastName: '',
    checkbox: false,
    checkedNames: [],
    oneOfThree: '',
    selectedOne: '',
  };
}
</script>

<style scoped>
</style>

<style>
/* To get to the internal Vue Formulate styles, needed to not be 'scoped'. */
.formulate-input-group-item .formulate-input-wrapper {
  display: flex;
}
.formulate-input-group-item .formulate-input-wrapper .formulate-input-label {
  margin-left: 0.5rem;
}
</style>
