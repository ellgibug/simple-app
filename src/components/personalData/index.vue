<template>
    <div class="personal">
        <div class="personal__avatar">
            <img src="https://img.wallpapersafari.com/tablet/768/1024/50/60/WUCwK1.jpg" alt="" width="100%">
        </div>
        <div class="personal__data">
            <div class="title">Персональные данные</div>

            <dl class="attrs" v-if="false">
                <dt><span>Код:</span></dt>
                <dd>{{ user.code }}</dd>
            </dl>
            <dl class="attrs"  v-if="false">
                <dt><span>Имя:</span></dt>
                <dd>{{ user.name }}</dd>
            </dl>
            <dl class="attrs"  v-if="false">
                <dt><span>Email:</span></dt>
                <dd>{{ user.email }}</dd>
            </dl>

            <div class="fl">
                <div class="input-wrapper">
                    <div class="input-wrapper__label">Код:</div>
                    <div class="input-wrapper__text">{{ user.code }}</div>
                </div>

                <div class="input-wrapper">
                    <div class="input-wrapper__label">Имя:</div>
                    <div class="input-wrapper__text">{{ user.name }}</div>
                </div>

                <div class="input-wrapper">
                    <div class="input-wrapper__label">Email:</div>
                    <div class="input-wrapper__text">{{ user.email }}</div>
                </div>

                <div class="input-wrapper" style="margin-bottom: 0">
                    <div class="input-wrapper__label">Статус:</div>
                    <div class="input-wrapper__text">{{ user.role.title }}</div>
                </div>
            </div>
        </div>
        <div class="personal__edit">
            <unicon name="edit"
                    style="display: flex"
                    fill="#9db1cc"
                    height="30" width="30"
            />
        </div>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>