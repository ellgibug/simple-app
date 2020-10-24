<template>
    <div>
        <h1>Outside layout</h1>
        <button @click="openLoginPage">Go to login</button>
        <hr>
        <router-view/>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>