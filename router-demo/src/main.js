import { createApp } from 'vue';
//import App from './App.vue';
import AppMovie from './AppMovie.vue';

import router from './router';
// import movieRouter from './router/moviesRouter.js';
import store from './store';

// createApp(App).use(router).use(store).mount('#app');
// createApp(AppMovie).use(movieRouter).use(store).mount('#app');
createApp(AppMovie).use(router).use(store).mount('#app');
