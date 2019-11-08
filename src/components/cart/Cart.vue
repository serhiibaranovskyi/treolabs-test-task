<template>
	<v-list max-width="350">
		<template v-if="items.length">
			<v-subheader>Total items</v-subheader>
			<v-list-item v-for="(item, index) in items" :key="index">
				<v-list-item-avatar>
					<v-img :src="item.imageUrl"></v-img>
				</v-list-item-avatar>
				<v-list-item-content>
					<v-list-item-title>{{item.title}}</v-list-item-title>
					<v-list-item-subtitle>{{item.description}}</v-list-item-subtitle>
				</v-list-item-content>
				<v-badge class="primary mx-3">
					<template v-slot:badge>{{item.qty}}</template>
				</v-badge>
				<v-btn icon class="mx-3" @click.stop="removeItem(item.id)">
					<v-icon>mdi-close-circle</v-icon>
				</v-btn>
			</v-list-item>
		</template>
		<template v-else>
			<v-subheader>Cart is empty, please add some product</v-subheader>
		</template>
	</v-list>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
	name: 'Cart',
	props: {
		items: {
			type: Array,
			default: [],
		},
	},
	methods: {
		...mapMutations({
			removeItem: 'products/removeItemFromSelectedProductList',
		}),
	},
}
</script>
