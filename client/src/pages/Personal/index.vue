<template>
<div style="width: 1300px;margin: auto;display: flex;">
    <div class="sidebar" style="width:150px">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            @select="handleSelect"
        >
            <el-menu-item index="1" @click="handleFront"><el-icon><House /></el-icon>
                <span>首页</span></el-menu-item>
            <el-menu-item index="2" @click="handleCart"><el-icon><ShoppingCart /></el-icon>我的购物车</el-menu-item>
            <el-menu-item index="3" @click="handleOrder"><el-icon><Tickets /></el-icon>我的订单</el-menu-item>
            <el-sub-menu index="4" >
                <template #title>
                    <el-icon><Star /></el-icon><span>我的收藏</span>
                </template>
                <el-menu-item index="4-1" @click="handleShops">店铺收藏</el-menu-item>
                <el-menu-item index="4-2" @click="handleGoods">商品收藏</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="5" @click="handleComment"><el-icon><ChatDotRound /></el-icon>我的评价</el-menu-item>
            <el-menu-item index="6" @click="handleFootprint"><el-icon><View /></el-icon>我的足迹</el-menu-item>
            <el-menu-item index="7" @click="handleService"><el-icon><User /></el-icon>售后服务</el-menu-item>
            <el-menu-item index="8" @click="handleAddress"><el-icon><Location /></el-icon>地址管理</el-menu-item>
            <el-sub-menu index="9">
                <template #title>
                    <el-icon><Setting /></el-icon><span>系统设置</span>
                </template>
                <el-menu-item index="9-1" @click="handleChangeSelf">修改个人资料</el-menu-item>
                <el-menu-item index="9-2" @click="handleChangePwd">修改密码</el-menu-item>
                <el-menu-item index="9-3" @click="handleChangeEmile">修改邮箱</el-menu-item>
            </el-sub-menu>
        </el-menu>
    </div>
    <div class="contain" style="background-color:#f1f1f1;width: 1150px;height: auto;">
        <router-view></router-view>
    </div>
</div>
</template>

<script setup>
import { House,ShoppingCart ,Tickets,Star,ChatDotRound,View,User,Location,Setting} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
const router = useRouter();
function handleFront(){
    router.push('/personal')
    console.log(1)
}
function handleCart(){
    router.push('/cart')
}
function handleOrder(){
    router.push('/order')
}
function handleShops(){
    router.push('/collectshops')
}
function handleGoods(){
    router.push('/collectgoods')
}
function handleFootprint(){
    router.push('/footprint')
}
function handleAddress(){
    router.push('/addresslist')
}
function handleChangeEmile(){
    router.push('/changeemile')
}
function handleChangePwd(){
    router.push('/changepwd')
}
function handleChangeSelf(){
    router.push('/changeselfinfo')
}
function handleComment(){
    router.push('/comment')
}
</script>

<style>

</style>