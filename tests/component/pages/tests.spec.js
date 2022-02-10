import '@cypress/vue/dist/support';
import {mount} from '@cypress/vue';
import {createLocalVue} from '@vue/test-utils';
import VueRouter from 'vue-router';
import Counter from '../../../src/pages/Counter.vue';
import router from '../../../src/router';

describe('Tests', () => {
    it('Counter should show initial value passed as route parameter', () => {
        const localVue = createLocalVue();
        localVue.use(VueRouter);

        const initialCounterValue = 17;

        const $route = {
            path: `/${initialCounterValue}`,
            params: {initialCounter: initialCounterValue},
        };

        router.push($route);

        mount(Counter, {
            localVue,
            router,
        });

        cy.get('.counter').contains(initialCounterValue);
    });
});
