<script setup lang="ts">
import { reactive, watch, computed } from 'vue';
import BaseButton from '@/components/shared/BaseButton.vue';
import BaseTimer from '@/components/shared/BaseTimer.vue';
import { usetimeTrackerStore } from '@/stores/timeTracker';

const state = reactive({
    checkIn: false,
    pause: false,
    elapsedTime: 0,
});

const clockIn = () => {
    console.log('[TimeTracker] [clockIn]');
    togleCheckIn();
    state.pause = false;
    usetimeTrackerStore().clockIn();
};

const clockPause = () => {
    console.log('[TimeTracker] [clockPause]');
    toglePause();
};

const clockOut = () => {
    console.log('[TimeTracker] [clockOut]');
    console.log('Salida');
    togleCheckIn();
    usetimeTrackerStore().clockOut();
};

const registerTime = (date: string) => {
    console.log(
        `[TimeTracker] [registerTime] [${state.checkIn ? 'CheckIn' : 'CheckOut'}]: ${date}`
    );
};

const togleCheckIn = () => {
    console.log('[TimeTracker] [togleCheckIn]');
    state.checkIn = !state.checkIn;
};

const toglePause = () => {
    state.pause = !state.pause;
};

watch(
    () => usetimeTrackerStore().userStatus,
    () => {
        console.log('[ProfilePreview] [WATCH] [usetimeTrackerStore().userStatus]');
        state.checkIn = usetimeTrackerStore().userStatus === 'online';
        state.elapsedTime = usetimeTrackerStore().elapsedTime;
    }
);

const screenSize = computed(() => {
    return window.screen.availWidth;
});
</script>

<template>
    <div class="time--tracker display-flex px-1 mx-1">
        <BaseTimer
            :start-count="state.checkIn"
            :pause="state.pause"
            :elapsed-time="state.elapsedTime"
            @time-action="registerTime"
        ></BaseTimer>

        <BaseButton
            :extra-class="'button--success'"
            @click="clockIn()"
            v-if="!state.checkIn"
        >
            <span v-if="screenSize > 425">Entrar</span>
            <div v-else>
                <font-awesome-icon :icon="['fas', 'play']" />
            </div>
        </BaseButton>

        <div
            class="display-flex"
            v-else
        >
            <BaseButton
                :extra-class="'button--secondary'"
                @click="clockPause()"
            >
                <span v-if="screenSize > 425">Pausar</span>
                <div v-else>
                    <font-awesome-icon :icon="['fas', 'pause']" />
                </div>
            </BaseButton>

            <BaseButton
                :extra-class="'button--danger'"
                @click="clockOut()"
            >
                <span v-if="screenSize > 425">Salir</span>
                <div v-else>
                    <font-awesome-icon :icon="['fas', 'stop']" />
                </div>
            </BaseButton>
        </div>
    </div>
</template>
