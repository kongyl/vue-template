import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'core-js/stable';
import CoreuiVue from '@coreui/vue';
import { iconsSet as icons } from './assets/icons/icons.js';

import './permission';

Vue.config.productionTip = false;
Vue.use(CoreuiVue);

new Vue({
  router,
  store,
  icons,
  render: h => h(App)
}).$mount('#app');
