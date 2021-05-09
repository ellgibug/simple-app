<template>
    <div class="info">
        <div class="info__title">
            {{ project.title}}
        </div>
        <div class="info__body">
            <div class="body row">
                <div class="row__col">
                    <dl class="attrs">
                        <dt><span>Просмотр:</span></dt>
                        <dd>{{ project.url }}</dd>
                    </dl>
                    <dl class="attrs">
                        <dt><span>Владелец:</span></dt>
                        <dd>{{ project.user.name }}</dd>
                    </dl>
                    <dl class="attrs">
                        <dt><span>Количество страниц:</span></dt>
                        <dd>{{ project.pages.length }}</dd>
                    </dl>
                </div>
                <div class="row__col">
                    <dl class="attrs">
                        <dt><span>Демонстрационный:</span></dt>
                        <dd>{{ project.is_demo }}</dd>
                    </dl>
                    <dl class="attrs">
                        <dt><span>Публикация:</span></dt>
                        <dd>{{ project.is_published }}</dd>
                    </dl>
                    <dl class="attrs">
                        <dt><span>Дата создания:</span></dt>
                        <dd>{{ project.created_at }}</dd>
                    </dl>
                </div>
            </div>
        </div>
        <div class="info__edit">
            <unicon name="edit"
                    style="display: flex"
                    fill="#9db1cc"
                    height="30" width="30"
            />
        </div>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>