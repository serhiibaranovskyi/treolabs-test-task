<template>
	<v-navigation-drawer app light v-model="toggleNavigationBar">
		<v-list>
			<v-list-item v-for="item in navigations" :key="item.title" link @click="goTo(item.router)">
				<v-list-item-icon>
					<v-icon>{{ item.icon }}</v-icon>
				</v-list-item-icon>
				<v-list-item-content>
					<v-list-item-title>{{ item.title }}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
	name: 'Aside',
	data: () => ({
		navigations: [
			{ title: 'Home', icon: 'mdi-home', router: '/' },
			{ title: 'Catalog', icon: 'mdi-folder', router: '/catalog' },
		],
	}),
	computed: {
		...mapGetters({
			isAsideLeftShow: 'aside/isAsideLeftShow',
		}),
		toggleNavigationBar: {
			get: function() {
				return this.isAsideLeftShow
			},
			set: function(status) {
				this.setAsideLeftShowStatus(status)
			},
		},
	},
	methods: {
		...mapMutations({
			setAsideLeftShowStatus: 'aside/setAsideLeftShowStatus',
		}),
		goTo(routerName) {
			if (this.$router.currentRoute.path !== routerName) {
				this.$router.push(routerName)
			}
		},
	},
}
</script>
