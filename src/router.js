import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import LearnView from '@/views/LearnView.vue';
import ProcessView from '@/views/ProcessView.vue';
import PricingView from '@/views/PricingView.vue';
import ContactsView from '@/views/ContactsView.vue';


const routes = [
    { path: '/', component: HomeView, name: 'home' },
    { path: '/learn', component: LearnView, name: 'learn' },
    { path: '/process', component: ProcessView, name: 'process' },
    { path: '/pricing', component: PricingView, name: 'pricing' },
    { path: '/contacts', component: ContactsView, name: 'contacts' },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;