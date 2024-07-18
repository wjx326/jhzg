<template>
  <el-row class="tac">
    <el-col :span="25">
      <span>
        <img src="../assets/logo.png" style="height: 50px; width: 200px" />
      </span>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <router-link to="/index">
          <el-menu-item index="1">
            <template #title>
              <el-icon><Odometer /></el-icon>
              <span>仪表盘</span>
            </template>
          </el-menu-item>
        </router-link>
        <router-link to="/goodsList">
          <el-menu-item index="2">
            <el-icon><ShoppingCart /></el-icon>
            <span>商品列表</span>
          </el-menu-item>
        </router-link>
        <router-link to="/uploadgoods">
          <el-menu-item index="3">
            <el-icon><Upload /></el-icon>
            <span>发布商品</span>
          </el-menu-item>
        </router-link>
        <router-link to="/orderList">
          <el-menu-item index="4">
          <el-icon><Postcard /></el-icon>
          <span>订单列表</span>
        </el-menu-item>
        </router-link>
        <router-link to="/ShopEdit">
          <el-menu-item index="5">
            <el-icon><Shop /></el-icon>
            <span>店铺管理</span>
          </el-menu-item>
        </router-link>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {
  Postcard,
  Shop,
  ShoppingCart,
  Odometer,
  Upload,
} from "@element-plus/icons-vue";
import '../style.css'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>