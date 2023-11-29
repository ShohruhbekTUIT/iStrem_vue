import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Servis from '../views/Servis.vue';
import Uslugi from '../views/Uslugi.vue';
import Contact from '../views/Contact.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
		},
		{
			path: '/about',
			name: 'About',
			component: About,
		},
		{
			path: '/servis',
			name: 'Servis',
			component: Servis,
		},
		{
			path: '/uslugi',
			name: 'Uslugi',
			component: Uslugi,
		},
		{
			path: '/contact',
			name: 'Contact',
			component: Contact,
		},
	],
});

export default router;
