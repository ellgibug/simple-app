<template>
    <div class="personal">
        <div class="personal__avatar">
            <img src="https://img.wallpapersafari.com/tablet/768/1024/50/60/WUCwK1.jpg" alt="" width="100%">
        </div>
        <div class="personal__data">
            <div class="title">Персональные данные</div>

            <dl class="attrs">
                <dt><span>Код:</span></dt>
                <dd>{{ user.code }}</dd>
            </dl>
            <dl class="attrs">
                <dt><span>Имя:</span></dt>
                <dd>{{ user.name }}</dd>
            </dl>
            <dl class="attrs">
                <dt><span>Email:</span></dt>
                <dd>{{ user.email }}</dd>
            </dl>

        </div>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>