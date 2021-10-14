<template>
<div class="editor">
    <div class="editor__breadcrumbs">
        <Breadcrumbs :breadcrumbs="breadcrumbs"/>
    </div>

    <textarea name="" id="" cols="30" rows="10" v-model="page.body"/>

   {{ page.body }}

    <button @click="updatePageBody">updatePageBody</button>




</div>


</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>