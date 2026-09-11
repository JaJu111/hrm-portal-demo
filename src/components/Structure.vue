<template>
    <div class="structure-page">
        <div class="card-item large-card">
            <div class="card-header-info">
                <h3>Организационная структура правления</h3>
                <p>Иерархическое дерево подразделений и филиалов организации.</p>
            </div>

            <Tree :value="nodes" class="w-full custom-tree" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Tree from 'primevue/tree';

interface TreeNode {
    key: string;
    label: string;
    icon?: string;
    children?: TreeNode[];
}

const nodes = ref<TreeNode[]>([
    {
        key: '0',
        label: 'Головной Офис (Правление Банка)',
        icon: 'pi pi-home',
        children: [
            {
                key: '0-0',
                label: 'Департамент IT и разработки',
                icon: 'pi pi-code',
                children: [
                    { key: '0-0-0', label: 'Отдел фронтенд разработки', icon: 'pi pi-desktop' },
                    { key: '0-0-1', label: 'Отдел системного администрирования', icon: 'pi pi-server' }
                ]
            },
            {
                key: '0-1',
                label: 'Служба Управления Персоналом (HR)',
                icon: 'pi pi-users'
            },
            {
                key: '0-2',
                label: 'Финансово-аналитический департамент',
                icon: 'pi pi-percentage'
            }
        ]
    }
]);
</script>

<style scoped>
.card-header-info h3 {
    margin: 0 0 6px 0;
    font-size: 1.15rem;
}

.card-header-info p {
    margin: 0 0 20px 0;
    font-size: 0.85rem;
    color: var(--p-text-muted-color);
}

.custom-tree {
    border: none !important;
    padding: 0 !important;
    background: transparent !important;
}
</style>