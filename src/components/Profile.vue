<!-- src/views/ProfileView.vue -->
<template>
    <div class="profile-page">
        <Toast />

        <div class="card-item large-card">
            <div class="profile-header-block">
                <Avatar label="JM" shape="circle" size="xlarge" class="profile-avatar-lg" />
                <div class="profile-meta">
                    <h2>Jaloliddin Musaboyev</h2>
                    <span class="role-badge">Super Admin</span>
                </div>
            </div>

            <hr class="divider" />

            <form @submit.prevent="saveProfile" class="profile-form">
                <div class="form-grid">
                    <div class="form-field">
                        <label for="email">E-mail адрес</label>
                        <InputText id="email" v-model="profileData.email" type="email" placeholder="example@bank.uz" />
                    </div>

                    <div class="form-field">
                        <label for="phone">Номер телефона</label>
                        <InputMask id="phone" v-model="profileData.phone" mask="+998 (99) 999-99-99"
                            placeholder="+998 (90) 123-45-67" />
                    </div>

                    <div class="form-field">
                        <label for="department">Департамент</label>
                        <InputText id="department" v-model="profileData.department" disabled />
                    </div>

                    <div class="form-field">
                        <label for="experience">Стаж работы</label>
                        <InputText id="experience" v-model="profileData.experience" disabled />
                    </div>
                </div>

                <div class="form-actions">
                    <Button type="submit" label="Сохранить изменения" icon="pi pi-check" :loading="isSaving" />
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

interface ProfileData {
    email: string;
    phone: string;
    department: string;
    experience: string;
}

const isSaving = ref<boolean>(false);
const toast = useToast();

const profileData = ref<ProfileData>({
    email: 'j.musabayev@bank.uz',
    phone: '',
    department: 'Департамент информационных технологий',
    experience: '2 года 4 месяца',
});

const saveProfile = (): void => {
    isSaving.value = true;

    setTimeout(() => {
        isSaving.value = false;

        toast.add({
            severity: 'success',
            summary: 'Сохранено успешно',
            detail: 'Ваши кадровые изменения были записаны.',
            life: 5000
        });
    }, 1000);
};
</script>

<style scoped>
.profile-header-block {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 16px;
}

.profile-avatar-lg {
    width: 72px !important;
    height: 72px !important;
    font-size: 1.5rem !important;
    background-color: var(--p-primary-color) !important;
    color: var(--p-primary-contrast-color) !important;
}

.profile-meta h2 {
    margin: 0 0 4px 0;
    font-size: 1.4rem;
}

.role-badge {
    font-size: 0.8rem;
    background-color: var(--p-primary-100);
    color: var(--p-primary-700);
    padding: 4px 8px;
    border-radius: 4px;
    font-weight: 600;
}

.divider {
    border: 0;
    border-top: 1px solid var(--p-surface-200);
    margin: 20px 0;
}

.form-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
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

.form-actions {
    margin-top: 24px;
    display: flex;
    justify-content: flex-end;
}

@media (max-width: 576px) {
    .form-grid {
        grid-template-columns: 1fr;
    }
}
</style>