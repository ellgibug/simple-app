<template>
    <header>
        <container :xl="1188">
            <row>
                <column :lg="5" >
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
                <column :lg="3" :lgShift="4">
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
                </column>
            </row>
        </container>


<!--        <Container class-name="justify-space-between align-center">-->
<!--            <Col>-->
<!--                -->
<!--            </Col>-->
<!--            <Col style="height: 70px">-->
<!--                -->
<!--            </Col>-->
<!--        </Container>-->
    </header>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>
