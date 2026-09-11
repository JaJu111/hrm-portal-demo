```vue
<template>
    <div class="requests-page">
        <Toast />

        <!-- ==================== CREATE REQUEST DIALOG ==================== -->
        <Dialog v-model:visible="isModalOpen" modal header="Новое обращение в HR-отдел"
            :style="{ width: '34rem', maxWidth: '94vw' }" class="request-dialog" :autoFocus="false">
            <form @submit.prevent="submitRequest" class="dialog-form">
                <div class="form-field">
                    <label for="category">
                        Тип обращения
                        <span class="required">*</span>
                    </label>

                    <Select id="category" v-model="newRequest.category" :options="categories"
                        placeholder="Выберите тип обращения" required class="w-full" appendTo="self" />
                </div>

                <div class="form-field">
                    <label for="title">
                        Краткая тема обращения
                        <span class="required">*</span>
                    </label>

                    <InputText id="title" v-model="newRequest.title" placeholder="Например: Заявление на отпуск"
                        required class="w-full" />
                </div>

                <div class="form-field">
                    <label for="description">
                        Детали и комментарии
                    </label>

                    <Textarea id="description" v-model="newRequest.description" rows="5"
                        placeholder="Укажите подробности обращения, даты, причины и дополнительную информацию..."
                        class="w-full custom-textarea" />
                </div>

                <div class="attachment-info">
                    <i class="pi pi-paperclip"></i>

                    <div>
                        <strong>Вложения</strong>
                        <span>Добавление файлов будет доступно после подключения API</span>
                    </div>
                </div>

                <div class="dialog-actions">
                    <Button label="Отмена" severity="secondary" variant="text" size="small" type="button"
                        @click="isModalOpen = false" />

                    <Button type="submit" label="Отправить обращение" icon="pi pi-send" size="small"
                        :loading="isSending" />
                </div>
            </form>
        </Dialog>

        <!-- ==================== REQUEST DETAILS DIALOG ==================== -->
        <Dialog v-model:visible="detailsDialogVisible" modal header="Детали обращения"
            :style="{ width: '46rem', maxWidth: '94vw' }" class="details-dialog">
            <div v-if="selectedRequest" class="request-details">
                <!-- Header -->
                <div class="details-header">
                    <div>
                        <span class="request-number">
                            {{ selectedRequest.id }}
                        </span>

                        <h2>{{ selectedRequest.title }}</h2>

                        <div class="details-meta">
                            <span>
                                <i class="pi pi-calendar"></i>
                                {{ selectedRequest.date }}
                            </span>

                            <span>
                                <i class="pi pi-user"></i>
                                {{ selectedRequest.author }}
                            </span>

                            <span>
                                <i class="pi pi-folder"></i>
                                {{ selectedRequest.category }}
                            </span>
                        </div>
                    </div>

                    <span class="status-tag" :class="selectedRequest.statusType">
                        {{ selectedRequest.status }}
                    </span>
                </div>

                <Divider />

                <!-- Description -->
                <div class="details-section">
                    <div class="section-title">
                        <i class="pi pi-align-left"></i>
                        <span>Описание обращения</span>
                    </div>

                    <div class="description-box">
                        {{
                            selectedRequest.description ||
                            'Описание обращения не указано.'
                        }}
                    </div>
                </div>

                <!-- HR response -->
                <div class="details-section">
                    <div class="section-title">
                        <i class="pi pi-comment"></i>
                        <span>Ответ HR-отдела</span>
                    </div>

                    <div v-if="selectedRequest.response" class="response-box">
                        <div class="response-header">
                            <div class="response-avatar">
                                HR
                            </div>

                            <div>
                                <strong>HR-отдел</strong>
                                <span>
                                    {{ selectedRequest.responseDate }}
                                </span>
                            </div>
                        </div>

                        <p>{{ selectedRequest.response }}</p>
                    </div>

                    <div v-else class="empty-response">
                        <i class="pi pi-clock"></i>
                        <div>
                            <strong>Ответ пока не предоставлен</strong>
                            <span>
                                Обращение находится на рассмотрении.
                            </span>
                        </div>
                    </div>
                </div>

                <!-- History -->
                <div class="details-section">
                    <div class="section-title">
                        <i class="pi pi-history"></i>
                        <span>История обработки</span>
                    </div>

                    <div class="timeline">
                        <div v-for="(event, index) in selectedRequest.history" :key="index" class="timeline-item">
                            <div class="timeline-marker">
                                <i :class="event.icon"></i>
                            </div>

                            <div class="timeline-content">
                                <strong>{{ event.title }}</strong>
                                <span>{{ event.date }}</span>
                                <p v-if="event.description">
                                    {{ event.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div class="details-footer">
                    <Button label="Закрыть" severity="secondary" variant="text" size="small"
                        @click="detailsDialogVisible = false" />

                    <Button v-if="selectedRequest.status !== 'Выполнено'" label="Отменить обращение" icon="pi pi-times"
                        severity="danger" variant="outlined" size="small" @click="cancelRequest" />
                </div>
            </div>
        </Dialog>

        <!-- ==================== PAGE HEADER ==================== -->
        <div class="page-header">
            <div class="page-header-info">
                <div class="page-title-row">
                    <div class="page-icon">
                        <i class="pi pi-comments"></i>
                    </div>

                    <div>
                        <h1>Обращения</h1>

                        <p>
                            Создавайте обращения в HR-отдел и отслеживайте
                            статус их обработки
                        </p>
                    </div>
                </div>
            </div>

            <Button label="Новое обращение" icon="pi pi-plus" size="small" @click="openCreateModal" />
        </div>

        <!-- ==================== STATISTICS ==================== -->
        <div class="statistics-grid">
            <div class="stat-card">
                <div class="stat-icon total">
                    <i class="pi pi-list"></i>
                </div>

                <div class="stat-content">
                    <span>Всего обращений</span>
                    <strong>{{ requests.length }}</strong>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-icon pending">
                    <i class="pi pi-clock"></i>
                </div>

                <div class="stat-content">
                    <span>На рассмотрении</span>
                    <strong>{{ pendingCount }}</strong>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-icon progress">
                    <i class="pi pi-sync"></i>
                </div>

                <div class="stat-content">
                    <span>В работе</span>
                    <strong>{{ inProgressCount }}</strong>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-icon completed">
                    <i class="pi pi-check-circle"></i>
                </div>

                <div class="stat-content">
                    <span>Выполнено</span>
                    <strong>{{ completedCount }}</strong>
                </div>
            </div>
        </div>

        <!-- ==================== MAIN CARD ==================== -->
        <div class="card-item large-card">
            <!-- Toolbar -->
            <div class="table-toolbar">
                <div class="toolbar-left">
                    <h3>Мои обращения</h3>

                    <span class="requests-count">
                        {{ filteredRequests.length }}
                    </span>
                </div>

                <div class="toolbar-right">
                    <IconField class="search-field">
                        <InputIcon class="pi pi-search" />

                        <InputText v-model="searchQuery" placeholder="Поиск по обращениям..." />
                    </IconField>

                    <Select v-model="statusFilter" :options="statusOptions" optionLabel="label" optionValue="value"
                        placeholder="Все статусы" class="status-filter" />

                    <Select v-model="categoryFilter" :options="categoryOptions" placeholder="Все типы"
                        class="category-filter" />
                </div>
            </div>

            <!-- Table -->
            <DataTable :value="filteredRequests" class="custom-table" responsiveLayout="scroll" :rowHover="true"
                @row-click="onRowClick">
                <Column field="id" header="Номер" class="col-id">
                    <template #body="slotProps">
                        <button class="request-id" @click.stop="openDetails(slotProps.data)">
                            {{ slotProps.data.id }}
                        </button>
                    </template>
                </Column>

                <Column field="title" header="Обращение" class="col-title">
                    <template #body="slotProps">
                        <div class="request-title-cell">
                            <div class="request-type-icon">
                                <i :class="getCategoryIcon(slotProps.data.category)"></i>
                            </div>

                            <div>
                                <strong>{{ slotProps.data.title }}</strong>

                                <span>
                                    {{ slotProps.data.category }}
                                </span>
                            </div>
                        </div>
                    </template>
                </Column>

                <Column field="date" header="Дата" class="col-date" />

                <Column field="status" header="Статус" class="col-status">
                    <template #body="slotProps">
                        <span class="status-tag" :class="slotProps.data.statusType">
                            <i :class="getStatusIcon(slotProps.data.status)"></i>
                            {{ slotProps.data.status }}
                        </span>
                    </template>
                </Column>

                <Column header="" class="col-actions">
                    <template #body="slotProps">
                        <Button icon="pi pi-eye" severity="secondary" variant="text" rounded size="small"
                            aria-label="Открыть" @click.stop="openDetails(slotProps.data)" />
                    </template>
                </Column>

                <template #empty>
                    <div class="empty-state">
                        <div class="empty-icon">
                            <i class="pi pi-inbox"></i>
                        </div>

                        <h4>Обращения не найдены</h4>

                        <p>
                            Попробуйте изменить параметры поиска или фильтрации.
                        </p>
                    </div>
                </template>
            </DataTable>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Select from 'primevue/select';
import Toast from 'primevue/toast';
import Divider from 'primevue/divider';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';

import { useToast } from 'primevue/usetoast';

const toast = useToast();

interface RequestHistoryItem {
    title: string;
    date: string;
    description?: string;
    icon: string;
}

interface RequestItem {
    id: string;
    title: string;
    category: string;
    date: string;
    author: string;
    description: string;
    status: string;
    statusType: 'success' | 'warn' | 'info' | 'danger';
    response?: string;
    responseDate?: string;
    history: RequestHistoryItem[];
}

const requests = ref<RequestItem[]>([
    {
        id: '#1024',
        title: 'Запрос на получение нового пропуска',
        category: 'Запрос на получение нового пропуска',
        date: '10.09.2026',
        author: 'Жалолиддин Мусабаев',
        description:
            'Прошу оформить новый пропуск в связи с необходимостью доступа в административное здание банка.',
        status: 'Выполнено',
        statusType: 'success',
        response:
            'Пропуск оформлен. Вы можете получить его в административном отделе.',
        responseDate: '11.09.2026',
        history: [
            {
                title: 'Обращение создано',
                date: '10.09.2026, 09:42',
                description: 'Заявка зарегистрирована в системе.',
                icon: 'pi pi-plus-circle'
            },
            {
                title: 'Передано ответственному сотруднику',
                date: '10.09.2026, 10:15',
                description: 'Обращение направлено в административный отдел.',
                icon: 'pi pi-user'
            },
            {
                title: 'Обращение выполнено',
                date: '11.09.2026, 14:20',
                description: 'Пропуск оформлен.',
                icon: 'pi pi-check'
            }
        ]
    },

    {
        id: '#1025',
        title: 'Заявление на ежегодный трудовой отпуск',
        category: 'Заявление на ежегодный трудовой отпуск',
        date: '09.09.2026',
        author: 'Жалолиддин Мусабаев',
        description:
            'Прошу предоставить ежегодный трудовой отпуск продолжительностью 14 календарных дней.',
        status: 'На рассмотрении',
        statusType: 'warn',
        history: [
            {
                title: 'Обращение создано',
                date: '09.09.2026, 11:30',
                description: 'Заявка зарегистрирована в системе.',
                icon: 'pi pi-plus-circle'
            },
            {
                title: 'Передано в HR-отдел',
                date: '09.09.2026, 11:45',
                description: 'Заявление передано ответственному специалисту.',
                icon: 'pi pi-users'
            }
        ]
    },

    {
        id: '#1026',
        title: 'Настройка корпоративной почты',
        category: 'Техническая поддержка ИТ',
        date: '07.09.2026',
        author: 'Жалолиддин Мусабаев',
        description:
            'Необходимо проверить настройки корпоративной почты и устранить проблему с получением входящих сообщений.',
        status: 'В работе',
        statusType: 'info',
        history: [
            {
                title: 'Обращение создано',
                date: '07.09.2026, 15:10',
                description: 'Заявка зарегистрирована в системе.',
                icon: 'pi pi-plus-circle'
            },
            {
                title: 'Передано в ИТ-отдел',
                date: '07.09.2026, 15:20',
                description: 'Обращение передано техническому специалисту.',
                icon: 'pi pi-desktop'
            }
        ]
    },

    {
        id: '#1027',
        title: 'Запрос справки с места работы',
        category: 'Запрос документов / справок',
        date: '05.09.2026',
        author: 'Жалолиддин Мусабаев',
        description:
            'Прошу предоставить справку с места работы для предоставления по месту требования.',
        status: 'Выполнено',
        statusType: 'success',
        response:
            'Справка подготовлена и доступна для получения в HR-отделе.',
        responseDate: '06.09.2026',
        history: [
            {
                title: 'Обращение создано',
                date: '05.09.2026, 10:05',
                icon: 'pi pi-plus-circle'
            },
            {
                title: 'Документ подготовлен',
                date: '06.09.2026, 12:40',
                description: 'Справка подготовлена специалистом HR.',
                icon: 'pi pi-file'
            },
            {
                title: 'Обращение выполнено',
                date: '06.09.2026, 12:45',
                icon: 'pi pi-check'
            }
        ]
    }
]);

const categories = ref<string[]>([
    'Заявление на ежегодный трудовой отпуск',
    'Техническая заявка: Настройка корпоративной почты',
    'Запрос документов / справок',
    'Техническая поддержка ИТ',
    'Хозяйственный отдел (Административный)',
    'Жалоба / Рацпредложение',
    'Запрос на получение нового пропуска'
]);

const categoryOptions = computed(() => [
    'Все типы',
    ...categories.value
]);

const statusOptions = [
    {
        label: 'Все статусы',
        value: 'all'
    },
    {
        label: 'На рассмотрении',
        value: 'На рассмотрении'
    },
    {
        label: 'В работе',
        value: 'В работе'
    },
    {
        label: 'Выполнено',
        value: 'Выполнено'
    }
];

const searchQuery = ref('');
const statusFilter = ref('all');
const categoryFilter = ref('Все типы');

const isModalOpen = ref(false);
const isSending = ref(false);

const detailsDialogVisible = ref(false);
const selectedRequest = ref<RequestItem | null>(null);

const newRequest = ref({
    category: '',
    title: '',
    description: ''
});

/* ==================== STATISTICS ==================== */

const pendingCount = computed(() =>
    requests.value.filter(
        request => request.status === 'На рассмотрении'
    ).length
);

const inProgressCount = computed(() =>
    requests.value.filter(
        request => request.status === 'В работе'
    ).length
);

const completedCount = computed(() =>
    requests.value.filter(
        request => request.status === 'Выполнено'
    ).length
);

/* ==================== FILTER ==================== */

const filteredRequests = computed(() => {
    const query = searchQuery.value.trim().toLowerCase();

    return requests.value.filter(request => {
        const matchesSearch =
            !query ||
            request.id.toLowerCase().includes(query) ||
            request.title.toLowerCase().includes(query) ||
            request.category.toLowerCase().includes(query);

        const matchesStatus =
            statusFilter.value === 'all' ||
            request.status === statusFilter.value;

        const matchesCategory =
            categoryFilter.value === 'Все типы' ||
            request.category === categoryFilter.value;

        return matchesSearch && matchesStatus && matchesCategory;
    });
});

/* ==================== CREATE ==================== */

const openCreateModal = (): void => {
    newRequest.value = {
        category: '',
        title: '',
        description: ''
    };

    isModalOpen.value = true;
};

const submitRequest = (): void => {
    if (!newRequest.value.category || !newRequest.value.title) {
        toast.add({
            severity: 'warn',
            summary: 'Заполните обязательные поля',
            detail: 'Укажите тип и тему обращения.',
            life: 3500
        });

        return;
    }

    isSending.value = true;

    setTimeout(() => {
        isSending.value = false;
        isModalOpen.value = false;

        const newId =
            '#' + (Math.floor(Math.random() * 900) + 1100);

        const currentDate =
            new Date().toLocaleDateString('ru-RU');

        const request: RequestItem = {
            id: newId,
            title: newRequest.value.title,
            category: newRequest.value.category,
            date: currentDate,
            author: 'Жалолиддин Мусабаев',
            description:
                newRequest.value.description ||
                'Описание обращения не указано.',
            status: 'На рассмотрении',
            statusType: 'warn',
            history: [
                {
                    title: 'Обращение создано',
                    date: `${currentDate}, ${new Date().toLocaleTimeString(
                        'ru-RU',
                        {
                            hour: '2-digit',
                            minute: '2-digit'
                        }
                    )}`,
                    description:
                        'Заявка зарегистрирована в системе.',
                    icon: 'pi pi-plus-circle'
                }
            ]
        };

        requests.value.unshift(request);

        toast.add({
            severity: 'success',
            summary: 'Обращение отправлено',
            detail: `Ваша заявка зарегистрирована под номером ${newId}`,
            life: 4000
        });
    }, 1200);
};

/* ==================== DETAILS ==================== */

const openDetails = (request: RequestItem): void => {
    selectedRequest.value = request;
    detailsDialogVisible.value = true;
};

const onRowClick = (event: { data: RequestItem }): void => {
    openDetails(event.data);
};

const cancelRequest = (): void => {
    if (!selectedRequest.value) {
        return;
    }

    selectedRequest.value.status = 'Отменено';
    selectedRequest.value.statusType = 'danger';

    toast.add({
        severity: 'success',
        summary: 'Обращение отменено',
        detail: `Обращение ${selectedRequest.value.id} отменено.`,
        life: 3500
    });

    detailsDialogVisible.value = false;
};

/* ==================== HELPERS ==================== */

const getStatusIcon = (status: string): string => {
    switch (status) {
        case 'Выполнено':
            return 'pi pi-check-circle';

        case 'В работе':
            return 'pi pi-sync';

        case 'На рассмотрении':
            return 'pi pi-clock';

        case 'Отменено':
            return 'pi pi-times-circle';

        default:
            return 'pi pi-info-circle';
    }
};

const getCategoryIcon = (category: string): string => {
    if (category.includes('отпуск')) {
        return 'pi pi-calendar';
    }

    if (
        category.includes('ИТ') ||
        category.includes('почты') ||
        category.includes('Техническая')
    ) {
        return 'pi pi-desktop';
    }

    if (category.includes('документ')) {
        return 'pi pi-file';
    }

    if (category.includes('пропуск')) {
        return 'pi pi-id-card';
    }

    if (category.includes('Жалоба')) {
        return 'pi pi-exclamation-circle';
    }

    return 'pi pi-comments';
};
</script>

<style scoped>
/* =========================================================
   PAGE
========================================================= */

.requests-page {
    width: 100%;
    min-width: 0;
}

/* =========================================================
   PAGE HEADER
========================================================= */

.page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 24px;
}

.page-title-row {
    display: flex;
    align-items: center;
    gap: 14px;
}

.page-icon {
    width: 46px;
    height: 46px;
    flex-shrink: 0;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--p-primary-50);
    color: var(--p-primary-color);
    font-size: 1.2rem;
}

.page-header h1 {
    margin: 0 0 4px;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--p-text-color);
}

.page-header p {
    margin: 0;
    font-size: 0.88rem;
    color: var(--p-text-muted-color);
}

/* =========================================================
   STATISTICS
========================================================= */

.statistics-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 20px;
}

.stat-card {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 17px;
    background: var(--p-surface-0);
    border: 1px solid var(--p-surface-200);
    border-radius: 10px;
}

.stat-icon {
    width: 42px;
    height: 42px;
    flex-shrink: 0;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
}

.stat-icon.total {
    background: var(--p-primary-50);
    color: var(--p-primary-color);
}

.stat-icon.pending {
    background: #fff7ed;
    color: #c2410c;
}

.stat-icon.progress {
    background: #eff6ff;
    color: #2563eb;
}

.stat-icon.completed {
    background: #ecfdf5;
    color: #047857;
}

.stat-content {
    display: flex;
    flex-direction: column;
    gap: 3px;
}

.stat-content span {
    color: var(--p-text-muted-color);
    font-size: 0.78rem;
}

.stat-content strong {
    color: var(--p-text-color);
    font-size: 1.25rem;
    font-weight: 700;
}

/* =========================================================
   MAIN CARD
========================================================= */

.large-card {
    background: var(--p-surface-0);
    border: 1px solid var(--p-surface-200);
    border-radius: 12px;
    padding: 20px;
}

/* =========================================================
   TOOLBAR
========================================================= */

.table-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 18px;
}

.toolbar-left {
    display: flex;
    align-items: center;
    gap: 9px;
}

.toolbar-left h3 {
    margin: 0;
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--p-text-color);
}

.requests-count {
    min-width: 24px;
    height: 24px;
    padding: 0 7px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: var(--p-surface-100);
    color: var(--p-text-muted-color);
    font-size: 0.75rem;
    font-weight: 600;
}

.toolbar-right {
    display: flex;
    align-items: center;
    gap: 8px;
}

.search-field {
    width: 230px;
}

.search-field :deep(.p-inputtext) {
    width: 100%;
    font-size: 0.84rem;
}

.status-filter {
    width: 165px;
}

.category-filter {
    width: 210px;
}

/* =========================================================
   TABLE
========================================================= */

.custom-table {
    width: 100%;
}

.custom-table :deep(.p-datatable-thead > tr > th) {
    padding: 11px 12px;
    background: var(--p-surface-50);
    color: var(--p-text-muted-color);
    border-color: var(--p-surface-200);
    font-size: 0.76rem;
    font-weight: 600;
    text-transform: uppercase;
}

.custom-table :deep(.p-datatable-tbody > tr) {
    cursor: pointer;
    transition: background-color 0.15s ease;
}

.custom-table :deep(.p-datatable-tbody > tr > td) {
    padding: 13px 12px;
    border-color: var(--p-surface-100);
    font-size: 0.84rem;
}

.col-id {
    width: 9%;
}

.col-title {
    width: 48%;
}

.col-date {
    width: 14%;
}

.col-status {
    width: 20%;
}

.col-actions {
    width: 9%;
    text-align: right;
}

.request-id {
    border: 0;
    padding: 0;
    background: transparent;
    color: var(--p-primary-color);
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
}

.request-id:hover {
    text-decoration: underline;
}

/* =========================================================
   REQUEST TITLE
========================================================= */

.request-title-cell {
    display: flex;
    align-items: center;
    gap: 11px;
    min-width: 250px;
}

.request-type-icon {
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: var(--p-surface-100);
    color: var(--p-text-muted-color);
}

.request-title-cell>div:last-child {
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
}

.request-title-cell strong {
    color: var(--p-text-color);
    font-size: 0.84rem;
    font-weight: 600;
    line-height: 1.35;
}

.request-title-cell span {
    color: var(--p-text-muted-color);
    font-size: 0.72rem;
}

/* =========================================================
   STATUS
========================================================= */

.status-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 9px;
    border-radius: 6px;
    font-size: 0.73rem;
    font-weight: 600;
    white-space: nowrap;
}

.status-tag.success {
    background: #ecfdf5;
    color: #047857;
}

.status-tag.warn {
    background: #fffbeb;
    color: #b45309;
}

.status-tag.info {
    background: #eff6ff;
    color: #2563eb;
}

.status-tag.danger {
    background: #fef2f2;
    color: #b91c1c;
}

/* =========================================================
   EMPTY
========================================================= */

.empty-state {
    padding: 55px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.empty-icon {
    width: 52px;
    height: 52px;
    margin-bottom: 12px;
    border-radius: 50%;
    background: var(--p-surface-100);
    color: var(--p-text-muted-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
}

.empty-state h4 {
    margin: 0 0 5px;
    font-size: 0.95rem;
}

.empty-state p {
    margin: 0;
    color: var(--p-text-muted-color);
    font-size: 0.8rem;
}

/* =========================================================
   CREATE DIALOG
========================================================= */

.dialog-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 5px;
}

.form-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.form-field label {
    color: var(--p-text-color);
    font-size: 0.83rem;
    font-weight: 600;
}

.required {
    color: #dc2626;
}

.w-full {
    width: 100% !important;
}

.custom-textarea {
    resize: vertical;
    min-height: 110px;
    font-family: inherit;
}

.attachment-info {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 11px 12px;
    border: 1px dashed var(--p-surface-300);
    border-radius: 8px;
    background: var(--p-surface-50);
    color: var(--p-text-muted-color);
}

.attachment-info>i {
    font-size: 1rem;
}

.attachment-info div {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.attachment-info strong {
    color: var(--p-text-color);
    font-size: 0.78rem;
}

.attachment-info span {
    font-size: 0.7rem;
}

.dialog-actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
}

/* =========================================================
   DETAILS DIALOG
========================================================= */

.request-details {
    padding-top: 2px;
}

.details-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
}

.request-number {
    display: inline-block;
    margin-bottom: 7px;
    color: var(--p-primary-color);
    font-size: 0.78rem;
    font-weight: 700;
}

.details-header h2 {
    margin: 0 0 10px;
    font-size: 1.15rem;
    line-height: 1.35;
    color: var(--p-text-color);
}

.details-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.details-meta span {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: var(--p-text-muted-color);
    font-size: 0.72rem;
}

.details-meta i {
    font-size: 0.7rem;
}

.details-section {
    margin-top: 22px;
}

.section-title {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
    color: var(--p-text-color);
    font-size: 0.84rem;
    font-weight: 700;
}

.section-title i {
    color: var(--p-primary-color);
}

.description-box {
    padding: 13px 14px;
    border: 1px solid var(--p-surface-200);
    border-radius: 8px;
    background: var(--p-surface-50);
    color: var(--p-text-color);
    font-size: 0.82rem;
    line-height: 1.55;
}

/* =========================================================
   RESPONSE
========================================================= */

.response-box {
    padding: 14px;
    border: 1px solid var(--p-surface-200);
    border-radius: 8px;
    background: var(--p-surface-50);
}

.response-header {
    display: flex;
    align-items: center;
    gap: 9px;
    margin-bottom: 10px;
}

.response-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--p-primary-color);
    color: white;
    font-size: 0.68rem;
    font-weight: 700;
}

.response-header div:last-child {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.response-header strong {
    font-size: 0.78rem;
}

.response-header span {
    color: var(--p-text-muted-color);
    font-size: 0.68rem;
}

.response-box p {
    margin: 0;
    color: var(--p-text-color);
    font-size: 0.8rem;
    line-height: 1.5;
}

.empty-response {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 13px;
    border-radius: 8px;
    background: var(--p-surface-50);
    color: var(--p-text-muted-color);
}

.empty-response>i {
    font-size: 1.1rem;
}

.empty-response div {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.empty-response strong {
    color: var(--p-text-color);
    font-size: 0.78rem;
}

.empty-response span {
    font-size: 0.7rem;
}

/* =========================================================
   TIMELINE
========================================================= */

.timeline {
    position: relative;
    padding-left: 7px;
}

.timeline-item {
    position: relative;
    display: flex;
    gap: 12px;
    padding-bottom: 18px;
}

.timeline-item:last-child {
    padding-bottom: 0;
}

.timeline-item:not(:last-child)::before {
    content: '';
    position: absolute;
    left: 12px;
    top: 27px;
    bottom: 0;
    width: 1px;
    background: var(--p-surface-300);
}

.timeline-marker {
    position: relative;
    z-index: 1;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--p-primary-50);
    color: var(--p-primary-color);
    font-size: 0.68rem;
}

.timeline-content {
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding-top: 2px;
}

.timeline-content strong {
    color: var(--p-text-color);
    font-size: 0.78rem;
}

.timeline-content span {
    color: var(--p-text-muted-color);
    font-size: 0.68rem;
}

.timeline-content p {
    margin: 2px 0 0;
    color: var(--p-text-muted-color);
    font-size: 0.73rem;
    line-height: 1.4;
}

/* =========================================================
   DETAILS FOOTER
========================================================= */

.details-footer {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 24px;
    padding-top: 16px;
    border-top: 1px solid var(--p-surface-200);
}

/* =========================================================
   PRIMEVUE
========================================================= */

:deep(.p-select-label) {
    font-size: 0.82rem;
}

:deep(.p-inputtext) {
    font-size: 0.82rem;
}

:deep(.p-dialog-content) {
    padding-top: 0.5rem;
}

/* =========================================================
   TABLET
========================================================= */

@media (max-width: 1100px) {
    .statistics-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .table-toolbar {
        align-items: flex-start;
        flex-direction: column;
    }

    .toolbar-right {
        width: 100%;
    }

    .search-field {
        flex: 1;
        width: auto;
    }

    .status-filter,
    .category-filter {
        width: 180px;
    }
}

/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 700px) {
    .page-header {
        align-items: stretch;
        flex-direction: column;
        gap: 14px;
    }

    .page-header> :deep(.p-button) {
        width: 100%;
        justify-content: center;
    }

    .page-header h1 {
        font-size: 1.25rem;
    }

    .page-header p {
        font-size: 0.78rem;
        line-height: 1.4;
    }

    .statistics-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    .stat-card {
        padding: 12px;
        gap: 9px;
    }

    .stat-icon {
        width: 35px;
        height: 35px;
        font-size: 0.85rem;
    }

    .stat-content span {
        font-size: 0.68rem;
    }

    .stat-content strong {
        font-size: 1.05rem;
    }

    .large-card {
        padding: 13px;
    }

    .toolbar-right {
        display: grid;
        grid-template-columns: 1fr;
        gap: 8px;
    }

    .search-field,
    .status-filter,
    .category-filter {
        width: 100%;
    }

    .custom-table :deep(.p-datatable-thead > tr > th),
    .custom-table :deep(.p-datatable-tbody > tr > td) {
        padding: 9px 7px;
        font-size: 0.72rem;
    }

    .request-title-cell {
        min-width: 220px;
    }

    .request-type-icon {
        width: 31px;
        height: 31px;
    }

    .status-tag {
        font-size: 0.67rem;
        padding: 4px 6px;
    }

    .col-date {
        min-width: 95px;
    }

    .details-header {
        flex-direction: column;
        gap: 10px;
    }

    .details-header h2 {
        font-size: 1rem;
    }

    .details-meta {
        flex-direction: column;
        gap: 6px;
    }
}

@media (max-width: 450px) {
    .statistics-grid {
        grid-template-columns: 1fr 1fr;
    }

    .stat-card {
        align-items: flex-start;
        flex-direction: column;
    }

    .page-icon {
        width: 40px;
        height: 40px;
    }

    .page-header h1 {
        font-size: 1.1rem;
    }
}
</style>