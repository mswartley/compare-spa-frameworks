import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'
import { extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
import App from './App.vue'
import './assets/tailwind.css'

extend('required', {
  ...required,
  message: '{_field_} is required',
});

extend('min', {
  validate(value, args) {
    return value.length >= args.length;
  },
  params: ['length'],
  message: '{_field_} must be at least {length} characters.',
});

Vue.config.productionTip = false;

Vue.use(VueFormulate);

new Vue({
  render: h => h(App),
}).$mount('#app');
