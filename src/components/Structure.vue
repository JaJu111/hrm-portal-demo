```vue
<script setup lang="ts">
import { computed, ref } from 'vue';

import Button from 'primevue/button';
import Tree from 'primevue/tree';
import Tag from 'primevue/tag';
import Divider from 'primevue/divider';
import Dialog from 'primevue/dialog';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';

interface BankTreeNode {
    key: string;
    label: string;
    icon?: string;
    type?: string;
    manager?: string;
    employees?: number;
    location?: string;
    children?: BankTreeNode[];
}

interface Employee {
    id: string;
    name: string;
    position: string;
    department: string;
    status: string;
}

const searchQuery = ref('');
const expandedKeys = ref<Record<string, boolean>>({});
const selectedKey = ref<string | null>(null);
const selectedNode = ref<BankTreeNode | null>(null);

const employeesDialogVisible = ref(false);
const detailsDialogVisible = ref(false);

const employees = ref<Employee[]>([
    {
        id: 'EMP-001',
        name: 'Жалолиддин Мусабаев',
        position: 'Frontend Developer',
        department: 'Отдел Frontend разработки',
        status: 'Активен'
    },
    {
        id: 'EMP-002',
        name: 'Алексей Петров',
        position: 'Senior Frontend Developer',
        department: 'Отдел Frontend разработки',
        status: 'Активен'
    },
    {
        id: 'EMP-003',
        name: 'Мария Иванова',
        position: 'QA Engineer',
        department: 'Отдел QA и тестирования',
        status: 'Активен'
    },
    {
        id: 'EMP-004',
        name: 'Дмитрий Соколов',
        position: 'Backend Developer',
        department: 'Отдел Backend разработки',
        status: 'В отпуске'
    },
    {
        id: 'EMP-005',
        name: 'Андрей Ким',
        position: 'Backend Developer',
        department: 'Отдел Backend разработки',
        status: 'Активен'
    },
    {
        id: 'EMP-006',
        name: 'Елена Смирнова',
        position: 'HR Specialist',
        department: 'Отдел кадров',
        status: 'Активен'
    },
    {
        id: 'EMP-007',
        name: 'Сергей Волков',
        position: 'System Administrator',
        department: 'Отдел системного администрирования',
        status: 'Активен'
    },
    {
        id: 'EMP-008',
        name: 'Ольга Назарова',
        position: 'HR Manager',
        department: 'Отдел подбора персонала',
        status: 'Активен'
    },
    {
        id: 'EMP-009',
        name: 'Иван Орлов',
        position: 'Financial Analyst',
        department: 'Отдел финансовой аналитики',
        status: 'Активен'
    },
    {
        id: 'EMP-010',
        name: 'Наталья Белова',
        position: 'Compliance Specialist',
        department: 'Служба комплаенс-контроля',
        status: 'Активен'
    }
]);

const nodes = ref<BankTreeNode[]>([
    {
        key: '0',
        label: 'Головной офис — Правление Банка',
        icon: 'pi pi-building-columns',
        type: 'Головной офис',
        manager: 'Председатель Правления',
        employees: 860,
        location: 'Ташкент',
        children: [
            {
                key: '0-0',
                label: 'Департамент информационных технологий',
                icon: 'pi pi-sitemap',
                type: 'Департамент',
                manager: 'Александр Иванов',
                employees: 128,
                location: 'Ташкент',
                children: [
                    {
                        key: '0-0-0',
                        label: 'Управление разработки ПО',
                        icon: 'pi pi-cog',
                        type: 'Управление',
                        manager: 'Руководитель управления',
                        employees: 46,
                        location: 'Ташкент',
                        children: [
                            {
                                key: '0-0-0-0',
                                label: 'Отдел Frontend разработки',
                                icon: 'pi pi-folder',
                                type: 'Отдел',
                                manager: 'Руководитель отдела',
                                employees: 14,
                                location: 'Ташкент'
                            },
                            {
                                key: '0-0-0-1',
                                label: 'Отдел Backend разработки',
                                icon: 'pi pi-folder',
                                type: 'Отдел',
                                manager: 'Руководитель отдела',
                                employees: 18,
                                location: 'Ташкент'
                            },
                            {
                                key: '0-0-0-2',
                                label: 'Отдел QA и тестирования',
                                icon: 'pi pi-folder',
                                type: 'Отдел',
                                manager: 'Руководитель отдела',
                                employees: 14,
                                location: 'Ташкент'
                            }
                        ]
                    },
                    {
                        key: '0-0-1',
                        label: 'Управление инфраструктуры',
                        icon: 'pi pi-cog',
                        type: 'Управление',
                        manager: 'Руководитель управления',
                        employees: 36,
                        location: 'Ташкент',
                        children: [
                            {
                                key: '0-0-1-0',
                                label: 'Отдел системного администрирования',
                                icon: 'pi pi-folder',
                                type: 'Отдел',
                                manager: 'Руководитель отдела',
                                employees: 16,
                                location: 'Ташкент'
                            },
                            {
                                key: '0-0-1-1',
                                label: 'Отдел сетевой инфраструктуры',
                                icon: 'pi pi-folder',
                                type: 'Отдел',
                                manager: 'Руководитель отдела',
                                employees: 12,
                                location: 'Ташкент'
                            },
                            {
                                key: '0-0-1-2',
                                label: 'Отдел технической поддержки',
                                icon: 'pi pi-folder',
                                type: 'Отдел',
                                manager: 'Руководитель отдела',
                                employees: 8,
                                location: 'Ташкент'
                            }
                        ]
                    },
                    {
                        key: '0-0-2',
                        label: 'Управление информационной безопасности',
                        icon: 'pi pi-cog',
                        type: 'Управление',
                        manager: 'Руководитель управления',
                        employees: 28,
                        location: 'Ташкент',
                        children: [
                            {
                                key: '0-0-2-0',
                                label: 'Отдел кибербезопасности',
                                icon: 'pi pi-folder',
                                type: 'Отдел',
                                manager: 'Руководитель отдела',
                                employees: 16,
                                location: 'Ташкент'
                            },
                            {
                                key: '0-0-2-1',
                                label: 'Отдел мониторинга и SOC',
                                icon: 'pi pi-folder',
                                type: 'Отдел',
                                manager: 'Руководитель отдела',
                                employees: 12,
                                location: 'Ташкент'
                            }
                        ]
                    }
                ]
            },
            {
                key: '0-1',
                label: 'Департамент управления персоналом',
                icon: 'pi pi-sitemap',
                type: 'Департамент',
                manager: 'Директор по персоналу',
                employees: 54,
                location: 'Ташкент',
                children: [
                    {
                        key: '0-1-0',
                        label: 'Управление кадрового администрирования',
                        icon: 'pi pi-cog',
                        type: 'Управление',
                        manager: 'Руководитель управления',
                        employees: 22,
                        location: 'Ташкент',
                        children: [
                            {
                                key: '0-1-0-0',
                                label: 'Отдел кадров',
                                icon: 'pi pi-folder',
                                type: 'Отдел',
                                manager: 'Руководитель отдела',
                                employees: 14,
                                location: 'Ташкент'
                            },
                            {
                                key: '0-1-0-1',
                                label: 'Отдел кадрового делопроизводства',
                                icon: 'pi pi-folder',
                                type: 'Отдел',
                                manager: 'Руководитель отдела',
                                employees: 8,
                                location: 'Ташкент'
                            }
                        ]
                    },
                    {
                        key: '0-1-1',
                        label: 'Управление обучения и развития',
                        icon: 'pi pi-cog',
                        type: 'Управление',
                        manager: 'Руководитель управления',
                        employees: 18,
                        location: 'Ташкент'
                    },
                    {
                        key: '0-1-2',
                        label: 'Отдел подбора персонала',
                        icon: 'pi pi-folder',
                        type: 'Отдел',
                        manager: 'Руководитель отдела',
                        employees: 14,
                        location: 'Ташкент'
                    }
                ]
            },
            {
                key: '0-2',
                label: 'Финансово-аналитический департамент',
                icon: 'pi pi-sitemap',
                type: 'Департамент',
                manager: 'Финансовый директор',
                employees: 76,
                location: 'Ташкент',
                children: [
                    {
                        key: '0-2-0',
                        label: 'Управление финансового планирования',
                        icon: 'pi pi-cog',
                        type: 'Управление',
                        manager: 'Руководитель управления',
                        employees: 28,
                        location: 'Ташкент'
                    },
                    {
                        key: '0-2-1',
                        label: 'Управление бухгалтерского учета',
                        icon: 'pi pi-cog',
                        type: 'Управление',
                        manager: 'Руководитель управления',
                        employees: 30,
                        location: 'Ташкент'
                    },
                    {
                        key: '0-2-2',
                        label: 'Отдел финансовой аналитики',
                        icon: 'pi pi-folder',
                        type: 'Отдел',
                        manager: 'Руководитель отдела',
                        employees: 18,
                        location: 'Ташкент'
                    }
                ]
            },
            {
                key: '0-3',
                label: 'Юридический департамент',
                icon: 'pi pi-sitemap',
                type: 'Департамент',
                manager: 'Директор юридического департамента',
                employees: 42,
                location: 'Ташкент',
                children: [
                    {
                        key: '0-3-0',
                        label: 'Управление правового сопровождения',
                        icon: 'pi pi-cog',
                        type: 'Управление',
                        manager: 'Руководитель управления',
                        employees: 24,
                        location: 'Ташкент'
                    },
                    {
                        key: '0-3-1',
                        label: 'Отдел договорной работы',
                        icon: 'pi pi-folder',
                        type: 'Отдел',
                        manager: 'Руководитель отдела',
                        employees: 18,
                        location: 'Ташкент'
                    }
                ]
            },
            {
                key: '0-4',
                label: 'Департамент риск-менеджмента',
                icon: 'pi pi-sitemap',
                type: 'Департамент',
                manager: 'Директор по рискам',
                employees: 38,
                location: 'Ташкент',
                children: [
                    {
                        key: '0-4-0',
                        label: 'Управление кредитных рисков',
                        icon: 'pi pi-cog',
                        type: 'Управление',
                        manager: 'Руководитель управления',
                        employees: 18,
                        location: 'Ташкент'
                    },
                    {
                        key: '0-4-1',
                        label: 'Управление операционных рисков',
                        icon: 'pi pi-cog',
                        type: 'Управление',
                        manager: 'Руководитель управления',
                        employees: 20,
                        location: 'Ташкент'
                    }
                ]
            },
            {
                key: '0-5',
                label: 'Служба комплаенс-контроля',
                icon: 'pi pi-shield',
                type: 'Служба',
                manager: 'Руководитель службы',
                employees: 25,
                location: 'Ташкент'
            },
            {
                key: '0-6',
                label: 'Региональная сеть',
                icon: 'pi pi-building',
                type: 'Региональная сеть',
                manager: 'Директор региональной сети',
                employees: 1450,
                location: 'Узбекистан',
                children: [
                    {
                        key: '0-6-0',
                        label: 'Ташкентский областной филиал',
                        icon: 'pi pi-building',
                        type: 'Филиал',
                        manager: 'Директор филиала',
                        employees: 280,
                        location: 'Ташкентская область'
                    },
                    {
                        key: '0-6-1',
                        label: 'Самаркандский филиал',
                        icon: 'pi pi-building',
                        type: 'Филиал',
                        manager: 'Директор филиала',
                        employees: 190,
                        location: 'Самарканд'
                    },
                    {
                        key: '0-6-2',
                        label: 'Бухарский филиал',
                        icon: 'pi pi-building',
                        type: 'Филиал',
                        manager: 'Директор филиала',
                        employees: 170,
                        location: 'Бухара'
                    },
                    {
                        key: '0-6-3',
                        label: 'Ферганский филиал',
                        icon: 'pi pi-building',
                        type: 'Филиал',
                        manager: 'Директор филиала',
                        employees: 180,
                        location: 'Фергана'
                    },
                    {
                        key: '0-6-4',
                        label: 'Наманганский филиал',
                        icon: 'pi pi-building',
                        type: 'Филиал',
                        manager: 'Директор филиала',
                        employees: 160,
                        location: 'Наманган'
                    },
                    {
                        key: '0-6-5',
                        label: 'Андижанский филиал',
                        icon: 'pi pi-building',
                        type: 'Филиал',
                        manager: 'Директор филиала',
                        employees: 170,
                        location: 'Андижан'
                    },
                    {
                        key: '0-6-6',
                        label: 'Кашкадарьинский филиал',
                        icon: 'pi pi-building',
                        type: 'Филиал',
                        manager: 'Директор филиала',
                        employees: 150,
                        location: 'Кашкадарья'
                    },
                    {
                        key: '0-6-7',
                        label: 'Сурхандарьинский филиал',
                        icon: 'pi pi-building',
                        type: 'Филиал',
                        manager: 'Директор филиала',
                        employees: 150,
                        location: 'Сурхандарья'
                    }
                ]
            }
        ]
    }
]);

const totalEmployees = computed(() => nodes.value[0]?.employees || 0);

const filteredNodes = computed(() => {
    const query = searchQuery.value.trim().toLowerCase();

    if (!query) {
        return nodes.value;
    }

    return filterTree(nodes.value, query);
});

const selectedNodeEmployees = computed(() => {
    if (!selectedNode.value) {
        return [];
    }

    const department = selectedNode.value.label;

    const result = employees.value.filter(
        employee => employee.department === department
    );

    if (result.length > 0) {
        return result;
    }

    return [
        {
            id: 'EMP-DEMO-001',
            name: 'Сотрудник подразделения',
            position: selectedNode.value.type || 'Специалист',
            department,
            status: 'Активен'
        },
        {
            id: 'EMP-DEMO-002',
            name: 'Сотрудник подразделения',
            position: 'Ведущий специалист',
            department,
            status: 'Активен'
        }
    ];
});

function filterTree(
    tree: BankTreeNode[],
    query: string
): BankTreeNode[] {
    const result: BankTreeNode[] = [];

    for (const node of tree) {
        const matches = node.label
            .toLowerCase()
            .includes(query);

        const children = node.children
            ? filterTree(node.children, query)
            : [];

        if (matches || children.length > 0) {
            result.push({
                ...node,
                children:
                    children.length > 0
                        ? children
                        : node.children
            });
        }
    }

    return result;
}

function onNodeSelect(node: BankTreeNode): void {
    selectedNode.value = node;
    selectedKey.value = node.key;
}

function expandAll(): void {
    const expanded: Record<string, boolean> = {};

    function expand(tree: BankTreeNode[]): void {
        tree.forEach(node => {
            if (node.children?.length) {
                expanded[node.key] = true;
                expand(node.children);
            }
        });
    }

    expand(nodes.value);

    expandedKeys.value = expanded;
}

function collapseAll(): void {
    expandedKeys.value = {};
}

function openEmployees(): void {
    if (!selectedNode.value) {
        return;
    }

    employeesDialogVisible.value = true;
}

function openDetails(): void {
    if (!selectedNode.value) {
        return;
    }

    detailsDialogVisible.value = true;
}

function getNodeTypeClass(node: BankTreeNode): string {
    switch (node.type) {
        case 'Головной офис':
            return 'type-head-office';

        case 'Департамент':
            return 'type-department';

        case 'Управление':
            return 'type-management';

        case 'Отдел':
            return 'type-section';

        case 'Служба':
            return 'type-service';

        case 'Филиал':
            return 'type-branch';

        case 'Региональная сеть':
            return 'type-network';

        default:
            return 'type-default';
    }
}

function getNodeLevel(node: BankTreeNode): string {
    switch (node.type) {
        case 'Головной офис':
            return 'Головной офис';

        case 'Департамент':
            return 'Департамент';

        case 'Управление':
            return 'Управление';

        case 'Отдел':
            return 'Отдел';

        case 'Служба':
            return 'Служба';

        case 'Филиал':
            return 'Филиал';

        case 'Региональная сеть':
            return 'Региональная сеть';

        default:
            return 'Подразделение';
    }
}

function getChildrenCount(node: BankTreeNode): number {
    return node.children?.length || 0;
}
</script>

<template>
    <div class="structure-page">
        <!-- HEADER -->
        <div class="page-header">
            <div>
                <div class="page-title-row">
                    <div class="page-title-icon">
                        <i class="pi pi-sitemap"></i>
                    </div>

                    <div>
                        <h1>Организационная структура</h1>

                        <p>
                            Структура подразделений и филиалов банка
                        </p>
                    </div>
                </div>
            </div>

            <Tag :value="`${totalEmployees.toLocaleString('ru-RU')} сотрудников`" icon="pi pi-users"
                severity="secondary" class="employee-total-tag" />
        </div>

        <!-- TOOLBAR -->
        <div class="toolbar">
            <IconField class="search-field">
                <InputIcon class="pi pi-search" />

                <InputText v-model="searchQuery" placeholder="Поиск подразделения..." />
            </IconField>

            <div class="toolbar-actions">
                <Button label="Раскрыть всё" icon="pi pi-plus" severity="secondary" text @click="expandAll" />

                <Button label="Свернуть всё" icon="pi pi-minus" severity="secondary" text @click="collapseAll" />
            </div>
        </div>

        <!-- MAIN -->
        <div class="structure-layout">
            <!-- TREE -->
            <div class="tree-card">
                <div class="card-header">
                    <div>
                        <h2>Структура банка</h2>

                        <p>
                            Подразделения, управления и филиальная сеть
                        </p>
                    </div>

                    <div class="tree-header-icon">
                        <i class="pi pi-sitemap"></i>
                    </div>
                </div>

                <Divider />

                <div class="tree-wrapper">
                    <Tree v-model:expandedKeys="expandedKeys" v-model:selectionKeys="selectedKey" :value="filteredNodes"
                        selection-mode="single" class="corporate-tree" @node-select="onNodeSelect">
                        <template #default="{ node }">
                            <div class="tree-node" :class="getNodeTypeClass(node)">
                                <div class="tree-node-main">
                                    <div class="tree-node-icon" :class="getNodeTypeClass(node)">
                                        <i :class="node.icon"></i>
                                    </div>

                                    <div class="tree-node-content">
                                        <div class="tree-node-title">
                                            {{ node.label }}
                                        </div>

                                        <div class="tree-node-meta">
                                            <span>
                                                {{ getNodeLevel(node) }}
                                            </span>

                                            <span v-if="node.location" class="meta-separator">
                                                •
                                            </span>

                                            <span v-if="node.location">
                                                {{ node.location }}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="tree-node-right">
                                    <span v-if="node.employees" class="employee-count">
                                        <i class="pi pi-users"></i>

                                        {{
                                            node.employees.toLocaleString(
                                                'ru-RU'
                                            )
                                        }}
                                    </span>

                                    <span v-if="getChildrenCount(node) > 0" class="children-count">
                                        {{
                                            getChildrenCount(node)
                                        }}
                                    </span>
                                </div>
                            </div>
                        </template>
                    </Tree>

                    <div v-if="filteredNodes.length === 0" class="empty-tree">
                        <i class="pi pi-search"></i>

                        <span>
                            Подразделение не найдено
                        </span>

                        <small>
                            Попробуйте изменить поисковый запрос
                        </small>
                    </div>
                </div>
            </div>

            <!-- DETAILS -->
            <div class="details-card">
                <div v-if="selectedNode" class="selected-node">
                    <div class="selected-node-header">
                        <div class="selected-node-icon" :class="getNodeTypeClass(
                            selectedNode
                        )
                            ">
                            <i :class="selectedNode.icon"></i>
                        </div>

                        <div class="selected-node-title">
                            <span class="selected-node-type">
                                {{ getNodeLevel(selectedNode) }}
                            </span>

                            <h2>
                                {{ selectedNode.label }}
                            </h2>
                        </div>
                    </div>

                    <Divider />

                    <div class="details-grid">
                        <div class="detail-item">
                            <span class="detail-label">
                                Руководитель
                            </span>

                            <div class="detail-value">
                                <i class="pi pi-user"></i>

                                {{
                                    selectedNode.manager ||
                                    'Не указан'
                                }}
                            </div>
                        </div>

                        <div class="detail-item">
                            <span class="detail-label">
                                Количество сотрудников
                            </span>

                            <div class="detail-value">
                                <i class="pi pi-users"></i>

                                {{
                                    selectedNode.employees?.toLocaleString(
                                        'ru-RU'
                                    ) || '0'
                                }}
                            </div>
                        </div>

                        <div class="detail-item">
                            <span class="detail-label">
                                Местоположение
                            </span>

                            <div class="detail-value">
                                <i class="pi pi-map-marker"></i>

                                {{
                                    selectedNode.location ||
                                    'Не указано'
                                }}
                            </div>
                        </div>

                        <div class="detail-item">
                            <span class="detail-label">
                                Подразделений
                            </span>

                            <div class="detail-value">
                                <i class="pi pi-sitemap"></i>

                                {{ getChildrenCount(selectedNode) }}
                            </div>
                        </div>
                    </div>

                    <Divider />

                    <div class="selected-actions">
                        <Button label="Сотрудники" icon="pi pi-users" severity="primary" @click="openEmployees" />

                        <Button label="Подробнее" icon="pi pi-info-circle" severity="secondary" outlined
                            @click="openDetails" />
                    </div>
                </div>

                <div v-else class="no-selection">
                    <div class="no-selection-icon">
                        <i class="pi pi-sitemap"></i>
                    </div>

                    <h3>
                        Выберите подразделение
                    </h3>

                    <p>
                        Выберите подразделение в структуре банка,
                        чтобы посмотреть информацию о нём.
                    </p>
                </div>
            </div>
        </div>

        <!-- EMPLOYEES DIALOG -->
        <Dialog v-model:visible="employeesDialogVisible" modal :header="selectedNode
                ? `Сотрудники — ${selectedNode.label}`
                : 'Сотрудники'
            " :style="{ width: '900px' }" :breakpoints="{
                '960px': '90vw',
                '640px': '95vw'
            }">
            <DataTable :value="selectedNodeEmployees" striped-rows paginator :rows="10" responsive-layout="scroll">
                <Column field="id" header="ID" style="width: 130px" />

                <Column field="name" header="Сотрудник" />

                <Column field="position" header="Должность" />

                <Column field="department" header="Подразделение" />

                <Column field="status" header="Статус">
                    <template #body="{ data }">
                        <Tag :value="data.status" :severity="data.status === 'Активен'
                                ? 'success'
                                : 'warn'
                            " />
                    </template>
                </Column>
            </DataTable>
        </Dialog>

        <!-- DETAILS DIALOG -->
        <Dialog v-model:visible="detailsDialogVisible" modal header="Подробная информация" :style="{ width: '650px' }"
            :breakpoints="{
                '960px': '90vw',
                '640px': '95vw'
            }">
            <div v-if="selectedNode" class="dialog-details">
                <div class="dialog-detail-row">
                    <span>Наименование</span>

                    <strong>
                        {{ selectedNode.label }}
                    </strong>
                </div>

                <div class="dialog-detail-row">
                    <span>Тип подразделения</span>

                    <strong>
                        {{ getNodeLevel(selectedNode) }}
                    </strong>
                </div>

                <div class="dialog-detail-row">
                    <span>Руководитель</span>

                    <strong>
                        {{
                            selectedNode.manager ||
                            'Не указан'
                        }}
                    </strong>
                </div>

                <div class="dialog-detail-row">
                    <span>Количество сотрудников</span>

                    <strong>
                        {{
                            selectedNode.employees?.toLocaleString(
                                'ru-RU'
                            ) || '0'
                        }}
                    </strong>
                </div>

                <div class="dialog-detail-row">
                    <span>Местоположение</span>

                    <strong>
                        {{
                            selectedNode.location ||
                            'Не указано'
                        }}
                    </strong>
                </div>

                <div class="dialog-detail-row">
                    <span>Количество дочерних подразделений</span>

                    <strong>
                        {{ getChildrenCount(selectedNode) }}
                    </strong>
                </div>
            </div>
        </Dialog>
    </div>
</template>

<style scoped>
.structure-page {
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

.employee-total-tag {
    flex-shrink: 0;
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

.toolbar-actions {
    display: flex;
    align-items: center;
    gap: 4px;
}

/* =========================
   MAIN LAYOUT
========================= */

.structure-layout {
    display: grid;
    grid-template-columns: minmax(0, 1.55fr) minmax(360px, 0.9fr);
    gap: 16px;
    align-items: start;
}

/* =========================
   CARDS
========================= */

.tree-card,
.details-card {
    min-width: 0;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    background: #ffffff;
    box-shadow:
        0 1px 2px rgb(15 23 42 / 0.03),
        0 4px 12px rgb(15 23 42 / 0.025);
}

.tree-card {
    /* min-height: 620px; */
    overflow: hidden;
}

.details-card {
    min-height: 420px;
    position: sticky;
    top: 16px;
}

.card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 20px 20px 4px;
}

.card-header h2 {
    margin: 0;
    color: #111827;
    font-size: 17px;
    font-weight: 650;
}

.card-header p {
    margin: 5px 0 0;
    color: #6b7280;
    font-size: 13px;
}

.tree-header-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 9px;
    background: #f8fafc;
    color: #64748b;
}

.tree-card :deep(.p-divider) {
    margin: 14px 20px 0;
}

/* =========================
   CORPORATE TREE
========================= */

.tree-wrapper {
    padding: 10px 14px 18px;
}

.corporate-tree {
    width: 100%;
    border: 0;
    background: transparent;
    padding: 0;
}

.corporate-tree :deep(.p-tree-container) {
    padding: 0;
}

.corporate-tree :deep(.p-treenode) {
    padding: 0;
}

.corporate-tree :deep(.p-treenode-content) {
    position: relative;
    min-height: 56px;
    margin: 2px 0;
    padding: 4px 8px 4px 4px;
    border-radius: 9px;
    background: transparent;
    transition:
        background-color 0.15s ease,
        box-shadow 0.15s ease;
}

.corporate-tree :deep(.p-treenode-content:hover) {
    background: #f8fafc;
}

.corporate-tree :deep(.p-treenode-content.p-treenode-selectable) {
    cursor: pointer;
}

.corporate-tree :deep(.p-treenode-content.p-highlight) {
    background: #eff6ff;
    box-shadow: inset 3px 0 0 #2563eb;
}

.corporate-tree :deep(.p-tree-toggler) {
    width: 30px;
    height: 30px;
    margin-right: 2px;
    border-radius: 7px;
    color: #64748b;
}

.corporate-tree :deep(.p-tree-toggler:hover) {
    background: #f1f5f9;
}

.corporate-tree :deep(.p-treenode-children) {
    padding-left: 27px;
}

/*
 * Вертикальная линия между уровнями дерева.
 * Делает структуру похожей на настоящую
 * организационную схему.
 */
.corporate-tree :deep(.p-treenode-children) {
    position: relative;
}

.corporate-tree :deep(.p-treenode-children::before) {
    content: '';
    position: absolute;
    top: 0;
    bottom: 10px;
    left: 12px;
    width: 1px;
    background: #e5e7eb;
}

/* =========================
   TREE NODE
========================= */

.tree-node {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    width: 100%;
    min-width: 0;
}

.tree-node-main {
    display: flex;
    align-items: center;
    gap: 11px;
    min-width: 0;
    flex: 1;
}

.tree-node-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    flex-shrink: 0;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    background: #ffffff;
    color: #64748b;
    font-size: 14px;
    transition:
        background-color 0.15s ease,
        color 0.15s ease;
}

.tree-node-content {
    min-width: 0;
    flex: 1;
}

.tree-node-title {
    overflow: hidden;
    color: #1f2937;
    font-size: 14px;
    font-weight: 550;
    line-height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.tree-node-meta {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 2px;
    color: #94a3b8;
    font-size: 11px;
    line-height: 16px;
}

.meta-separator {
    color: #cbd5e1;
}

.tree-node-right {
    display: flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
}

.employee-count,
.children-count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    min-height: 25px;
    padding: 3px 8px;
    border-radius: 6px;
    background: #f8fafc;
    color: #64748b;
    font-size: 11px;
    font-weight: 550;
}

.employee-count i {
    font-size: 10px;
}

.children-count {
    min-width: 25px;
    padding: 3px 6px;
    background: #f1f5f9;
    color: #64748b;
}

/* =========================
   NODE TYPES
========================= */

.tree-node-icon.type-head-office,
.selected-node-icon.type-head-office {
    background: #eff6ff;
    border-color: #dbeafe;
    color: #2563eb;
}

.tree-node-icon.type-department,
.selected-node-icon.type-department {
    background: #f0fdf4;
    border-color: #dcfce7;
    color: #16a34a;
}

.tree-node-icon.type-management,
.selected-node-icon.type-management {
    background: #fff7ed;
    border-color: #fed7aa;
    color: #ea580c;
}

.tree-node-icon.type-section,
.selected-node-icon.type-section {
    background: #f8fafc;
    border-color: #e2e8f0;
    color: #64748b;
}

.tree-node-icon.type-service,
.selected-node-icon.type-service {
    background: #fef2f2;
    border-color: #fee2e2;
    color: #dc2626;
}

.tree-node-icon.type-branch,
.selected-node-icon.type-branch {
    background: #f5f3ff;
    border-color: #ede9fe;
    color: #7c3aed;
}

.tree-node-icon.type-network,
.selected-node-icon.type-network {
    background: #ecfeff;
    border-color: #cffafe;
    color: #0891b2;
}

.tree-node-icon.type-default,
.selected-node-icon.type-default {
    background: #f8fafc;
    border-color: #e2e8f0;
    color: #64748b;
}

/* =========================
   EMPTY TREE
========================= */

.empty-tree {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 300px;
    padding: 40px;
    text-align: center;
    color: #64748b;
}

.empty-tree>i {
    margin-bottom: 12px;
    color: #94a3b8;
    font-size: 30px;
}

.empty-tree span {
    color: #334155;
    font-size: 14px;
    font-weight: 600;
}

.empty-tree small {
    margin-top: 5px;
    color: #94a3b8;
    font-size: 12px;
}

/* =========================
   SELECTED NODE
========================= */

.selected-node {
    padding: 22px;
}

.selected-node-header {
    display: flex;
    align-items: flex-start;
    gap: 14px;
}

.selected-node-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    flex-shrink: 0;
    border: 1px solid transparent;
    border-radius: 11px;
    font-size: 18px;
}

.selected-node-title {
    min-width: 0;
}

.selected-node-type {
    display: block;
    margin-bottom: 4px;
    color: #94a3b8;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
    text-transform: uppercase;
}

.selected-node-title h2 {
    margin: 0;
    color: #111827;
    font-size: 17px;
    font-weight: 650;
    line-height: 1.35;
}

.selected-node :deep(.p-divider) {
    margin: 20px 0;
}

/* =========================
   DETAILS
========================= */

.details-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
}

.detail-item {
    min-width: 0;
}

.detail-label {
    display: block;
    margin-bottom: 7px;
    color: #94a3b8;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
}

.detail-value {
    display: flex;
    align-items: center;
    gap: 8px;
    min-height: 22px;
    color: #334155;
    font-size: 13px;
    font-weight: 550;
}

.detail-value i {
    color: #94a3b8;
    font-size: 13px;
}

.selected-actions {
    display: flex;
    align-items: center;
    gap: 10px;
}

.selected-actions :deep(.p-button) {
    flex: 1;
}

/* =========================
   NO SELECTION
========================= */

.no-selection {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 420px;
    padding: 40px;
    text-align: center;
}

.no-selection-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    margin-bottom: 16px;
    border-radius: 16px;
    background: #f8fafc;
    color: #94a3b8;
    font-size: 25px;
}

.no-selection h3 {
    margin: 0;
    color: #334155;
    font-size: 16px;
    font-weight: 650;
}

.no-selection p {
    max-width: 320px;
    margin: 8px 0 0;
    color: #94a3b8;
    font-size: 13px;
    line-height: 1.5;
}

/* =========================
   DIALOG DETAILS
========================= */

.dialog-details {
    display: flex;
    flex-direction: column;
}

.dialog-detail-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 13px 0;
    border-bottom: 1px solid #f1f5f9;
}

.dialog-detail-row:last-child {
    border-bottom: 0;
}

.dialog-detail-row span {
    color: #64748b;
    font-size: 13px;
}

.dialog-detail-row strong {
    max-width: 60%;
    color: #1f2937;
    font-size: 13px;
    font-weight: 600;
    text-align: right;
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 1200px) {
    .structure-layout {
        grid-template-columns: 1fr;
    }

    .details-card {
        position: static;
    }
}

@media (max-width: 768px) {
    .structure-page {
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

    .toolbar-actions {
        justify-content: flex-end;
    }

    .tree-node-right {
        display: none;
    }

    .details-grid {
        grid-template-columns: 1fr;
    }

    .selected-actions {
        flex-direction: column;
    }

    .selected-actions :deep(.p-button) {
        width: 100%;
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

    .card-header {
        padding: 16px 16px 4px;
    }

    .tree-wrapper {
        padding: 8px;
    }

    .selected-node {
        padding: 18px;
    }

    .corporate-tree :deep(.p-treenode-children) {
        padding-left: 18px;
    }
}
</style>