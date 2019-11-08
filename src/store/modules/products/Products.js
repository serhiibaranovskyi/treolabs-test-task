import _ from 'lodash'
import productApi from '@/api/products'

const state = {
	productList: [],
	selectedProductList: [],
}

const getters = {
	productList: state => state.productList,
	selectedProductList: state => state.selectedProductList,
}

const actions = {
	async loadProductList({ commit }) {
		try {
			const response = await productApi.fetchRecords()
			const { results } = await response.json()
			commit('setProductList', results)
		} catch (e) {
			console.error(e)
		}
	},
}

const mutations = {
	setProductList(state, productList) {
		state.productList = productList
	},
	addItemToSelectedProductList(state, selectItem) {
		state.selectedProductList.push(selectItem)
	},
	removeItemFromSelectedProductList(state, id) {
		const list = Object.assign([], state.selectedProductList)
		_.remove(list, function(item) {
			return item.id === id
		})
		state.selectedProductList = list
	},
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
}
