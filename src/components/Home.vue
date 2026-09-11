```vue
<template>
    <div class="hrm-layout">

        <!-- =====================================================
             MOBILE HEADER
        ====================================================== -->
        <header class="mobile-header">

            <div class="header-left">
                <Button
                    icon="pi pi-bars"
                    severity="secondary"
                    variant="text"
                    @click="visible = true"
                    aria-label="Открыть меню"
                />

                <span class="brand-title">
                    HRM Portal
                </span>
            </div>

            <Avatar
                label="JM"
                shape="circle"
                class="mobile-avatar"
            />

        </header>


        <!-- =====================================================
             MOBILE DRAWER
        ====================================================== -->
        <Drawer
            v-model:visible="visible"
            class="custom-drawer"
        >

            <template #header>

                <div class="logo-area">

                    <div class="logo-box">
                        H
                    </div>

                    <span class="logo-text">
                        HRM Portal
                    </span>

                </div>

            </template>


            <div class="drawer-content">

                <nav class="menu-list">

                    <Button
                        v-for="item in menuItems"
                        :key="item.label"
                        :icon="item.icon"
                        :label="item.label"
                        variant="text"
                        :severity="
                            item.active
                                ? 'primary'
                                : 'secondary'
                        "
                        class="menu-btn"
                        @click="setActive(item)"
                    />

                </nav>


                <!-- MOBILE USER -->
                <div class="user-footer">

                    <Avatar
                        label="JM"
                        shape="circle"
                    />

                    <div class="user-info">

                        <span class="user-name">
                            Jaloliddin Musaboyev
                        </span>

                        <span class="user-role">
                            Super Admin
                        </span>

                    </div>

                </div>

            </div>

        </Drawer>


        <!-- =====================================================
             MAIN CONTAINER
        ====================================================== -->
        <div class="main-container">


            <!-- =================================================
                 DESKTOP SIDEBAR
            ================================================== -->
            <aside class="desktop-sidebar">

                <div class="sidebar-top">


                    <!-- LOGO -->
                    <div class="logo-area">

                        <div class="logo-box">
                            H
                        </div>

                        <span class="logo-text">
                            HRM Portal
                        </span>

                    </div>


                    <!-- MENU -->
                    <nav class="menu-list">

                        <Button
                            v-for="item in menuItems"
                            :key="item.label"
                            :icon="item.icon"
                            :label="item.label"
                            variant="text"
                            :severity="
                                item.active
                                    ? 'primary'
                                    : 'secondary'
                            "
                            class="menu-btn"
                            @click="setActive(item)"
                        />

                    </nav>

                </div>


                <!-- SIDEBAR USER -->
                <div class="user-footer">

                    <Avatar
                        label="JM"
                        shape="circle"
                    />

                    <div class="user-info">

                        <span class="user-name">
                            Jaloliddin Musaboyev
                        </span>

                        <span class="user-role">
                            Super Admin
                        </span>

                    </div>


                    <Button
                        icon="pi pi-ellipsis-v"
                        variant="text"
                        severity="secondary"
                        rounded
                        class="user-more-btn"
                        @click="openUserMenu"
                        aria-label="Меню пользователя"
                    />

                </div>

            </aside>


            <!-- =================================================
                 CONTENT
            ================================================== -->
            <main class="content-area">


                <!-- =================================================
                     TOOLBAR
                ================================================== -->
                <Toolbar class="custom-toolbar">


                    <!-- LEFT -->
                    <template #start>

                        <div class="toolbar-left">


                            <!-- SEARCH -->
                            <IconField
                                iconPosition="left"
                                class="custom-search"
                            >

                                <InputIcon
                                    class="pi pi-search"
                                />

                                <InputText
                                    v-model="searchQuery"
                                    placeholder="Поиск по порталу..."
                                    class="search-input"
                                />

                            </IconField>


                            <!-- DIVIDER -->
                            <div class="toolbar-divider"></div>


                            <!-- PAGE CONTEXT -->
                            <div class="page-context">

                                <span class="context-title">
                                    HRM Portal
                                </span>

                                <span class="context-separator">
                                    /
                                </span>

                                <span class="context-current">
                                    {{ activePageTitle }}
                                </span>

                            </div>

                        </div>

                    </template>


                    <!-- =================================================
                         RIGHT
                    ================================================== -->
                    <template #end>

                        <div class="actions-wrapper">


                            <!-- DIVIDER -->
                            <!-- <div class="toolbar-divider"></div> -->


                            <!-- LANGUAGE -->
                            <Select
                                v-model="selectedLanguage"
                                :options="languages"
                                optionLabel="name"
                                optionValue="code"
                                class="lang-select"
                                aria-label="Выбор языка"
                            />


                            <!-- LOGOUT -->
                            <Button
                                label="Выйти"
                                icon="pi pi-sign-out"
                                severity="danger"
                                variant="outlined"
                                class="logout-btn"
                                aria-label="Выйти"
                                @click="logout"
                            />

                        </div>

                    </template>

                </Toolbar>


                <!-- =================================================
                     PAGE CONTENT
                ================================================== -->
                <RouterView />

            </main>

        </div>

    </div>
</template>


<script setup lang="ts">

import {
    ref,
    computed,
    watch
} from 'vue';

import {
    useRouter,
    useRoute
} from 'vue-router';

import Drawer from 'primevue/drawer';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';
import Toolbar from 'primevue/toolbar';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';

import '@/style/home.css';


/* =====================================================
   TYPES
===================================================== */

interface LanguageOption {
    name: string;
    code: string;
}

interface MenuItem {
    label: string;
    icon: string;
    active: boolean;
    path: string;
}


/* =====================================================
   ROUTER
===================================================== */

const router = useRouter();
const route = useRoute();


/* =====================================================
   STATE
===================================================== */

const visible = ref<boolean>(false);

const searchQuery = ref<string>('');

const selectedLanguage = ref<string>('ru');


/* =====================================================
   MENU
===================================================== */

const menuItems = ref<MenuItem[]>([
    {
        label: 'Главная страница',
        icon: 'pi pi-home',
        active: false,
        path: '/home'
    },

    {
        label: 'Мой профиль',
        icon: 'pi pi-user',
        active: false,
        path: '/profile'
    },

    {
        label: 'Структура банка',
        icon: 'pi pi-sitemap',
        active: false,
        path: '/structure'
    },

    {
        label: 'Центр обращений',
        icon: 'pi pi-comments',
        active: false,
        path: '/requests'
    },

    {
        label: 'Документы',
        icon: 'pi pi-file',
        active: false,
        path: '/documents'
    }
]);


/* =====================================================
   LANGUAGES
===================================================== */

const languages = ref<LanguageOption[]>([
    {
        name: 'Русский',
        code: 'ru'
    },

    {
        name: 'English',
        code: 'en'
    },

    {
        name: 'O‘zbekcha',
        code: 'uz'
    }
]);


/* =====================================================
   ACTIVE PAGE TITLE
===================================================== */

const activePageTitle = computed<string>(() => {

    const currentActive = menuItems.value.find(
        item => item.active
    );

    return currentActive
        ? currentActive.label
        : 'Главная страница';

});


/* =====================================================
   MENU NAVIGATION
===================================================== */

const setActive = (
    clickedItem: MenuItem
): void => {

    visible.value = false;

    router.push(clickedItem.path);

};


/* =====================================================
   LOGOUT
===================================================== */

const logout = (): void => {

    router.push('/');

};


/* =====================================================
   USER MENU
===================================================== */

const openUserMenu = (): void => {

    console.log(
        'Открыть меню пользователя'
    );

};


/* =====================================================
   UPDATE ACTIVE MENU
===================================================== */

const updateActiveMenu = (
    path: string
): void => {

    menuItems.value.forEach(item => {

        item.active = path === item.path;

    });

};


/* =====================================================
   WATCH ROUTE
===================================================== */

watch(
    () => route.path,

    newPath => {

        updateActiveMenu(newPath);

    },

    {
        immediate: true
    }
);

</script>