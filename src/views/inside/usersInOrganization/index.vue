<template>
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
                <column :lg="12" :md="12">
                    <row>
                        <column :lg="3" :md="7" :sm="6" :xs="9">
                            <Search :search="search" @startSearch="startSearch"/>
                        </column>
                        <column :lg="6" :md="5" :sm="6" :xs="3">
                            <div class="filter-roles">
                                <div v-for="filterGroup in filterGroups" class="filter-roles__item">
                                    <FilterGroup
                                            :key="filterGroupKey(filterGroup)"
                                            :filterGroup="filterGroup"
                                            @sendDataFromChildFilterComponent="getFilterData"
                                    />
                                </div>
                            </div>
                        </column>
<!--                        <column :lg="3" :md="7" :sm="6" :xs="9">-->
<!--                            <Pagination-->
<!--                                    :page="pagination.page"-->
<!--                                    :total="pagination.maxPage"-->
<!--                                    @pageUpdated="pageUpdated"-->
<!--                                    :key="`${pagination.page}${pagination.maxPage}`"/>-->
<!--                        </column>-->
                    </row>
                </column>
            </row>
        </div>

<!--        {{ organization }}-->

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

                </column>
            </row>
        </div>

    </Page>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>