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
import Sandbox from '@/router/Sandbox'
import { checkUser } from '@/api/auth';




Vue.use(Router)

const router = new Router({
	mode: 'history',
	linkActiveClass: 'active',
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
				requiresNonAuth: false
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
			path: '/team',
			component: Masseuses
		},
		{
			path: '/contact',
			component: Contact
		},
		{
			path: '/vouchers',
			component: Voucher
		},
		{
			path: '/pricing',
			component: Pricing,
			meta: {
				reauireAuth: true
			}
		},
		{
			path: '/reserve',
			component: Reserve
		}, {
			path: '/sandbox',
			component: Sandbox
		},
	]
})



router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth) {
		checkUser(router.app.$root);
		if (!router.app.$root.user) {
			return next({
				path: '/login',
				query: {
					redirect: encodeURIComponent(to.fullPath),
				},
			});
		}
	}

	next();
});

router.beforeEach((to, from, next) => {
	if (to.meta.requiresNonAuth) {
		checkUser(router.app.$root);
		if (router.app.$root.user) return next('/');
	}
	next();
});


export default router
