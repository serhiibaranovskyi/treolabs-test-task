<template>
	<v-container>
		<v-row>
			<v-col cols="12" sm="4" v-for="product in products" :key="product.id">
				<Product :imageUrl="product.imageUrl">
					<template v-slot:title>{{ product.title }}</template>
					<template v-slot:description>{{ product.description }}</template>
					<template v-slot:price>{{ product.price }}</template>
					<template v-slot:btn>
						<v-card-actions>
							<v-btn
								class="btn-buy"
								color="blue white--text"
								@click.stop="handleBuyClick($event, product)"
							>Buy</v-btn>
						</v-card-actions>
					</template>
				</Product>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
import { mapMutations } from 'vuex'
import Product from './../product/Product'
export default {
	name: 'ProductList',
	components: {
		Product,
	},
	props: {
		products: {
			type: Array,
			default: [],
			required: false,
		},
	},
	methods: {
		...mapMutations({
			addItemToSelectedProductList: 'products/addItemToSelectedProductList',
		}),
		handleBuyClick(event, product) {
			this.addItemToSelectedProductList(product)
		},
	},
}
</script>
