const state = {
    isCollapse: false,
    selectMenu: []
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
    }
}

export default {
    state,
    mutations
}