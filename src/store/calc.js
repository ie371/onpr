export default {
	
	state:{

		// hide3:true,
		isxcalc:{
			pr_ot:0,
			pr_gvs:0,
			tipuu:'',
			tipkp:'',
			sx_ot:0,
			sx_otkr:0,
			sx_gvs:0,
			sx_gvs_dep:0,
			fuCo:0,
			qco:null,
			qmax:null,
			qgvssr:null,
			kch:2.2,
			knp:0.8,
			ktp:0.25,
			beta:1.3,
			t1:95,
			t2:70,
			t3:60,
			t4:50,
			p1:50,
			p2:40,
			p3:50,
			p4:40,
			di1:0,
			di2:0,
			di9:0,
			di3:0,
			di4:0,
			dut1:null,
			dut2:null,
			dut9:null,
			dut3:null,
			dut4:null,
			tipLo:'kl',
			tipLg:'kl',
			tipIMo:'6',
			tipIMg3:'6',
			tipIMg4:'6',
			txvL:15,
			txvZ:5,
			filo:0,
			filg:0,
			filp:0,
			selReg:'0',
			mess:[],
			indexnas:'',
			onlineKP:true,
			imagePlane:''

		},
		sbKP:{
			tipSB:0,
			lvru:30,
			lsbo:15,
			lsbg:15,
			},

		rescalc:{
			OT:{},
			gdr1:{ Gv: '',  V:'',  du_im:0 },
			gdr2:{ Gv: '',  V:'',  du_im:0 },
			gdr9:{ Gv: '',  V:'',  du_im:0 },
			gdr3:{ Gv: '',  V:'',  du_im:0 },
			gdr4:{ Gv: '',  V:'',  du_im:0 },
			Ggvs:{}
		}
	},

	getters:{
			getisxcalc: state => state.isxcalc,
			getrescalc: state => state.rescalc,
			getSbKp: state => state.sbKP,
		},

	actions:{
		change_pr_ot(context, p ){context.commit('mu_pr_ot', p)},
		change_pr_gvs(context, p ){context.commit('mu_pr_gvs', p)},
		actnum(context, q){ context.commit('munum', q) },
		actkch(context, kc ){context.commit('mukch', kc)},
		actqm(context, qs){context.commit('muqm', qs)},
		actqs(context, qm){context.commit('muqs', qm)},
		actdisotkr(context, fp){ context.commit('mudisotkr', fp) },
		actnas(context, nas){ context.commit('munas', nas) },
		tupik(context, tup){ context.commit('mutupik', tup) },
		tipuz(context, ti){ context.commit('mutipuz', ti) },
		tipkp(context, ti){ context.commit('mutipkp', ti) },
		filO(context, fo){ context.commit('mufilO', fo) },
		filG(context, fg){ context.commit('mufilG', fg) },
		truba(context, tr){ context.commit('mutruba', tr) },
		actpeR(context, W ){context.commit('mupeR', W)},
		act_ot_null(context, dtr ){context.commit('mu_ot_null', dtr)},
		act_gvs_null(context, dtr ){context.commit('mu_gvs_null', dtr)},
		actrescalc(context, ek){ context.commit('murescalc', ek) },
		actPodp(context, s){ context.commit('muPodp', s) },
		actOKP(context, s){ context.commit('muOKP', s) },
		actGVSto(context, s){ context.commit('muGVSto', s) },
		// actGVSNO(context){ context.commit('muGVSNO') },
		change_fuCo(context,p){ context.commit('mufuCo',p) },
		change_tip_im4(context,p){ context.commit('mutip_im4',p) },
	},

	mutations:{
		mu_pr_ot(state, payload){
			if(payload===0){
				state.isxcalc.qco = null;
			}
			state.isxcalc.pr_ot = payload;
		},
		mu_pr_gvs(state, payload){
			if(payload===0){
				state.isxcalc.qmax = null;
				state.isxcalc.qgvssr = null;
			}
			state.isxcalc.pr_gvs = payload;
		},
		muGVSto(state, payload){
			if(payload==='0'){
				state.isxcalc.t3 = 60;
				state.isxcalc.t4 = 50;
				state.isxcalc.sx_gvs_dep = 0;
				
			} else {
				state.isxcalc.t3 = 70;
				state.isxcalc.t4 = 40;
				
			}
			
		},
		mu_ot_null(state, payload){
			state.rescalc.OT = {};
			state.rescalc.gdr1 = { Gv:'',  V:'', du_im:0 };
			state.rescalc.gdr2 = { Gv:'',  V:'', du_im:0 };
			state.rescalc.gdr9 = { Gv:'',  V:'', du_im:0 };

			if(payload !==''){
				state.isxcalc.di1 = 0;
				state.isxcalc.di2 = 0;
				state.isxcalc.di9 = 0;
				state.isxcalc.dut1 = null;
				state.isxcalc.dut2 = null;
				state.isxcalc.dut9 = null;
			}

		},
		mu_gvs_null(state, payload){
			state.rescalc.Ggvs = {};
			state.rescalc.gdr3 = { Gv:'',  V:'', du_im:0 };
			state.rescalc.gdr4 = { Gv:'',  V:'', du_im:0 };

			if(payload !==''){
				state.isxcalc.di3 = 0;
				state.isxcalc.di4 = 0;
				state.isxcalc.dut3 = null;
				state.isxcalc.dut4 = null;
			}
		},
		mupeR(state, payload){
			if(payload.d==='t1'){
				state.rescalc.gdr1 = payload.result.gdr1;
				state.rescalc.gdr2 = payload.result.gdr2;
				state.isxcalc.di1 = payload.result.gdr1.du_im;
				state.isxcalc.di2 = payload.result.gdr2.du_im;
				state.rescalc.gdr9 = payload.result.gdr9;
				state.isxcalc.di9 = payload.result.gdr9.du_im;
				state.isxcalc.pr_ot = 0;
			}
			if(payload.d==='t3'){
				state.rescalc.gdr3 = payload.result.gdr3;
				state.rescalc.gdr4 = payload.result.gdr4;
				state.isxcalc.di3 = payload.result.gdr3.du_im;
				state.isxcalc.di4 = payload.result.gdr4.du_im;
				state.isxcalc.pr_gvs = 0;
			}
			if(payload.d==='t4'){
				state.rescalc.gdr4 = payload.result.gdr4;
				state.isxcalc.di4 = payload.result.gdr4.du_im;
				state.isxcalc.dut4 = payload.result.gdr4.du_im;
			}

		},
		mutruba(state,payload){ 
			// console.log('payload',payload.res)
			switch(payload.t){
				case 't1':
				state.isxcalc.dut1 = +payload.res;
				state.isxcalc.dut2 = +payload.res;
				break;
				case 't9':
				state.isxcalc.dut9 = payload.res;
				break;
				case 't3':
				state.isxcalc.dut3 = payload.res;
				break;
				case 't4':
				state.isxcalc.dut4 = payload.res;
				break;
			}
		},
		murescalc(state,payload){ 

			if(payload.result.gdr1){
				state.rescalc.gdr1 = payload.result.gdr1;
				state.isxcalc.di1 = payload.result.gdr1.du_im;
				state.isxcalc.dut1 = payload.result.gdr1.du_tr;
				state.rescalc.OT = payload.result.OT;

				state.rescalc.gdr2 = payload.result.gdr2;
				state.isxcalc.di2 = payload.result.gdr1.du_im;
				state.isxcalc.dut2 = payload.result.gdr2.du_tr;


				state.rescalc.gdr9 = payload.result.gdr9;
				state.isxcalc.di9 = payload.result.gdr9.du_im;
				state.isxcalc.dut9 = payload.result.gdr9.du_tr;
			} 
			// else { state.isxcalc.pr_ot = 0;}
			if(payload.result.gdr3){
				state.rescalc.gdr3 = payload.result.gdr3;
				state.isxcalc.di3 = payload.result.gdr3.du_im;
				state.isxcalc.dut3 = payload.result.gdr3.du_tr;
				state.rescalc.Ggvs = payload.result.Ggvs;

				state.rescalc.gdr4 = payload.result.gdr4;
				state.isxcalc.di4 = payload.result.gdr4.du_im;
				state.isxcalc.dut4 = payload.result.gdr4.du_tr;
				state.rescalc.Ggvs = payload.result.Ggvs;
				// if(){state.isxcalc.pr_gvs = 0}
			} 
			// else { state.isxcalc.pr_gvs = 0;}
		},
		mukch(state, payload){
			state.isxcalc.qmax = null;
			state.isxcalc.qgvssr = null;
		},
		muqm(state, payload){
			if(payload<=0){ 
				state.isxcalc.qmax = null
				state.isxcalc.sx_gvs_dep = 0; 
	 
			} else { 
				if(payload>10){payload = payload/100;}
				state.isxcalc.qgvssr = payload
				state.isxcalc.qmax = (payload * (state.isxcalc.kch)).toFixed(6);
				// state.isxcalc.sx_gvs = 0;
			}
		},
		muqs(state, payload){
			if(payload<=0){ state.isxcalc.qgvssr = null 
				state.isxcalc.sx_gvs_dep = 0;

			} else { 

				if(payload>10){payload = payload/100;}
				state.isxcalc.qmax = payload;
				state.isxcalc.qgvssr = (payload / (state.isxcalc.kch)).toFixed(6);
				state.isxcalc.sx_gvs = 0;
			}
		},
		mudisotkr(state,payload){ 
			state.isxcalc.sx_otkr = payload;
		},
		muPodp(state,payload){ 
			state.isxcalc.sx_ot = payload;
			// if(payload == 0){ 
				state.isxcalc.filp = payload;
			//  }
		},
		munum(state,payload){ 
			if(payload>10){payload = payload/100;
				state.isxcalc.qco = payload;
			}
			// state.isxcalc.qco = payload;
			
		},
		munas(state,payload){ 
			state.isxcalc.mess = payload;
			if(payload=='') {state.isxcalc.indexnas =''}else{ 
			state.isxcalc.indexnas = payload[0].item; }
		},
		mutupik(state,payload){ 
			// console.log('payload',payload)
			state.isxcalc.sx_gvs = payload;
			if(payload===1){
				// console.log('tupik')

			state.rescalc.gdr4 = { Gv:'',  V:'', du_im:0 };
			state.isxcalc.dut4 = null;} 
		
		},
		mutipuz(state,payload){ state.isxcalc.tipuu = payload; },
		mutipkp(state,payload){ state.isxcalc.tipkp = payload; },
		mufilO(state,payload){ state.isxcalc.filo = payload; },
		mufilG(state,payload){ state.isxcalc.filg = payload; },
		muOKP(state,payload){ state.isxcalc.onlineKP = payload; },
		mufuCo(state,payload){ state.isxcalc.fuCo = payload; },
		mutip_im4(state,payload){ state.isxcalc.tipIMg4 = payload; },

	}

}