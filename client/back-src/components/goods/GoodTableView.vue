<template>
  <el-table :data="goodsList" style="width: 100%">
    <el-table-column prop="id" label="编号" width="180" />
    <el-table-column prop="url" label="商品图片" width="180">
      <template v-slot="{ row }">
        <img :src="row.url" style="width: 100px; height: auto" />
      </template>
    </el-table-column>
    <el-table-column prop="name" label="商品名称" />
    <el-table-column prop="price" label="价格" />
    <el-table-column prop="store" label="库存" />
    <el-table-column label="操作">
      <template #default="scope">
        <el-button type="primary" size="small" @click="edit(scope.row.id)"
          >编辑</el-button
        >
        <el-button type="primary" size="small" @click="down(scope.row.id)" plain
          >下架</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>
  
<script setup>
import { onMounted } from "vue";
import LocalCache from "../../utils/cache.js";
import axios from "axios";
import { ElMessage } from "element-plus";
const { goodsList } = defineProps(["goodsList"]);
import {useRouter} from 'vue-router'

const router = useRouter();
const edit = (id) => {
  LocalCache.setCache('goods_id',id);
  router.push('/editGoods')
};
const down = (id) => {
  axios
    .post(
      "http://127.0.0.1:4523/m1/4784568-4438548-default/admin/goods/create?apifoxApiId=192521383",
      {
        id: id,
        status: 0,
      }
    )
    .then((res) => {
      if (res.data.code == 0) {
        ElMessage.success("编号为 " + id + " 的商品下架成功");
      } else {
        ElMessage.error(res.data.msg);
      }
    });
};
</script>
  