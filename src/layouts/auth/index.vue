<template>
    <div>
        <div class="a-page">
            <div class="a-page__card">


<!--                <div class="links">-->
<!--                    <div v-for="link in links" class="links__item">-->
<!--                        <router-link :to="{name: link.route}" :key="link.route">-->
<!--                            {{ link.title }}-->
<!--                        </router-link>-->
<!--                    </div>-->
<!--                </div>-->

                <transition name="fade" mode="out-in">
                    <router-view/>
                </transition>
            </div>
        </div>
    </div>
</template>

<style src="./styles.scss" lang="scss" scoped></style>
<script src="./scripts.js"></script>