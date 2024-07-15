<template>
<div style="width:100%;margin: auto;display: flex;padding-bottom: 50px;">
    <div class="sidebar" style="width:22%">
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
            <el-menu-item index="8" @click="handleAddress"><el-icon><Location /></el-icon>地址管理</el-menu-item>
            <el-sub-menu index="9">
                <template #title>
                    <el-icon><Setting /></el-icon><span>系统设置</span>
                </template>
                <el-menu-item index="9-1" @click="handleChangeSelf">修改个人资料</el-menu-item>
                <el-menu-item index="9-2" @click="handleChangePwd">修改密码</el-menu-item>
                <el-menu-item index="9-3" @click="handleChangeEmile">修改邮箱</el-menu-item>
                <el-menu-item index="9-4" @click="handleRecharge">充值</el-menu-item>
                <el-menu-item index="9-5" @click="handleCreateStore">创建店铺</el-menu-item>
                <el-menu-item index="9-6" @click="handleInStore">进入店铺</el-menu-item>
            </el-sub-menu>
        </el-menu>
    </div>
    <div class="contain" style="background-color:#f3f6f8;width: 100%;height: auto">
        <router-view></router-view>
    </div>
</div>
</template>

<script setup>
import {ref} from 'vue'
import { House,ShoppingCart ,Tickets,Star,ChatDotRound,View,Location,Setting} from '@element-plus/icons-vue'
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
function handleRecharge(){
    router.push('/recharge')
}
function handleCreateStore(){
    router.push('/createstore')
}
function handleInStore(){
    
}
</script>

<style>

</style>