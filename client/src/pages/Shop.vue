<template>
    <div style=" width: 90%; margin: auto;padding:20px;">
        <div style="background-color: white;border-radius: 10px;padding: 20px;width: 100%;margin-bottom: 30px;">
            <el-row >
                <el-col :span="3"><el-avatar shape="square" :size="120" :src="shopInfo.image" /></el-col>
                <el-col :span="15">
                    <div style="font-size: larger;">{{shopInfo.name}}</div>
                    <img src="../assets/img/logo1.png" style="width: 76px;height: 16px;" >
                    <el-rate
                        v-model="shopInfo.score"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}分"
                    />
                    <div>{{shopInfo.description}}</div>
                </el-col>
                <el-col :span="6">
                    <el-button :icon="Plus" @click="addFocus">关注店铺</el-button>
                </el-col>
            </el-row>
        </div>
        <div style="background-color: white;border-radius: 10px;padding: 20px;width: 100%;margin-bottom: 50px;padding-bottom: 50px;">
            <el-row>
                <el-col :span="4" style="font-size: x-large;">
                    全部商品
                </el-col>
                <el-col :span="8" :offset="6">
                    <!-- <el-input
                        v-model="input"
                        style="width: 150px"
                        placeholder="最低价格"
                        :formatter="(value) => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                        :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
                    />
                    <el-icon style="margin-left: 10px;margin-right: 10px;"><Minus /></el-icon>
                    <el-input
                        v-model="input"
                        style="width: 150px"
                        placeholder="最高价格"
                        :formatter="(value) => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                        :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
                    /> -->
                </el-col>
                
            </el-row>
            <el-row style="text-align: center;margin-top: 30px;" :gutter="80">
                <el-col :span="1"  v-for="(amount, index) in amounts" :key="index">
                    <div class="sort_tag" 
                    :class="{ selected: selectedAmount === amount }"
                    @click="selectAmount(amount)">{{amount}}</div>
                </el-col>
                <el-col :span="1">
                    <div class="sort_tag" style="width: 70px;" 
                        :class="{ selected: selectedAmount === '价格' }"
                        @click="selectCustomAmount">
                        价格
                        <el-icon v-if="priceSort"><CaretTop /></el-icon>
                        <el-icon v-else><CaretBottom /></el-icon>
                    </div>
                </el-col>
            </el-row>
            <div style="margin-top: 20px; margin-bottom: 30px;">
                <el-space wrap :size="50">
                    <div v-for="goods in GoodsList" 
                    style="border-radius: 10px;width: 250px;"
                    @click="PushToDetail(goods.id)">
                      <div class="contain_img" style="height:200px;">
                        <img :src="goods.image" style="border-radius: 10px;width: 100%; height: 100%;">
                      </div>
                        <div class="contain_img_detail" style=" height:70px">
                            <div style="margin-bottom: 5px;margin-top: 5px;color:#303133;">
                                {{goods.name}}
                            </div>
                            <div style="font-size:x-large;font-weight: bold; margin-bottom: 5px;color:red">
                                ￥{{goods.price}}
                            </div>
                            <div style="font-size:x-small;margin-bottom: 5px;color:#606266">
                                {{goods.count}}人已付款
                            </div>
                        </div>
                    </div>
                </el-space>
                
            </div>
            <el-pagination
            v-model:current-page="currentPage"
            :page-size="pageSize"
            :total="1000"
            layout="prev, pager, next"
            @current-change="handleCurrentChange"
            />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';  
import {Plus,Search,CaretBottom,CaretTop} from '@element-plus/icons-vue'
import {shopGoodsPage} from '../api/goods'
import {getShopByShopId} from '../api/shop'
import {setFocus} from '../api/focus'
import { ElMessage } from 'element-plus'; 
import { useRouter } from 'vue-router';  
import { footprintRecord } from '../api/footprint'

const amounts=["销量","收藏","新品"]
const selectedAmount=ref("销量")

const router = useRouter();

const route = useRoute();  
const shopId = route.query.id;

const currentPage = ref(1)
const pageSize=ref(8)
const priceSort= ref(true)
const salesSort= ref(true)
const timeSort= ref(true)
const collectionSort= ref(null)

const input=ref('')
const GoodsList=ref([])
const shopInfo=ref({})

const selectAmount = (amount) => {
  selectedAmount.value = amount
  priceSort.value=true;
  if(amount==="销量"){
    salesSort.value=false
    timeSort.value=true
    collectionSort.value=true
  }
  else if(amount==="收藏"){
    salesSort.value=true
    timeSort.value=true
    collectionSort.value=false
  }
  else{
    salesSort.value=true
    timeSort.value=false
    collectionSort.value=true
  }
    getGoodsList(currentPage.value,pageSize.value,
    priceSort,salesSort,shopId,timeSort,collectionSort)
}

const selectCustomAmount =() => {
  selectedAmount.value = "价格"
  priceSort.value=!priceSort.value
    getGoodsList(currentPage.value,pageSize.value,
    priceSort.value,salesSort.value,shopId,timeSort.value,collectionSort.value)
}
const addFocus=async (id)=>{
    const response=await setFocus(id)
    if(response.code==='200'){
        ElMessage({
        message: '关注成功',
        type: 'success',
        })
      }else{
        ElMessage({
        message: '关注失败',
        type: 'error',
        })
      }
}

const PushToDetail=async (id)=>{
  await footprintRecord(id)
  router.push({ name: 'GoodsDetail', query: { id } });  
}

const handleCurrentChange = (val) => {
    getGoodsList(val,pageSize.value,
    priceSort.value,salesSort.value,shopId,timeSort.value,collectionSort.value)
}

const getShopInfo=async (id)=>{
    const response=await getShopByShopId(id)
    shopInfo.value=response.data
}

const getGoodsList=async (page,pageSize,
priceSort,salesSort,shopid,timeSort,collectionSort)=>{
    const response=await shopGoodsPage(page,pageSize,
    priceSort,salesSort,shopid,timeSort,collectionSort)
    GoodsList.value=response.data
}



onMounted(()=>{
    getShopInfo(shopId)
    getGoodsList(currentPage.value,pageSize.value,
    priceSort.value,salesSort.value,shopId,timeSort.value,collectionSort.value)
})


</script>


<style>
.sort_tag{
    background-color: #EBEEF5;color: #606266; border-radius:5px ;width: 60px;height: 30px;line-height: 30px;
}
.sort_tag.selected{
    background-color: #FFEFE6;color: #FF5000; border-radius:5px ;width: 60px;height: 30px;line-height: 30px;
}
</style>