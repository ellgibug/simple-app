<template>
<!--    <div class="p">-->
<!--        <div class="p__content p-content">-->
<!--            <div class="p-content__title">-->
<!--                <h1>Проекты</h1>-->
<!--            </div>-->
<!--            <div class="p-content__inner">-->
<!--                <div class="projects-menu">-->
<!--                    <div class="projects-menu__item" @click="dialogs.create.visible = true">-->
<!--                        Создать новый проект-->
<!--                    </div>-->
<!--                </div>-->
<!--                <h-dialog-->
<!--                        title="Создать новый проект"-->
<!--                        button="Сохранить"-->
<!--                        :isOpen = "dialogs.create.visible"-->
<!--                        @close="dialogs.create.visible = false"-->
<!--                        @action="test1"-->
<!--                >-->

<!--                    <div>-->
<!--                        Название<br/>-->
<!--                        <input type="text" v-model="dialogs.create.model.title">-->
<!--                    </div>-->


<!--                </h-dialog>-->
<!--                <div class="projects">-->
<!--                    <div v-for="project in projects" :key="project.id" :class="['projects__item', 'project']">-->
<!--                        <div class="project__left">-->
<!--                            <div class="project__title">-->
<!--                                {{ project.title }}-->
<!--                            </div>-->
<!--                            <div class="project__url">{{ project.url }}</div>-->
<!--                            <div class="project__code">{{ project.code }}</div>-->

<!--                        </div>-->
<!--                        <div class="project__right">-->
<!--                            <div class="project__date">{{ project.created_at | moment("DD.MM.YYYY HH:m:s") }}</div>-->
<!--                            <div class="project__open">-->
<!--                                <button class="button" @click="goToProject(project.code)">Открыть</button>-->
<!--                            </div>-->
<!--&lt;!&ndash;                            <div class="project__edit">&ndash;&gt;-->
<!--&lt;!&ndash;                                <button class="button">Настройки</button>&ndash;&gt;-->
<!--&lt;!&ndash;                            </div>&ndash;&gt;-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->


        <Page title="Проекты">

            <template v-slot:breadcrumbs>
            <Container>
                <Col class-name="flex-grow-1">
                    <Breadcrumbs :breadcrumbs="breadcrumbs"/>
                </Col>
            </Container>
            </template>

            <Container style="margin-bottom: 20px">
                <Col class-name="column flex-grow-04">
                    <Container>
                        <Col class-name="flex-grow-07">
                            <Search :search="search" @startSearch="startSearch"/>
                        </Col>
                        <Col class-name="flex-grow-03">
                            <Button class="add-project">Новый проект</Button>
                        </Col>
                    </Container>
                </Col>
            </Container>


            <Container>
                <Col class-name="column flex-grow-04">
                    <div class="projects" v-if="projects.length">
                        <div v-for="p in projects" :key="p.id" class="projects__item" @click="loadProject(p.code)">
                            <CardOnList :project="p" :isActive="p.id === project.id"/>
                        </div>
                    </div>
                    <div class="projects" v-else>
                        No projects here
                    </div>
                </Col>

                <Col class-name="column flex-grow-06">
                    <div style="margin-left:  20px">

                        project {{ project }}

                    </div>
                </Col>
            </Container>

            <Container style="margin-top: 20px" v-if="projects.length">
                <Col class-name="flex-grow-04 justify-end">
                    <Pagination :page="page" :total="maxPage" @pageUpdated="pageUpdated" :key="`${page}${maxPage}`"/>
                </Col>
            </Container>


        </Page>



</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>