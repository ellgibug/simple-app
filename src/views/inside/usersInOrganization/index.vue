<template>
    <!--    <div>-->

    <!--        <div class="title">-->
    <!--            Пользователи в организации-->
    <!--        </div>-->

    <!--        {{ user }}-->
    <!--        <br>-->

    <!--        <div v-for="user in users">-->

<!--                {{user.id}} <br>-->
<!--                {{user.code}} <br>-->
<!--                {{user.name}} <br>-->
<!--                {{user.email}} <br>-->
<!--                {{user.organization_id}} <br>-->
<!--                is_email_verified {{user.is_email_verified}} <br>-->
<!--                is_confirmed_in_organization {{user.is_confirmed_in_organization}} <br>-->
<!--                {{ user.role.title }}-->

<!--                <button v-if="!user.is_confirmed_in_organization && user.role_id === 3" @click="confirm(user)">Подтвердить в организации</button>-->

    <!--            <hr>-->
    <!--        </div>-->


    <!--    </div>-->
    <Page title="Пользователи">

        <!-- Хлебные крошки -->
        <template v-slot:breadcrumbs>
            <row>
                <column :lg="12">
                    <Breadcrumbs :breadcrumbs="breadcrumbs"/>
                </column>
            </row>
        </template>

        <!-- Поиск и создание -->
        <div class="mb-20">
            <row>
                <column :lg="5" :md="12">
                    <row>
                        <column :lg="7" :md="7" :sm="6" :xs="9">
                            <Search :search="search" @startSearch="startSearch"/>
                        </column>
                        <column :lg="5" :md="5" :sm="6" :xs="3">

                        </column>
                    </row>
                </column>
            </row>
        </div>

        {{ organization }}

        <row>
            <column :lg="12">
                <div class="users">
                    <div v-for="user in users" class="users__card" :key="user.id">
                        <UserCard :user="user"/>
                    </div>
                </div>

            </column>
        </row>


        <div class="mt-20">
            <row>
                <column :lg="5">
                    <Pagination
                            :page="pagination.page"
                            :total="pagination.maxPage"
                            @pageUpdated="pageUpdated"
                            :key="`${pagination.page}${pagination.maxPage}`"/>
                </column>
            </row>
        </div>

    </Page>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>