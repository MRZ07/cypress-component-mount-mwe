import '@cypress/vue/dist/support';
import {shallowMount} from '@vue/test-utils';
import Counter from '../../../src/pages/Counter.vue';

describe('Tests', () => {
    it('Counter should show initial value passed as route parameter', () => {

        const initialCounterValue = 17;

        const $route = {
            path: '/17',
            params: {initialCounter: initialCounterValue},
        };

        const wrapper = shallowMount(Counter, {
            mocks: {
                $route,
            },
        });

        expect(wrapper.vm.$data.counter).eq(initialCounterValue);
    });
});
