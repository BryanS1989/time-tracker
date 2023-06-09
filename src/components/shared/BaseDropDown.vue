<script setup lang="ts">
import { reactive } from 'vue';
import type { MenuItem } from '@/interfaces/MenuItem.interface';
import ProfilePreview from '@/components/user/ProfilePreview.vue';

defineProps({
    disabled: {
        type: Boolean,
        default: false,
    },
    listItems: {
        type: Array<MenuItem>,
        default: null,
    },
    position: {
        type: String,
        default: 'bottom',
    },
});

const state = reactive({
    folded: true,
});

const unfold = () => {
    console.log('[BaseDropDown] [unfold]');
    state.folded = false;
};

const fold = () => {
    console.log('[BaseDropDown] [fold]');
    state.folded = true;
};
</script>

<template>
    <div
        :class="`dropdown dropdown-${position}`"
        :disabled="disabled"
        @mouseover="unfold"
        @mouseleave="fold"
    >
        <div class="dropdown--activator">
            <slot name="activator"> Menu </slot>
        </div>

        <font-awesome-icon :icon="['fas', 'angle-down']" />

        <div
            :class="`dropdown--menu-container p-0`"
            v-if="!state.folded"
        >
            <font-awesome-icon
                :icon="['fas', 'play']"
                size="xl"
                v-if="position === 'bottom'"
            />
            <ul class="dropdown--menu p-0">
                <li
                    v-for="(item, index) of listItems"
                    :key="index"
                    class="dropdown--item text-center"
                >
                    <div v-if="!item.children">
                        <p
                            v-if="!item.custom"
                            class="p-2 text-unselectable"
                        >
                            {{ item.text }}
                        </p>
                        <ProfilePreview
                            v-else
                            :show-current-status="false"
                            :show-las-time="true"
                            class="p-1"
                        ></ProfilePreview>
                    </div>
                    <BaseDropDown
                        v-else
                        :list-items="item.children"
                        :position="item.position"
                    >
                        <template #activator>
                            <p class="p-2 text-unselectable">
                                {{ item.text }}
                            </p>
                        </template>
                    </BaseDropDown>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
.dropdown {
    position: relative;
}

.dropdown > svg {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto 0;
}

.dropdown-left > svg {
    bottom: 0;
    top: 0;
    right: 0;
    left: 1rem;
    margin: auto 0;
    rotate: 90deg;
}

.dropdown-right > svg {
    bottom: 0;
    top: 0;
    right: 1rem;
    margin: auto 0;
    rotate: 270deg;
}

.dropdown-left .dropdown--menu-container,
.dropdown-right .dropdown--menu-container {
    position: absolute;
    top: 0;
    width: 100%;
}

.dropdown-left .dropdown--menu-container {
    right: 100%;
    padding-right: 0.5rem;
}

.dropdown-right .dropdown--menu-container {
    left: 100%;
    padding-left: 0.5rem;
}

.dropdown--menu-container {
    position: absolute;
    top: 100%;
    width: 100%;
}

.dropdown--menu-container > svg {
    rotate: 270deg;
    position: absolute;
    top: -0.5rem;
    right: 3rem;
    color: var(--white);
}

.dropdown--menu {
    list-style: none;
    padding-top: 0.5rem;
}

.dropdown-left .dropdown--menu,
.dropdown-right .dropdown--menu {
    padding-top: 0rem;
}

.dropdown--item {
    background-color: var(--white);
    border-top: 1px solid var(--gray);
}

.dropdown--menu .dropdown--item:first-child {
    border-top-left-radius: var(--border-radius-sm);
    border-top-right-radius: var(--border-radius-sm);
    border-top: none;
}

.dropdown--menu .dropdown--item:last-child {
    border-bottom-left-radius: var(--border-radius-sm);
    border-bottom-right-radius: var(--border-radius-sm);
}

@media (hover: hover) {
    .dropdown--menu-container:has(li:first-child:hover) > svg {
        color: var(--green-light) !important;
    }

    .dropdown--item:hover {
        background-color: var(--green-light);
    }
}

@media (max-width: 640px) {
    .dropdown--menu-container {
        width: max-content;
    }
}
</style>
