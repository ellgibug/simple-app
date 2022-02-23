<template>
    <div class="confirmation">
        <div class="confirmation__title">
            Подтверждение email
        </div>
        <div class="confirmation__body">
            <div class="body">
                <template v-if="new Date().getTime() < new Date(user.email_verification_code_expired_at).getTime()">
                    <div class="body__text">
                        Введите полученный код подтверждения (как в поиске)
                    </div>
                    <div class="body__button">
                        <input type="text" id="verificationCode" v-model="verificationCode" autocomplete="false"/>
                        <button @click="verifyEmail">
                            <unicon name="check"
                                    style="display: flex"
                                    fill="#f5f9fa"
                                    height="25" width="25"
                            />
                        </button>
                    </div>
                </template>
                <template v-else>
                    <div class="body__text">
                        Отправить код на указанный email еще раз
                    </div>
                    <div class="body__button2">
                        <HButton @handleClick="sendEmailVerificationLetter">
                            Отправить
                        </HButton>
                    </div>
                </template>
            </div>
        </div>
    </div>

</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>