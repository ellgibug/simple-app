<template>
    <div class="p">
        <div class="p__content p-content">
            <div class="p-content__title">
                <h1>Проект {{$route.params.code}}</h1>
            </div>
            <div class="p-content__inner">
                <router-link :to="{name: 'Projects'}">Назад к проектам</router-link>

                {{ project}}
                {{ pages}}
            </div>
        </div>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>