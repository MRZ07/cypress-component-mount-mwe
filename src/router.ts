import Vue from 'vue';
import VueRouter from 'vue-router';
import Counter from './pages/Counter.vue';

Vue.use(VueRouter);

const routes = [
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
