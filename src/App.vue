<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
require('normalize.css');
require('@/assets/styles/common.less');

export default {
    name: 'App'
};
</script>

<style>
    #app{
        height: 100%;
    }
</style>
