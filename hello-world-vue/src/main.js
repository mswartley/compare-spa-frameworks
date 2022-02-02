import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'
import VueRouter from 'vue-router'
import { extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
import App from './App.vue'
import AboutPage from "@/routes/AboutPage";
import AppPage from "@/routes/AppPage";
import DialogsPage from "@/routes/DialogsPage";
import FormsPage from "@/routes/FormsPage";
import HomePage from "@/routes/HomePage";
import JokesPage from "@/routes/JokesPage";
import SimplePage from "@/routes/SimplePage";
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
Vue.use(VueRouter);

const routes = [
  { path: '/',
    component: AppPage,
    children: [
      { path: '', component: HomePage },
      { path: 'simple', component: SimplePage },
      { path: 'jokes', component: JokesPage },
      { path: 'forms', component: FormsPage },
      { path: 'dialogs', component: DialogsPage },
    ],
  },
  { path: '/about', component: AboutPage },
];

const router = new VueRouter({
  routes, // shorthand for `routes: routes`
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
