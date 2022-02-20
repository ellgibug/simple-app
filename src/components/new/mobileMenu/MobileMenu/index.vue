<template>
    <div class="mobile-menu">
        <div class="mobile-menu__row">
            <div class="mobile-menu__logo">
                <img src="../../../../assets/logo2.svg" alt="" height="40px">
            </div>
            <div class="mobile-menu__link">
                <unicon
                        name="user"
                        fill="#000"
                        :height="18" :width="18"
                        style="display: flex; margin-right: 10px"
                />
                Личный кабинет
            </div>
            <div class="mobile-menu__link">
                <unicon
                        name="book"
                        fill="#000"
                        :height="18" :width="18"
                        style="display: flex; margin-right: 10px"
                />
                Проекты
            </div>
            <div class="mobile-menu__link">
                <unicon
                        name="users-alt"
                        fill="#000"
                        :height="18" :width="18"
                        style="display: flex; margin-right: 10px"
                />
                Организация
            </div>
        </div>
        <div class="mobile-menu__row">
            <div class="mobile-menu__link">
                <unicon
                        name="sign-out-alt"
                        fill="#000"
                        :height="18" :width="18"
                        style="display: flex; margin-right: 10px"
                />
                Выход
            </div>
        </div>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>
