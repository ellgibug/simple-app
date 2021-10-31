<template>
    <div :class="['project', isActive ? 'active' : '']">

        <div :class="['project-type', project.is_published ? 'published' : 'unpublished']"/>


        <div class="project__row row justify-content-space-between">
            <div class="row__col">
                <span class="project-dates">
                    {{ project.created_at | moment("DD.MM.YYYY") }} / {{ project.updated_at | moment("DD.MM.YYYY") }}
                </span>
            </div>
            <div class="row__col">
                <span class="project-code">
                    {{ project.code }}
                </span>
            </div>
        </div>
        <div class="project__row row column">
            <div class="row__item">
                <span class="project-title">
                    {{ project.title }}
                </span>
            </div>
            <div class="row__item">
                <span class="project-url">
                    {{ project.url }}
                </span>
            </div>
        </div>
        <div class="project__row row justify-content-end">
            <span class="project-creator">
                {{ project.user.name }}
            </span>

        </div>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>