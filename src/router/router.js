import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from '../store'
import AppIndex from '../pages/AppIndex'
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Login from '../pages/Login'

Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
	{
		path: '/',
		name: 'appIndex',
		component: AppIndex,
		redirect: '/home',
		meta: { requiresAuth: true },
		children: [
			{
				path: '/home',
				name: 'home',
				component: Home,
			},
			{
				path: '/catalog',
				name: 'catalog',
				component: Catalog,
			},
		],
	},
	{
		path: '/login',
		name: 'login',
		component: Login,
		meta: { requiresVisitor: true },
	},
]

const router = new VueRouter({
	routes,
})

router.beforeEach((to, from, next) => {
	const isLoggedIn = store.getters['auth/isLoggedIn']
	const redirectWhen = (cond, to) => next(cond ? to : void 0)

	switch (true) {
		case to.matched.some(record => record.meta.requiresAuth):
			redirectWhen(!isLoggedIn, { name: 'login' })
			break
		case to.matched.some(record => record.meta.requiresVisitor):
			redirectWhen(isLoggedIn, { name: 'home' })
			break
		default:
			next()
	}
})

export default router
