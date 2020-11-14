<template>
    <div>
        <h1>Users in organization</h1>

        <div style="margin-top: 50px">
            <div v-for="user in users" :key="user.id" style="margin-bottom: 20px">
                {{ user }}
            </div>
        </div>





    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>