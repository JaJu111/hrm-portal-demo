<template>
    <div class="requests-page">
        <Toast />

        <Dialog v-model:visible="isModalOpen" modal header="Новое обращение в HR-отдел"
            :style="{ width: '32rem', maxWidth: '90vw' }" class="custom-dialog" :autoFocus="false" >
            <form @submit.prevent="submitRequest" class="dialog-form">

                <div class="form-field mb-3">
                    <label for="category">Тип обращения</label>
                    <Select id="category" v-model="newRequest.category" :options="categories" placeholder="Выберите тип"
                        required class="w-full" appendTo="self" />
                </div>

                <div class="form-field mb-3">
                    <label for="title">Краткая тема обращения</label>
                    <InputText id="title" v-model="newRequest.title" placeholder="Например: Заявление на отпуск"
                        required class="w-full" />
                </div>

                <div class="form-field mb-4">
                    <label for="description">Детали и комментарии</label>
                    <Textarea id="description" v-model="newRequest.description" rows="4"
                        placeholder="Укажите подробности (даты, причины, дополнительную информацию)..."
                        class="w-full custom-textarea" />
                </div>

                <div class="dialog-actions">
                    <Button label="Отмена" severity="secondary" variant="text" size="small"
                        @click="isModalOpen = false" />
                    <Button type="submit" label="Отправить" icon="pi pi-send" size="small" :loading="isSending" />
                </div>
            </form>
        </Dialog>

        <div class="card-item large-card">
            <div class="table-header">
                <h3>Входящие и исходящие заявки</h3>

                <Button label="Создать обращение" icon="pi pi-plus" size="small" class="create-btn"
                    @click="openCreateModal" />
            </div>

            <DataTable :value="requests" class="custom-table" responsiveLayout="scroll">
                <Column field="id" header="ID" class="col-id"></Column>
                <Column field="title" header="Тема обращения" class="col-title"></Column>
                <Column field="date" header="Дата создания" class="col-date"></Column>
                <Column field="status" header="Статус" class="col-status">
                    <template #body="slotProps">
                        <span :class="'status-tag ' + slotProps.data.statusType">
                            {{ slotProps.data.status }}
                        </span>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Select from 'primevue/select';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

interface RequestItem {
    id: string;
    title: string;
    date: string;
    status: string;
    statusType: 'success' | 'warn' | 'info';
}

const requests = ref<RequestItem[]>([
    { id: '#1024', title: 'Запрос на получение нового пропуска', date: '10.09.2026', status: 'Выполнено', statusType: 'success' },
    { id: '#1025', title: 'Заявление на ежегодный трудовой отпуск', date: '09.09.2026', status: 'На рассмотрении', statusType: 'warn' },
    { id: '#1026', title: 'Техническая заявка: Настройка корпоративной почты', date: '07.09.2026', status: 'В работе', statusType: 'info' },
]);

const isModalOpen = ref<boolean>(false);
const isSending = ref<boolean>(false);

const categories = ref<string[]>([
    'Заявление на ежегодный трудовой отпуск',
    'Техническая заявка: Настройка корпоративной почты',
    'Запрос документов / справок',
    'Техническая поддержка ИТ',
    'Хозяйственный отдел (Административный)',
    'Жалоба / Рацпредложение',
    'Запрос на получение нового пропуска'
]);

const newRequest = ref({
    category: '',
    title: '',
    description: ''
});

const openCreateModal = (): void => {
    newRequest.value = { category: '', title: '', description: '' };
    isModalOpen.value = true;
};

const submitRequest = (): void => {
    isSending.value = true;

    setTimeout(() => {
        isSending.value = false;
        isModalOpen.value = false;

        const newId = '#' + (Math.floor(Math.random() * 900) + 1100);
        const currentDate = new Date().toLocaleDateString('ru-RU');

        requests.value.unshift({
            id: newId,
            title: `${newRequest.value.category}: ${newRequest.value.title}`,
            date: currentDate,
            status: 'На рассмотрении',
            statusType: 'warn'
        });

        toast.add({
            severity: 'success',
            summary: 'Обращение отправлено',
            detail: `Ваша заявка зарегистрирована под номером ${newId}`,
            life: 4000
        });
    }, 1200);
};
</script>

<style scoped>
.table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.table-header h3 {
    margin: 0;
    font-size: 1.15rem;
}

.col-id {
    width: 10%;
}

.col-title {
    width: 45%;
}

.col-date {
    width: 25%;
}

.col-status {
    width: 20%;
}

.status-tag {
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 600;
    white-space: nowrap;
}

.status-tag.success {
    background-color: #def7ec;
    color: #03543f;
}

.status-tag.warn {
    background-color: #fef3c7;
    color: #92400e;
}

.status-tag.info {
    background-color: #e1effe;
    color: #1e429f;
}

.dialog-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 8px;
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

.custom-textarea {
    resize: none;
    font-family: inherit;
}

.dialog-actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 12px;
}

.w-full {
    width: 100% !important;
    max-width: 100%;
    box-sizing: border-box;
}

:deep(.p-select-label) {
    padding: 10px 14px !important;
    font-size: 0.9rem;
}

:deep(.p-select-overlay) {
    max-width: 90vw !important;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08) !important;
}

:deep(.p-select-option) {
    padding: 10px 14px !important;
    font-size: 0.85rem;
    white-space: normal !important;
    word-break: break-word;
    line-height: 1.3;
}

:deep(.p-select-list) {
    padding: 4px 0 !important;
}

:deep(.p-select-label) {
    padding: 8px 12px !important;
    font-size: 0.9rem;
}

.table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    gap: 16px;
}

.table-header h3 {
    margin: 0;
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--p-text-color);
}

@media (max-width: 560px) {
    .table-header {
        flex-direction: column;
        align-items: stretch;
        gap: 12px;
        margin-bottom: 16px;
    }

    .table-header h3 {
        font-size: 1rem;
        text-align: left;
    }

    :deep(.p-button).create-btn {
        width: 100% !important;
        justify-content: center;
        padding: 10px 16px !important;
        font-size: 0.85rem !important;
    }

    :deep(.p-button).create-btn {
        padding: 6px 12px !important;
        font-size: 0.8rem !important;
    }

    .custom-table :deep(.p-datatable-thead > tr > th),
    .custom-table :deep(.p-datatable-tbody > tr > td) {
        font-size: 0.75rem !important;
        padding: 8px 6px !important;
    }

    .status-tag {
        font-size: 0.7rem;
        padding: 2px 4px;
    }
}
</style>