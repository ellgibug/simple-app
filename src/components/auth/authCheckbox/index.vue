<template>


    <div class="checkbox">
        <input type="checkbox"
               :id="id"
               :name="name"
               class="custom-checkbox"
               v-bind:value="value"
               v-on:change="$emit('input', $event.target.checked)"
        />

        <label :for="id" class="checkbox-input-wrapper__label">
            <div>
                <slot/>
            </div>
        </label>

        <span class="checkbox-input-wrapper__errors">
            {{ errors[0] }}
        </span>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>