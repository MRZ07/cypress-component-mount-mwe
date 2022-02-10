import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Counter from './pages/Counter.vue';

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Counter',
        component: Counter,
    },
    {
        path: '/:initialCounter',
        name: 'CounterWithInitialCounter',
        component: Counter,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
