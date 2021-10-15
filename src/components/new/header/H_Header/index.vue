<template>
    <header>
        <Container class-name="justify-space-between align-center">
            <Col>
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
            </Col>
            <Col style="height: 70px">
                <div class="header-links">
                    <div class="header-links__item" @click="goTo('Profile')">
                        <HeaderLink iconName="user" :linkText="user.name"/>
                    </div>
                    <div class="header-links__item logout" @click="sendLogoutRequest">
                        <HeaderLink iconName="sign-out-alt"/>
                    </div>
                    <div class="header-links__item burger" @click="openMenu">
                        <HeaderLink iconName="bars" :large="true"/>
                    </div>
                </div>
            </Col>
        </Container>
    </header>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>
