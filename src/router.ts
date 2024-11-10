import { createRouter, createWebHistory } from 'vue-router'
import Home from '@routes/Home.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: 'Home'
		}
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('@routes/About.vue'),
		meta: {
			title: 'About'
		}
	}
]

const router = createRouter({ history: createWebHistory(), routes })

export default router