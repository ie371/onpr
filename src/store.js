import Vue from 'vue';
import Vuex from 'vuex';
import userModule from './store/user'
import generalModule from './store/general'
import rekv from './store/rekv'
import calcModule from './store/calc';
Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
	  userModule,
	  generalModule,
	  rekv,
	  calcModule

	}
	})
	