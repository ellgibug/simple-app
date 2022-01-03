<template>
    <div class="full_project">

        <div class="full_project__hide">
            <unicon name="times"
                    style="display: flex"
                    height="24"/>
        </div>
        <div class="full_project__title"> {{ project.title }}</div>
        <div class="full_project__user">Автор: {{ project.user.name }}</div>

        <div class="full_project__actions">
            delete unpublish <br>
            показать скрипт. копировать скрипт <br>
        </div>

        <div class="full_project__pages full_project_pages">
            <div class="full_project_pages__title">Страницы: {{ project.pages.length }}</div>
            <div v-for="page in project.pages" class="full_project_pages__item full_project_page">
                <div class="full_project_page__title">{{ page.title }} </div>
                <div class="full_project_page__body">{{ page.body.slice(0, 500) }}...</div>
                <div class="full_project_page__actions">
                    <button @click="goToProject(page.code)">watch</button>
                </div>
            </div>
        </div>






    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>