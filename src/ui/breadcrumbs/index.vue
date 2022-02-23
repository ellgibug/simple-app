<template>
    <div class="breadcrumbs">
        <div class="breadcrumbs__item">
            <router-link :to="{name: 'Dashboard'}">
                <unicon name="home"
                        fill="#000"
                        style="display: flex"
                        height="20"/>
            </router-link>
        </div>
        <div v-for="b in breadcrumbs" class="breadcrumbs__item">
            <template v-if="b.link">
                <router-link :to="b.link">{{b.text}}</router-link>
            </template>
            <template v-else>
                {{ b.text}}
            </template>
        </div>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>