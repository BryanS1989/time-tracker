<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <header>
        <h1>Time Tracker</h1>
        <nav>
            <RouterLink to="/">Registro de Tiempo</RouterLink>
        </nav>
    </header>

    <RouterView />
</template>

<style scoped></style>
