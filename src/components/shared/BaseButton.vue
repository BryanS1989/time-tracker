<script setup lang="ts">
defineProps({
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
        <slot> Button </slot>
    </button>
</template>
