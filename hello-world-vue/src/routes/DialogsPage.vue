<template>
  <div>
    <nav>
      <nav-button :onClick="() => showDialog = !showDialog">{{ showDialog ? 'Hide' : 'Show' }} Dialog</nav-button>
    </nav>
    <success-dialog :open="showDialog" :onClose="() => showDialog = false"/>
  </div>
</template>

<script>
import NavButton from "@/components/NavButton";
import SuccessDialog from "@/components/SuccessDialog";

export default {
  name: "DialogsPage",
  components: {
    'nav-button': NavButton,
    'success-dialog': SuccessDialog,
  },
  data: () => ({
    showDialog: false,
  }),
}
</script>

<style scoped>

</style>
