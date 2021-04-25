<template>
    <div class="a-page-card">
        <div class="a-page-card__title">Forgot password</div>
        <div class="a-page-card__form">
            <div class="form">
                <div class="form__item">
                    <label for="email">Email</label>
                    <input type="text" id="email" v-model="email"/>
                </div>
                <div class="form__item">
                    <button @click="sendForgotPasswordRequest">Send FPR</button>
                </div>
            </div>
        </div>
        <div class="a-page-card__links links">
            <div class="links__item">
                <router-link :to="{name: 'Login'}">
                    Login
                </router-link>
            </div>
            <div class="links__item">
                <router-link :to="{name: 'Register'}">
                    Register
                </router-link>
            </div>
        </div>
    </div>

</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>