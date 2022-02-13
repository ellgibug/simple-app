<template>
  <div id="app">
    <transition name="bounce">
    <div :class="['notification', notification.type]" v-if="notification.isVisible">
      <container :xl="1188" >
        <row>
          <column :xs="12" >
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

    <vue-extend-layouts />

  </div>
</template>

<script>
  import VueExtendLayouts from 'vue-extend-layout'
  import {mapGetters, mapActions} from "vuex";

  export default {
    name: 'App',
    components: { VueExtendLayouts },

    watch: {
      "notification.isVisible"(){
        if(this.notification.isVisible){
          setTimeout(() => {
            this.clearNotification()
          }, 4000)
        }
      }
    },

    computed: {
      ...mapGetters("notification", ["notification"]),
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

  #app{
    height: 100%;
  }

  .notification{
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

    &.success{
      box-shadow: rgb(76, 198, 34) 0 -10px 60px -10px;
      border-bottom: 4px solid rgb(76, 198, 34);
    }
    &.error{
      box-shadow: rgb(198, 34, 86) 0 -10px 60px -10px;
      border-bottom: 4px solid rgb(198, 34, 86);
    }
    &.default{
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
</style>
