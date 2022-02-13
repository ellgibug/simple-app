<template>
    <div class="auth-card">
        <div class="auth-card__header" v-if="showHeader">
            <div class="auth-card-header">

                <div :class="['auth-card-header__item', !headerLink.link ? 'active' : '']" v-for="(headerLink, index) in headerLinks" :key="index">

<!--                    1 {{headerLink}}-->
<!--                    2 {{index}}-->

                    <template v-if="headerLink.link">
                        <router-link :to="{name: headerLink.link}">
                            {{ headerLink.text}}
                        </router-link>
                    </template>
                    <template v-else>
                        {{ headerLink.text}}
                    </template>


                </div>

<!--                <div class="auth-card-header__item active">{{ $route.name }}</div>-->
<!--                <div class="auth-card-header__item">-->
<!--                    <router-link :to="{name: 'Register'}">-->
<!--                        Регистрация-->
<!--                    </router-link>-->
<!--                </div>-->
            </div>
        </div>
        <div class="auth-card__form">
            <slot/>
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

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>