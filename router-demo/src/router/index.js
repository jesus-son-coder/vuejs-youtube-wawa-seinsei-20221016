/*
import { createRouter, createWebHistory } from "vue-router";

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import ProductPage from '@/views/Product.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
        meta: {
            title: 'Accueil'
        }
    },
    {
        name: 'About',
        path: '/about',
        component: About,
        meta: {
            title: 'A propos'
        }
    },
    {
        name: 'ProductRoute',
        path: '/product:productName',
        component: ProductPage,
        props: true,
        meta: {
            title: 'Produit'
        }
    },
    {
        name: 'NotFound',
        path: '/:pathMatch(.*)',
        component: NotFound,
        meta: {
            title: '404 Not Found'
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.afterEach((to, from) =>  {
    document.title = to.meta.title;
})

export default router;
*/

import { createRouter, createWebHistory } from "vue-router";
import Movies from '@/views/Movies.vue';
import Movie from '@/views/Movie.vue';

const routes = [
    {
        name: 'home',
        path: '/',
        component: Movies,
    },
    {
        name: 'movie',
        path: '/movie/:id',
        component: Movie,
        props: true
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;