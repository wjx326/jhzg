<template>
  <el-container>
    <el-header style="height: 150px">
      <el-form :model="form" label-width="120px">
        <el-row :gutter="0">
          <h style="float: left">筛选条件</h>
        </el-row>
        <el-row :gutter="0">
          <el-form-item label="商品编码" prop="">
            <el-input v-model="form.goodId"></el-input>
          </el-form-item>
          <el-form-item label="下单时间" prop="">
            <el-date-picker
              v-model="form.start_time"
              type="datetime"
              value-format="YYYY-MM-DD HH:mm:ss"
            />
            至
            <el-date-picker
              v-model="form.end_time"
              type="datetime"
              value-format="YYYY-MM-DD HH:mm:ss"
            />
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="订单编号" prop="">
            <el-input v-model="form.orderId" />
          </el-form-item>
          <el-form-item label="订单状态">
            <el-select
              style="width: 120px"
              v-model="form.orderStatuses"
              placeholder=""
            >
              <el-option
                v-for="item in orderStatuses"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button @click="getData" type="primary">筛选</el-button>
          </el-form-item>
        </el-row>
      </el-form>
    </el-header>
    <el-main>
      <order-table-view :orderList="orderList" ref="orderTableViewRef"></order-table-view>
    </el-main>
  </el-container>
</template>


<script setup>
import { ref, reactive, onMounted } from "vue";
import OrderTableView from "./order/OrderTableView.vue";
import axios from "axios";
import { ElMain } from "element-plus";
import '../style.css'

const form = ref({
  goodId: "",
  start_time: "",
  orderId: "",
  end_time: "",
  orderStatus: null,
});
const orderTableViewRef = ref()

const orderStatuses = [
  {
    value: 1,
    label: "待付款",
  },
  {
    value: 2,
    label: "待发货",
  },
  {
    value: 3,
    label: "待收货",
  },
  {
    value: 4,
    label: "待评价",
  },
  {
    value: 5,
    label: "退款/售后",
  },
  {
    value: 6,
    label: "完成",
  },
];

const orderList = ref([]);
const token = localStorage.getItem("userToken");

const headers = {
  token: `${token}`
};
//  筛选，得到的数据传给 子组件
const getData = () => {
  axios
    .get("/api/admin/order/page", {
      params: {
        page: 1,
        pageSize: 10,
        number: form.orderId,
        start_date: form.start_time,
        end_date: form.end_time,
        status: form.orderStatus,
        goods_id: form.goodId,
      },headers:headers
    })
    .then((response) => {
      if (response.data.code == 0) {
        orderList.value = response.data.data.records;
        // 触发子组件的方法
        orderTableViewRef.value.getData(orderList.value);

      } else {
        ElMessage.error(response.data.msg);
      }
    });
};
onMounted(() => {
  getData();
})



</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>