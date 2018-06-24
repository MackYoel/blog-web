<template>
	<div class="sign-up-container text-center">
    <form class="form-signin" @submit.prevent="login">
      <h1 class="h3 mb-3 font-weight-normal">Ingresa</h1>
			<div v-if="errors" class="alert alert-warning" role="alert">
			  {{ errors }}
			</div>

      <label for="inputUsername" class="sr-only" autofocus>Username</label>
      <input type="text" id="inputUsername" v-model="user.username" class="form-control" placeholder="Username" required autofocus>

      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" v-model="user.password" id="inputPassword" class="form-control" placeholder="Password" required>

      <button class="btn btn-lg btn-primary btn-block" type="submit">Iniciar Sesión</button>
      <p class="mt-5 mb-3 text-muted">Ytec &copy; 2018</p>
    </form>
	</div>
</template>

<script>
export default {

	data () {
		return {
			user: {
				username: undefined,
				password: undefined
			},
			errors: ''
		}
	},

	methods: {
		async login () {
			try {
				await this.$auth.loginWith('local', { data: this.user })
			} catch (e) {
				console.log(e)
				if (e.response.status === 400) {
					this.errors = 'Las credenciales ingresadas son las correctas'
				} else {
					this.errors = 'Un error inesperado ocurrió intentando iniciar sesión'
				}
			}
		}
	}
}
</script>

<style scoped="">

.sign-up-container {
	color: #F2FDFF;
	height:100vh;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #101935;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
