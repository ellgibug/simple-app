<template>
    <div class="auth-page">
        <div class="auth-page__card">
            <transition name="fade" mode="out-in">
                <router-view/>
            </transition>
        </div>
    </div>
</template>

<style src="./styles.scss" lang="scss"></style>
<script src="./scripts.js"></script>