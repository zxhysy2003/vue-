import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '../views/Main.vue'
import Login from '../views/login/index.vue'

const localData = localStorage.getItem('pz_v3pz')

const routes = [
    {
        path: '/',
        component: Layout,
        name: 'main',
        redirect: to => {
            if (localData) {
                // 有子菜单的情况
                const child = JSON.parse(localData).menu.routerList[0].children;
                if (child) {
                    return child[0].meta.path
                } else {
                    return JSON.parse(localData).menu.routerList[0].meta.path
                }
            } else {
                return '/auth/admin'
            }
        },
        children: []
    },
    {
        path: '/login',
        component: Login
    },
]

const router = createRouter({
    // 路由数据
    routes,
    // 路由匹配模式
    history: createWebHashHistory()
})

export default router