<template>
    <div class="hrm-layout">

        <!-- Шапка для мобильных устройств (автоматически скрывается на десктопе) -->
        <header class="mobile-header">
            <div class="header-left">
                <Button icon="pi pi-bars" severity="secondary" variant="text" @click="visible = true" />
                <span class="brand-title">HRM Portal</span>
            </div>
            <Avatar label="JM" shape="circle" />
        </header>

        <!-- Выезжающее мобильное меню (Drawer) -->
        <Drawer v-model:visible="visible" class="custom-drawer">
            <template #header>
                <div class="logo-area">
                    <div class="logo-box">I</div>
                    <span class="logo-text">HRM - portal</span>
                </div>
            </template>

            <div class="drawer-content">
                <div class="menu-list">
                    <Button v-for="item in menuItems" :key="item.label" :icon="item.icon" :label="item.label"
                        variant="text" :severity="item.active ? 'primary' : 'secondary'" class="menu-btn"
                        @click="setActive(item)" />
                </div>

                <div class="user-footer">
                    <Avatar label="JM" shape="circle" />
                    <div class="user-info">
                        <span class="user-name">Jaloliddin Musaboyev</span>
                        <span class="user-role">Super Admin</span>
                    </div>
                </div>
            </div>
        </Drawer>

        <!-- Основной контейнер панелей -->
        <div class="main-container">

            <!-- Постоянный Сайдбар для Десктопа -->
            <aside class="desktop-sidebar">
                <div class="sidebar-top">
                    <div class="logo-area">
                        <div class="logo-box">I</div>
                        <span class="logo-text">HRM - portal</span>
                    </div>

                    <nav class="menu-list">
                        <Button v-for="item in menuItems" :key="item.label" :icon="item.icon" :label="item.label"
                            variant="text" :severity="item.active ? 'primary' : 'secondary'" class="menu-btn"
                            @click="setActive(item)" />
                    </nav>
                </div>

                <div class="user-footer">
                    <Avatar label="JM" shape="circle" />
                    <div class="user-info">
                        <span class="user-name">Jaloliddin Musaboyev</span>
                        <span class="user-role">Super Admin</span>
                    </div>
                </div>
            </aside>

            <!-- Контентная область -->
            <main class="content-area">
                <header class="content-header">
                    <h2 class="page-title">{{ activePageTitle }}</h2>
                    <span class="mode-badge">Desktop Mode</span>
                </header>

                <RouterView />
            </main>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'; // 1. Импортируем onMounted
import { useRouter, useRoute } from 'vue-router'; // 2. Импортируем useRoute
import Drawer from 'primevue/drawer';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';
import '@/style/home.css';

const router = useRouter();
const route = useRoute(); // 3. Получаем доступ к текущему маршруту

interface MenuItem {
    label: string;
    icon: string;
    active: boolean;
    path: string;
}

const visible = ref<boolean>(false);

const menuItems = ref<MenuItem[]>([
    { label: 'Главная страница', icon: 'pi pi-home', active: false, path: '/' },
    { label: 'Мой профиль', icon: 'pi pi-user', active: false, path: '/profile' },
    { label: 'Структура банка', icon: 'pi pi-sitemap', active: false, path: '/structure' },
    { label: 'Центр обращений', icon: 'pi pi-comments', active: false, path: '/requests' },
    { label: 'Документы', icon: 'pi pi-file', active: false, path: '/documents' },
]);

const activePageTitle = computed<string>(() => {
    const currentActive = menuItems.value.find(item => item.active);
    return currentActive ? currentActive.label : 'Dashboard';
});

const setActive = (clickedItem: MenuItem): void => {
    menuItems.value.forEach(item => {
        item.active = item.label === clickedItem.label;
    });
    visible.value = false;
    router.push(clickedItem.path);
};

onMounted(() => {
    menuItems.value.forEach(item => {
        item.active = route.path === item.path;
    });
});
</script>