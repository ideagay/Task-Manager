<template>
    <div class="pg-index">
        <my-header></my-header>
        <div class="banner"></div>
        <section class="content">
            <h2>welcome to task manager!</h2>
        </section>
        <my-footer></my-footer>
    </div>
</template>

<script>
import myHeader from './common/header.vue';
import myFooter from './common/footer.vue';

export default {
    name: 'index',
    data () {
        return {
        };
    },
    components: {
        myHeader,
        myFooter
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .pg-index{
        .banner{
            height: 500px;
            width: 100%;
            background: #db4c3f url('~@/assets/imgs/pictos.svg') center center;
            background-size: contain;
        }
        .content{
            padding: 50px 0;
            h2{
                text-align: center;
            }
        }
    }
</style>
