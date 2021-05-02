<template>
    <div class="table">
        <div class="table__header header">
            <div class="header__row row">
                <div class="row__col" v-for="h in header">{{ h.title}}</div>
            </div>
        </div>
        <div class="table__body body">
            <div class="body__row" v-for="b in body" :key="b.id">

                <TableRow :row="b" :keys="keys"/>

            </div>
        </div>
        <div class="table__footer">

        </div>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>