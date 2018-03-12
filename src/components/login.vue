<template>
    <div class="pg-login">
        <my-header></my-header>
        <div class="content">
            <el-form>
                <el-form-item>
                    <el-input v-model="username" placeholder="username"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="password" placeholder="password"></el-input>
                </el-form-item>
                <el-button type="primary" size="big" style="width: 100%" @click="login">登录</el-button>
            </el-form>
        </div>
        <my-footer></my-footer>
    </div>
</template>

<script>
import myHeader from './common/header.vue';
import myFooter from './common/footer.vue';

export default {
    name: 'login',
    data () {
        return {
            username: '',
            password: ''
        };
    },
    components: {
        myHeader,
        myFooter
    },
    methods: {
        login () {
            this.$router.push('web');
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .pg-login{
        .content{
            width: 400px;
            margin: 80px auto;
            min-height: 300px;
        }
    }
</style>
