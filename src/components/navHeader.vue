<template>
    <div class="header-containers">
        <div class="header-left flex-box">
            <el-icon class="icon" size="20" @click="store.commit('collapseMenu')"><Fold /></el-icon>
            <ul class="flex-box">
                <li 
                    v-for="(item, index) in selectMenu" 
                    :key="item.path"
                    :class="{selected: route.path === item.path}"
                    class="tab flex-box">
                    <el-icon size="12"><component :is="item.icon" /></el-icon>
                    <router-link class="text flex-box" :to="{ path: item.path }">
                        {{ item.name }}
                    </router-link>
                    <el-icon size="12" class="close" @click="closeTab(item, index)"><Close /></el-icon>
                    
                </li>
            </ul>
        </div>
        <div class="header-right">
            <el-dropdown @command="handleClick">
                <div class="el-dropdown-link flex-box">
                    <el-avatar
                        :src="userInfo.avatar"
                    />
                    <p class="user-name">{{ userInfo.name }}</p>
                </div>
                <template #dropdown>
                    <el-dropdown-item command="cancel">退出</el-dropdown-item>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
// 拿到store的实例
const store = useStore()
// 当前的路由对象
const route = useRoute()
const router = useRouter()
const selectMenu = computed(() => store.state.menu.selectMenu)

const userInfo = JSON.parse(localStorage.getItem('pz_userInfo'))

// 点击关闭tag
const closeTab = (item, index) => {
    store.commit('closeMenu',item)
    // 删除的非当前页tag
    if (route.path !== item.path) {
        return
    }
    const selectMenuData = selectMenu.value
    // 删除的最后一项
    if (index === selectMenuData.length) {
        // 如果tag只有一个元素
        if (!selectMenuData.length) {
            router.push('/')
        } else {
            router.push({
                path: selectMenuData[index - 1].path
            })
        }
    } else {
        router.push({
            path: selectMenuData[index].path
        })
    }

}

const handleClick = (command) => {
    if (command === 'cancel') {
        localStorage.removeItem('pz_token')
        localStorage.removeItem('pz_userInfo')
        localStorage.removeItem('pz_v3pz')
        window.location.href = window.location.origin
    }
}
</script>

<style lang="less" scoped>
.flex-box {
    display: flex;
    align-items: center;
    height: 100%;
}
.header-containers {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    background-color: #fff;
    padding-right: 25px;
    .header-left {
        height: 100%;
        .icon {
            width: 45px;
            height: 100%;
        }
        .icon:hover {
            background-color: #f5f5f5;
            cursor: pointer;
        }
        .tab {
            padding: 0 10px;
            height: 100%;
            .text {
                margin: 0 5px;
            }
            .close {
                visibility: hidden;
            }
            &.selected {
                a {
                    color: #409eff;
                }
                i {
                    color: #409eff;
                }
                background-color: #f5f5f5;
            }
        }
        .tab:hover {
            background-color: #f5f5f5;
            .close {
                visibility: inherit;
                cursor: pointer;
                color: #000;
            }
        }
    }
    .header-right {
        .user-name {
            margin-left: 10px;
        }
    }
    a {
        height: 100%;
        color: #333;
        font-size: 15px;
    }
}
</style>