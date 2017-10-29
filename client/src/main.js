// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//BUEFY

import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

//MATERIAL ICONS

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

//CALENDAR

import 'vue-event-calendar/dist/style.css' //^1.1.10, CSS has been extracted as one file, so you can easily update it.
import vueEventCalendar from 'vue-event-calendar'
Vue.use(vueEventCalendar, { locale: 'en' })

//STRIPE

import { StripeCheckout } from 'vue-stripe'



Vue.use(Buefy)
Vue.component('icon', Icon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	data: {
		user: null,
	},
	router,
	template: '<App/>',
	components: { App }
})
