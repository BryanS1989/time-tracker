<script setup lang="ts">
import { reactive, watch, computed } from 'vue';

const props = defineProps({
    startCount: {
        type: Boolean,
        default: false,
    },
    pause: {
        type: Boolean,
        default: false,
    },
    elapsedTime: {
        type: Number,
        default: 0,
    },
});

const emit = defineEmits<{
    (event: 'timeAction', date: string): void;
}>();

const state = reactive({
    counter: 0,
    interval: 0,
    clockInTime: new Date(Date()).toISOString(),
});

watch(
    () => props.startCount,
    () => {
        console.log('[BaseTimer] [WATCH] [count]');

        let actionTime = new Date(Date()).toISOString();
        emit('timeAction', actionTime);

        if (props.startCount) {
            state.clockInTime = actionTime;
            state.counter = props.elapsedTime;
            if (state.interval === 0) {
                state.interval = window.setInterval(addSecond, 1000);
            }
        } else {
            window.clearInterval(state.interval);
            state.interval = 0;
        }
    }
);

const addSecond = () => {
    console.log('[BaseTimer] [addSecond]');
    if (!props.pause) {
        state.counter += 1;
    }
};

const elapsedTime = computed(() => {
    let timeWorked = new Date();

    timeWorked.setTime(state.counter * 1000);

    return timeWorked.toLocaleTimeString('es-ES', {
        timeZone: 'UTC',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
});

const entryTime = computed(() => {
    return new Date(state.clockInTime).toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
});
</script>

<template>
    <p class="base--timer display-flex mx-1">
        <span>{{ elapsedTime }}</span>
        <span
            v-if="props.startCount"
            class="text-secondary"
        >
            /
        </span>
        <span
            v-if="props.startCount"
            class="text-secondary"
        >
            {{ entryTime }}
        </span>
    </p>
</template>

<style>
.base--timer {
    width: 10rem;
}

@media (max-width: 768px) {
    .base--timer {
        width: 10rem;
        margin: 2px;
    }
}
</style>
