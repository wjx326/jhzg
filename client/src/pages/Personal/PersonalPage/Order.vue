<template>
    <div style="width: 96%;background-color: white;margin:20px auto;">
        <div class="order_header" style="margin: 15px;">
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
            >
                <el-menu-item index="1">所有订单</el-menu-item>
                <el-menu-item index="2">待付款</el-menu-item>
                <el-menu-item index="3">待发货</el-menu-item>
                <el-menu-item index="4">待收货</el-menu-item>
                <el-menu-item index="5">待评价</el-menu-item>
                <el-menu-item index="6">退款/售后</el-menu-item>
            </el-menu>
        </div>
        <div style="padding:10px;">
            <el-input
                v-model="input"
                style="max-width: 400px;  margin-bottom: 20px;"
                placeholder="输入商品标题或订单号进行搜索"
                class="input-with-select"
                >
                <template #append>
                    <el-button @click="handleSearch" >订单搜索</el-button>
                </template>
            </el-input>

            <el-pagination 
            layout="prev, pager, next,total" 
            :total="total"
            :page-size="currentPageSize"
            :current-page="currentPage"
            @current-change="handlePageChange"
            size="large"/>

        </div>
        
        <div style="margin-top: 10px;padding: 10px;">
            <el-row style="text-align: center;line-height: 50px;background-color: #f1f1f1;height: 50px;border:1px solid #f1f1f1;margin-bottom: 10px;">
                <el-col :span="10">宝贝</el-col>
                <el-col :span="2">单价</el-col>
                <el-col :span="2">数量</el-col>
                <el-col :span="2">实付款</el-col>
                <el-col :span="2">交易状态</el-col>
                <el-col :span="4">交易操作</el-col>
            </el-row>
        </div>

        <div style="padding: 10px;">
            <div v-for="(orderItem, index) in order" style="border:1px solid #f1f1f1;border-radius: 5px;">
                    <el-row style="line-height: 50px;background-color: #f1f1f1;height: 50px;border:1px solid #f1f1f1;margin-bottom: 10px;">
                        <el-col :span="15" style="padding-left: 5px;">
                            <el-checkbox  size="large" />
                            <span style="margin-left: 5px;">{{ formattedDate(orderItem.created_time) }}</span>
                            <span style="margin-left: 20px;">订单号{{ orderItem.number }}</span>
                        </el-col>
                        
                        <el-col :span="1" :offset="7">
                            <el-link :underline="false" @click="handleDelete">
                                <el-icon><Delete /></el-icon>
                            </el-link>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="10" style="display: flex;">
                            <div style="width: 100px;height: 100px;margin: 10px;">
                                <img style="width: 100%;height: 100%;" >
                            </div>
                            <div style="height: 150px;">{{orderItem.name}}</div>
                        </el-col>
                        <el-col :span="2" style="text-align: center;">￥{{orderItem.price}}</el-col>
                        <el-col :span="2" style="text-align: center;">{{orderItem.count}}</el-col>
                        <el-col :span="2" style="text-align: center;">￥{{orderItem.totalPrice}}</el-col>
                        <el-col :span="2" style="text-align: center;">
                            <div>{{getStatus(orderItem.status)}}</div>
                        </el-col>
                        <el-col :span="4" style="text-align: center;">
                            <el-button link @click="handlePay">支付订单</el-button><br>
                            <el-button link @click="handleReceived(orderItem.id)">确认收货</el-button><br>
                            <el-button link @click="handleComment(orderItem.goods_id)">追加评论</el-button><br>

                        </el-col>
                    </el-row>
                    <el-dialog
                    v-model="deleteVisible"
                    title="提示"
                    width="500"
                    :before-close="handleClose"
                    >
                    <span>您确定要删除此条订单吗？</span>
                    <template #footer>
                    <div class="dialog-footer">
                        <el-button @click="deleteVisible = false">取消</el-button>
                        <el-button type="primary" @click="confirmDelete(orderItem.id)">
                        确定
                        </el-button>
                    </div>
                    </template>
                </el-dialog>
                <el-dialog
                    v-model="payVisible"
                    title="提示"
                    width="500"
                    :before-close="handleClose"
                    >
                    <span>您确定要支付此条订单吗？</span>
                    <template #footer>
                    <div class="dialog-footer">
                        <el-button @click="payVisible = false">取消</el-button>
                        <el-button type="primary" @click="confirmPay(orderItem.id)">
                        确定
                        </el-button>
                    </div>
                    </template>
                </el-dialog>
            </div>
        </div>
        
    </div>

