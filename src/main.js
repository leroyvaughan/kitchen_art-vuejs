import PureCss from 'purecss';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import { store } from './store/index.js';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  store,
  components: { PureCss },
  render: h => h(App)
}).$mount('#app')

