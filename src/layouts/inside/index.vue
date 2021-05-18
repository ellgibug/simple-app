<template>
    <div class="inside-layout">
        <div class="inside-layout__navbar">
            <div class="container navbar">
                <navbar/>
            </div>
        </div>
        <div class="inside-layout__content inside-layout-content">
            <main class="inside-layout-content__main">
                <div class="content">
                    <router-view/>
                </div>
            </main>
            <footer class="inside-layout-content__footer">
                <div class="container">
                    <a href="https://iconscout.com/icons/home" target="_blank">Home Icon</a> by <a href="https://iconscout.com/contributors/fauzanadiima" target="_blank">Fauzan Adiima</a>


                    <a href="https://iconscout.com/icon-pack/essential-icons" target="_blank">Essential Icons Icon Pack</a> by <a href="https://iconscout.com/contributors/bryn-taylor" target="_blank">Bryn Taylor</a>
                </div>
            </footer>
        </div>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>