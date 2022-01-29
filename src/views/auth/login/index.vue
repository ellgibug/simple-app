<template>
    <div class="auth-card">
        <div class="auth-card__header">
            <div class="auth-card-header">
                <div class="auth-card-header__item active">Логин</div>
                <div class="auth-card-header__item">
                    <router-link :to="{name: 'Register'}">
                        Регистрация
                    </router-link>
                </div>
            </div>
        </div>
        <div class="auth-card__form">
            <ValidationObserver v-slot="{ invalid }">
                <form @submit.prevent="onSubmit" class="auth-form">
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
                        <button type="submit" :disabled="invalid" class="auth-form-button">Submit</button>
                    </div>
                </form>
            </ValidationObserver>
        </div>
        <div class="auth-card__footer">
            <div class="auth-card-footer">
                <div class="auth-card-footer__link">
                    <router-link :to="{name: 'ForgotPassword'}">
                        Забыли пароль?
                    </router-link>
                </div>
            </div>
        </div>
    </div>

</template>

<!--<style src="./styles.scss" lang="scss" scoped></style>-->
<script src="./scripts.js"></script>