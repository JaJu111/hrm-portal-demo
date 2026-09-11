<template>
    <div class="documents-page">
        <div class="dashboard-grid">
            <div v-for="doc in documents" :key="doc.name" class="card-item doc-card">
                <div class="doc-icon-wrapper">
                    <i class="pi pi-file-pdf text-red-500" style="font-size: 2rem;"></i>
                </div>
                <div class="doc-info">
                    <h4>{{ doc.name }}</h4>
                    <p>{{ doc.size }} • {{ doc.date }}</p>
                </div>
                <Button icon="pi pi-download" variant="text" severity="secondary" rounded />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';

interface DocumentItem {
    name: string;
    size: string;
    date: string;
}

const documents = ref<DocumentItem[]>([
    { name: 'Внутренний распорядок банка 2026.pdf', size: '2.4 MB', date: '01.01.2026' },
    { name: 'Положение о департаменте IT.pdf', size: '1.1 MB', date: '14.05.2025' },
    { name: 'Инструкция по информационной безопасности.pdf', size: '4.8 MB', date: '19.08.2026' },
]);
</script>

<style scoped>
.doc-card {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px !important;
}

.doc-icon-wrapper {
    background-color: var(--p-surface-100);
    width: 48px;
    height: 48px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.doc-info {
    flex: 1;
}

.doc-info h4 {
    margin: 0 0 4px 0;
    font-size: 0.95rem;
}

.doc-info p {
    margin: 0;
    font-size: 0.8rem;
    color: var(--p-text-muted-color);
}
</style>