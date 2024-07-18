<template>
  <div style="height: 800px">
    <el-container>
      <el-header style="height: auto">
        <el-card style="text-align: left">
          <div>商品已拍下，等待买家付款</div>
          <li style="font-size: small">
            如需要修改运费或给予买家折扣优惠，可点击修改金额
          </li>
          <br />

          <el-button type="primary" @click="dialogVisible = true"
            >修改金额</el-button
          >
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
          <div style="text-align: left; font-weight: bold">订单信息</div>
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

    <el-dialog v-model="dialogVisible" title="修改金额" width="800">
      <div style="text-align: left">订单原价(不含运费)：{{ total }}</div>
      <br />
      <el-table :data="OrderDetailList" style="width: 100%">
        <el-table-column prop="name" label="商品名" width="180">
        </el-table-column>
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
      <br />
      <div style="text-align: left">
        <div>本次运费：<el-input v-model="postage" /></div>
        <br />
        <div>买家实付：{{ actual_total }}</div>
        <br />
        <div><el-button type="primary" @click="onSubmit">修改</el-button></div>
      </div>
    </el-dialog>
  </div>
</template>
  
  <script lang="ts" setup>
import { ref, reactive, onMounted, computed } from "vue";
import { ElMessage, TableColumnCtx } from "element-plus";
import { useRouter } from "vue-router";
import LocalCache from "../utils/cache.js";
import axios from "axios";
import inputNumPoint from "../utils/inputNumPoint";
import '../style.css'
const token = localStorage.getItem("userToken");

const headers = {
  token: `${token}`
};

const buyer_info = reactive({
  nickname: "test",
  detail: "asdfas adfasd asdf",
  consignee: "王大崔",
  phone: "148455648799",
});

// 订单部分
const OrderDetailList = ref();
const order = ref();
// 总收款
const total = computed(() => {
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
  return t;
});
const actual_total = computed(() => {
  // 统计订单价格,包括运费
  console.log(typeof total.value);
  return Number(postage.value) + Number(total.value);
});

// 对话框部分
const postage = ref(0);

const dialogVisible = ref(false);

// 修改邮费
const onSubmit = () => {
  axios
    .post(
      "/api/admin/order/postage",
      {
        postage: postage.value,
        order_id: order.value.id,
      },{headers:headers}
    )
    .then((res) => {
      if (res.data.code == 0) {
        ElMessage.success("邮费修改成功");
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

  if (!order_id || !status || status != 1) {
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
        postage.value = order.value.postage;
        console.log(order.value);
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
  
  