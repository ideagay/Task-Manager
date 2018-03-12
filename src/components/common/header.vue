<template>
    <div class="cp-header">
        <header>
            <img src="@/assets/imgs/logo.png" class="logo">
            <el-button plain @click="login">登录</el-button>
        </header>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        };
    },
    methods: {
        login () {
            this.$router.push('login');
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .cp-header{
        border-bottom: 1px solid #eee;
        header{
            display: flex;
            align-items: center;
            padding: 10px 30px;
            justify-content: space-between;
        }
        .logo{
            width: 40px;
        }
    }
</style>
