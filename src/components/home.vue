<template>
    <div class="pg-home">
        <div class="left">
            <sidebar></sidebar>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Sidebar from './common/sidebar.vue';

export default {
    name: 'home',
    data () {
        return {
        };
    },
    components: {
        Sidebar
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "~@/assets/styles/variable.less";
    .pg-home{
        height: 100%;
        display: flex;
        align-items: stretch;
        .left{
            width: 200px;
        }
        .main{
            flex: 1;
            background: @primary url('~@/assets/imgs/pictos.svg') center center;
            background-size: contain;
        }
    }
</style>
