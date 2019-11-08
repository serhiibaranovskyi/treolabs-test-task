<template>
	<v-footer inset app dark color="primary">
		<v-spacer></v-spacer>
		<span class="white--text">&copy; {{ getCurrentYear }}</span>
	</v-footer>
</template>
<script>
export default {
	name: 'Footer',
	computed: {
		getCurrentYear() {
			return new Date().getFullYear()
		},
	},
}
</script>
