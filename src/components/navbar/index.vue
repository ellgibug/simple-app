<template>

<!--    <a href='https://www.freepik.com/vectors/text'>Text vector created by macrovector - www.freepik.com</a>-->
<!--    <a href='https://www.freepik.com/vectors/business'>Business vector created by pch.vector - www.freepik.com</a>-->

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
                         @mouseenter="isOpen = true">
                        <unicon name="user"
                                style="display: flex"
                                fill="#F8FAFC"
                                height="22"
                                width="22"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div :class="['d-menu-btn__dropdown', 'dropdown', 'dropdown_bottom', isOpen && 'dropdown_opened']" ref="menu">

            <div class="menu">
                <div class="menu__top">
                    <div class="flex-container" style="align-items: center">
                        <div class="user-greetings">
                            <span>Добро пожаловать, {{ user.name}}!</span>
                            <HButton
                                    iconRight="sign-out-alt"
                                    theme="secondary"
                                    @handleClick="sendLogoutRequest">
                                Выйти
                            </HButton>
                        </div>
                        <div class="hide-menu"  @click="isOpen = false">
                            <unicon name="times"
                                    style="display: flex"
                                    height="24"
                            />
                        </div>
                    </div>
                </div>
                <div class="menu__body">

                    <div class="flex-container" style="height: 100%">
                        <div class="links">
                            <div v-for="link in links" class="links__item" >
                                <div :class="['link', link.route === $route.name && 'link_active']" @click="goTo(link.route)">
                                    <img :src="link.icon" :alt="link.route" class="link__img"/>
                                    <div class="link__text">{{link.title}}</div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
<!--                <div class="menu__footer">-->

<!--                </div>-->
            </div>



<!--            <div class="">-->
<!--                <div class="menu">-->
<!--                    <div class="menu__top menu-top">-->
<!--                        <div class="flex-container">-->
<!--                            <div class="menu__item menu-top__item">-->


<!--                            </div>-->
<!--                            <div class="menu__item menu-top__item">-->
<!--                                <div class="hide-menu"  @click="isOpen = false">-->
<!--                                    <unicon name="times"-->
<!--                                            height="24"-->
<!--                                    />-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->

<!--                    </div>-->

<!--                    <div class="menu__center menu-center ">-->

<!--                        <div class="flex-container">-->
<!--                            <div class="menu__item menu-center__item" v-for="link in links" :key="link.route">-->
<!--                                <div :class="['menu-link-box', link.route === $route.name && 'menu-link-box_active']"-->
<!--                                     @click="goTo(link.route)"-->
<!--                                     @mouseenter="setHovered(link.route)"-->
<!--                                     @mouseleave="setHovered('')">-->
<!--                                    <div class="menu-link-box__icon">-->
<!--                                        <img :src="link.icon" :alt="link.route">-->
<!--                                        &lt;!&ndash;                                    <unicon :name="link.icon"&ndash;&gt;-->
<!--                                        &lt;!&ndash;                                            height="48" width="48"&ndash;&gt;-->
<!--                                        &lt;!&ndash;                                            :fill="link.isHovered || link.route === $route.name ? '#30cfd1' : '#1e2e42'"&ndash;&gt;-->
<!--                                        &lt;!&ndash;                                    />&ndash;&gt;-->
<!--                                    </div>-->
<!--                                    <div class="menu-link-box__text">{{link.title}}</div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->



<!--                    </div>-->
<!--                    <div class="menu__footer menu-footer">-->
<!--                        <div class="menu-footer__item">-->
<!--                            <div class="user-logout" @click="sendLogoutRequest">-->
<!--                                <div class="user-logout__text">-->
<!--                                    Выйти-->
<!--                                </div>-->
<!--                                <div class="user-logout__icon">-->
<!--                                    <unicon name="sign-out-alt"-->
<!--                                            height="14" width="14"-->
<!--                                    />-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->



<!--            <div v-for="link in links" :key="link.route">-->
<!--                <div :class="[link.route === $route.name && 'menu-link-box_active']"-->
<!--                     @click="goTo(link.route)"-->
<!--                     @mouseenter="setHovered(link.route)"-->
<!--                     @mouseleave="setHovered('')">-->
<!--                    <div class="">-->
<!--                        <img :src="link.icon" :alt="link.route">-->
<!--                    </div>-->
<!--                    <div class="">{{link.title}}</div>-->
<!--                </div>-->
<!--            </div>-->

        </div>
        <div style="position: absolute; top: 40px; left: 0; background: rgba(0,0,0,0.4); width: 100%; height: 100vh; " v-if="isOpen"/>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>