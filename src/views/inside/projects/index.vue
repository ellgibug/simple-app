<template>
    <Page title="Проекты">

        <!-- Создание проекта -->
        <HDialog
                title="Создать новый проект"
                button="Сохранить"
                :isOpen="dialogs.create.visible"
                @close="dialogs.create.visible = false"
                @action="saveProject"
        >
            <div>
                Название<br/>
                <input type="text" v-model="dialogs.create.model.title">
            </div>
        </HDialog>

        <!-- Хлебные крошки -->
        <template v-slot:breadcrumbs>
            <row>
                <column :lg="12">
                    <Breadcrumbs :breadcrumbs="breadcrumbs"/>
                </column>
            </row>
        </template>

        <!-- Поиск и создание -->
        <div class="mb-20">
            <row>
                <column :lg="5" :md="12">
                    <row>
                        <column :lg="7" :md="7" :sm="6" :xs="9">
                            <Search :search="search" @startSearch="startSearch"/>
                        </column>
                        <column :lg="5" :md="5" :sm="6" :xs="3">
                            <HButton @handleClick="dialogs.create.visible = true">
                                <template v-if="smallWindow">
                                    <unicon name="plus"
                                            fill="#fff"
                                            style="display: flex"
                                            height="20" width="20"
                                    />
                                </template>
                                <template v-else>Новый проект</template>
                            </HButton>
                        </column>
                    </row>
                </column>
            </row>
        </div>


        <!-- Список проектов -->
        <template v-if="projects.length">
            <row>
                <column :lg="5" :md="12">
                    <div class="projects" v-if="projects.length">
                        <div v-for="p in projects" :key="p.id"
                             class="projects__item"
                             @click="loadProject(p.code)">
                            <CardOnList :project="p" :isActive="p.id === project.id"/>
                        </div>
                    </div>
                </column>


                <column :lg="7" :md="0">
                    <hidden until="lg" class="height-100">
                        <div class="height-100">
                            <div class="project-full-info-container" v-if="project.id">
                                <FullInfo :project="project" :key="project.id" @closeProject="project = {}"/>
                            </div>
                            <div v-else class="project-opening-hint">
                                <img src="../../../assets/pr.svg" alt="" width="50px">
                                <div>
                                    Нажмите на карточку проекта <br> для детального просмотра
                                </div>
                            </div>
                        </div>
                    </hidden>
                </column>

            </row>

            <div class="mt-20">
                <row>
                    <column :lg="5">
                        <Pagination
                                :page="pagination.page"
                                :total="pagination.maxPage"
                                @pageUpdated="pageUpdated"
                                :key="`${pagination.page}${pagination.maxPage}`"/>
                    </column>
                </row>
            </div>
        </template>

        <!-- Проекты не найдены -->
        <template v-else>
            <row>
                <column :lg="12">Проекты не найдены</column>
            </row>
        </template>

    </Page>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>