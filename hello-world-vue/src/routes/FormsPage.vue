<template>
  <div>
    <tile>
      <manual-form/>
    </tile>
    <tile>
      <vee-validate-form/>
    </tile>
    <tile>
      <vue-formulate-form/>
    </tile>
  </div>
</template>

<script>
import Form from "@/components/Form";
import Section from "@/components/Section";
import VueFormulateForm from "@/components/VueFormulateForm";
import VeeValidateForm from "@/components/VeeValidateForm";

export default {
  name: "FormsPage",
  components: {
    'manual-form': Form,
    'tile': Section,
    'vue-formulate-form': VueFormulateForm,
    'vee-validate-form': VeeValidateForm,
  },
}
</script>

<style scoped>

</style>
