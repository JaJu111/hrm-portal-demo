```vue
<template>
    <div class="documents-page">
        <!-- TOAST -->
        <Toast />

        <!-- =========================
             PAGE HEADER
        ========================== -->
        <div class="page-header">
            <div>
                <div class="page-title-row">
                    <div class="page-title-icon">
                        <i class="pi pi-folder-open"></i>
                    </div>

                    <div>
                        <h1>Документы</h1>

                        <p>
                            Внутренние документы, положения и инструкции банка
                        </p>
                    </div>
                </div>
            </div>

            <Tag
                :value="`${documents.length} документов`"
                icon="pi pi-file"
                severity="secondary"
            />
        </div>

        <!-- =========================
             TOOLBAR
        ========================== -->
        <div class="toolbar">
            <IconField class="search-field">
                <InputIcon class="pi pi-search" />

                <InputText
                    v-model="searchQuery"
                    placeholder="Поиск документов..."
                />
            </IconField>

            <!-- FILE INPUT -->
            <input
                ref="fileInput"
                type="file"
                hidden
                accept=".pdf,.doc,.docx,.xls,.xlsx"
                @change="handleFileUpload"
            />

            <!-- UPLOAD BUTTON -->
            <Button
                label="Загрузить документ"
                icon="pi pi-upload"
                severity="primary"
                :loading="isUploading"
                @click="openFilePicker"
            />
        </div>

        <!-- =========================
             DOCUMENTS
        ========================== -->
        <div
            v-if="filteredDocuments.length > 0"
            class="dashboard-grid"
        >
            <div
                v-for="doc in filteredDocuments"
                :key="doc.id"
                class="card-item doc-card"
            >
                <!-- ICON -->
                <div
                    class="doc-icon-wrapper"
                    :class="getFileTypeClass(doc.type)"
                >
                    <i :class="getFileIcon(doc.type)"></i>
                </div>

                <!-- INFO -->
                <div class="doc-info">
                    <h4 :title="doc.name">
                        {{ doc.name }}
                    </h4>

                    <div class="doc-meta">
                        <span>
                            {{ doc.size }}
                        </span>

                        <span class="meta-separator">
                            •
                        </span>

                        <span>
                            {{ doc.date }}
                        </span>
                    </div>

                    <div class="doc-category">
                        <Tag
                            :value="doc.category"
                            severity="secondary"
                        />
                    </div>
                </div>

                <!-- ACTIONS -->
                <div class="doc-actions">
                    <Button
                        icon="pi pi-download"
                        variant="text"
                        severity="secondary"
                        rounded
                        aria-label="Скачать документ"
                        v-tooltip="'Скачать документ'"
                        @click="downloadDocument(doc)"
                    />

                    <Button
                        icon="pi pi-ellipsis-v"
                        variant="text"
                        severity="secondary"
                        rounded
                        aria-label="Дополнительные действия"
                        v-tooltip="'Дополнительные действия'"
                        @click="showDocumentInfo(doc)"
                    />
                </div>
            </div>
        </div>

        <!-- =========================
             EMPTY STATE
        ========================== -->
        <div
            v-else
            class="empty-state"
        >
            <div class="empty-icon">
                <i class="pi pi-file"></i>
            </div>

            <h3>
                Документы не найдены
            </h3>

            <p>
                Попробуйте изменить поисковый запрос.
            </p>
        </div>

        <!-- =========================
             DOCUMENT INFO DIALOG
        ========================== -->
        <Dialog
            v-model:visible="documentInfoVisible"
            modal
            header="Информация о документе"
            :style="{ width: '34rem', maxWidth: '92vw' }"
        >
            <div
                v-if="selectedDocument"
                class="document-details"
            >
                <div
                    class="details-file-icon"
                    :class="getFileTypeClass(selectedDocument.type)"
                >
                    <i :class="getFileIcon(selectedDocument.type)"></i>
                </div>

                <div class="details-info">
                    <h3>
                        {{ selectedDocument.name }}
                    </h3>

                    <div class="details-row">
                        <span>Номер документа</span>
                        <strong>{{ selectedDocument.id }}</strong>
                    </div>

                    <div class="details-row">
                        <span>Размер</span>
                        <strong>{{ selectedDocument.size }}</strong>
                    </div>

                    <div class="details-row">
                        <span>Дата</span>
                        <strong>{{ selectedDocument.date }}</strong>
                    </div>

                    <div class="details-row">
                        <span>Категория</span>
                        <Tag
                            :value="selectedDocument.category"
                            severity="secondary"
                        />
                    </div>
                </div>
            </div>

            <div class="details-actions">
                <Button
                    label="Закрыть"
                    severity="secondary"
                    variant="text"
                    size="small"
                    @click="documentInfoVisible = false"
                />

                <Button
                    label="Скачать"
                    icon="pi pi-download"
                    size="small"
                    @click="downloadDocument(selectedDocument)"
                />
            </div>
        </Dialog>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import Button from 'primevue/button';
import Tag from 'primevue/tag';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Toast from 'primevue/toast';
import Dialog from 'primevue/dialog';

import { useToast } from 'primevue/usetoast';

interface DocumentItem {
    id: string;
    name: string;
    size: string;
    date: string;
    type: 'pdf' | 'doc' | 'xls';
    category: string;
    file?: File;
}

const toast = useToast();

const searchQuery = ref('');

const fileInput = ref<HTMLInputElement | null>(null);

const isUploading = ref(false);

const documentInfoVisible = ref(false);

const selectedDocument = ref<DocumentItem | null>(null);

/* =========================
   DOCUMENTS
========================= */

const documents = ref<DocumentItem[]>([
    {
        id: 'DOC-001',
        name: 'Внутренний распорядок банка 2026.pdf',
        size: '2.4 MB',
        date: '01.01.2026',
        type: 'pdf',
        category: 'Внутренние документы'
    },
    {
        id: 'DOC-002',
        name: 'Положение о департаменте IT.pdf',
        size: '1.1 MB',
        date: '14.05.2025',
        type: 'pdf',
        category: 'Положения'
    },
    {
        id: 'DOC-003',
        name: 'Инструкция по информационной безопасности.pdf',
        size: '4.8 MB',
        date: '19.08.2026',
        type: 'pdf',
        category: 'Инструкции'
    },
    {
        id: 'DOC-004',
        name: 'Регламент кадрового администрирования.pdf',
        size: '3.2 MB',
        date: '12.03.2026',
        type: 'pdf',
        category: 'HR-документы'
    },
    {
        id: 'DOC-005',
        name: 'Положение об оплате труда.pdf',
        size: '2.7 MB',
        date: '10.02.2026',
        type: 'pdf',
        category: 'HR-документы'
    },
    {
        id: 'DOC-006',
        name: 'Правила использования корпоративных систем.pdf',
        size: '1.8 MB',
        date: '05.06.2026',
        type: 'pdf',
        category: 'IT-документы'
    },
    {
        id: 'DOC-007',
        name: 'Структура подразделений банка.pdf',
        size: '5.1 MB',
        date: '25.08.2026',
        type: 'pdf',
        category: 'Организационные документы'
    },
    {
        id: 'DOC-008',
        name: 'Политика информационной безопасности.pdf',
        size: '3.9 MB',
        date: '28.08.2026',
        type: 'pdf',
        category: 'Информационная безопасность'
    }
]);

/* =========================
   SEARCH
========================= */

const filteredDocuments = computed(() => {
    const query = searchQuery.value
        .trim()
        .toLowerCase();

    if (!query) {
        return documents.value;
    }

    return documents.value.filter((document) =>
        [
            document.name,
            document.category,
            document.type
        ].some((value) =>
            value.toLowerCase().includes(query)
        )
    );
});

/* =========================
   OPEN FILE PICKER
========================= */

function openFilePicker(): void {
    fileInput.value?.click();
}

/* =========================
   UPLOAD FILE
========================= */

function handleFileUpload(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
        return;
    }

    const file = input.files[0];

    /* -------------------------
       CHECK FILE FORMAT
    ------------------------- */

    const extension = file.name
        .split('.')
        .pop()
        ?.toLowerCase();

    const allowedExtensions = [
        'pdf',
        'doc',
        'docx',
        'xls',
        'xlsx'
    ];

    if (
        !extension ||
        !allowedExtensions.includes(extension)
    ) {
        toast.add({
            severity: 'error',
            summary: 'Неподдерживаемый формат',
            detail:
                'Разрешены только PDF, Word и Excel документы.',
            life: 4000
        });

        input.value = '';

        return;
    }

    /* -------------------------
       CHECK FILE SIZE
       MAX 20 MB
    ------------------------- */

    const maxFileSize = 20 * 1024 * 1024;

    if (file.size > maxFileSize) {
        toast.add({
            severity: 'error',
            summary: 'Файл слишком большой',
            detail:
                'Максимальный размер документа — 20 MB.',
            life: 4000
        });

        input.value = '';

        return;
    }

    /* -------------------------
       UPLOAD ANIMATION
    ------------------------- */

    isUploading.value = true;

    setTimeout(() => {
        const newDocument: DocumentItem = {
            id: generateDocumentId(),
            name: file.name,
            size: formatFileSize(file.size),
            date: new Date().toLocaleDateString('ru-RU'),
            type: getDocumentType(extension),
            category: 'Загруженные документы',
            file
        };

        documents.value.unshift(newDocument);

        isUploading.value = false;

        toast.add({
            severity: 'success',
            summary: 'Документ загружен',
            detail:
                `Документ «${file.name}» успешно добавлен.`,
            life: 4000
        });

        input.value = '';
    }, 700);
}

/* =========================
   GENERATE DOCUMENT ID
========================= */

function generateDocumentId(): string {
    const number = documents.value.length + 1;

    return `DOC-${String(number).padStart(3, '0')}`;
}

/* =========================
   FORMAT FILE SIZE
========================= */

function formatFileSize(size: number): string {
    if (size < 1024) {
        return `${size} B`;
    }

    if (size < 1024 * 1024) {
        return `${(size / 1024).toFixed(1)} KB`;
    }

    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

/* =========================
   GET DOCUMENT TYPE
========================= */

function getDocumentType(
    extension: string
): DocumentItem['type'] {
    switch (extension) {
        case 'pdf':
            return 'pdf';

        case 'doc':
        case 'docx':
            return 'doc';

        case 'xls':
        case 'xlsx':
            return 'xls';

        default:
            return 'pdf';
    }
}

/* =========================
   FILE ICON
========================= */

function getFileIcon(
    type: DocumentItem['type']
): string {
    switch (type) {
        case 'pdf':
            return 'pi pi-file-pdf';

        case 'doc':
            return 'pi pi-file-word';

        case 'xls':
            return 'pi pi-file-excel';

        default:
            return 'pi pi-file';
    }
}

/* =========================
   FILE TYPE CLASS
========================= */

function getFileTypeClass(
    type: DocumentItem['type']
): string {
    switch (type) {
        case 'pdf':
            return 'file-pdf';

        case 'doc':
            return 'file-doc';

        case 'xls':
            return 'file-xls';

        default:
            return 'file-default';
    }
}

/* =========================
   DOCUMENT DETAILS
========================= */

function showDocumentInfo(
    document: DocumentItem
): void {
    selectedDocument.value = document;

    documentInfoVisible.value = true;
}

/* =========================
   DOWNLOAD
========================= */

function downloadDocument(
    document: DocumentItem | null
): void {
    if (!document) {
        return;
    }

    /*
     * Если файл был выбран пользователем
     * через input type="file", создаём временную
     * ссылку и запускаем скачивание.
     */

    if (document.file) {
        const url = URL.createObjectURL(
            document.file
        );

        const link = window.document.createElement('a');

        link.href = url;
        link.download = document.file.name;

        window.document.body.appendChild(link);

        link.click();

        window.document.body.removeChild(link);

        URL.revokeObjectURL(url);

        toast.add({
            severity: 'success',
            summary: 'Загрузка документа',
            detail:
                `Документ «${document.name}» скачивается.`,
            life: 3000
        });

        return;
    }

    /*
     * Для demo-документов пока показываем сообщение.
     * После подключения API здесь будет реальный URL файла.
     */

    toast.add({
        severity: 'info',
        summary: 'Документ',
        detail:
            'Скачивание будет доступно после подключения файлового хранилища.',
        life: 3500
    });
}
</script>

<style scoped>
/* =========================
   PAGE
========================= */

.documents-page {
    width: 100%;
    background: #f8fafc;
}

/* =========================
   HEADER
========================= */

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

.page-title-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 46px;
    height: 46px;

    flex-shrink: 0;

    border-radius: 12px;

    background: #eff6ff;
    color: #2563eb;

    font-size: 21px;
}

.page-header h1 {
    margin: 0;

    color: #111827;

    font-size: 24px;
    font-weight: 700;

    line-height: 1.25;
}

.page-header p {
    margin: 5px 0 0;

    color: #6b7280;

    font-size: 14px;
}

/* =========================
   TOOLBAR
========================= */

.toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 16px;

    margin-bottom: 16px;
    padding: 14px 16px;

    border: 1px solid #e5e7eb;
    border-radius: 12px;

    background: #ffffff;
}

.search-field {
    width: 360px;
}

.search-field :deep(.p-inputtext) {
    width: 100%;
    height: 40px;

    border-color: #e5e7eb;

    font-size: 14px;
}

/* =========================
   DOCUMENT GRID
========================= */

.dashboard-grid {
    display: grid;

    grid-template-columns:
        repeat(2, minmax(0, 1fr));

    gap: 16px;
}

.card-item {
    border: 1px solid #e5e7eb;
    border-radius: 14px;

    background: #ffffff;

    box-shadow:
        0 1px 2px rgb(15 23 42 / 0.03),
        0 4px 12px rgb(15 23 42 / 0.025);
}

/* =========================
   DOCUMENT CARD
========================= */

.doc-card {
    display: flex;
    align-items: center;

    gap: 15px;

    min-width: 0;

    padding: 16px;

    transition:
        border-color 0.15s ease,
        box-shadow 0.15s ease,
        transform 0.15s ease;
}

.doc-card:hover {
    border-color: #dbeafe;

    box-shadow:
        0 4px 12px rgb(15 23 42 / 0.06);

    transform: translateY(-1px);
}

/* =========================
   DOCUMENT ICON
========================= */

.doc-icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;

    flex-shrink: 0;

    border: 1px solid transparent;
    border-radius: 10px;

    font-size: 21px;
}

.file-pdf {
    background: #fef2f2;

    border-color: #fee2e2;

    color: #dc2626;
}

.file-doc {
    background: #eff6ff;

    border-color: #dbeafe;

    color: #2563eb;
}

.file-xls {
    background: #f0fdf4;

    border-color: #dcfce7;

    color: #16a34a;
}

.file-default {
    background: #f8fafc;

    border-color: #e2e8f0;

    color: #64748b;
}

/* =========================
   DOCUMENT INFO
========================= */

.doc-info {
    flex: 1;

    min-width: 0;
}

.doc-info h4 {
    margin: 0 0 5px;

    overflow: hidden;

    color: #1f2937;

    font-size: 14px;
    font-weight: 600;

    line-height: 20px;

    text-overflow: ellipsis;
    white-space: nowrap;
}

.doc-meta {
    display: flex;
    align-items: center;

    gap: 6px;

    color: #94a3b8;

    font-size: 11px;
}

.meta-separator {
    color: #cbd5e1;
}

.doc-category {
    margin-top: 8px;
}

.doc-category :deep(.p-tag) {
    padding: 3px 7px;

    font-size: 10px;
}

/* =========================
   DOCUMENT ACTIONS
========================= */

.doc-actions {
    display: flex;
    align-items: center;

    gap: 2px;

    flex-shrink: 0;
}

/* =========================
   EMPTY STATE
========================= */

.empty-state {
    display: flex;

    flex-direction: column;

    align-items: center;
    justify-content: center;

    min-height: 360px;

    padding: 40px;

    border: 1px solid #e5e7eb;

    border-radius: 14px;

    background: #ffffff;

    text-align: center;
}

.empty-icon {
    display: flex;

    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;

    margin-bottom: 16px;

    border-radius: 14px;

    background: #f8fafc;

    color: #94a3b8;

    font-size: 24px;
}

.empty-state h3 {
    margin: 0;

    color: #334155;

    font-size: 16px;
}

.empty-state p {
    margin: 7px 0 0;

    color: #94a3b8;

    font-size: 13px;
}

/* =========================
   DOCUMENT DETAILS
========================= */

.document-details {
    display: flex;

    gap: 18px;

    padding-top: 5px;
}

.details-file-icon {
    display: flex;

    align-items: center;
    justify-content: center;

    width: 58px;
    height: 58px;

    flex-shrink: 0;

    border-radius: 12px;

    font-size: 24px;
}

.details-info {
    flex: 1;

    min-width: 0;
}

.details-info h3 {
    margin: 0 0 18px;

    color: #1f2937;

    font-size: 16px;
    font-weight: 600;

    line-height: 1.4;

    word-break: break-word;
}

.details-row {
    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 20px;

    padding: 10px 0;

    border-top: 1px solid #f1f5f9;
}

.details-row span {
    color: #94a3b8;

    font-size: 12px;
}

.details-row strong {
    color: #334155;

    font-size: 12px;

    text-align: right;
}

.details-actions {
    display: flex;

    justify-content: flex-end;

    gap: 8px;

    margin-top: 24px;

    padding-top: 16px;

    border-top: 1px solid #e5e7eb;
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 1000px) {
    .dashboard-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .documents-page {
        padding: 16px;
    }

    .page-header {
        align-items: flex-start;

        flex-direction: column;
    }

    .toolbar {
        align-items: stretch;

        flex-direction: column;
    }

    .search-field {
        width: 100%;
    }

    .toolbar :deep(.p-button) {
        width: 100%;

        justify-content: center;
    }
}

@media (max-width: 560px) {
    .page-header h1 {
        font-size: 20px;
    }

    .page-title-icon {
        width: 40px;
        height: 40px;
    }

    .doc-card {
        align-items: flex-start;

        padding: 14px;
    }

    .doc-info h4 {
        white-space: normal;
    }

    .doc-actions {
        flex-direction: column;
    }

    .document-details {
        flex-direction: column;
    }

    .details-file-icon {
        width: 50px;
        height: 50px;
    }

    .details-row {
        align-items: flex-start;

        flex-direction: column;

        gap: 4px;
    }

    .details-row strong {
        text-align: left;
    }
}
</style>