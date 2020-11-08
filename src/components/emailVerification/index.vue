<template>
    <div style="border: 2px solid #ccc; padding: 10px; margin: 10px">
        <h2>Email confirmation</h2>
        <div v-if="new Date().getTime() < new Date(user.email_verification_code_expired_at).getTime()">
            Если время жизни токена валидно, то показываем поле для ввода кода подтверждения
            <div class="form">
                <div class="form__item">
                    <label for="verificationCode">Код подтверждения</label>
                    <input type="text" id="verificationCode" v-model="verificationCode"/>
                </div>
                <div class="form__item">
                    <button @click="verifyEmail">Verify email</button>
                </div>
            </div>
        </div>
        <div v-else>
            Показываем кнопку с повторным запросом кода подтверждения
            <button @click="sendEmailVerificationLetter">send Email Verification Letter</button>
        </div>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>