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
        <b-notification v-if="error" type="is-danger" has-icon>
            {{ error.message }}
        </b-notification>
        <form @submit.prevent="signup">
            <div class="form-group">
                <label> Name:
                    <input type="text" v-model="name" placeholder="Enter your full name">
                </label>
            </div>
            <div class="form-group">
                <label> Username:
                    <input type="text" v-model="username" placeholder="Enter your username">
                </label>
            </div>
            <div class="form-group">
                <label> Email:
                    <input type="text" v-model="email" placeholder="Enter your email">
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
import {
    login
} from '@/api/auth'
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
