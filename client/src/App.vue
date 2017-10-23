<template>
  <div id="app">
    <nav>
      <ul>
        <li><a href="/" title="Home">Home</a></li>
        <li v-if="!$root.user"><a href="/login" title="Login">Login</a></li>
        <li v-if="!$root.user"><a href="/signup" title="Signup">Signup</a></li>
        <li v-else><a @click.prevent="logout" href="/logout" title="Lougout">Logout</a></li>
      </ul>
    </nav>
    <h1>MassageMe</h1>
  <router-view></router-view>
  </div>
</template>

<script>
import Home from '@/router/Home'
import {checkUser,logout} from '@/api/auth'
export default {
  name: 'app',
  data() {
    return {
      isLoggedIn:false
    }
  },
  methods: {
    logout() {
      logout(this.$root)
    }
  },
  created () {
    checkUser(this.$root)
      if (this.$root.user) this.isLoggedIn=true
  },
  components: {Home}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
