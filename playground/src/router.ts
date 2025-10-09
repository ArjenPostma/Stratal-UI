import { createWebHistory, createRouter } from 'vue-router';
import HomeView from './views/HomeView.vue';
import ButtonView from './views/ButtonView.vue';
import InputView from './views/InputView.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/button', component: ButtonView },
    { path: '/input', component: InputView },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
