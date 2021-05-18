<template>
    <div class="profile ">

        <div class="profile__breadcrumbs container">
            <Breadcrumbs :breadcrumbs="breadcrumbs"/>
        </div>
        <div class="profile__block" style="padding:0; background: #f8fafc;">
            <PersonalData :user="user"/>
        </div>
        <div class="profile__block container" v-if="!user.is_email_verified">
            <EmailVerification/>
        </div>
        <div class="profile__block" style="padding: 50px 0 70px 0;">
            <OrganizationCard :organization="user.organization"/>
        </div>







<!--        <hr>-->

<!--        <div>Персональные данные</div>-->
<!--        <div>{{ user.code}}</div>-->
<!--        <div>{{ user.name}}</div>-->
<!--        <div>{{ user.email}}</div>-->

<!--        <hr>-->

<!--        <div>Подтверждение емейла</div>-->
<!--        <div>{{ user.is_email_verified}}</div>-->

<!--        <hr>-->

<!--        <div>Роль</div>-->
<!--        <div>{{ user.role.title}}</div>-->


<!--        <hr>-->

<!--        <div>Организация</div>-->
<!--        <div>{{ user.organization.code}}</div>-->
<!--        <div>{{ user.organization.title}}</div>-->


<!--        <hr>-->
<!--        Выйти-->

<!--        {{ user }}-->
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>