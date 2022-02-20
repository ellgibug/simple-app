<template>
    <header>
        <container :xl="1188" >
            <row>
                <column :xl="5" :lg="5" :md="6" :sm="3" :xs="3" >
                    <div class="header-links">
                        <div class="header-links__item logo" @click="goTo('Dashboard')">
                            <img src="../../../../assets/logo2.svg" alt="" height="50px">
                        </div>
                        <div class="header-links__item" @click="goTo('Projects')">
                            <HeaderLink iconName="book" linkText="Проекты"/>
                        </div>
                        <div class="header-links__item" @click="goTo('UsersInOrganization')">
                            <HeaderLink iconName="users-alt" linkText="Организация"/>
                        </div>
                    </div>
                </column>
                <column :xl="3" :lg="3" :lgShift="4" :md="5" :mdShift="1" :sm="2" :xs="3" :smShift="7" :xsShift="6">
                    <div class="header-links">
                        <div class="header-links__item" @click="goTo('Profile')">
                            <HeaderLink iconName="user" :linkText="user.name"/>
                        </div>
                        <div class="header-links__item logout" @click="sendLogoutRequest">
                            <HeaderLink iconName="sign-out-alt"/>
                        </div>
                        <div class="header-links__item burger" @click="$emit('openMobileMenu')">
                            <HeaderLink iconName="bars" :large="true"/>
                        </div>
                    </div>
                </column>
            </row>
        </container>
    </header>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>
