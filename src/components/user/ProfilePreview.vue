<script setup lang="ts">
import { reactive, watch } from 'vue';
import defaultProfileThumbnail from '@/assets/images/profile_thumbnail.jpg';
import { usetimeTrackerStore } from '@/stores/timeTracker';

const state = reactive({
    name: 'User Name',
    avatar: defaultProfileThumbnail,
    status: 'offline',
});

watch(
    () => usetimeTrackerStore().userStatus,
    () => {
        console.log('[ProfilePreview] [WATCH] [usetimeTrackerStore().userStatus]');
        state.status = usetimeTrackerStore().userStatus;
    }
);

watch(
    () => usetimeTrackerStore().userName,
    () => {
        console.log('[ProfilePreview] [WATCH] [usetimeTrackerStore().userName]');
        state.name = usetimeTrackerStore().userName;
    }
);
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
        <p class="profile--name text-xl text-strong mx-1 text-center text-unselectable">
            {{ state.name }}
        </p>
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
    width: 100%;
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
    border: 0.5px solid var(--black-lighter);
}

@media (max-width: 768px) {
    .profile--preview {
        width: auto;
    }

    .profile--name {
        display: none;
    }
}
</style>
