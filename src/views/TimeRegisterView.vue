<script setup lang="ts">
import TimeTracker from '../components/TimeTracker.vue';
import ProfilePreview from '@/components/user/ProfilePreview.vue';
</script>

<template>
    <main class="display-flex p-3">
        <section class="wrapper display-flex rounded p-2 py-1">
            <TimeTracker />

            <ProfilePreview></ProfilePreview>
        </section>
    </main>
</template>
