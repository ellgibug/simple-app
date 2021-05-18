<template>
    <div class="container">
        <div class="block">
            <div class="block__title">Ваша организация</div>
            <div class="block__body b-body">
                <div class="b-body__title">
                    "{{organization.title}}"
                </div>
                <div class="b-body__addition">
                    Приглашение обрабатывается
                </div>
                <div class="b-body__button">
                    <button>
                        Перейти
                        <unicon name="angle-right"
                                style="display: flex; margin-left: 10px"
                                fill="#fff"
                                height="22"
                                width="22"
                        />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>