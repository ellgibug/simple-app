<template>
    <div>
        <h1>Register</h1>
        <div v-if="step === STEPS.PERSONAL_DATA">
            <div>Шаг 1 из 2</div>
            <div class="form">
                <div class="form__item">
                    <label for="name">Name</label>
                    <input type="text" id="name" v-model="name"/>
                </div>
                <div class="form__item">
                    <label for="email">Email</label>
                    <input type="text" id="email" v-model="email"/>
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
                    <button @click="goToOrganizationStep">Go to 2 of 2 step</button>
                </div>
            </div>
        </div>
        <div v-if="step === STEPS.ORGANIZATION_DATA">
            <div>Шаг 2 из 2</div>
            <div class="form">
                <div class="form__item">
                    <label for="isOrganizationExists">Зарегистрироваться в сущетсвующую организацию</label>
                    <input type="checkbox" id="isOrganizationExists" v-model="isOrganizationExists"/>
                </div>
                <div class="form__item" v-if="isOrganizationExists">
                    <label for="organizationCode">Код организации</label>
                    <input type="text" id="organizationCode" v-model="organizationCode"/>
                </div>
                <div class="form__item">
                    <button @click="sendRegisterRequest">Register</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>