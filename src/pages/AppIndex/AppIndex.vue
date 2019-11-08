<template>
	<v-container>
		<Header />
		<Aside />
		<router-view />
		<AsideRight />
		<Footer />
	</v-container>
</template>
<script>
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Aside from '../../components/aside/Aside'
import AsideRight from '../../components/asideRight/AsideRight'
export default {
	name: 'AppIndex',
	components: {
		Header,
		Footer,
		Aside,
		AsideRight,
	},
}
</script>
