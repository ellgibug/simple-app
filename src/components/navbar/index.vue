<template>
    <div class="navbar">
        <div class="navbar__section navbar-section">
            <div class="navbar-section__item">
                <router-link :to="{name: 'Dashboard'}">
                    <img src="../../assets/logo.svg" alt="logo" title="logo" width="30px" class="logo">
                </router-link>
            </div>
            <div class="navbar-section__item">
                <div class="pages">
                    <div v-for="link in links" class="pages__item">
                        <router-link :to="{name: link.route}" :key="link.route">
                            {{ link.title }}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="navbar__section">
            <button @click="sendLogoutRequest">Logout</button>
        </div>


    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>