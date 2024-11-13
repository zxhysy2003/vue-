const state = {
    isCollapse: false,
    selectMenu: [],
    routerList: [],
}

const mutations = {
    collapseMenu (state) {
        state.isCollapse = !state.isCollapse
    },
    addMenu (state, payload) {
        // 对数据去重
        if (state.selectMenu.findIndex(item => item.path === payload.path) === -1) {
            state.selectMenu.push(payload)
        }
    },
    closeMenu (state, payload) {
        // 找到点击数据的索引
        const index = state.selectMenu.findIndex(val => val.name === payload.name)
        // 通过索引删除数组指定元素
        state.selectMenu.splice(index, 1)
    },
    dynamicMenu (state, payload) {
        // 通过glob导入文件
        const modules = import.meta.glob('../views/**/**/*.vue');
        console.log(modules)
        function routerSet(router) {
            router.forEach((route) => {
                // 判断没有子菜单,拼接路由数据
                if (!route.children) {
                    const url = `../views${route.meta.path}/index.vue`
                    // 拿到获取的vue组件
                    route.component = modules[url]
                } else {
                    routerSet(route.children)
                }
            })
        }
        routerSet(payload)
        // 拿到完整的路由数据
        state.routerList = payload
    }
}

export default {
    state,
    mutations
}