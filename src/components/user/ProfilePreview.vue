<script setup lang="ts">
import { reactive, onBeforeMount } from 'vue';
import defaultProfileThumbnail from '@/assets/images/profile_thumbnail.jpg';

const state = reactive({
    name: 'User Name',
    avatar: defaultProfileThumbnail,
    status: 'offline',
});

onBeforeMount(() => {
    console.log('[ProfilePreview] [onBeforeMount]');
});
</script>

<template>
    <section class="profile--preview display-flex justify-left px-2">
        <figure class="display-flex">
            <img
                class="profile--thumbnail circle"
                :src="state.avatar"
                alt="User profile thumbnail"
            />
            <div :class="`status-${state.status} circle`"></div>
        </figure>
        <p class="profile--name text-xl text-strong mx-1">{{ state.name }}</p>
    </section>
</template>

<style>
.profile--preview {
    width: 15rem;
}

.profile--name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

figure {
    position: relative;
    display: inline-block;
}

img.profile--thumbnail {
    width: 40px;
    height: 40px;
}

div[class^='status-'] {
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    top: 0;
    right: 0;
}

@media (max-width: 425px) {
    .profile--name {
        display: none;
    }
}
</style>
