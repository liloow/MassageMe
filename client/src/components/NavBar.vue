<style lang="css">
</style>
<template>
    <nav class="navbar">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <img src="../assets/logo.png" alt="MassageMe">
            </a>
        </div>
        <div class="navbar-menu">
            <div class="navbar-start">
                <div class="navbar-item">
                    <a class="navbar-item  is-active" href="/">
                        Home
                    </a>
                    <a class="navbar-item " href="/massages">
                        Massages
                     </a>
                    <a class="navbar-item " href="/business">
                        Massages en entreprise
                     </a>
                    <a class="navbar-item " href="/masseuses">
                        Praticiens
                     </a>
                    <a class="navbar-item " href="/vouchers">
                        Bon Cadeau
                     </a>
                    <a class="navbar-item " href="/price">
                        Tarifs
                     </a>
                    <a class="navbar-item " href="/contact">
                        Contact
                     </a>
                </div>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <a v-if="!$root.user.name" class="navbar-item " href="/login">
                    Login
                </a>
                    <a v-if="!$root.user.name" class="navbar-item " href="/signup">
                    Signup
                </a>
                    <a v-else @click.prevent="logout" class="navbar-item " href="/logout">
                    Logout
                </a>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import {
    logout
} from '@/api/auth'
export default {

    name: 'NavBar',
    data() {
        return {
            isLoggedIn: false
        }
    },
    methods: {
        logout() {
            logout(this.$root)
        }
    }
}
</script>
