<template>
    <div class="inside-layout">
        <div class="inside-layout__navbar">
            <div class="container navbar">
                <navbar/>
            </div>
        </div>
        <div class="inside-layout__content inside-layout-content">
            <main class="inside-layout-content__main">
                <div class="container content">
                    <router-view/>
                </div>
            </main>
        </div>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>