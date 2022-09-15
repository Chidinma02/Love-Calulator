import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios';

import withUUID from "vue-uuid";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'

import router from './router'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(axios)
// Vue.use(withUUID)
// Vue.use(withUUID)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
new Vue({
  router,withUUID,
  render: h => h(App)
}).$mount('#app')
