<template>
    <el-config-provider :locale="locale">
        <Header />
    <div style="background-color: #f3f6f8;">
        <router-view></router-view>
    </div>
</el-config-provider>
</template>
<script setup>
import Header from "../components/Header.vue";
import { computed, ref } from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const language = ref('zh-cn')
const locale = ref(zhCn)
</script>
<style>

</style>