<template>
    <div>

        <div class="title">
            Пользователи в организации
        </div>

        {{ user }}
        <br>

        <div v-for="user in users">

            {{user.id}} <br>
            {{user.code}} <br>
            {{user.name}} <br>
            {{user.email}} <br>
            {{user.organization_id}} <br>
            is_email_verified {{user.is_email_verified}} <br>
            is_confirmed_in_organization {{user.is_confirmed_in_organization}} <br>
            {{ user.role.title }}

            <button v-if="!user.is_confirmed_in_organization && user.role_id === 3" @click="confirm(user)">Подтвердить в организации</button>

            <hr>
        </div>



    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>