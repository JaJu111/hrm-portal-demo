```vue
<template>
    <div class="profile-page">
        <Toast />

        <!-- Page header -->
        <div class="page-header">
            <div>
                <h1>Профиль</h1>
                <p>Личная и рабочая информация сотрудника</p>
            </div>

            <Tag value="Активный сотрудник" severity="success" icon="pi pi-check-circle" />
        </div>

        <!-- Profile header -->
        <Card class="profile-card">
            <template #content>
                <div class="profile-header">
                    <Avatar label="JM" shape="circle" size="xlarge" class="profile-avatar" />

                    <div class="profile-info">
                        <h2>{{ profileData.firstName }} {{ profileData.lastName }}</h2>

                        <div class="profile-position">
                            {{ profileData.position }}
                        </div>

                        <div class="profile-department">
                            <i class="pi pi-building"></i>
                            {{ profileData.department }}
                        </div>
                    </div>

                    <div class="profile-role">
                        <Tag :value="profileData.role" severity="info" />
                    </div>
                </div>
            </template>
        </Card>

        <!-- Personal information -->
        <Card class="section-card">
            <template #title>
                <div class="section-title">
                    <i class="pi pi-user"></i>
                    <span>Личная информация</span>
                </div>
            </template>

            <template #content>
                <div class="form-grid">
                    <!-- First name -->
                    <div class="form-field">
                        <label for="firstName">
                            Имя
                        </label>

                        <InputText id="firstName" v-model="profileData.firstName" placeholder="Введите имя" />
                    </div>

                    <!-- Last name -->
                    <div class="form-field">
                        <label for="lastName">
                            Фамилия
                        </label>

                        <InputText id="lastName" v-model="profileData.lastName" placeholder="Введите фамилию" />
                    </div>

                    <!-- Middle name -->
                    <div class="form-field">
                        <label for="middleName">
                            Отчество
                        </label>

                        <InputText id="middleName" v-model="profileData.middleName" placeholder="Введите отчество" />
                    </div>

                    <!-- Birth date -->
                    <div class="form-field">
                        <label for="birthDate">
                            Дата рождения
                        </label>

                        <DatePicker id="birthDate" v-model="profileData.birthDate" date-format="dd.mm.yy"
                            placeholder="Выберите дату" show-icon />
                    </div>
                </div>
            </template>
        </Card>

        <!-- Contact information -->
        <Card class="section-card">
            <template #title>
                <div class="section-title">
                    <i class="pi pi-phone"></i>
                    <span>Контактная информация</span>
                </div>
            </template>

            <template #content>
                <div class="form-grid">
                    <!-- Email -->
                    <div class="form-field">
                        <label for="email">
                            E-mail
                        </label>

                        <InputText id="email" v-model="profileData.email" type="email" placeholder="example@bank.uz"
                            :invalid="!!errors.email" />

                        <small v-if="errors.email" class="error-message">
                            {{ errors.email }}
                        </small>
                    </div>

                    <!-- Phone -->
                    <div class="form-field">
                        <label for="phone">
                            Номер телефона
                        </label>

                        <InputMask id="phone" v-model="profileData.phone" mask="+998 (99) 999-99-99"
                            placeholder="+998 (90) 123-45-67" />
                    </div>

                    <!-- Additional phone -->
                    <div class="form-field">
                        <label for="additionalPhone">
                            Дополнительный телефон
                        </label>

                        <InputMask id="additionalPhone" v-model="profileData.additionalPhone" mask="+998 (99) 999-99-99"
                            placeholder="+998 (90) 123-45-67" />
                    </div>

                    <!-- Address -->
                    <div class="form-field">
                        <label for="address">
                            Адрес
                        </label>

                        <InputText id="address" v-model="profileData.address" placeholder="Введите адрес" />
                    </div>
                </div>
            </template>
        </Card>

        <!-- Work information -->
        <Card class="section-card">
            <template #title>
                <div class="section-title">
                    <i class="pi pi-briefcase"></i>
                    <span>Рабочая информация</span>
                </div>
            </template>

            <template #content>
                <div class="form-grid">
                    <!-- Employee ID -->
                    <div class="form-field">
                        <label for="employeeId">
                            Табельный номер
                        </label>

                        <InputText id="employeeId" v-model="profileData.employeeId" disabled />
                    </div>

                    <!-- Position -->
                    <div class="form-field">
                        <label for="position">
                            Должность
                        </label>

                        <InputText id="position" v-model="profileData.position" disabled />
                    </div>

                    <!-- Department -->
                    <div class="form-field">
                        <label for="department">
                            Департамент
                        </label>

                        <InputText id="department" v-model="profileData.department" disabled />
                    </div>

                    <!-- Team -->
                    <div class="form-field">
                        <label for="team">
                            Отдел
                        </label>

                        <InputText id="team" v-model="profileData.team" disabled />
                    </div>

                    <!-- Hire date -->
                    <div class="form-field">
                        <label for="hireDate">
                            Дата приёма на работу
                        </label>

                        <DatePicker id="hireDate" v-model="profileData.hireDate" date-format="dd.mm.yy" disabled />
                    </div>

                    <!-- Experience -->
                    <div class="form-field">
                        <label for="experience">
                            Стаж работы
                        </label>

                        <InputText id="experience" v-model="profileData.experience" disabled />
                    </div>

                    <!-- Manager -->
                    <div class="form-field">
                        <label for="manager">
                            Руководитель
                        </label>

                        <InputText id="manager" v-model="profileData.manager" disabled />
                    </div>

                    <!-- Employment type -->
                    <div class="form-field">
                        <label for="employmentType">
                            Тип занятости
                        </label>

                        <InputText id="employmentType" v-model="profileData.employmentType" disabled />
                    </div>
                </div>
            </template>
        </Card>

        <!-- Security -->
        <Card class="section-card">
            <template #title>
                <div class="section-title">
                    <i class="pi pi-shield"></i>
                    <span>Безопасность</span>
                </div>
            </template>

            <template #content>
                <div class="security-row">
                    <div class="security-icon">
                        <i class="pi pi-lock"></i>
                    </div>

                    <div class="security-info">
                        <strong>Пароль</strong>
                        <span>
                            Рекомендуется регулярно менять пароль
                        </span>
                    </div>

                    <Button label="Изменить пароль" icon="pi pi-key" severity="secondary" outlined
                        @click="changePassword" />
                </div>
            </template>
        </Card>

        <!-- Actions -->
        <div class="form-actions">
            <Button label="Отменить" icon="pi pi-times" severity="secondary" text :disabled="isSaving"
                @click="resetProfile" />

            <Button type="button" label="Сохранить изменения" icon="pi pi-check" :loading="isSaving"
                @click="saveProfile" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import Card from 'primevue/card';
import Avatar from 'primevue/avatar';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import DatePicker from 'primevue/datepicker';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

interface ProfileData {
    firstName: string;
    lastName: string;
    middleName: string;

    birthDate: Date | null;

    email: string;
    phone: string;
    additionalPhone: string;
    address: string;

    employeeId: string;
    position: string;
    department: string;
    team: string;
    hireDate: Date | null;
    experience: string;
    manager: string;
    employmentType: string;

    role: string;
}

interface ProfileErrors {
    email?: string;
}

const toast = useToast();

const isSaving = ref(false);

const errors = ref<ProfileErrors>({});

const profileData = ref<ProfileData>({
    firstName: 'Jaloliddin',
    lastName: 'Musaboyev',
    middleName: '',

    birthDate: null,

    email: 'j.musabayev@bank.uz',
    phone: '',
    additionalPhone: '',
    address: '',

    employeeId: 'EMP-000124',
    position: 'Frontend Developer',
    department: 'Департамент информационных технологий',
    team: 'Отдел разработки',
    hireDate: new Date(2024, 4, 15),
    experience: '2 года 4 месяца',
    manager: 'Владислав Иванов',
    employmentType: 'Полная занятость',

    role: 'Super Admin'
});

/**
 * Сохранение профиля
 */
const saveProfile = (): void => {
    errors.value = {};

    // Email validation
    if (!profileData.value.email) {
        errors.value.email = 'Введите E-mail';
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(profileData.value.email)) {
        errors.value.email = 'Введите корректный E-mail';
        return;
    }

    isSaving.value = true;

    /*
     * Здесь позже подключим API:
     *
     * await profileApi.updateProfile(profileData.value)
     */

    setTimeout(() => {
        isSaving.value = false;

        toast.add({
            severity: 'success',
            summary: 'Сохранено успешно',
            detail: 'Изменения профиля были сохранены.',
            life: 4000
        });
    }, 1000);
};

/**
 * Сброс изменений
 *
 * Пока просто показываем уведомление.
 * Позже можно сделать полноценный snapshot
 * исходных данных.
 */
const resetProfile = (): void => {
    toast.add({
        severity: 'info',
        summary: 'Изменения отменены',
        detail: 'Данные профиля не были изменены.',
        life: 3000
    });
};

/**
 * Изменение пароля
 */
const changePassword = (): void => {
    toast.add({
        severity: 'info',
        summary: 'Изменение пароля',
        detail: 'Окно изменения пароля будет доступно после подключения API.',
        life: 4000
    });
};
</script>

<style scoped>
.profile-page {
    width: 100%;
}

/* Page header */

.page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 24px;
}

.page-header h1 {
    margin: 0 0 6px;
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--p-text-color);
}

.page-header p {
    margin: 0;
    color: var(--p-text-muted-color);
    font-size: 0.9rem;
}

/* Profile header */

.profile-card {
    margin-bottom: 20px;
}

.profile-header {
    display: flex;
    align-items: center;
    gap: 20px;
}

.profile-avatar {
    width: 80px !important;
    height: 80px !important;
    flex-shrink: 0;

    background: var(--p-primary-color) !important;
    color: var(--p-primary-contrast-color) !important;

    font-size: 1.6rem !important;
    font-weight: 600;
}

.profile-info {
    flex: 1;
}

.profile-info h2 {
    margin: 0 0 6px;
    font-size: 1.4rem;
    font-weight: 700;
}

.profile-position {
    margin-bottom: 6px;
    font-size: 0.95rem;
    color: var(--p-text-color);
}

.profile-department {
    display: flex;
    align-items: center;
    gap: 7px;

    color: var(--p-text-muted-color);
    font-size: 0.85rem;
}

.profile-role {
    align-self: flex-start;
}

/* Sections */

.section-card {
    margin-bottom: 20px;
}

.section-title {
    display: flex;
    align-items: center;
    gap: 10px;

    font-size: 1rem;
    font-weight: 600;
}

.section-title i {
    color: var(--p-primary-color);
}

/* Form */

.form-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
}

.form-field {
    display: flex;
    flex-direction: column;
    gap: 7px;
}

.form-field label {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--p-text-color);
}

.form-field :deep(.p-inputtext),
.form-field :deep(.p-inputmask),
.form-field :deep(.p-datepicker) {
    width: 100%;
}

.error-message {
    color: var(--p-red-500);
    font-size: 0.8rem;
}

/* Security */

.security-row {
    display: flex;
    align-items: center;
    gap: 16px;
}

.security-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 42px;
    height: 42px;

    border-radius: 50%;

    background: var(--p-surface-100);
    color: var(--p-primary-color);

    flex-shrink: 0;
}

.security-info {
    display: flex;
    flex-direction: column;
    gap: 4px;

    flex: 1;
}

.security-info strong {
    font-size: 0.9rem;
}

.security-info span {
    color: var(--p-text-muted-color);
    font-size: 0.8rem;
}

/* Actions */

.form-actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;

    margin-top: 24px;
    padding-bottom: 24px;
}

/* Mobile */

@media (max-width: 768px) {

    .page-header {
        align-items: flex-start;
        flex-direction: column;
    }

    .profile-header {
        align-items: flex-start;
        flex-wrap: wrap;
    }

    .profile-role {
        width: 100%;
    }

    .form-grid {
        grid-template-columns: 1fr;
    }

    .security-row {
        align-items: flex-start;
        flex-wrap: wrap;
    }

    .security-info {
        min-width: calc(100% - 60px);
    }

    .security-row .p-button {
        width: 100%;
    }

    .form-actions {
        flex-direction: column-reverse;
    }

    .form-actions .p-button {
        width: 100%;
    }
}
</style>