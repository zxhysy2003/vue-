<template>
    <button @click="dialogFormVisable = true">打开</button>
    <el-dialog
        v-model="dialogFormVisable"
        :before-close="beforeClose"
        title="添加权限"
        width="500"
    >
        <el-form
            ref="formRef"
            label-width="100px"
            label-position="left"
            :model="form"
        >
            <el-form-item label="名称" prop="name">
                <el-input v-model="form.name" placeholder="请填写权限名称" />
            </el-form-item>

            <el-form-item label="权限" prop="permissions">
                <el-tree
                    ref="treeRef"
                    style="max-width: 600px"
                    :data="permissionData"
                    node-key="id"
                    show-checkbox
                    :default-checked-keys="defaultKeys"
                />
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { userGetMenu } from '../../../api';

onMounted(() => {
    // 菜单数据
    userGetMenu().then(({ data }) => {
        console.log(data, 'group')
        permissionData.value = data.data
    })
})

// form的数据
const form = reactive({
    name: '',
    permissions: ''
})

// 树形菜单权限数据
const permissionData = ref([])

// 弹窗的显示隐藏
const dialogFormVisable = ref(false)

// 关闭弹窗的回调
const beforeClose = () => {
    dialogFormVisable.value = false
}

// 选中权限
const defaultKeys = [4, 5]
const treeRef = ref()
</script>

<style lang="less" scoped>

</style>