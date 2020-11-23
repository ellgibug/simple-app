<template>
    <div class="page">

        <div class="page__navbar">
            <div class="container navbar">
                <navbar/>
            </div>

        </div>
        <div class="page__content page-content">
            <main class="page-content__main">
                <div class="container content">
                    <router-view/>
                </div>
            </main>
<!--            <footer class="page-content__footer">-->
<!--                <div class="container">-->
<!--                    I am footer-->
<!--                </div>-->
<!--            </footer>-->
        </div>
    </div>

</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>