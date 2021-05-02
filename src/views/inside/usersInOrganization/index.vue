<template>
    <div>

        <div class="title">
            Пользователи в организации
        </div>

        <div class="search">
            <input type="text">
        </div>

        <MyTable :body="users" :header="headers"/>

    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>