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

  // mounted() {
  //   let vm = this
  //   axios
  //     .post('./check.php')
  //     .then(response => {
  //       // проверка юзера 
  //       console.log(response.data)
  //       vm.$store.dispatch('STATE_CHANGED', response.data)
  //       // if (!response.data){
  //       //   console.log(response.data)
  //       // }
        


  //     });
  // }

}).$mount('#app')