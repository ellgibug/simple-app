<template>
    <div>
        <h1>Auth layout</h1>

        <div class="links">
            <div v-for="link in links" class="links__item">
                <router-link :to="{name: link.route}" :key="link.route">
                    {{ link.title }}
                </router-link>
            </div>
        </div>

        <hr>
        <router-view/>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>