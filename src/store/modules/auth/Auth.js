import authApi from '@/api/auth'

const state = {
	token: localStorage.getItem('accessToken') || null,
}

const getters = {
	isLoggedIn: state => state.token !== null,
}

const actions = {
	async retrieveToken({ commit }, { userName, password }) {
		try {
			const response = await authApi.login(userName, password)
			const { token } = await response.json()
			localStorage.setItem('accessToken', token)
			commit('setToken', token)
		} catch (e) {
			console.error(e)
		}
	},
}

const mutations = {
	setToken(state, token) {
		state.token = token
	},
	logout(state) {
		state.token = null
		localStorage.removeItem('accessToken')
	},
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
}
