<template>
	<v-navigation-drawer app right light v-model="toggleNavigationBar" width="350">
		<Cart :items="selectedProductList" />
	</v-navigation-drawer>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import Cart from '../../components/cart/Cart'
export default {
	name: 'AsideRight',
	components: {
		Cart,
	},
	computed: {
		...mapGetters({
			isAsideRightShow: 'aside/isAsideRightShow',
			selectedProductList: 'products/selectedProductList',
		}),
		toggleNavigationBar: {
			get: function() {
				return this.isAsideRightShow
			},
			set: function(status) {
				this.setAsideRightShowStatus(status)
			},
		},
	},
	methods: {
		...mapMutations({
			setAsideRightShowStatus: 'aside/setAsideRightShowStatus',
		}),
	},
}
</script>
