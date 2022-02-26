<template>
    <div class="fg-wrapper">
        <template v-if="canBeLoaded">
            <div class="fg-wrapper__variants">
                <div class="fg-variants">
                    <div class="fg-variants__item" v-for="variant in filterGroup.variants">
                        <label
                                class="checkbox-btn"
                                :for="`${filterGroup.name}${variant.id}`">
                            <input
                                    :type="filterGroup.type"
                                    :name="filterGroup.name"
                                    :value="variant.id"
                                    :id="`${filterGroup.name}${variant.id}`"
                                    :checked="checkedVariants.includes(variant.id)"
                                    v-model="checkedVariants">

                            <span class="span">
                                <template v-if="checkedVariants.includes(variant.id)">
                                    <unicon name="check-square"
                                            fill="#fff"
                                            style="display: flex; margin-right: 5px"
                                            height="20"/>
                                </template>
                                <template v-else>
                                    <unicon name="square-full"
                                            fill="#91a5af"
                                            style="display: flex; margin-right: 5px"
                                            height="20"/>
                                </template>

                                {{ variant.value }}
                                <span v-if="variant.additional" class="additional">{{ variant.additional }}</span>
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </template>
        <template v-else>
            ...
        </template>
    </div>
</template>

<script src="./scripts.js"></script>
<style lang="scss" scoped src="./styles.scss"></style>