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
    showStartTime: {
        type: Boolean,
        default: false,
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
            state.counter = 0;
            if (state.interval === 0) {
                state.interval = setInterval(addSecond, 1000);
            }
        } else {
            clearInterval(state.interval);
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
    <p>
        <span>{{ elapsedTime }}</span>
        <span
            v-if="props.startCount"
            class="text--secondary"
        >
            / {{ entryTime }}</span
        >
    </p>
</template>
