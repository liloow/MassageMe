<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

// Import Bulma's core
@import "~bulma/sass/utilities/_all";
$orange:#ff9a58;
$orange-invert: findColorInvert($orange);
$colors:( "primary":($orange, $orange-invert));
$navbar-height: 3.7rem;
$navbar-item-img-max-height: 3.7rem;
$navbar-background-color:$orange;
// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
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
