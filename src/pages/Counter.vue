<template>
    <div>
        <h1>Counter</h1>
        <p>
            Counter's value is
            <span class="counter">{{ counter }}</span
            >.
        </p>
        <button @click="incrementCounter">Increment counter</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Counter extends Vue {
    counter = 0;

    incrementCounter(): void {
        this.counter += 1;
    }

    mounted(): void {
        if (this.$route.params.initialCounter) {
            this.counter = Number(this.$route.params.initialCounter);
        }
    }
}
</script>
