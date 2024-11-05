<template>
    <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="aside-container"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <p class="logo-name">DIDI陪诊</p>
        <TreeMenu />
      </el-menu>
</template>

<script setup>
    import TreeMenu from './treeMenu.vue'
    import {useRouter} from 'vue-router'
    const router = useRouter()
    console.log(router, 'router')
    
    const handleOpen = () => {}
    const handleClose = () => {}
</script>

<style lang="less" scoped>
    .aside-container {
        height: 100%;
        .logo-name {
            font-size: 20px;
            text-align: center;
            height: 50px;
            line-height: 50px;
            color: #fff;
        }
    }
</style>