</template>

<script setup>
import {ref,onMounted} from 'vue'
import {Delete} from '@element-plus/icons-vue'
import {orderDetail,deleteOrder,orderPay,orderPage,orderReceived} from '../../../api/order'
import moment from 'moment';  
import { ElMessage } from 'element-plus'; 
import router from '../../../routers/router';

const input=ref(null);

const activeIndex = ref('1')

const order=ref([])
const total=ref(0)
const deleteVisible=ref(false)
const payVisible=ref(false)

const currentPage=ref(1)
const currentPageSize=ref(5)
const currentNumber=ref(null)
const currentStatus=ref(null)
const currentName=ref(null)

let orderpage=async ()=>{
    console.log("currentStatus.value",currentStatus.value);
    const response=await orderPage(currentPage.value,currentPageSize.value,currentStatus.value,currentNumber.value,currentName.value)
    let records=response.data.records
    total.value=response.data.total
    console.log(total.value);
    let updatedOrders = [];  
  
    // 遍历原始订单记录  
    for (const item of records) {  
        const detailResponse = await orderDetail(item.id);  
        // 假设 detailResponse.data 是直接返回的详细信息对象  
        const updatedItem = {  
            ...item, // 复制原始订单项  
            image: detailResponse.data.image,  
            name: detailResponse.data.name,  
            count: detailResponse.data.number, // 或者使用 count，如果这是您的意图  
            price: detailResponse.data.price,  
            totalPrice: detailResponse.data.number * detailResponse.data.price,
            goods_id:detailResponse.data.goods_id
        };  
        // 将更新后的订单项添加到新数组中  
        updatedOrders.push(updatedItem);  
    }  
  
    // 更新 order.value 为包含更新后订单项的新数组  
    order.value = updatedOrders;  
  
    console.log('order.value', order.value); 

}
const handleSelect=(index)=>{
    console.log(index);
    currentStatus.value=index;
    orderpage();
}
const handlePageChange=(newPage)=>{
    console.log(newPage);
    currentPage.value=newPage;
    orderpage();
}
let formattedDate=(dateString)=> {  
      return moment(dateString).format('YYYY-MM-DD');  
}

let getStatus=(status)=> {  
      switch (status) {  
        case 1:  
          return '待付款';  
        case 2:  
          return '待发货';  
        case 3:  
          return '待收货';  
        case 4:  
          return '待评价';  
        case 5:  
          return '退款/售后';  
        case 6:  
          return '完成';  
        default:  
          return '未知状态';  
      }  
}   


let handleDelete=()=> {  
    deleteVisible.value = true; 
}  

const handleSearch=()=>{
    currentName.value=input;
    orderpage();
}

let confirmDelete=async (id)=>{
    deleteVisible.value = false;  
    const response =await deleteOrder(id)
    if(response.code==='0')
    {
        orderpage()
        ElMessage({
        message: '删除成功',
        type: 'success',
    })
    }else{
       ElMessage({
         message: '删除失败',
         type: 'error',
         })
     }

}

let handlePay=()=> {  
    payVisible.value = true;  
}

let confirmPay=async (id)=>{
    const response=await orderPay(id);
    if(response.code==='0')
    {
        orderpage()
        ElMessage({
        message: '支付成功',
        type: 'success',
    })
    }else{
       ElMessage({
         message: '支付失败',
         type: 'error',
         })
     }
}

let handleComment=(id)=>{
    router.push(`/goodscomment?productId=${id}`);
}
  
const handleReceived=(id)=>{
    const response=orderReceived(id);
    orderpage();
}
onMounted(()=>{
    orderpage()
})




</script>