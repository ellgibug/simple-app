<template>
    <div class="a-page-card">
        <div class="a-page-card__title">Login</div>
        <div class="a-page-card__form">
            <div class="form">
                <div class="form__item">
                    <label for="email">Email</label>
                    <input type="text" id="email" v-model="email"/>
                    <span>Поле обязательно</span>
                </div>
                <div class="form__item">
                    <label for="password">Password</label>
                    <input type="text" id="password" v-model="password"/>
                    <span/>
                </div>
                <div class="form__item">
                    <button @click="sendLoginRequest">Login</button>
                </div>
            </div>
        </div>
        <div class="a-page-card__links links">
            <div class="links__item">
                <router-link :to="{name: 'Register'}">
                    Register
                </router-link>
            </div>
            <div class="links__item">
                <router-link :to="{name: 'ForgotPassword'}">
                    Forgot Password
                </router-link>
            </div>
        </div>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>