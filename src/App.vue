<template>
  <div id="app">
    <vue-extend-layouts />
  </div>
</template>

<script>
  import VueExtendLayouts from 'vue-extend-layout'

  export default {
    name: 'App',
    components: { VueExtendLayouts }
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
</style>
