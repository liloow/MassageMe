<style lang="css" scoped>
@import '../assets/stylesheets/formStyle.css';
.column {
    margin: 0.5rem;
}

.heading {
    margin-bottom: 1rem
}

.controls {
    padding: 0.6rem;
    justify-content: center
}

#0b4269 .userfields .controls input {
    padding: 0.5rem;
    width: 90%;
}

.static {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

</style>
<template>
    <section>
        <div class="container">
            <router-link to="/secret">
                <button type="button">protected</button>
            </router-link>
            <pre>{{$root.user}}</pre>
            <button type="button">Refresh</button>
            <form @submit.prevent="login">
                <b-field label="Username">
                    <b-input v-model="username" type="text"></b-input>
                </b-field>
                <b-field label="Password">
                    <b-input type="password" v-model="password" password-reveal>
                    </b-input>
                </b-field>
                <b-field label="Username">
                    <b-checkbox v-model="isActive" type="checkbox"></b-checkbox>
                </b-field>
                <button class="button is-block is-info is-large">Login</button>
            </form> <pre>{{sandbox}}</pre>
        </div>
    </section>
</template>
<script>
import { login } from '@/api/auth'

export default {

    name: 'Contact',

    data() {
        return {
            isActive: false,
            username: 'tom',
            password: '123',
            wot: '',
            sandbox: {

            },
            rememberMe: false,
            fetchUser: true
        }
    },
    methods: {
        login() {
            login(this.username, this.password, this.$root).then(data => {
                const redirect = decodeURIComponent(this.$route.query.redirect || '')
                this.$router.push(redirect || '/')
            })
        }
    }
}

</script>
