<template>
	<v-card light>
		<v-img height="200px" :src="imageUrl" />
		<v-card-title>
			<slot name="title">default title</slot>
		</v-card-title>
		<v-card-text>
			<slot name="description">default description</slot>
		</v-card-text>
		<v-card-text>
			Price:
			<slot name="price">0</slot>$
		</v-card-text>
		<slot name="btn" />
	</v-card>
</template>
<script>
export default {
	name: 'Product',
	props: {
		imageUrl: {
			type: String,
			default: null,
			required: false,
		},
	},
}
</script>
