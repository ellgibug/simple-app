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
            <container>
                <row>
                    <column :lg="12">
                        <Breadcrumbs :breadcrumbs="breadcrumbs"/>
                    </column>
                </row>
            </container>
        </template>

        <!-- Поиск и создание -->
        <div class="mb-20">
            <container >
                <row >
                    <column :lg="5" >
                        <row>
                            <column :lg="7" >
                                <Search :search="search" @startSearch="startSearch"/>
                            </column>
                            <column :lg="5" >
                                <HButton @handleClick="dialogs.create.visible = true">
                                    Новый проект
                                </HButton>
                            </column>
                        </row>
                    </column>
                </row>
            </container>
        </div>

        <!-- Список проектов -->
        <template v-if="projects.length">
            <container>
                <row>
                    <column :lg="5">
                        <div class="projects" v-if="projects.length">
                            <div v-for="p in projects" :key="p.id"
                                 class="projects__item"
                                 @click="loadProject(p.code)">
                                <CardOnList :project="p" :isActive="p.id === project.id"/>
                            </div>
                        </div>
                    </column>

                    <column :lg="7">
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
                    </column>
                </row>
            </container>

            <div class="mt-20">
                <container>
                    <row>
                        <column :lg="5">
                            <Pagination
                                    :page="pagination.page"
                                    :total="pagination.maxPage"
                                    @pageUpdated="pageUpdated"
                                    :key="`${pagination.page}${pagination.maxPage}`"/>
                        </column>
                    </row>
                </container>
            </div>
        </template>

        <!-- Проекты не найдены -->
        <template v-else>
            <container>
                <row>
                    <column :lg="12">Проекты не найдены</column>
                </row>
            </container>
        </template>


    </Page>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>