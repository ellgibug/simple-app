<template>
    <div>
        <div class="row" >
            <div class="row__col" v-for="k in keys">
                <template v-if="k">
                    {{row[k]}}
                </template>
                <template v-else>
                    <div @click="toggleVisibility">
                        <unicon name="bars"
                                style="display: flex;"
                                fill="#9db1cc"
                                height="20"
                                width="20"
                        />
                    </div>
                </template>
            </div>
        </div>
        <div class="hidden" v-if="isVisible">
            {{row}}
        </div>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>