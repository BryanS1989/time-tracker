<script setup lang="ts">
import { reactive } from 'vue';
import BaseButton from '@/components/shared/BaseButton.vue';
import BaseTimer from '@/components/shared/BaseTimer.vue';

const state = reactive({
    checkIn: false,
    pause: false,
});

const clockIn = () => {
    console.log('[TimeTracker] [clockIn]');
    togleCheckIn();
    state.pause = false;
};

const clockPause = () => {
    console.log('[TimeTracker] [clockPause]');
    toglePause();
};

const clockOut = () => {
    console.log('[TimeTracker] [clockOut]');
    console.log('Salida');
    togleCheckIn();
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
</script>

<template>
    <div>
        <BaseTimer
            :start-count="state.checkIn"
            :pause="state.pause"
            :show-start-time="state.checkIn"
            @time-action="registerTime"
        ></BaseTimer>

        <BaseButton
            :text="'Entrar'"
            :extra-class="'button--success'"
            @click="clockIn()"
            v-if="!state.checkIn"
        >
        </BaseButton>

        <div v-else>
            <BaseButton
                :text="'Pausar'"
                :extra-class="'button--secondary'"
                @click="clockPause()"
            >
            </BaseButton>

            <BaseButton
                :text="'Salir'"
                :extra-class="'button--danger'"
                @click="clockOut()"
            >
            </BaseButton>
        </div>
    </div>
</template>
