<template>
    <Page title="Дашборд">

        <!-- Хлебные крошки -->
<!--        <template v-slot:breadcrumbs>-->
<!--            <row>-->
<!--                <column :lg="12">-->
<!--                    <Breadcrumbs/>-->
<!--                </column>-->
<!--            </row>-->
<!--        </template>-->

        <div class="mb-20">
            <row>
                <column>
                    <div class="welcome">
                        <div class="welcome__name">
                            Добро пожаловать, {{ user.name }}!
                        </div>
                        <div class="welcome__role">

                            <div :class="['user-role-label', user.role.value]">
                                {{user.role.title}}
                            </div>
                        </div>
                    </div>

                </column>
            </row>
        </div>

        <div class="mb-40" v-if="!user.is_email_verified">
            <row>
                <column>
                    <div class="email">
                        <email-verification/>
                    </div>

                </column>
            </row>
        </div>

        <div class="mt-9" v-if="user.is_email_verified">
            <row>
                <column :lg="5" :md="12">
                    <div class="projects-card">
                        <div class="projects-card__title">
                            <unicon
                                    name="book"
                                    :fill="1 ? '#000' : '#FF08E9'"
                                    :height="20" :width="20"
                                    style="display: flex; margin-right: 10px"
                            />
                            Ваши проекты
                        </div>
                        <div class="projects-card__body">
<!--                            У Вас {{ countOfProjects }} проектов.-->
                            Посмотреть или создать проекты.
                        </div>
                        <div class="projects-card__footer">
                            <button class="animatedButton">
                                К проектам
                            </button>
                        </div>
                        <div class="projects-card__number" v-if="countOfProjects">
                            {{ countOfProjects }}
                        </div>
                    </div>

                </column>
                <column :lg="5" :md="12" v-if="user.role.value === 'admin'">
                    <div class="projects-card">
                        <div class="projects-card__title">
                            <unicon
                                    name="users-alt"
                                    :fill="1 ? '#000' : '#FF08E9'"
                                    :height="20" :width="20"
                                    style="display: flex; margin-right: 10px"
                            />
                            Новые пользователи
                        </div>
                        <div class="projects-card__body">
                            <template v-if="countOfUnconfirmedUsers">
                                В вашей организации есть пользователи без подтвержденного e-mail.
                            </template>
                            <template v-else>
                                Перейти в управление организацией.
                            </template>

                        </div>
                        <div class="projects-card__footer">
                            <button class="animatedButton">
                                К организации
                            </button>
                        </div>
                        <div class="projects-card__number" v-if="countOfUnconfirmedUsers">
                            {{ countOfUnconfirmedUsers }}
                        </div>
                    </div>
                </column>
            </row>
        </div>

<!--        <div class="mb-10">-->
<!--            <row>-->
<!--                <column>-->
<!--                    <DashboardPanel>-->
<!--                        <div>Валидность емейла (сделано)</div>-->
<!--                        <email-verification v-if="!user.is_email_verified"/>-->
<!--                    </DashboardPanel>-->
<!--                </column>-->
<!--            </row>-->
<!--        </div>-->

<!--        <div class="mb-10">-->
<!--            <row>-->
<!--                <column>-->
<!--                    <DashboardPanel>-->
<!--                        <div>Ваши проекты ({{ countOfProjects }}). Перейти в управление проектами</div>-->
<!--                    </DashboardPanel>-->
<!--                </column>-->
<!--            </row>-->
<!--        </div>-->

<!--        <div>-->
<!--            <row>-->
<!--                <column>-->
<!--                    <DashboardPanel>-->
<!--                        <div>Если админ. У вас {{ countOfUnconfirmedUsers }} новых челов. Перейти в управление пользователями</div>-->
<!--                    </DashboardPanel>-->
<!--                </column>-->
<!--            </row>-->
<!--        </div>-->





<!--        <div>Подтвержение в организации (сделано на списке юзеров)</div>-->

    </Page>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>