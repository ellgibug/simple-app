import Vue from 'vue'
import App from './App.vue'
import Skeleton from 'vue-loading-skeleton';
import router from './router'
import {store} from './store'
import axios from 'axios';

import "./styles/index.scss"

require('dotenv').config();

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

Vue.config.productionTip = false;

Vue.use(Skeleton)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
