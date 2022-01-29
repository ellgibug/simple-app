<template>
    <div class="text-input-wrapper">
        <label :for="id"
               class="text-input-wrapper__label">
            {{ label }}
        </label>
        <div class="text-input-wrapper__input">
            <input
                    class="text-input"
                    autocomplete="off"
                    :id="id"
                    :name="name"
                    :type="type"
                    v-bind:value="value"
                    v-on:input="$emit('input', $event.target.value)"/>
            <button class="clear-button transparent-button" @click="$emit('input', '')" v-if="value.length">
                <unicon name="times"
                        fill="#D7D7D7"
                        style="display: flex"
                        height="20"/>
            </button>
        </div>

        <span class="text-input-wrapper__errors">
            {{ errors[0] }}
        </span>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>