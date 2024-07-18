<template>
  <div style="height: 800px">
    <el-container>
      <el-header style="height: auto">
        <el-card style="text-align: left">
          <div>买家已付款，等待商家发货</div>
          <li style="font-size: small">
            若订单一直未发货，买家会有投诉风险，建议您及时点击发货
          </li>
          <br />

          <el-button type="primary" @click="onSend">发货</el-button>
        </el-card>
      </el-header>
      <el-main>
        <el-card>
          <el-descriptions title="买家信息" column="1">
            <el-descriptions-item label="昵称:">
              {{ buyer_info.nickname }}
            </el-descriptions-item>
            <el-descriptions-item label="收货地址:">{{
              buyer_info.consignee +
              ", " +
              buyer_info.phone +
              ", " +
              buyer_info.detail
            }}</el-descriptions-item>
          </el-descriptions>
          <el-descriptions title="订单信息" column="3">
            <el-descriptions-item label="订单编号:">
              {{ order_info.number }}
            </el-descriptions-item>
            <el-descriptions-item label="下单时间:">{{
              order_info.created_time
            }}</el-descriptions-item>
            <el-descriptions-item label="付款时间:">{{
              order_info.checkout_time
            }}</el-descriptions-item>
          </el-descriptions>
          <div style="background-color: rgb(242, 242, 242)">
            <el-table :data="OrderDetailList" style="width: 100%">
              <el-table-column label="商品图片" width="180">
                <template #default="scope">
                  <div style="display: flex; align-items: center">
                    <img
                      v-if="scope.row.image"
                      :src="scope.row.image"
                      class="avatar"
                    />

                    <img v-else src="../assets/empty.png" class="avatar" />
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="商品名" width="180" />
              <el-table-column prop="price" label="单价(元)" width="180" />
              <el-table-column prop="number" label="数量" width="180" />
              <el-table-column label="商品总价(元)" width="150">
                <template #default="scope">
                  <div style="display: flex; align-items: center">
                    <span style="margin-left: 10px">{{
                      scope.row.price * scope.row.number
                    }}</span>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <br />
          <div style="text-align: right; font-size: small">
            <span>实收款: {{ total }} 元</span>
          </div>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>
  
  <script setup>
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";
import LocalCache from "../utils/cache.js";
import axios from "axios";
import { ElMain, ElMessage } from "element-plus";
import '../style.css'

const buyer_info = reactive({
  nickname: "test",
  detail: "asdfas adfasd asdf",
  consignee: "王大崔",
  phone: "148455648799",
});
const order_info = reactive({
  created_time: "",
  checkout_time: "",
  number: "",
});

// 订单部分
const OrderDetailList = ref();
const order = ref();

// 总付款
const total = computed(() => {
  if (!order.value) {
    return 0;
  }
  if (!OrderDetailList.value) {
    return 0;
  }
  if (OrderDetailList.value.length <= 0) {
    return 0;
  }
  // 统计订单价格,不包括运费
  let t = 0;
  for (let detail of OrderDetailList.value) {
    t += detail.number * detail.price;
  }
  t += order.value.postage;
  return t;
});

const token = localStorage.getItem("userToken");

const headers = {
  token: `${token}`
};
// 发货
const onSend = () => {
  // 发送修改请求
  axios
    .post(
      "/api/admin/order/deliver",
      {
        order_id: order.value.id,
      },  
      {  
        headers: headers, // 确保 headers 变量已经在此之前被定义  
      } 
    )
    .then((res) => {
      if (res.data.code == 0) {
        ElMessage.success("发货成功");
        router.push("/index");
      } else {
        ElMessage.error(res.data.msg);
      }
    });
};

// 获取数据
const router = useRouter();
onMounted(() => {
  // 获取当前要修改的订单id和状态
  let order_id = LocalCache.getCache("order_id");
  let status = LocalCache.getCache("order_status");

  if (!order_id || !status || status != 2) {
    ElMessage.error("非法的订单编辑");
    router.push("/index");
    return;
  }

  // 加载数据
  // 买家信息
  axios
    .get(
      "/api/admin/order/buyerInfo",
      {
        params: {
          order_id: order_id,
        },headers:headers
      }
    )
    .then((res) => {
      if (res.data.code == 0) {
        buyer_info.nickname = res.data.data.nickname;
        buyer_info.detail = res.data.data.detail;
        buyer_info.consignee = res.data.data.consignee;
        buyer_info.phone = res.data.data.phone;
      } else {
        ElMessage.error(res.data.msg);
      }
    });
  // 订单信息
  axios
    .get("/api/admin/order/info", {
      params: {
        orderId: order_id,
      },headers:headers
    })
    .then((res) => {
      if (res.data.code == 0) {
        order.value = res.data.data;
        order_info.checkout_time = order.value.checkout_time;
        order_info.created_time = order.value.created_time;
        order_info.number = order.value.number;
      } else {
        ElMessage.error(res.data.msg);
      }
    });

  // 订单详细信息
  axios
    .get(
      "/api/admin/order/detail",
      {
        params: {
          order_id: order_id,
        },headers:headers
      }
    )
    .then((res) => {
      if (res.data.code == 0) {
        OrderDetailList.value = res.data.data.records;
      } else {
        ElMessage.error(res.data.msg);
      }
    });
});
</script>
  
  <style>
.avatar {
  width: 50px;
  height: 50px;
  display: block;
}
</style>
  
  