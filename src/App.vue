<template>
    <div id="app">
        <transition name="bounce">
            <div :class="['notification', notification.type]" v-if="notification.isVisible">
                <container :xl="1188">
                    <row>
                        <column :xs="12">
                            {{ notification.text }}
                        </column>
                    </row>
                </container>
                <button class="clear-button transparent-button" @click="clearNotification">
                    <unicon name="times"
                            fill="#000"
                            style="display: flex"
                            height="20"/>
                </button>
            </div>
        </transition>

        <div class="loading" v-if="loader.isVisible">
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            <template v-if="loader.text">{{loader.text}}</template>
        </div>

        <vue-extend-layouts/>

    </div>
</template>

<script>
    import VueExtendLayouts from 'vue-extend-layout'
    import {mapGetters, mapActions} from "vuex";

    export default {
        name: 'App',
        components: {VueExtendLayouts},

        watch: {
            "notification.isVisible"() {
                if (this.notification.isVisible) {
                    setTimeout(() => {
                        this.clearNotification()
                    }, 4000)
                }
            }
        },

        computed: {
            ...mapGetters("notification", ["notification", "loader"]),
        },

        methods: {
            ...mapActions("notification", ["clearNotification"])
        }
    }
</script>

<style lang="scss">
    html,
    body {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }


    body {
        margin: 0;
        padding: 0;
        background: #f5f9fa;
        font: normal 16px/24px Raleway, Arial, Helvetica, "sans-serif";
        color: #12131a;
        letter-spacing: 0.023em;
        -webkit-text-size-adjust: none;
        /*display: -webkit-box;*/
        /*display: -ms-flexbox;*/
        /*display: flex;*/
        /*-webkit-box-orient: vertical;*/
        /*-webkit-box-direction: normal;*/
        /*-ms-flex-direction: column;*/
        /*flex-direction: column;*/
    }

    *,
    *:before,
    *:after {
        font-family: 'Raleway', sans-serif;
        box-sizing: border-box;
    }

    #app {
        height: 100%;
    }

    .notification {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        background: #eee;
        padding: 30px 0;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        font: normal 16px/24px Raleway, Arial, Helvetica, "sans-serif";

        &.success {
            box-shadow: rgb(76, 198, 34) 0 -10px 60px -10px;
            border-bottom: 4px solid rgb(76, 198, 34);
        }

        &.error {
            box-shadow: rgb(198, 34, 86) 0 -10px 60px -10px;
            border-bottom: 4px solid rgb(198, 34, 86);
        }

        &.default {
            box-shadow: rgb(38, 57, 77) 0 -10px 60px -10px;
            border-bottom: 4px solid rgb(38, 57, 77);
        }

        button.clear-button {
            position: absolute;
            right: 10px;
            top: 20px;
        }
    }


    .bounce-enter-active {
        animation: bounce-in 0.5s;
    }

    .bounce-leave-active {
        animation: bounce-in 0.5s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.01);
        }
        100% {
            transform: scale(1);
        }
    }

    .loading {
        position: fixed;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5));
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: white;
        font: normal 16px/24px Raleway, Arial, Helvetica, "sans-serif";
        font-weight: 600;

    }

    .lds-ellipsis {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }
    .lds-ellipsis div {
        position: absolute;
        top: 33px;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background: #fff;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }
    .lds-ellipsis div:nth-child(1) {
        left: 8px;
        animation: lds-ellipsis1 0.6s infinite;
    }
    .lds-ellipsis div:nth-child(2) {
        left: 8px;
        animation: lds-ellipsis2 0.6s infinite;
    }
    .lds-ellipsis div:nth-child(3) {
        left: 32px;
        animation: lds-ellipsis2 0.6s infinite;
    }
    .lds-ellipsis div:nth-child(4) {
        left: 56px;
        animation: lds-ellipsis3 0.6s infinite;
    }
    @keyframes lds-ellipsis1 {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
    @keyframes lds-ellipsis3 {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }
    @keyframes lds-ellipsis2 {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(24px, 0);
        }
    }

</style>
