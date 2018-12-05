import './css/main.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue';
import Vuex from 'vuex';
import store from './store/store';
import VueRouter from 'vue-router';
import navb from './components/navbar.vue';

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

let calc = require('./views/calc.vue').default

Vue.use(VueRouter)
Vue.use(Vuex)

let router = new VueRouter({
  routes: [
    { path: '/', redirect: 'calc' },
    { path: '*', redirect: '/'},
    { path: '/calc', component: calc },
  ]
})
router.replace({ path: '*', redirect: '/' })
new Vue({
        el: '#app',
        router,
        store,
        components: { navb: navb }
       

})