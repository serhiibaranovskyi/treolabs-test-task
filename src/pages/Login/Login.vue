<template>
	<v-content>
		<v-container fluid fill-height>
			<v-layout align-center justify-center>
				<v-flex xs12 sm8 md4>
					<v-card class="elevation-12">
						<v-toolbar color="primary" dark flat>
							<v-toolbar-title>Login form</v-toolbar-title>
						</v-toolbar>
						<v-card-text>
							<v-form>
								<v-text-field
									v-model="userName"
									label="Login"
									name="login"
									prepend-icon="mdi-account"
									type="text"
								></v-text-field>
								<v-text-field
									v-model="password"
									id="password"
									label="Password"
									name="password"
									prepend-icon="mdi-lock"
									type="password"
								></v-text-field>
							</v-form>
						</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn color="primary" @click="login()">Login</v-btn>
						</v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</v-content>
</template>
<script>
import { mapActions } from 'vuex'
export default {
	name: 'Login',
	data: () => ({
		userName: null,
		password: null,
	}),
	methods: {
		...mapActions({
			retrieveToken: 'auth/retrieveToken',
		}),
		async login() {
			await this.retrieveToken({userName: this.userName, password: this.password})
			this.$router.push('/')
		},
	},
}
</script>
