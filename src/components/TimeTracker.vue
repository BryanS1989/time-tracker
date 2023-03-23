<script setup lang="ts">
import { reactive } from 'vue';
import BaseButton from '@/components/shared/BaseButton.vue';

const state = reactive({
    checkIn: false,
});

const clockIn = () => {
    console.log('Entrada');
    togleCheckin();
};

const clockPause = () => {
    console.log('Pausa');
};

const clockOut = () => {
    console.log('Salida');
    togleCheckin();
};

const togleCheckin = () => {
    state.checkIn = !state.checkIn;
};
</script>

<template>
    <div>
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
