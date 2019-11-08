<template>
	<v-content>
		<CatalogSort @change="handleSortClick" />
		<ProductList :products="productList" />
	</v-content>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import ProductList from './../../components/product-list/ProductList'
import CatalogSort from './../../components/catalog-sort/CatalogSort'
export default {
	name: 'Catalog',
	components: {
		ProductList,
		CatalogSort,
	},
	computed: {
		...mapGetters({
			productList: 'products/productList',
		}),
	},
	created() {
		this.loadProductList()
	},
	methods: {
		...mapActions({
			loadProductList: 'products/loadProductList',
		}),
		handleSortClick(param) {
			switch (param) {
				case 'asc':
					this.productList.sort((a, b) => a.price - b.price)
					break
				case 'desc':
					this.productList.sort((a, b) => b.price - a.price)
					break
				default:
					this.productList
			}
		},
	},
}
</script>
