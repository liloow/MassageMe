<style lang="scss">
#app {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  margin-top: 8vh;
  --mm: #044169;
}



// Import Bulma's core
@import "~bulma/sass/utilities/_all";
$mm:#044169;
$mm-invert: findColorInvert($mm);
$white: #f9f9f9;
$colors:( "primary":($mm, $mm-invert));
$navbar-height: 7vh;
$navbar-item-img-max-height: 6.5vh;
$navbar-background-color:$white;
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
import Home from '@/router/Home';
import { checkUser } from '@/api/auth';
import { checkAnnounce } from '@/api/data';
import NavBar from '@/components/NavBar2.0';
import FooterVue from '@/components/FooterVue';
import HomemadeModal from '@/components/HomemadeModal';

export default {
  name: 'app',
  data() {
    return {
      dyno: null,
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
    FooterVue,
    HomemadeModal
  }
}

</script>
