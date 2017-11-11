<style scoped="">
@import url(https://fonts.googleapis.com/css?family=Roboto:400,700);
@keyframes checked-anim {
  50% {
    width: 1500px;
    height: 900px;
  }
  100% {
    width: 100vw;
    height: auto;
    border-radius: 0;
  }
}

@keyframes not-checked-anim {
  0% {
    width: 3000px;
    height: 900px;
  }
}

li.nav,
a.nav {
  margin: 0;
  color: #ff9a58;
  font: 14pt "Roboto", sans-serif;
  font-weight: 700;
  line-height: 1.8;
  text-decoration: none;
  text-transform: none;
  list-style: none;
  outline: 0;
  display: none;
  background: #f9f9f9;
}

#menu>li:nth-child(1) {
  margin: 3vh 0 8vh;
}

a.nav:focus {
  display: block;
  color: #333;
  background-color: #f9f9f9;
  ;
  transition: all .5s;
}



#trigger,
#burger,
#burger:before,
#burger:after {
  text-align: right;
  width: 30px;
  height: 5px;
  transition: .2s ease;
  cursor: pointer;
  z-index: 3;
  position: absolute;
  top: 2.5vw;
  right: 2.5vw;
  background: #ff9a58;
}

#trigger {
  height: 25px;
  background: none;
}

#burger:before {
  content: " ";
  top: 10px;
  right: 0;
}

#burger:after {
  content: " ";
  top: 20px;
  right: 0;
}

#menu-toggle:checked+#trigger+#burger {
  top: 35px;
  transform: rotate(180deg);
  transition: transform .2s ease;
}

#menu-toggle:checked+#trigger+#burger:before {
  width: 20px;
  top: -2px;
  right: 18px;
  transform: rotate(45deg) translateX(-5px);
  transition: transform .2s ease;
}

#menu-toggle:checked+#trigger+#burger+#menu {
  animation: checked-anim 1s ease both;
}

#menu-toggle:checked+#trigger+#burger:after {
  width: 20px;
  top: 2px;
  right: 18px;
  transform: rotate(-45deg) translateX(-5px);
  transition: transform .2s ease;
}

#menu {
  position: absolute;
  text-align: rigth;
  right: 0;
  margin: 0;
  padding: 0;
  width: 9vh;
  height: 9vh;
  background-color: #f9f9f9;
  border-bottom-left-radius: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
  animation: not-checked-anim .2s both;
  transition: .2s;
  z-index: 2
}

#menu-toggle:checked+#trigger~#menu>li>a,
#menu-toggle:checked+#trigger~#menu>li {
  display: block;
}

[type="checkbox"]:not(:checked),
[type="checkbox"]:checked {
  display: none;
}

.navbar-end {
  margin-right: 5vw;
}

.navbar-start>a {
  margin-top: 1vh;
  margin-bottom: 1vh;
}

.navbar-brand {
  margin: 0 5vw;
}

.brand-burger {
  height: 10vh;
}

.is-page {
  border-bottom: solid 0.3vh black;
  font-weight: bold;
  margin-bottom: 1vh;
  margin-top: 1vh;
}

.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  border-bottom: solid 2px #fffe28;
}

</style>
<template>
  <header id="header" class="header" @keydown.esc="close($event)">
    <nav class="navbar fixed" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="../assets/img/logo/Full.svg" alt="MassageMe" class="brand">
        </router-link>
        <input type="checkbox" v-model="burgerState" id="menu-toggle" />
        <label id="trigger" for="menu-toggle" class="navbar-burger"></label>
        <label id="burger" for="menu-toggle" class="navbar-burger"></label>
        <ul id="menu" class="navbar-burger">
          <li class="nav"><img src="../assets/img/logo/Full.svg" alt="MassageMe" class="brand-burger"></li>
          <li v-for="(link, index) in navbarLinks" class="nav" @click="closeBurger">
            <router-link class="nav" :key="index" :to="link.location"> {{ link.text }}</router-link>
            <a @click.prevent="dyno='HomemadeModal'" v-if="!$root.user" class="nav">Sign In/Up</a>
            <a class="nav" @click.prevent="logout" v-if="$root.user">Logout</a>
          </li>
        </ul>
      </div>
      <!-- This checkbox is hidden -->
      <input type="checkbox" id="nav-toggle-state" hidden />
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link v-for="(link, index) in navbarLinks" :key="index" :to="link.location" :class="{'is-page': $route.path === link.location, 'navbar-item': true}"> {{ link.text }}
          </router-link>
        </div>
        <div class="navbar-end">
          <a @click.prevent="dyno='HomemadeModal'" v-if="!$root.user" class="navbar-item">Sign In/Up</a>
          <a class="navbar-item" @click.prevent="logout" v-if="$root.user">Logout</a>
        </div>
      </div>
    </nav>
    <component @close="close($event)" :is="dyno"></component>
  </header>
</template>
<script>
import { logout } from '@/api/auth';
import HomemadeModal from '@/components/HomemadeModal';

export default {
  name: 'NavBar',
  data() {
    return {
      navbarLinks: [{
          location: '/massages',
          text: 'Massages'
        },
        {
          location: '/business',
          text: 'Massages en entreprise'
        },
        {
          location: '/team',
          text: 'L\'équipe'
        },
        {
          location: '/vouchers',
          text: 'Bon cadeau'
        },
        {
          location: '/contact',
          text: 'Contact'
        }
      ],
      connectedUser: Object,
      data: null,
      keepFirst: true,
      name: '',
      selected: null,
      dyno: null,
      /*      listener: (e) => this.close(e),
       */
      burgerState: false
    }
  },
  props: {
    rule: String
  },
  mounted() {
    document.addEventListener('keyup', this.escape)
  },
  unmount() {
    document.removeEventListener('keyup', this.escape)
  },
  methods: {
    logout() {
      logout(this.$root)
      this.closeBurger()
      this.$router.push('/')
    },
    close(e) {
      this.closeBurger()
      document.getElementsByTagName('html')[0].style.height = 'auto'
      document.getElementsByTagName('html')[0].style.overflow = 'visible'
      this.dyno = null
    },
    escape(event) {
      if (event.keyCode == 27) {
        this.close()
      }
    },
    closeBurger() {
      this.burgerState = false
    }
  },

  computed: {

  },
  created() {},
  components: { HomemadeModal }
};

</script>
