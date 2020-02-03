<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App',
    created () {

    }
};
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
#app {
    width:100%;
    height:100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
