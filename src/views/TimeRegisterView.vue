<script setup lang="ts">
import TimeTracker from '../components/TimeTracker.vue';
import ProfilePreview from '@/components/user/ProfilePreview.vue';
import BaseDropDown from '@/components/shared/BaseDropDown.vue';
import type { MenuItem } from '@/interfaces/MenuItem.interface';

const menuItems: MenuItem[] = [
    {
        text: 'Mis cuentas',
        position: 'left',
        children: [
            {
                text: 'Cuenta 1',
            },
            {
                text: 'Cuenta 2',
            },
        ],
    },
    {
        text: 'Vista empleado',
    },
    {
        text: 'Mi perfil',
    },
    {
        text: 'Cerrar sesión',
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
