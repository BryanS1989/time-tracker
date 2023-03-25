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
        :class="`app__button ${extraClass} rounded mx-1`"
    >
        <slot> Button </slot>
    </button>
</template>

<style>
.app__button {
    color: var(--color-text-secondary);
    border-radius: var(--border-radius);
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    width: 10rem;
    font-weight: 500;
}

.button--success {
    background-color: var(--success);
}

.button--secondary {
    background-color: var(--secondary);
}

.button--danger {
    background-color: var(--danger);
}

@media (hover: hover) {
    .app__button:hover {
        opacity: 0.8;
        transform: scale(1.1);
        box-shadow: 0px 5px 5px var(--black-lighter);
    }
}

@media (max-width: 768px) {
    .app__button {
        width: 5rem;
    }
}

@media (max-width: 425px) {
    .app__button {
        width: 2rem;
        margin: 2px;
    }
}
</style>
