<template>
    <div class="organization">
        <div class="organization__title">Ваша организация</div>
        <div class="organization__body">
            <div class="body">
                <div class="body__text">
                    <div class="text">
                        <div class="text__title">
                            {{organization.title}}
                        </div>
                        <div class="text__code">
                            {{organization.code}}
                        </div>
                    </div>
                </div>
                <div class="body__button2">
                    <button>Перейти</button>
                </div>
            </div>
        </div>
        <div class="organization__confirmation">
            Приглашение обрабатывается
        </div>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>