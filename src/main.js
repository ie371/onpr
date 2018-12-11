import './css/main.css';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),

  mounted() {
    let vm = this
    axios
      .post('./check.php')
      .then(response => {
        console.log('response.data', response.data)
        vm.$store.dispatch('STATE_CHANGED', response.data)
      })
      .catch(error=> {
        console.log(error);
        vm.$store.dispatch('SIGNIN', error)
      });
  }

}).$mount('#app')