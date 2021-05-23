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

                    <HButton
                            iconRight="angle-right"
                            theme="primary">
                        Перейти
                    </HButton>

                </div>
            </div>
        </div>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>