import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
import calc from './modules/calc.js';

export default new Vuex.Store({
	modules: { calc:calc },
	state:{
			rekv:{
				nazvPR:'',
				cod:'',
				nazvPrO:'',
				GIP:'',
				razrab:'',
				prov:'',
				tcontr:'',
				ncontr:'',
				adress:'',
				tipObj:'',
				zakazc:'',
				abon:'',
				istT:'',
				resK:'',
			},
			
			sk:{
				skor:'1.5',
			},
		},

	getters:{
			getRekv: state => state.rekv,
			getSk: state => state.sk,
		},
})