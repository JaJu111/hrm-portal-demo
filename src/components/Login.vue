```vue
<template>
    <div class="login-page">
        <!-- LEFT / BRANDING -->
        <section class="login-brand">
            <div class="brand-content">
                <div class="brand-logo">
                    H
                </div>

                <h1>HRM Portal</h1>

                <p class="brand-description">
                    Единая корпоративная система управления
                    персоналом и внутренними процессами банка.
                </p>

                <div class="brand-features">
                    <div class="brand-feature">
                        <div class="feature-icon">
                            <i class="pi pi-users"></i>
                        </div>
                        <div>
                            <strong>Управление персоналом</strong>
                            <span>Единая информация о сотрудниках</span>
                        </div>
                    </div>

                    <div class="brand-feature">
                        <div class="feature-icon">
                            <i class="pi pi-file"></i>
                        </div>
                        <div>
                            <strong>Документы</strong>
                            <span>Быстрый доступ к корпоративным документам</span>
                        </div>
                    </div>

                    <div class="brand-feature">
                        <div class="feature-icon">
                            <i class="pi pi-comments"></i>
                        </div>
                        <div>
                            <strong>Центр обращений</strong>
                            <span>Взаимодействие с HR и подразделениями</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="brand-footer">
                <span>© 2026 HRM Portal</span>
                <span>Корпоративная система</span>
            </div>
        </section>

        <!-- RIGHT / LOGIN -->
        <section class="login-section">
            <div class="login-container">
                <!-- Mobile logo -->
                <div class="mobile-brand">
                    <div class="mobile-logo">
                        H
                    </div>

                    <span>HRM Portal</span>
                </div>

                <div class="login-header">
                    <span class="welcome-label">
                        Добро пожаловать
                    </span>

                    <h2>
                        Вход в систему
                    </h2>

                    <p>
                        Введите свои учетные данные для продолжения
                    </p>
                </div>

                <form class="login-form" @submit.prevent="handleLogin">
                    <!-- EMAIL -->
                    <div class="form-field">
                        <label for="email">
                            E-mail адрес
                        </label>

                        <IconField iconPosition="left">
                            <InputIcon class="pi pi-envelope" />

                            <InputText id="email" v-model="email" type="email" placeholder="example@bank.uz"
                                autocomplete="username" class="login-input" :disabled="isLoading" required />
                        </IconField>
                    </div>

                    <!-- PASSWORD -->
                    <div class="form-field">
                        <div class="field-label-row">
                            <label for="password">
                                Пароль
                            </label>

                            <button type="button" class="forgot-password" @click="handleForgotPassword">
                                Забыли пароль?
                            </button>
                        </div>

                        <IconField iconPosition="left">
                            <InputIcon class="pi pi-lock" />

                            <InputText id="password" v-model="password" :type="showPassword ? 'text' : 'password'"
                                placeholder="Введите пароль" autocomplete="current-password"
                                class="login-input password-input" :disabled="isLoading" required />

                            <button type="button" class="password-toggle" :aria-label="showPassword
                                ? 'Скрыть пароль'
                                : 'Показать пароль'
                                " @click="showPassword = !showPassword">
                                <i :class="showPassword
                                    ? 'pi pi-eye-slash'
                                    : 'pi pi-eye'
                                    "></i>
                            </button>
                        </IconField>
                    </div>

                    <!-- REMEMBER -->
                    <div class="form-options">
                        <label class="remember-me">
                            <input v-model="rememberMe" type="checkbox" />

                            <span class="custom-checkbox">
                                <i v-if="rememberMe" class="pi pi-check"></i>
                            </span>

                            <span>
                                Запомнить меня
                            </span>
                        </label>
                    </div>

                    <!-- LOGIN -->
                    <Button type="submit" label="Войти в систему" icon="pi pi-sign-in" :loading="isLoading"
                        class="login-submit-btn" />

                    <!-- SECURITY -->
                    <div class="security-info">
                        <i class="pi pi-shield"></i>

                        <div>
                            <strong>
                                Безопасное подключение
                            </strong>

                            <span>
                                Ваши данные защищены
                            </span>
                        </div>
                    </div>
                </form>

                <div class="login-footer">
                    <span>
                        Возникли проблемы со входом?
                    </span>

                    <button type="button" @click="handleSupport">
                        Обратиться в поддержку
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';

const router = useRouter();

const email = ref<string>('');
const password = ref<string>('');

const isLoading = ref<boolean>(false);
const showPassword = ref<boolean>(false);
const rememberMe = ref<boolean>(false);

const handleLogin = (): void => {
    if (!email.value || !password.value) {
        return;
    }

    isLoading.value = true;

    setTimeout(() => {
        isLoading.value = false;

        router.push('/home');
    }, 800);
};

const handleForgotPassword = (): void => {
    console.log('Восстановление пароля');
};

const handleSupport = (): void => {
    console.log('Обращение в поддержку');
};
</script>

<style scoped>
/* =========================================================
   LOGIN PAGE
   ========================================================= */

.login-page {
    min-height: 100vh;
    width: 100%;

    display: grid;
    grid-template-columns: minmax(420px, 0.9fr) minmax(420px, 1.1fr);

    background: var(--p-surface-50);

    color: var(--p-text-color);
}

/* =========================================================
   LEFT BRAND
   ========================================================= */

.login-brand {
    position: relative;

    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 60px;

    background: #0f172a;

    color: #ffffff;

    overflow: hidden;
}

.login-brand::before {
    content: '';

    position: absolute;

    width: 420px;
    height: 420px;

    top: -180px;
    right: -160px;

    border-radius: 50%;

    background: rgba(37, 99, 235, 0.18);
}

.login-brand::after {
    content: '';

    position: absolute;

    width: 300px;
    height: 300px;

    bottom: -150px;
    left: -120px;

    border-radius: 50%;

    background: rgba(37, 99, 235, 0.12);
}

.brand-content {
    position: relative;
    z-index: 1;

    max-width: 520px;

    margin: auto 0;
}

.brand-logo {
    width: 52px;
    height: 52px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 28px;

    border-radius: 12px;

    background: #2563eb;

    color: #ffffff;

    font-size: 24px;
    font-weight: 800;

    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.3);
}

.brand-content h1 {
    margin: 0 0 14px;

    font-size: 34px;
    line-height: 1.2;

    font-weight: 700;
    letter-spacing: -0.5px;
}

.brand-description {
    max-width: 470px;

    margin: 0;

    color: #cbd5e1;

    font-size: 15px;
    line-height: 1.7;
}

/* =========================================================
   FEATURES
   ========================================================= */

.brand-features {
    display: flex;
    flex-direction: column;

    gap: 18px;

    margin-top: 44px;
}

.brand-feature {
    display: flex;
    align-items: center;

    gap: 14px;
}

.feature-icon {
    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    border-radius: 9px;

    background: rgba(255, 255, 255, 0.08);

    color: #93c5fd;

    font-size: 16px;
}

.brand-feature strong {
    display: block;

    margin-bottom: 3px;

    font-size: 13px;
    font-weight: 600;

    color: #f8fafc;
}

.brand-feature span {
    display: block;

    font-size: 11px;

    color: #94a3b8;
}

/* =========================================================
   BRAND FOOTER
   ========================================================= */

.brand-footer {
    position: relative;
    z-index: 1;

    display: flex;
    justify-content: space-between;

    gap: 20px;

    color: #64748b;

    font-size: 11px;
}

/* =========================================================
   RIGHT LOGIN
   ========================================================= */

.login-section {
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 40px;
}

.login-container {
    width: 100%;
    max-width: 440px;
}

/* =========================================================
   MOBILE BRAND
   ========================================================= */

.mobile-brand {
    display: none;
}

/* =========================================================
   LOGIN HEADER
   ========================================================= */

.login-header {
    margin-bottom: 32px;
}

.welcome-label {
    display: inline-block;

    margin-bottom: 8px;

    color: #2563eb;

    font-size: 12px;
    font-weight: 600;

    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.login-header h2 {
    margin: 0 0 8px;

    color: var(--p-text-color);

    font-size: 28px;
    font-weight: 700;

    letter-spacing: -0.4px;
}

.login-header p {
    margin: 0;

    color: var(--p-text-muted-color);

    font-size: 13px;
    line-height: 1.5;
}

/* =========================================================
   FORM
   ========================================================= */

.login-form {
    display: flex;
    flex-direction: column;

    gap: 20px;
}

.form-field {
    display: flex;
    flex-direction: column;

    gap: 7px;
}

.form-field label {
    color: var(--p-text-color);

    font-size: 13px;
    font-weight: 600;
}

.field-label-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.forgot-password {
    padding: 0;

    border: 0;
    background: transparent;

    color: #2563eb;

    font-family: inherit;
    font-size: 12px;
    font-weight: 500;

    cursor: pointer;
}

.forgot-password:hover {
    text-decoration: underline;
}

/* =========================================================
   INPUTS
   ========================================================= */

:deep(.p-iconfield) {
    width: 100%;
}

.login-input {
    width: 100% !important;

    height: 46px;

    padding-right: 42px !important;

    border-radius: 8px !important;
}

:deep(.p-inputicon) {
    color: #94a3b8;
}

/* =========================================================
   PASSWORD
   ========================================================= */

.password-toggle {
    position: absolute;

    top: 50%;
    right: 10px;

    width: 32px;
    height: 32px;

    transform: translateY(-50%);

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 6px;

    background: transparent;

    color: #94a3b8;

    cursor: pointer;
}

.password-toggle:hover {
    background: var(--p-surface-100);

    color: var(--p-text-color);
}

/* =========================================================
   REMEMBER
   ========================================================= */

.form-options {
    margin-top: -4px;
}

.remember-me {
    display: inline-flex;
    align-items: center;

    gap: 8px;

    color: var(--p-text-muted-color);

    font-size: 12px;

    cursor: pointer;
}

.remember-me input {
    display: none;
}

.custom-checkbox {
    width: 17px;
    height: 17px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid #cbd5e1;
    border-radius: 4px;

    background: #ffffff;

    color: #ffffff;

    font-size: 9px;

    transition: 0.15s ease;
}

.remember-me input:checked+.custom-checkbox {
    border-color: #2563eb;

    background: #2563eb;
}

/* =========================================================
   BUTTON
   ========================================================= */

.login-submit-btn {
    width: 100% !important;

    height: 46px;

    margin-top: 2px;

    border-radius: 8px !important;

    font-size: 13px !important;
    font-weight: 600 !important;
}

/* =========================================================
   SECURITY
   ========================================================= */

.security-info {
    display: flex;
    align-items: center;

    gap: 10px;

    padding: 12px 14px;

    border: 1px solid var(--p-surface-200);
    border-radius: 8px;

    background: var(--p-surface-50);
}

.security-info>i {
    color: #16a34a;

    font-size: 16px;
}

.security-info div {
    display: flex;
    flex-direction: column;

    gap: 2px;
}

.security-info strong {
    color: var(--p-text-color);

    font-size: 11px;
    font-weight: 600;
}

.security-info span {
    color: var(--p-text-muted-color);

    font-size: 10px;
}

/* =========================================================
   FOOTER
   ========================================================= */

.login-footer {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 5px;

    margin-top: 28px;

    color: var(--p-text-muted-color);

    font-size: 11px;
}

.login-footer button {
    padding: 0;

    border: 0;
    background: transparent;

    color: #2563eb;

    font-family: inherit;
    font-size: 11px;
    font-weight: 500;

    cursor: pointer;
}

.login-footer button:hover {
    text-decoration: underline;
}

/* =========================================================
   TABLET
   1200px
   ========================================================= */

@media (max-width: 1200px) {
    .login-page {
        grid-template-columns: minmax(340px, 0.85fr) minmax(380px, 1.15fr);
    }

    .login-brand {
        padding: 45px;
    }

    .brand-content h1 {
        font-size: 30px;
    }

    .brand-description {
        font-size: 14px;
    }

    .brand-features {
        margin-top: 34px;

        gap: 14px;
    }

    .login-section {
        padding: 35px;
    }
}

/* =========================================================
   TABLET SMALL
   900px
   ========================================================= */

@media (max-width: 900px) {
    .login-page {
        grid-template-columns: 320px minmax(360px, 1fr);
    }

    .login-brand {
        padding: 35px 30px;
    }

    .brand-logo {
        width: 46px;
        height: 46px;

        margin-bottom: 20px;
    }

    .brand-content h1 {
        font-size: 26px;
    }

    .brand-description {
        font-size: 13px;
        line-height: 1.6;
    }

    .brand-features {
        margin-top: 28px;
    }

    .brand-feature strong {
        font-size: 12px;
    }

    .brand-feature span {
        font-size: 10px;
    }

    .brand-footer {
        font-size: 9px;
    }

    .login-section {
        padding: 30px;
    }
}

/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 767px) {
    .login-page {
        display: block;

        min-height: 100vh;

        background: var(--p-surface-50);
    }

    /* Полностью скрываем desktop branding */
    .login-brand {
        display: none;
    }

    /* Login занимает весь экран */
    .login-section {
        width: 100%;
        min-height: 100vh;

        display: flex;
        align-items: flex-start;
        justify-content: center;

        padding: 24px 18px 30px;

        box-sizing: border-box;
    }

    .login-container {
        width: 100%;
        max-width: 440px;
    }

    /* -------------------------
       Mobile logo
       ------------------------- */

    .mobile-brand {
        display: flex;
        align-items: center;

        gap: 10px;

        margin-bottom: 42px;
    }

    .mobile-logo {
        width: 40px;
        height: 40px;

        display: flex;
        align-items: center;
        justify-content: center;

        flex-shrink: 0;

        border-radius: 9px;

        background: #2563eb;

        color: #ffffff;

        font-size: 18px;
        font-weight: 800;
    }

    .mobile-brand>span {
        color: var(--p-text-color);

        font-size: 17px;
        font-weight: 700;
    }

    /* -------------------------
       Header
       ------------------------- */

    .login-header {
        margin-bottom: 28px;
    }

    .welcome-label {
        margin-bottom: 7px;

        font-size: 11px;
    }

    .login-header h2 {
        margin-bottom: 7px;

        font-size: 25px;
    }

    .login-header p {
        font-size: 12px;
    }

    /* -------------------------
       Form
       ------------------------- */

    .login-form {
        gap: 18px;
    }

    .form-field {
        gap: 7px;
    }

    .form-field label {
        font-size: 13px;
    }

    .login-input {
        height: 48px !important;

        font-size: 14px !important;
    }

    .login-submit-btn {
        height: 48px !important;

        font-size: 13px !important;
    }

    /* -------------------------
       Security
       ------------------------- */

    .security-info {
        padding: 11px 12px;
    }

    /* -------------------------
       Footer
       ------------------------- */

    .login-footer {
        flex-direction: column;

        gap: 5px;

        margin-top: 24px;

        text-align: center;

        line-height: 1.5;
    }
}

/* =========================================================
   SMALL MOBILE
   ========================================================= */

@media (max-width: 480px) {
    .login-section {
        padding: 20px 16px 26px;
    }

    .mobile-brand {
        margin-bottom: 34px;
    }

    .mobile-logo {
        width: 38px;
        height: 38px;

        font-size: 17px;
    }

    .mobile-brand>span {
        font-size: 16px;
    }

    .login-header h2 {
        font-size: 23px;
    }

    .login-header p {
        max-width: 330px;

        line-height: 1.5;
    }
}

/* =========================================================
   VERY SMALL MOBILE
   ========================================================= */

@media (max-width: 360px) {
    .login-section {
        padding: 16px 12px 22px;
    }

    .mobile-brand {
        margin-bottom: 28px;
    }

    .login-header {
        margin-bottom: 24px;
    }

    .login-header h2 {
        font-size: 21px;
    }

    .login-form {
        gap: 16px;
    }

    .login-input {
        height: 46px !important;
    }

    .login-submit-btn {
        height: 46px !important;
    }

    .security-info span {
        font-size: 9px;
    }
}
</style>