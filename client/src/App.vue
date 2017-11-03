<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
<template>
    <div id="app">
        <nav-bar></nav-bar>
        <router-view></router-view>
        <footer-vue></footer-vue>
    </div>
</template>
<script>
import Home from '@/router/Home'
import {
    checkUser
} from '@/api/auth'
import {
    checkAnnounce
} from '@/api/data'
import NavBar from '@/components/NavBar'
import FooterVue from '@/components/FooterVue'
export default {
    name: 'app',
    data() {
        return {

        }
    },
    methods: {

    },
    created() {
        checkUser(this.$root)
        checkAnnounce(this.$root)
    },
    components: {
        Home,
        NavBar,
        FooterVue
    }
}
</script>
