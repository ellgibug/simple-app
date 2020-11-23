<template>
    <div class="p">
        <div class="p__content p-content">
            <div class="p-content__title">
                <h1>Проекты</h1>
            </div>
            <div class="p-content__inner">
                <div class="projects-menu">
                    <div class="projects-menu__item">
                        Создать новый проект
                    </div>
                </div>
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
                                <button class="button">Открыть</button>
                            </div>
                            <div class="project__edit">
                                <button class="button">Редактировать</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>