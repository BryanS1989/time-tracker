<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        required: true,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    extraClass: String,
});

const emit = defineEmits<{
    (event: 'clicked'): void;
}>();

const clickedButton = () => {
    emit('clicked');
};
</script>

<template>
    <button
        :disabled="disabled"
        @click="clickedButton"
        :class="`app__button ${extraClass} rounded`"
    >
        {{ text }}
    </button>
</template>
