<template>
            <el-descriptions title="店铺数据" class="inner_shop_data">
          <el-descriptions-item label="今日销售额:">{{
            sales_today
          }}</el-descriptions-item>
          <el-descriptions-item label="今日订单数:">{{
            order_today
          }}</el-descriptions-item>
          <el-descriptions-item label="在售商品数:">{{
            goods_count
          }}</el-descriptions-item>
          <el-descriptions-item label="昨日销售额:">{{
            sales_yesterday
          }}</el-descriptions-item>
          <el-descriptions-item label="昨日订单数:"
            >{{ order_yesterday }}
          </el-descriptions-item>
          <el-descriptions-item label="店铺粉丝数:"
            >{{ fans_count }}
          </el-descriptions-item>
        </el-descriptions>
</template>

<script setup>
import { onMounted,ref } from "vue";
import axios from "axios";
import formatDate from "../../utils/formatter.js";

const sales_yesterday = ref(0);
const sales_today = ref(0);

const order_yesterday = ref(0);
const order_today = ref(0);

const goods_count = ref(0)
const fans_count = ref(0)


onMounted(() => {
  // 获取昨天，今天日期
  let today = new Date();
  let yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);

  // 根据查询昨日商铺销售额
  axios
    .get(
      "http://127.0.0.1:4523/m1/4784568-4438548-default/admin/vercel/sales",
      {
        params: {
          date: formatDate(yesterday),
        },
      }
    )
    .then((response) => {
      sales_yesterday.value = response.data.data;
    });
  // 根据查询今日商铺销售额
  axios
    .get(
      "http://127.0.0.1:4523/m1/4784568-4438548-default/admin/vercel/sales",
      {
        params: {
          date: formatDate(today),
        },
      }
    )
    .then((response) => {
      sales_today.value = response.data.data;
    });

  // 根据查询昨日商铺订单数
  axios
    .get(
      "http://127.0.0.1:4523/m1/4784568-4438548-default/admin/vercel/count",
      {
        params: {
          date: formatDate(yesterday),
        },
      }
    )
    .then((response) => {
      order_yesterday.value = response.data.data;
    });
  // 根据查询今日商铺订单数
  axios
    .get(
      "http://127.0.0.1:4523/m1/4784568-4438548-default/admin/vercel/count",
      {
        params: {
          date: formatDate(today),
        },
      }
    )
    .then((response) => {
      order_today.value = response.data.data;
    });
    // 根据商铺id查询商品计数
    axios
    .get(
      "http://127.0.0.1:4523/m1/4784568-4438548-default/admin/vercel/goods"
    )
    .then((response) => {
      goods_count.value = response.data.data;
    });
    // 根据商铺id查询粉丝数
    axios
    .get(
      "http://127.0.0.1:4523/m1/4784568-4438548-default/admin/vercel/fans"
    )
    .then((response) => {
      fans_count.value = response.data.data;
    });


})

</script>