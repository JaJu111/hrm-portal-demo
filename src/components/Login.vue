<template>
    <div class="login-wrapper">
        <div class="login-card">

            <div class="login-logo-section">
                <div class="login-logo-box">I</div>
                <h2 class="login-title">HRM Portal</h2>
                <p class="login-subtitle">Войдите в систему для управления ресурсами</p>
            </div>

            <form @submit.prevent="handleLogin" class="login-form">

                <div class="form-field">
                    <label for="email">E-mail адрес</label>
                    <IconField iconPosition="left">
                        <InputIcon class="pi pi-envelope" />
                        <InputText id="email" v-model="email" type="email" placeholder="example@bank.uz" required
                            class="w-full" />
                    </IconField>
                </div>

                <div class="form-field">
                    <label for="password">Пароль</label>
                    <IconField iconPosition="left">
                        <InputIcon class="pi pi-lock" />
                        <InputText id="password" v-model="password" type="password" placeholder="••••••••" required
                            class="w-full" />
                    </IconField>
                </div>

                <Button type="submit" label="Войти в систему" icon="pi pi-sign-in" :loading="isLoading"
                    class="w-full login-submit-btn" />
            </form>

        </div>
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

const handleLogin = (): void => {
    isLoading.value = true;

    setTimeout(() => {
        isLoading.value = false;

        router.push('/home');
    }, 1000);
};
</script>

<style scoped>
.login-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    background-color: var(--p-surface-50);
    font-family: inherit;
    padding: 20px;
    box-sizing: border-box;
}

.login-card {
    background-color: var(--p-surface-0);
    border: 1px solid var(--p-surface-200);
    border-radius: 12px;
    padding: 40px 32px;
    width: 100%;
    max-width: 420px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
    box-sizing: border-box;
}

.login-logo-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 32px;
}

.login-logo-box {
    width: 44px;
    height: 44px;
    background: linear-gradient(135deg, #8b5cf6, #4f46e5);
    color: white;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 1.25rem;
    margin-bottom: 16px;
}

.login-title {
    margin: 0 0 6px 0;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--p-text-color);
}

.login-subtitle {
    margin: 0;
    font-size: 0.85rem;
    color: var(--p-text-muted-color);
    line-height: 1.4;
}

.login-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.form-field label {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--p-text-muted-color);
}

.w-full {
    width: 100% !important;
}

.login-submit-btn {
    margin-top: 8px;
    padding: 12px !important;
    font-size: 0.95rem;
}
</style>