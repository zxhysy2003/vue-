<template>
    <div>
        admin
    </div>
</template>

<script setup>
import { authAdmin } from '../../../api/index'
import { onMounted, reactive } from 'vue'

const paginationData = reactive({
    pageNum: 1,
    pageSize: 10
})

onMounted(() => {
    authAdmin(paginationData).then(({ data }) => {
        console.log(data, 'authAdmin')
    })
})
</script>

<style lang="less" scoped>

</style>