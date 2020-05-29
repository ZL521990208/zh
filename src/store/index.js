import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		token: '111',
		baseUrl: 'http://localhost:8080/api',
		user: {
			id: 1,
			nickname: '王庆媛',
			avatar: 'https://kkkksslls.oss-cn-beijing.aliyuncs.com/avatar/f809ee03-cc77-4831-bf6e-a51ba4d1717d.png'
		}
	},
	mutations: {
		setToken(state, data) {
			state.token = data;
		},
		setUser(state, data) {
			state.user = data;
		}
	},
	actions: {},
	modules: {}

})