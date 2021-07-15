<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Counter</router-link>
        </div>
        <hr />
        <router-view />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>
