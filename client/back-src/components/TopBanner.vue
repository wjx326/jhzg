<template>
  <el-row :gutter="0" style="display: flex; justify-content: flex-end">
    <div class="avator">
      <el-avatar :size="50"  @error="errorHandler">
        <img
          src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
        />
      </el-avatar>
    </div>
    <el-dropdown style="display:flex;align-items:center">
      <span class="el-dropdown-link">
        {{username}}
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登陆</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-row>
</template>
  
<script setup>
const errorHandler = () => true;
import { ArrowDown } from "@element-plus/icons-vue";
import '../style.css'

const username = "张三水果店"
</script>

<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  
  align-items: center;
}
</style>