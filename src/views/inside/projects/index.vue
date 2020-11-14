<template>
    <div>
        <h1>Projects</h1>

        <div style="margin-top: 50px">
            <div v-for="project in projects" :key="project.id" style="margin-bottom: 20px">
                {{ project }}
            </div>
        </div>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>