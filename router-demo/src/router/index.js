import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import ProductPage from '@/views/Product.vue';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
    },
    {
        name: 'About',
        path: '/about',
        component: About,
    },
    {
        name: 'ProductRoute',
        path: '/product:productName',
        component: ProductPage,
        props: true,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;