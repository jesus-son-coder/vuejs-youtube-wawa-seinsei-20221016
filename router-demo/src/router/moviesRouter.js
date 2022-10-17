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

const movieRouter = createRouter({
    history: createWebHistory(),
    routes,
});

export default movieRouter;