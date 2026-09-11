<template>
    <div class="dashboard-grid">
        <div class="card-item small-card">
            <div class="card-header-inline">
                <h3 class="card-title">Штат сотрудников</h3>
                <i class="pi pi-users text-primary"></i>
            </div>
            <div class="metric-value">1,248 <span class="metric-trend positive">+4% <i
                        class="pi pi-arrow-up-right"></i></span></div>

            <div class="mt-3">
                <MeterGroup :value="staffDistribution" />
            </div>
        </div>

        <div class="card-item small-card">
            <div class="card-header-inline">
                <h3 class="card-title">Присутствие сегодня</h3>
                <i class="pi pi-clock text-success"></i>
            </div>
            <div class="metric-value">94.2% <span class="metric-label">от общего штата</span></div>

            <div class="attendance-list mt-3">
                <div class="attendance-item">
                    <span class="status-indicator online"></span>
                    <span class="status-label">В офисе / Удаленно</span>
                    <span class="status-count">1,176</span>
                </div>
                <div class="attendance-item">
                    <span class="status-indicator vacation"></span>
                    <span class="status-label">В отпуске</span>
                    <span class="status-count">42</span>
                </div>
                <div class="attendance-item">
                    <span class="status-indicator sick"></span>
                    <span class="status-label">Больничный</span>
                    <span class="status-count">30</span>
                </div>
            </div>
        </div>

        <div class="card-item large-card">
            <div class="card-header-inline mb-4">
                <div>
                    <h3 class="card-title m-0">Операционный центр HRM</h3>
                    <p class="card-subtitle">Быстрые действия и критические задачи департаментов</p>
                </div>
                <i class="pi pi-sliders-h text-muted"></i>
            </div>

            <div class="operations-grid">
                <div class="operation-block">
                    <h4 class="block-subtitle"><i class="pi pi-exclamation-circle text-warn mr-1"></i> Требует внимания
                    </h4>
                    <div class="task-strip">
                        <div class="task-info">
                            <span class="task-name">Утверждение отпуска (Солдатов А.)</span>
                            <span class="task-date">Истекает сегодня</span>
                        </div>
                        <Button label="Открыть" size="small" variant="outlined" severity="warn" />
                    </div>
                    <div class="task-strip">
                        <div class="task-info">
                            <span class="task-name">Анкета нового сотрудника (Джураев Ш.)</span>
                            <span class="task-date">Ожидает проверки ИТ</span>
                        </div>
                        <Button label="Открыть" size="small" variant="outlined" severity="secondary" />
                    </div>
                </div>

                <div class="operation-block quick-actions">
                    <h4 class="block-subtitle"><i class="pi pi-bolt text-primary mr-1"></i> Быстрые действия</h4>
                    <div class="actions-buttons-grid">
                        <Button label="Нанять сотрудника" icon="pi pi-user-plus" severity="primary"
                            class="w-full text-sm" />
                        <Button label="Создать приказ" icon="pi pi-file-edit" severity="secondary" variant="outlined"
                            class="w-full text-sm" />
                        <Button label="Экспорт отчетов" icon="pi pi-download" severity="secondary" variant="outlined"
                            class="w-full text-sm" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MeterGroup from 'primevue/metergroup';
import Button from 'primevue/button';

interface MeterItem {
    label: string;
    value: number;
    color: string;
}

const staffDistribution = ref<MeterItem[]>([
    { label: 'Головной офис', value: 45, color: '#6366f1' },
    { label: 'Филиалы Ритейл', value: 35, color: '#10b981' },
    { label: 'Бэк-офис', value: 20, color: '#f59e0b' }
]);
</script>

<style scoped>
.card-header-inline {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
}

.card-header-inline i {
    font-size: 1.25rem;
}

.card-subtitle {
    margin: 4px 0 0 0;
    font-size: 0.8rem;
    color: var(--p-text-muted-color);
}

.metric-value {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--p-text-color);
    display: flex;
    align-items: baseline;
    gap: 10px;
}

.metric-trend {
    font-size: 0.85rem;
    font-weight: 600;
    padding: 2px 6px;
    border-radius: 4px;
}

.metric-trend.positive {
    background-color: #def7ec;
    color: #03543f;
}

.metric-label {
    font-size: 0.8rem;
    color: var(--p-text-muted-color);
    font-weight: 400;
}

.attendance-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.attendance-item {
    display: flex;
    align-items: center;
    font-size: 0.85rem;
}

.status-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 8px;
}

.status-indicator.online {
    background-color: #10b981;
}

.status-indicator.vacation {
    background-color: #3b82f6;
}

.status-indicator.sick {
    background-color: #ef4444;
}

.status-label {
    flex: 1;
    color: var(--p-text-color);
}

.status-count {
    font-weight: 600;
    color: var(--p-text-muted-color);
}

.operations-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 24px;
}

.operation-block {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.block-subtitle {
    margin: 0 0 4px 0;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--p-text-color);
}

.task-strip {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--p-surface-50);
    border: 1px solid var(--p-surface-200);
    padding: 10px 14px;
    border-radius: 8px;
}

.task-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.task-name {
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--p-text-color);
}

.task-date {
    font-size: 0.75rem;
    color: var(--p-text-muted-color);
}

.actions-buttons-grid {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.w-full {
    width: 100% !important;
}

.mr-1 {
    margin-right: 0.25rem;
}

@media (max-width: 992px) {
    .operations-grid {
        grid-template-columns: 1fr;
    }
}
</style>