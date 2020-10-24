<template>
    <div>
        <h1>Inside layout</h1>
        {{ user }}
        <button @click="sendLogoutRequest">Logout</button>
        <hr>
        <router-view/>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>