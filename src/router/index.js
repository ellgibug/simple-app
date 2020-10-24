import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta';

Vue.use(VueRouter)
Vue.use(Meta);


import {inside} from './inside';
import {auth} from './auth';
import {outside} from './outside';
import {errors} from './error';

let routes = [];

for (let route of [
  ...inside,
  ...auth,
  ...outside,
  ...errors

]) {
  routes.push(route);
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
