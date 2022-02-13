<template>
<!--    <div class="a-page-card">-->
<!--        <div class="a-page-card__title">Регистрация</div>-->
<!--        <div class="a-page-card__form">-->
<!--            <div v-if="step === STEPS.PERSONAL_DATA">-->
<!--                <div class="form">-->
<!--                    <div class="form__item">-->
<!--                        <label for="name">Name</label>-->
<!--                        <input type="text" id="name" v-model="name"/>-->
<!--                    </div>-->
<!--                    <div class="form__item">-->
<!--                        <label for="email">Email</label>-->
<!--                        <input type="text" id="email" v-model="email"/>-->
<!--                    </div>-->
<!--                    <div class="form__item">-->
<!--                        <label for="password">Password</label>-->
<!--                        <input type="text" id="password" v-model="password"/>-->
<!--                    </div>-->
<!--                    <div class="form__item">-->
<!--                        <label for="passwordConfirmation">Password Confirmation</label>-->
<!--                        <input type="text" id="passwordConfirmation" v-model="passwordConfirmation"/>-->
<!--                    </div>-->
<!--                    <div class="form__item">-->
<!--                        <button @click="goToOrganizationStep">Go to 2 of 2 step</button>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div v-if="step === STEPS.ORGANIZATION_DATA">-->
<!--                <div class="form">-->
<!--                    <div class="form__item">-->
<!--                        <label for="isOrganizationExists">Зарегистрироваться в сущетсвующую организацию</label>-->
<!--                        <input type="checkbox" id="isOrganizationExists" v-model="isOrganizationExists"/>-->
<!--                    </div>-->
<!--                    <div class="form__item" v-if="isOrganizationExists">-->
<!--                        <label for="organizationCode">Код организации</label>-->
<!--                        <input type="text" id="organizationCode" v-model="organizationCode"/>-->
<!--                    </div>-->
<!--                    <div class="form__item">-->
<!--                        <button @click="sendRegisterRequest">Register</button>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="a-page-card__links links">-->
<!--            <div class="links__item">-->
<!--                <router-link :to="{name: 'Login'}">-->
<!--                    Login-->
<!--                </router-link>-->
<!--            </div>-->
<!--            <div class="links__item">-->
<!--                <router-link :to="{name: 'ForgotPassword'}">-->
<!--                    Forgot Password-->
<!--                </router-link>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->

    <div class="height-100">
        <AuthCard>
            <ValidationObserver v-slot="{ invalid }">
                <form @submit.prevent="onSubmit" class="auth-form">
                    <template v-if="step === STEPS.PERSONAL_DATA">
                        <div class="auth-form__item">
                            <ValidationProvider name="Name" rules="required|alpha" v-slot="{ errors }">
                                <TextInput
                                        v-bind:value="name"
                                        v-on:input="name = $event"
                                        id="name"
                                        name="name"
                                        type="name"
                                        label="Имя"
                                        :errors="errors"
                                />
                            </ValidationProvider>
                        </div>
                        <div class="auth-form__item">
                            <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
                                <TextInput
                                        v-bind:value="email"
                                        v-on:input="email = $event"
                                        id="email"
                                        name="email"
                                        type="email"
                                        label="E-mail"
                                        :errors="errors"
                                />
                            </ValidationProvider>
                        </div>
                        <div class="auth-form__item">
                            <ValidationProvider name="Password" rules="required" v-slot="{ errors }">
                                <TextInput
                                        v-bind:value="password"
                                        v-on:input="password = $event"
                                        id="password"
                                        name="password"
                                        type="password"
                                        label="Пароль"
                                        :errors="errors"
                                />
                            </ValidationProvider>
                        </div>
                        <div class="auth-form__item">
                            <ValidationProvider name="Password confirmation" rules="required" v-slot="{ errors }">
                                <TextInput
                                        v-bind:value="password"
                                        v-on:input="password = $event"
                                        id="passwordConfirmation"
                                        name="passwordConfirmation"
                                        type="password"
                                        label="Подтверждение пароля"
                                        :errors="errors"
                                />
                            </ValidationProvider>
                        </div>
                    </template>
                    <template v-if="step === STEPS.ORGANIZATION_DATA">

                        <div class="auth-form__item" style="text-align: center; line-height: 20px">
                            Вы можете зарегистрироваться в существующую организацию.<br/>Для этого вам надо ввести код организации в формате AAAAAA-######.<br/>После регистрации ожидайте подтверждения от администратора организации.
                        </div>
                        <div class="auth-form__item">
                            <ValidationProvider
                                    name="Is Organization Exists"
                                    v-slot="{ errors }">
                                <AuthCheckbox
                                        v-bind:value="isOrganizationExists"
                                        v-on:input="isOrganizationExists = $event"
                                        id="isOrganizationExists"
                                        name="isOrganizationExists"
                                        :errors="errors"
                                >
                                    Зарегистрироваться в существующую организацию <a href="cejc">ewjvbjwebvkwev</a>
                                </AuthCheckbox>
                            </ValidationProvider>
                        </div>
                        <div class="auth-form__item" v-if="isOrganizationExists">
                            <ValidationProvider
                                    name="Organization Code"
                                    :rules="isOrganizationExists ? 'required' : ''"
                                    v-slot="{ errors }">
                                <TextInput
                                        v-bind:value="organizationCode"
                                        v-on:input="organizationCode = $event"
                                        id="organizationCode"
                                        name="organizationCode"
                                        type="text"
                                        label="Код организации"
                                        mask="AAAAAA-######"
                                        :errors="errors"
                                />
                            </ValidationProvider>
                        </div>

                    </template>

                    <div class="auth-form__item">
                        <button type="submit" :disabled="invalid" class="auth-form-button">Submit</button>
                    </div>
                </form>
            </ValidationObserver>
        </AuthCard>
    </div>

</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>