<template>
    <div class="dashboard-panel">
        <div class="dashboard-panel__inner">
<!--            Добро пожаловать, {{ user.name }}! {{user.role.title}}-->
            <slot/>
        </div>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>