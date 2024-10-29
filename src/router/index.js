import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '../views/Main.vue'
import Login from '../views/login/index.vue'

const routes = [
    {
        path: '/',
        component: Layout
    },
    {
        path: '/login',
        component: Login
    }
]

createRouter({
    // 路由数据
    routes,
    // 路由匹配模式
    history: createWebHashHistory()
})