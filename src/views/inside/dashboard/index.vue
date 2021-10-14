<template>
    <div>
        <h1>Dashboard</h1>

        <div>Валидность емейла (сделано)</div>
        <email-verification v-if="!user.is_email_verified"/>

        <hr>
        <div>Подтвержение в организации (сделано на списке юзеров)</div>



    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>