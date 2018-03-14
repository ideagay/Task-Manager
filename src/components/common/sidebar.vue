<template>
  <div class="cp-sidebar">
    <div class="user-info">
        王大锤
    </div>
    <div class="menu">
        <router-link to="charts">报表统计</router-link>
        <router-link to="task">任务管理</router-link>
        <router-link to="team">组员管理</router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: 'sidebar',
    data () {
        return {
            msg: ''
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .cp-sidebar{
        width: 100%;
        padding: 20px;
        .user-info{

        }
        .menu{
            a{
                display: block;
                line-height: 40px;
            }
        }
    }
</style>
