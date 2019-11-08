import Vue from 'vue'
import Vuex from 'vuex'
import Products from './modules/products/Products'
import Aside from './modules/aside/Aside'
import Auth from './modules/auth/Auth'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		products: {
			...Products,
		},
		aside: {
			...Aside,
		},
		auth: {
			...Auth,
		},
	},
})

if (process.env.NODE_ENV !== 'production') {
	window.store = store
}

export default store
