<template>
    <div class="p">
        <div class="p__content p-content">
            <div class="p-content__title">
                <h1>Проекты</h1>
            </div>
            <div class="p-content__inner">
                <div class="projects-menu">
                    <div class="projects-menu__item" @click="dialogs.create.visible = true">
                        Создать новый проект
                    </div>
                </div>
                <h-dialog
                        title="Создать новый проект"
                        button="Сохранить"
                        :isOpen = "dialogs.create.visible"
                        @close="dialogs.create.visible = false"
                        @action="test1"
                >

                    <div>
                        Название<br/>
                        <input type="text" v-model="dialogs.create.model.title">
                    </div>


                </h-dialog>
                <div class="projects">
                    <div v-for="project in projects" :key="project.id" :class="['projects__item', 'project']">
                        <div class="project__left">
                            <div class="project__title">
                                {{ project.title }}
                            </div>
                            <div class="project__url">{{ project.url }}</div>
                            <div class="project__code">{{ project.code }}</div>

                        </div>
                        <div class="project__right">
                            <div class="project__date">{{ project.created_at | moment("DD.MM.YYYY HH:m:s") }}</div>
                            <div class="project__open">
                                <button class="button" @click="goToProject(project.code)">Открыть</button>
                            </div>
<!--                            <div class="project__edit">-->
<!--                                <button class="button">Настройки</button>-->
<!--                            </div>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>