<template>
<div style="width:100%;margin: auto;display: flex;">
    <div class="sidebar" style="width:22%">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            @select="handleSelect"
        >
            <el-menu-item index="1"><el-icon><House /></el-icon>
                <span>首页</span></el-menu-item>
            <el-menu-item index="2"><el-icon><ShoppingCart /></el-icon>我的购物车</el-menu-item>
            <el-menu-item index="3"><el-icon><Tickets /></el-icon>我的订单</el-menu-item>
            <el-sub-menu index="4">
                <template #title>
                    <el-icon><Star /></el-icon><span>我的收藏</span>
                </template>
                <el-menu-item index="4-1">店铺收藏</el-menu-item>
                <el-menu-item index="4-2">商品收藏</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="5"><el-icon><ChatDotRound /></el-icon>我的评价</el-menu-item>
            <el-menu-item index="6"><el-icon><View /></el-icon>我的足迹</el-menu-item>
            <el-menu-item index="7"><el-icon><User /></el-icon>售后服务</el-menu-item>
            <el-menu-item index="8"><el-icon><Location /></el-icon>地址管理</el-menu-item>
            <el-sub-menu index="9">
                <template #title>
                    <el-icon><Setting /></el-icon><span>系统设置</span>
                </template>
                <el-menu-item index="9-1">修改个人资料</el-menu-item>
                <el-menu-item index="9-2">修改密码</el-menu-item>
                <el-menu-item index="9-3">修改邮箱</el-menu-item>
            </el-sub-menu>
        </el-menu>
    </div>
    <div class="contain" style="background-color:#f3f6f8;width: 100%;height: auto">
        <CollectShops />
    </div>
</div>
</template>

<script setup>
    import { House,ShoppingCart ,Tickets,Star,ChatDotRound,View,User,Location,Setting} from '@element-plus/icons-vue'
    import ChangeSelfInfo from "./PersonalPage/ChangeEmile.vue"
    import Front from "./PersonalPage/Front.vue"
    import Order from './PersonalPage/Order.vue'
    import Comment from './PersonalPage/Comment.vue'
    import CollectShops from './PersonalPage/CollectShops.vue'
    import CollectGoods from './PersonalPage/CollectGoods.vue'
    import AddressList from './PersonalPage/AddressList.vue'


</script>

<style>

</style>