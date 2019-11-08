<template>
	<v-app-bar app dark color="primary">
		<v-app-bar-nav-icon @click.stop="setAsideLeftShowStatus(!isAsideLeftShow)"></v-app-bar-nav-icon>
		<v-toolbar-title>Lite shop</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-btn icon class="mx-3" @click.stop="setAsideRightShowStatus(!isAsideRightShow)">
			<v-badge color="secondary">
				<template v-slot:badge>{{currentCountItemsInCart}}</template>
				<v-icon>mdi-cart</v-icon>
			</v-badge>
		</v-btn>
		<v-btn icon @click="handleLogoutClick()">
			<v-icon>mdi-logout</v-icon>
		</v-btn>
	</v-app-bar>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
	name: 'Header',
	computed: {
		...mapGetters({
			isAsideLeftShow: 'aside/isAsideLeftShow',
			isAsideRightShow: 'aside/isAsideRightShow',
			selectedProductList: 'products/selectedProductList',
		}),
		currentCountItemsInCart() {
			return this.selectedProductList.length
		},
	},
	methods: {
		...mapMutations({
			setAsideLeftShowStatus: 'aside/setAsideLeftShowStatus',
			setAsideRightShowStatus: 'aside/setAsideRightShowStatus',
			logout: 'auth/logout',
		}),
		async handleLogoutClick() {
			await this.logout()
			this.$router.push('/login')
		},
	},
}
</script>
