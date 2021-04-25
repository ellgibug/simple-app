<template>
    <div class="a-page-card">
        <div class="a-page-card__title">Restore password {{ $route.params.userCode }}</div>
        <div class="a-page-card__form">
            <div class="form">
                <div class="form__item">
                    <label for="code">Code (4 symbols)</label>
                    <input type="text" id="code" v-model="code"/>
                </div>
                <div class="form__item">
                    <label for="password">Password</label>
                    <input type="text" id="password" v-model="password"/>
                </div>
                <div class="form__item">
                    <label for="passwordConfirmation">Password Confirmation</label>
                    <input type="text" id="passwordConfirmation" v-model="passwordConfirmation"/>
                </div>
                <div class="form__item">
                    <button @click="sendRestorePasswordRequest">Send RPR</button>
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