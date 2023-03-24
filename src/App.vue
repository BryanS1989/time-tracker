<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { onBeforeMount } from 'vue';
import { usetimeTrackerStore } from './stores/timeTracker';

onBeforeMount(() => {
    console.log('[APP] [onBeforeMount]');

    usetimeTrackerStore().getWorkEntries();
});
</script>

<template>
    <header>
        <h1 class="my-2">Time Tracker</h1>
        <nav>
            <RouterLink to="/">Registro de Tiempo</RouterLink>
        </nav>
    </header>

    <RouterView />
</template>

<style scoped></style>
