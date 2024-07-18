<template>
  <el-row :gutter="0" style="display: flex; justify-content: flex-end">
    <div class="avator">
      <el-avatar :size="50"  @error="errorHandler">
        <img
          :src="image"
        />
      </el-avatar>
    </div>
    <el-dropdown style="display:flex;align-items:center">
      <span class="el-dropdown-link">
        {{shopname}}
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
import {getShopByUserId} from '../../src/api/shop'

const shopname =ref('')
const image=ref('')

const getShop=async ()=>{
  const userId=localStorage.getItem("userId")
  const res=await getShopByUserId(userId)
  shopname.value=res.data.name
  image.value=res.data.image

}

onMounted(()=>{
  getShop()
})




</script>

<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  
  align-items: center;
}
</style>