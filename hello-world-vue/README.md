# hello-world-vue

## Vue-CLI setup
```
$ yarn global add @vue/cli
```

Now have:
```
$ vue --version
@vue/cli 4.5.15
```

To upgrade the `@vue/cli` later:
```
$ yarn global upgrade --latest @vue/cli
```

## Project setup
```
$ vue create hello-world-vue
```
* Asked for version (2, 3, or select from individual features)
* Asked for package manager
* Told to `cd` into `hello-world-vue`

### Commands
* `yarn install` - 
* `yarn serve` - Compiles and hot-reloads for development
* `yarn build` - Compiles and minifies for production
* `yarn lint` - Lints and fixes files

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Adding Tailwind CSS
TODO

## Form Libraries

### VeeValidate
TODO

### Vue Formulate
TODO

## Client Side Routing
The "official router" seems to be the `vue-router` library. Installed via yarn:
```
$ yarn add vue-router
info Direct dependencies
└─ vue-router@3.5.3
info All dependencies
└─ vue-router@3.5.3
```
When used with a module system, must explicitly install the router via `Vue.use()`:
```javascript
// in src/main.js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter); 
```
Note that part of what `Vue.use(VueRouter)` does is enable use of the `<router-link>` and `<router-view>` tags in your templates.

### Define Your Routes
```javascript
// in src/main.js
const routes = [
  { path: '/about', component: AboutPage }, // Note that `AboutPage` is an imported Vue Compontent
  { path: '/other', component: OtherPage }, // Note that `OtherPage` is an imported Vue Compontent
];
```

### Create the Router Instance
```javascript
// in src/main.js
const router = new VueRouter({
    routes, // shorthand for `routes: routes`
});
```
### Create and Mount the Root Instance
```javascript
// in src/main.js
new Vue({
    router, // shorthand for `router: router`
    ...
}).$mount('#app');
```

### Dynamic Route Matching
Defining a route with a "dynamic segment" (which is a path that contains a colon `:`, like '/user/:id') 
will match all URLs that _start_ with '/user/' and include a value after the last slash, which will be
stored in the `id` property of the `this.$route.params` object in all components.

### Implementing the Navigation Links as Child Routes
Implementing the navigation links ('Home', 'Simple Components', 'Jokes', etc.) really changed the structure of the application. All the components and state in `App.vue` were replaced by `<router-view></router-view>`, and moved to the `routes/AppPage.vue` component.

The `AppPage.vue` component sets up the layout and contains the main heading and the `router-links` to the child routes. Here is what the router definition looks like:
```javascript
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
```
This sets up 2 "top level" routes: `/` and `/about`, and 5 child routes under `/`. It was important to include the `exact` attribute on `router-links` to the child routes so the '' child path does not _always_ match.   
