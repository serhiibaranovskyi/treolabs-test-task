<template>
	<v-container>
		<v-row class="align-center">
			<v-col cols="12" sm="1">
				<span>Sort by:</span>
			</v-col>
			<v-col class="py-0" cols="12" sm="3">
				<v-overflow-btn
					:items="sortBy"
					v-model="selectedValue"
					label="Select option"
					@change="$emit('change', selectedValue)"
				></v-overflow-btn>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
export default {
	name: 'CatalogSort',
	data: () => ({
		sortBy: [
			{
				text: 'Price: low to high',
				value: 'asc',
			},
			{
				text: 'Price: high to low',
				value: 'desc',
			},
			{
				text: 'Newest items',
				value: 'news',
			},
		],
		selectedValue: null,
	}),
}
</script>
