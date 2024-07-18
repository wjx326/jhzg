<template>
  <div class="outter">
    <el-row class="order_status">
      <el-badge :value="unpayed_count" :max="10">
        <el-button type="">待付款</el-button>
      </el-badge>
      <el-badge :value="undelivered_count" :max="10">
        <el-button type="">待发货</el-button>
      </el-badge>
    </el-row>

    <el-row :gutter="0">
      <el-col :span="16" class="shop_data">
        <shop-data-description></shop-data-description>
      </el-col>
      <el-col :span="6" class="goods_data">
        <best-seller-tabel></best-seller-tabel>
      </el-col>
    </el-row>
    <el-row :gutter="0">
      <el-col :span="10" class="sales_chart">
        <div style="margin-top: 20px">这里展示图表</div>
      </el-col>
      <el-col :span="10" class="rate">
        <div style="margin-top: 20px">店铺评分</div>
        <el-divider />
        <el-rate
          v-model="rate"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value} 分"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import ShopDataDescription from "./pannel/ShopDataDescription.vue";
import { ref } from "vue";
import axios from "axios";
import '../style.css'


const unpayed_count = ref(0);
const undelivered_count = ref(0);


const rate = ref(0.0);

onMounted(() => {


  // 查询所有状态订单计数
  axios
    .get("http://127.0.0.1:4523/m1/4784568-4438548-default/admin/vercel/order")
    .then((response) => {
      // 计数 1待付款 2待发货 3待收货 4待评价 5退款/售后 6完成

      // 初始化
      unpayed_count.value = 0;
      undelivered_count.value = 0;

      for (let type_count of response.data.data) {
        if (type_count.status === 1) {
          unpayed_count.value = type_count.count;
        } else if (type_count.status === 2) {
          undelivered_count.value = type_count.count;
        }
      }
    });
  // 查询
  axios
    .get("http://127.0.0.1:4523/m1/4784568-4438548-default/admin/vercel/score")
    .then((response) => {
      rate.value = response.data.data;
    });

});
</script>


<style scoped>
.el-badge {
  margin: 20px;
}
.order_status,
.shop_data,
.goods_data,
.rate,
.sales_chart {
  background-color: white;
  margin: 20px;
  top: 10px;
}
.outter {
  background-color: rgb(246, 246, 246);
  height: 100%;
  overflow: hidden;
}
.inner_shop_data {
  margin: 20px;
}
</style>