import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "about" */ '../views/home/index.vue'),
		meta: {
			title: '首页',
		},
	},
	{
		path: '/button',
		name: 'button',
		component: () => import(/* webpackChunkName: "about" */ '../views/button/index.vue'),
		meta: {
			title: 'Button',
		},
	},
	{
		path: '/select',
		name: 'select',
		component: () => import(/* webpackChunkName: "about" */ '../views/select/index.vue'),
		meta: {
			title: 'Select',
		},
	},
	{
		path: '/message',
		name: 'message',
		component: () => import(/* webpackChunkName: "about" */ '../views/message/index.vue'),
		meta: {
			title: 'Message',
		},
	},
	{
		path: '/roller',
		name: 'roller',
		component: () => import(/* webpackChunkName: "about" */ '../views/roller/index.vue'),
		meta: {
			title: 'Roller',
		},
	},
	{
		path: '/lazyload',
		name: 'lazyload',
		component: () => import(/* webpackChunkName: "about" */ '../views/lazyload/index.vue'),
		meta: {
			title: 'Lazyload',
		},
	},
	{
		path: '/tab',
		name: 'tab',
		component: () => import(/* webpackChunkName: "about" */ '../views/tab/index.vue'),
		meta: {
			title: 'Tab',
		},
	},
	{
		path: '/ellipsis',
		name: 'ellipsis',
		component: () => import(/* webpackChunkName: "about" */ '../views/ellipsis/index.vue'),
		meta: {
			title: 'Ellipsis',
		},
	},
	{
		path: '/tooltip',
		name: 'tooltip',
		component: () => import(/* webpackChunkName: "about" */ '../views/tooltip/index.vue'),
		meta: {
			title: 'Tooltip',
		},
	},
	{
		path: '/guide',
		name: 'guide',
		component: () => import(/* webpackChunkName: "about" */ '../views/guide/index.vue'),
		meta: {
			title: 'Guide',
		},
	},
];

const router = new VueRouter({
	// mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
