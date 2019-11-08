const state = {
	isAsideLeftShow: false,
	isAsideRightShow: false,
}

const getters = {
	isAsideLeftShow: state => state.isAsideLeftShow,
	isAsideRightShow: state => state.isAsideRightShow,
}

const mutations = {
	setAsideLeftShowStatus(state, isAsideLeftShow) {
		state.isAsideLeftShow = isAsideLeftShow
	},
	setAsideRightShowStatus(state, isAsideRightShow) {
		state.isAsideRightShow = isAsideRightShow
	},
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
}
