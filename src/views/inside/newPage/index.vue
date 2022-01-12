<template>
    <Page title="Новая страница">

        <!-- Хлебные крошки -->
        <template v-slot:breadcrumbs>
            <row>
                <column :lg="12">
                    <Breadcrumbs :breadcrumbs="breadcrumbs"/>
                </column>
            </row>
        </template>

        <row>
            <column :lg="12">

                <div class="mb-8">
                    <input type="text" v-model="page.title">
                </div>
                <div class="mb-8">
                    <textarea name="" id="" cols="30" rows="10" v-model="page.body"></textarea>
                </div>
                <div class="mb-8">
                    <label for="is_published">
                        <input type="checkbox" v-model="page.is_published" id="is_published">
                        is_published
                    </label>
                </div>

                <div class="mb-8">
                    <button @click="savePage">Save</button>
                </div>

                <hr>

                {{ page }}



            </column>
        </row>



    </Page>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>