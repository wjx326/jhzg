<template>
  <el-table :data="orderDetailList" style="width: 100%">
    <el-table-column prop="image" label="商品图片" width="180">
      <template v-slot="{row}">
        <img :src="row.image" style="width: 100px; height: auto" />
      </template>
    </el-table-column>
    <el-table-column prop="name" label="商品信息" />
    <el-table-column prop="price" label="单价" />
    <el-table-column prop="number" label="数量" />
  </el-table>
</template>
  
<script setup>

const { orderDetailList } = defineProps(["orderDetailList"]);


</script>
  