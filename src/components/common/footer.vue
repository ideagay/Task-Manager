<template>
    <div class="cp-footer">
        <footer>
            <span>&copy;copyright</span>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Index',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .cp-footer{
        border-top: 1px solid #eee;
        padding: 20px 0;
        footer{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>
