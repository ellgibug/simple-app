<template>
    <div class="project">
        <div class="project__breadcrumbs">
            <Breadcrumbs :breadcrumbs="breadcrumbs"/>
        </div>
        <div class="project__info">
            <ProjectInfo :project="project"/>
        </div>
        <div class="project__script" v-if="false">
            Настройки скрипта
        </div>
        <div class="project__pages">
            Страницы
            <div v-for="page in pages" :key="page.id">
                {{ page.title }} |
                Просмотр |
                Редактировать
            </div>
        </div>
<!--        {{ pages }}-->
    </div>


</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>