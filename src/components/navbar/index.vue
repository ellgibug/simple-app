<template>
    <div class="navbar">
        <div class="navbar__section navbar-section">
            <div class="navbar-section__item">
                <router-link :to="{name: 'Dashboard'}" class="logo">
                    Helpy
                </router-link>
            </div>
        </div>
        <div class="navbar__section navbar-section">
            <div class="navbar-section__item">
                <div class="d-menu-btn">
                    <div class="d-menu-btn__icon"
                         @click="isOpen =! isOpen">
                        <unicon name="user-circle"
                                fill="#9db1cc"
                                height="28"
                                width="28"
                        />
                    </div>
                    <div :class="['d-menu-btn__dropdown', 'dropdown', 'dropdown_bottom', isOpen && 'dropdown_opened']" ref="menu">
                        <div class="menu">
                            <div class="menu__top menu-top">
                                <div class="menu__item menu-top__item">
                                    <div class="user-greetings">
                                        Добро пожаловать, {{ user.name}}!
                                    </div>

                                </div>
                                <div class="menu__item menu-top__item">
                                    <div class="hide-menu"  @click="isOpen = false">
                                        <unicon name="times"
                                                height="24"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="menu__center menu-center">
                                <div class="menu__item menu-center__item" v-for="link in links" :key="link.route">
                                    <div :class="['menu-link-box', link.route === $route.name && 'menu-link-box_active']"
                                         @click="goTo(link.route)"
                                         @mouseenter="setHovered(link.route)"
                                         @mouseleave="setHovered('')">
                                        <div class="menu-link-box__icon">
                                            <unicon :name="link.icon"
                                                    height="48" width="48"
                                                    :fill="link.isHovered || link.route === $route.name ? '#30cfd1' : '#1e2e42'"
                                            />
                                        </div>
                                        <div class="menu-link-box__text">{{link.title}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="menu__footer menu-footer">
                                <div class="menu-footer__item">
                                    <div class="user-logout" @click="sendLogoutRequest">
                                        <div class="user-logout__text">
                                            Выйти
                                        </div>
                                        <div class="user-logout__icon">
                                            <unicon name="sign-out-alt"
                                                    height="14" width="14"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>