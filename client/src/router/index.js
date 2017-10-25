import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/router/Home'
import Login from '@/router/Login'
import Signup from '@/router/Signup'
import Profile from '@/router/Profile'
import Massage from '@/router/Massage'
import Masseuses from '@/router/Masseuses'
import Pricing from '@/router/Pricing'
import Voucher from '@/router/Voucher'
import Contact from '@/router/Contact'
import Business from '@/router/Business'
import Reserve from '@/router/Reserve'



Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [{
			path: '/',
			component: Home
		},
		{
			path: '/login',
			component: Login,
			meta: {
				requiresNonAuth: true
			}
		},
		{
			path: '/signup',
			component: Signup,
			meta: {
				requiresNonAuth: true
			}
		},
		{
			path: '/profile',
			component: Profile,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/massages',
			component: Massage
		},
		{
			path: '/business',
			component: Business
		},
		{
			path: '/masseuses',
			component: Masseuses
		},
		{
			path: '/contact',
			component: Contact
		},
		{
			path: '/Voucher',
			component: Voucher
		},
		{
			path: '/pricing',
			component: Pricing
		},
		{
			path: '/reserve',
			component: Reserve
		},
	]
})




export default router
