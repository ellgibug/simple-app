<template>
    <div class="height-100">
        <AuthCard>
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
        </AuthCard>
    </div>
</template>

<!--<style src="./styles.scss" lang="scss" scoped></style>-->
<script src="./scripts.js"></script>