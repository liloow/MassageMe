<template>
		<div class="container">
	<b-notification v-if="error" type="is-danger" has-icon>
      {{ error.message }}
   </b-notification>
<form @submit.prevent="signup">
	<div class="form-group">
		<label> Name: <input type="text" v-model="name" placeholder="Enter your full name"></label>
	</div>
	<div class="form-group">
		<label> Username: <input type="text" v-model="username" placeholder="Enter your username"></label>
	</div>
	<div class="form-group">
		<label> Email: <input type="text" v-model="email" placeholder="Enter your email"></label>
	</div>
	<div class="form-group">
		<label> Password: <input type="password" v-model="password" placeholder="Enter your password"></label>
	</div>
	<div class="form-group">
		<button type="submit">Submit</button>
	</div>
</form>
	</div>
</template>

<script>
import {signup} from '@/api/auth'
export default {
  name: 'Signup',
  data() {
  	return {
  		name:"",
  		username:"",
  		email:"",
  		password:"",
  		error: null,
  	}
  },
  methods: {
  	signup() {
  		signup({
  			username: this.username,
        	name: this.name,
        	password: this.password,
        	email: this.email,
  		})
  		.then(this.$router.push('/login'))
  		.catch(err => {
        this.error = err.response.data.error
        console.error('Signup err', err)
  	})
  }
}
}
</script>