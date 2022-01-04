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
            <Container>
                <Col class-name="flex-grow-1">
                    <Breadcrumbs :breadcrumbs="breadcrumbs"/>
                </Col>
            </Container>
        </template>

        <!-- Поиск и создание -->
        <div class="mb-20">
            <Container>
                <Col class-name="column flex-grow-04">
                    <Container>
                        <Col class-name="flex-grow-07">
                            <Search :search="search" @startSearch="startSearch"/>
                        </Col>
                        <Col class-name="flex-grow-03">
                            <HButton @handleClick="dialogs.create.visible = true">
                                Новый проект
                            </HButton>
                        </Col>
                    </Container>
                </Col>
            </Container>
        </div>

        <!-- Список проектов -->
        <template v-if="projects.length">
            <Container>
                <Col class-name="column flex-grow-04">
                    <div class="projects" v-if="projects.length">
                        <div v-for="p in projects" :key="p.id"
                             class="projects__item"
                             @click="loadProject(p.code)">
                            <CardOnList :project="p" :isActive="p.id === project.id"/>
                        </div>
                    </div>
                </Col>

                <Col class-name="column flex-grow-06">
                    <div class="ml-20 height-100">
                        <div class="project-full-info-container" v-if="project.id">
                            <FullInfo :project="project" :key="project.id"/>
                        </div>
                        <div v-else class="project-opening-hint">
                            <img src="../../../assets/pr.svg" alt="" width="50px">
                            <div>
                                Нажмите на карточку проекта <br> для детального просмотра
                            </div>
                        </div>
                    </div>
                </Col>
            </Container>

            <div class="mt-20">
                <Container>
                    <Col class-name="flex-grow-04 justify-end">
                        <Pagination
                                :page="pagination.page"
                                :total="pagination.maxPage"
                                @pageUpdated="pageUpdated"
                                :key="`${pagination.page}${pagination.maxPage}`"/>
                    </Col>
                </Container>
            </div>
        </template>

        <!-- Проекты не найдены -->
        <template v-else>
            Проекты не найдены
        </template>



    </Page>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>