<template>
    <div class="pg-404">
        <img src="@/assets/imgs/404.png">
        <el-button type="primary" size="big" @click="back">返回首页</el-button>
    </div>
</template>

<script>
export default {
    name: '404',
    data () {
        return {
        };
    },
    components: {
    },
    methods: {
        back () {
            this.$router.push('/');
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .pg-404{
        text-align: center;
        img{
            margin: 60px auto 30px auto;
            display: block;
        }
    }
</style>
