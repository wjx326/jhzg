<template>
  <el-table :data="orderList2" style="width: 100%">
    <el-table-column prop="" label="商品详情" width="480">
      <template #default="scope">
        <goods-table-view
          :orderDetailList="scope.row.orderDetailList"
        ></goods-table-view>
      </template>
    </el-table-column>
    <el-table-column prop="user_id" label="买家ID" width="180" />
    <el-table-column prop="status" label="订单状态" width="180">
      <el-button type="primary">详情</el-button>
    </el-table-column>
    <el-table-column prop="postage" label="邮费" />
  </el-table>
</template>

<script setup>
import { ref, watch } from "vue";
import GoodsTableView from "../order/GoodsTableView.vue";
import axios from "axios";
import { ElMain, ElMessage } from "element-plus";


const token = localStorage.getItem("userToken");

const headers = {
  token: `${token}`
};
// const { orderList } = defineProps(["orderList"]);
const orderList2 = ref([])

// 加载orderDetail数据
const getData = (orderList) => {
console.log('getData');
console.log(orderList)
  if (orderList.length > 0) {

      for (let i = 0; i < orderList.length ; i++) {
        // 获取订单详细信息
        axios
          .get(
            "/api/admin/order/detail",
            {
              params: {
                order_id: orderList[i].id,
              }
              ,headers:headers
            }
          )
          .then((res) => {
            if (res.data.code == 0) {
              // 加载具体数据
              orderList2.value.push({
                id: orderList[i].id,
                orderDetailList: res.data.data.records,
                user_id: orderList[i].user_id,
                status: orderList[i].status,
                postage: orderList[i].postage
              });
              console.log(orderList2)
            } else {
              ElMessage.error(res.data.msg);
            }
          });
      }
    }
}
// 主动暴露childMethod方法
defineExpose({ getData })

// 监听 orderList的数据变化
// watch(orderList, (newVal, oldVal) => {
//   console.log(typeof(newVal))

//     if (newVal.size() > 0) {
//       for (let i = 0; i < newVal.size(); i++) {
//         // 获取订单详细信息
//         axios
//           .get(
//             "/api/admin/order/detail",
//             {
//               params: {
//                 order_id: newVal[i].id,
//               },
//             }
//           )
//           .then((res) => {
//             if (res.data.code == 0) {
//               // 加载具体数据
//               newVal[i][orderDetailList] = res.data.data.records;
//             } else {
//               ElMessage.error(res.data.msg);
//             }
//           });
//       }
//     }
// })

// 接受数据，。。。
</script>