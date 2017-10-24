<template>
  <div class="container">
    <form @submit.prevent="login">
      <div class="form-group">
        <label> Username:
          <input type="text" v-model="username" placeholder="Enter your username">
        </label>
      </div>
      <div class="form-group">
        <label> Password:
          <input type="password" v-model="password" placeholder="Enter your password">
        </label>
      </div>
      <div class="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
import { login } from '@/api/auth'
export default {
  name: 'Login',
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    login() {
      login(this.username, this.password, this.$root).then(data => {

        this.$router.push('/')
      })
    }
  }
}

</script>
