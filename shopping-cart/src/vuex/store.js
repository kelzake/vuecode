import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js'

Vue.use(Vuex)

const state = {
	user : {},
	disc : {},
}

const mutations = {
	isLogin (state,user) {
		state.user = user
	},
	setDisc(state,disc){
		state.disc = disc 
	}
	
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})















