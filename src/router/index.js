import Vue from 'vue';
import Router from 'vue-router';
import notFound from '@/components/404'; // 404
import Index from '@/components/index'; // 项目主页-介绍宣传
import Login from '@/components/login'; // 登录
import Home from '@/components/Home'; // 登录后主页
import Charts from '@/components/charts'; // 报表统计

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/web',
            name: 'home',
            redirect: '/web/charts',
            component: Home,
            children: [{
                path: 'charts',
                name: 'charts',
                component: Charts
            }]
        },
        {
            path: '*',
            name: '404',
            component: notFound
        }
    ]
});
