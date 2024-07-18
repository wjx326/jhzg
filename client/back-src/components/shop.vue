<script setup>
import { RouterLink } from "vue-router";
import SideMenu from "./SideMenu.vue"
import TopBanner from "./TopBanner.vue";
import MainPanel from "./MainPanel.vue";
import '../style.css'
</script>

<template>
  <div class="common-layout" id="main">
    <el-container >
      <el-aside width="200px" style="height:800px">
        <side-menu></side-menu>
      </el-aside>
      <el-container>
        <el-header>
          <top-banner></top-banner>
        </el-header>
        <el-main height:800px >
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

