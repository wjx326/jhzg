<template>
  <el-table :data="goodsList" stripe>
    <el-table-column prop="name" label="商品名称" width="150" />
    <el-table-column prop="count" label="销量" width="75" />
  </el-table>
</template>

<script setup>
import {onMounted, reactive} from "vue"
import axios from "axios"

const token = localStorage.getItem("userToken");

const headers = {
  token: `${token}`
};
const goodsList = reactive([
]);

onMounted(() => {
  // 根据商铺id查询热销商品列表
  axios
    .get("/api/admin/vercel/hotgoods",{headers:headers})
    .then((response) => {
      let count = 0;
      Object.assign(goodsList, [])
      // 初始化
      for (let goods of response.data.data) {
        if(count >= 4)
          break;
        goodsList.push(goods);
        
        count++;
      }
    });
})





</script>