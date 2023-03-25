<script setup lang="ts">
import TimeTracker from '../components/TimeTracker.vue';
import ProfilePreview from '@/components/user/ProfilePreview.vue';
import BaseDropDown from '@/components/shared/BaseDropDown.vue';
import type { MenuItem } from '@/interfaces/MenuItem.interface';

const menuItems: MenuItem[] = [
    {
        text: 'Mis cuentas',
        custom: false,
        position: 'left',
        children: [
            {
                text: 'Cuenta 1',
                custom: true,
            },
            {
                text: 'Cuenta 2',
                custom: true,
            },
        ],
    },
    {
        text: 'Vista empleado',
        custom: false,
    },
    {
        text: 'Mi perfil',
        custom: false,
    },
    {
        text: 'Cerrar sesión',
        custom: false,
    },
];
</script>

<template>
    <main class="display-flex p-3">
        <section class="wrapper display-flex rounded p-2 py-1">
            <TimeTracker />

            <BaseDropDown :list-items="menuItems">
                <template #activator>
                    <ProfilePreview></ProfilePreview>
                </template>
            </BaseDropDown>
        </section>
    </main>
</template>

<style>
@media (max-width: 768) {
    main {
        padding: 8px;
    }

    section.wrapper {
        padding: 8px;
    }
}
</style>
