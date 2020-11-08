<template>
    <div>
        <h1>Forgot password</h1>
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
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>