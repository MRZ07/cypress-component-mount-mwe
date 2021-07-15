import {mount} from '@cypress/vue';
import '@cypress/vue/dist/support';
import Counter from '../../../src/pages/Counter.vue';

describe('Tests', () => {
    it('Counter should show initial value passed as route parameter', () => {
        const initialCounterValue = 17;

        mount(Counter, {
            mocks: {
                $route: {
                    params: {
                        initialCounter: initialCounterValue,
                    },
                },
            },
        });

        cy.contains(initialCounterValue).should('be.visible');
    });
});
