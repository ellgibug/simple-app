<template>
    <div class="page">

        <div class="page__navbar">
            <div class="container navbar">
                <navbar/>
            </div>

        </div>
        <div class="page__content">
            <div class="container content">
                <router-view/>
            </div>
        </div>
    </div>

</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>