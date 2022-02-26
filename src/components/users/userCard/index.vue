<template>
    <div class="user-card">

        <div :class="['user-type', !user.is_confirmed_in_organization && user.role_id === 3 ? 'unconfirmed' : 'confirmed']"/>

        <div :class="['user-label', user.role.value]">
            {{user.role.title}}
        </div>


        <div class="user-card__row">
            <div class="user-card__name">
                {{user.name}}
            </div>
        </div>

        <div class="user-card__row">


            <dl class="attrs-dotted">
                <dt><span>Код:</span></dt>
                <dd>{{ user.code}}</dd>
            </dl>
            <dl class="attrs-dotted">
                <dt><span>E-mail:</span></dt>
                <dd>{{user.email}}</dd>
            </dl>
            <dl class="attrs-dotted">
                <dt><span>E-mail подтвержден:</span></dt>
                <dd>
                    <div>
                        {{ user.is_email_verified ? 'Да' : 'Нет'}}
                    </div>
                    <div v-if="!user.is_email_verified">
                        <template v-if="user.email_verification_code_expired_at !== 'null'">
                            Подтверждение не было запрошено
                        </template>
                        <template v-else>
                            Срок подтверждения истекает {{ user.email_verification_code_expired_at | moment("DD.MM.YYYY")}}
                        </template>
                    </div>

                </dd>
            </dl>
            <dl class="attrs-dotted">
                <dt><span>Подтвержден в организации:</span></dt>
                <dd>
                    <div>
                        {{ user.is_confirmed_in_organization ? 'Да' : 'Нет'}}
                    </div>
                    <div>
                        <button v-if="!user.is_confirmed_in_organization && user.role_id === 3" @click="confirm(user)">Подтвердить в
                            организации
                        </button>
                    </div>

                </dd>
            </dl>
            <dl class="attrs-dotted">
                <dt><span>Дата регистрации:</span></dt>
                <dd>{{ user.created_at | moment("DD.MM.YYYY") }}</dd>
            </dl>
        </div>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>