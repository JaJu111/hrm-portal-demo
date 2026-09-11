<!-- src/views/RequestsView.vue -->
<template>
    <div class="requests-page">
        <div class="card-item large-card">
            <div class="table-header">
                <h3>Входящие и исходящие заявки</h3>
                <Button label="Создать обращение" icon="pi pi-plus" size="small" class="create-btn" />
            </div>

            <!-- Возвращаем стандартный scroll-режим -->
            <DataTable :value="requests" class="custom-table" responsiveLayout="scroll">
                <Column field="id" header="ID" style="width: 10%"></Column>
                <Column field="title" header="Тема обращения" style="width: 45%"></Column>
                <Column field="date" header="Дата создания" style="width: 25%"></Column>
                <Column field="status" header="Статус" style="width: 20%">
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

.status-tag {
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 600;
    white-space: nowrap;
    /* Чтобы статус не переносился на две строки */
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

/* --- ЧИСТАЯ АДАПТАЦИЯ ЧЕРЕЗ FONT-SIZE И ОТСТУПЫ (560px) --- */
@media (max-width: 560px) {
    .table-header h3 {
        font-size: 0.95rem;
        /* Уменьшаем заголовок страницы */
    }

    :deep(.p-button).create-btn {
        padding: 6px 12px !important;
        /* Уменьшаем кнопку */
        font-size: 0.8rem !important;
    }

    /* Уменьшаем размер шрифта текста и заголовков внутри всей таблицы */
    .custom-table :deep(.p-datatable-thead > tr > th),
    .custom-table :deep(.p-datatable-tbody > tr > td) {
        font-size: 0.75rem !important;
        padding: 8px 6px !important;
        /* Сужаем ячейки, чтобы всё влезло */
    }

    .status-tag {
        font-size: 0.7rem;
        padding: 2px 4px;
    }
}
</style>