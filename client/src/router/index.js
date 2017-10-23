import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/router/Home'
import Login from '@/router/Login'
import Signup from '@/router/Signup'



Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
			path: '/',
			component: Home
		},
		{
			path: '/login',
			component: Login,
		},
		{
			path: '/signup',
			component: Signup,
		}
	]
})
