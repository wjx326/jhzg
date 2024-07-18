<template>
 
  <div style="width: 90%;margin: auto;padding-top: 10px;">
    <div style="background-color: white;border-radius: 10px;">
      <el-row>
        <el-col :span="24">
          <ul class="select-list">分类：
                <li
                v-for="(cate, index) in cates" 
                :key="index"
                class="select-list-item"
                :class="{ selected: selectedCate === cate }"
                @click="toggleCate(cate)"
                >
                <el-link :underline="false" href="" @click="getCatesGoods(cate.id)">{{ cate.name }}</el-link>
                </li>
            </ul> 
        </el-col>
        <el-col :span="24">
            <ul class="select-list">筛选条件：
                <li
                v-for="(filter, index) in filters" 
                :key="index" 
                class="select-list-item"
                :class="{ selected: selectedFilter === filter }"
                @click="toggleFilter(filter)"
                >
                <el-link :underline="false" href="" @click="getFilterGoods(filter)">{{ filter }}</el-link>
                </li>
            </ul> 
        </el-col>
      </el-row>
    </div>

    <div style="background-color: white;border-radius: 10px;margin-top: 10px;padding:20px;">
      <el-row>
        <el-space wrap :size="40">
        <el-card v-for="goods in GoodsList" :key="i"  style="width: 250px" shadow="hover" @click="PushToDetail(goods.id)">
          <template #header>
            <div class="card-header"> 
              <el-image style="width: 210px; height: 210px" :src="goods.image" :fit="'fill'" />
              <div style="text-align: center; ">
                    {{ goods.name }}
                    <br>
                    <el-rate
                      v-model="goods.score"
                      disabled
                      show-score
                      text-color="#ff9900"
                      score-template="{value}分"
                    />
                </div>
            </div>
          </template>
          <div class="text item">
            <el-row>
              <el-col :span="8"> 
                <div style="color: #c40000; font-weight: bold;font-size: larger;">
                    ￥{{ goods.price }}
                </div>
                <div style="color:#666;font-size:x-small;margin-top: 10px;">
                  {{ goods.count }}人购买
                </div>
              </el-col>
              <el-col :span="5">
              
              </el-col>
              <el-col :span="8">
                <div style=" font-weight: bold;">
                <el-button color="#c40000">立即购买</el-button>
              </div>
              </el-col>
            </el-row>

          </div>
        </el-card>
      </el-space>
      

      </el-row>
      <el-pagination
      v-model:current-page="currentPage"
      :page-size="8"
      layout="total, prev, pager, next"
      :total="total"
      @current-change="handleCurrentChange"
    />
    </div>
  </div>
</template>

<style>
.el-row 
{
  margin-bottom: 20px;
}
.el-row:last-child 
{
  margin-bottom: 0;
}
.el-col 
{
  border-radius: 4px;
}

.grid-content 
{
  border-radius: 4px;
  min-height: 36px;
}
.select-list-item
{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  line-height: 25px;
}
.select-list
{
  display: flex; /* 父容器设置为flex布局 */  
  align-items: center; /* 如果需要，可以在这里设置子项的对齐方式 */  
  justify-content: space-between; 
  width: 40%; /* 或者设置一个具体的宽度值 */ 

}
.cata-select-list-item.selected .el-link 
{  
    color: white;  
    background-color: #e4393c;
    padding: 2px; 
}
.select-list-item.selected .el-link
{  
    color: white;  
    background-color: #e4393c;
    padding: 2px;
}
.cata-select-list
{
    display: flex; 
    align-items:center;   
    justify-content: space-between; 
    width: 15%; 
}
.cata-select-list-item
{
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 25px;
    padding: 4px;
}
 


</style>

<script setup>
import { watch,ref ,onMounted} from 'vue';
import { useGoodsCommentStore } from '../stores/goodsCommentStore'; 
import { useGoodsStore } from '../stores/goodsStore';
import {useGoodsCateStore} from '../stores/goodsCateStore'
import { getAllCategories } from '../api/category'
import { allGoodsPage } from '../api/goods'
import { useRouter } from 'vue-router'; 
import { useRoute } from 'vue-router';  
import { footprintRecord } from '../api/footprint'

const route = useRoute();  
const searchText = route.query.searchText;

const router = useRouter();  


const total = ref(0)
const currentPage = ref(1)
const pageSize=ref(8)
const priceSort= ref(null)
const salesSort= ref(null)
const scoreSort= ref(null)
const category_id= ref(null)


const GoodsList=ref([])

const goodsCommentStore = useGoodsCommentStore(); 
const goodsStore = useGoodsStore();
const GoodsCateStore = useGoodsCateStore(); 

const PushToDetail=async (id)=>{
  await footprintRecord(id)
  router.push({ name: 'GoodsDetail', query: { id } });  
}

const getCatesGoods=(id)=>{
  category_id.value=id
  getGoods(currentPage.value,pageSize.value,priceSort.value,salesSort.value,scoreSort.value,searchText,category_id.value)

}

const getFilterGoods=(filter)=>{
  if (filter === '按价格排序') {  
        priceSort.value = true;  
        salesSort.value = null;  
        scoreSort.value = null;  
      } else if (filter === '按销量排序') {  
        priceSort.value = null;  
        salesSort.value = true;  
        scoreSort.value = null;  
      } else if (filter === '按评分排序') {  
        priceSort.value = null;  
        salesSort.value = null;  
        scoreSort.value = true;  
      }  
      console.log('priceSort.value,salesSort.value,scoreSort.value',priceSort.value,salesSort.value,scoreSort.value)
  getGoods(currentPage.value,pageSize.value,priceSort.value,salesSort.value,scoreSort.value,searchText,category_id.value)
}

const getGoods=async (page,pageSize,priceSort,salesSort,scoreSort,searchText,category_id)=>{
  const response=await allGoodsPage(page,pageSize,priceSort,salesSort,scoreSort,searchText,category_id)
  total.value=response.data.total
  GoodsList.value=response.data.records
}

const handleCurrentChange = (val) => {
  getGoods(val,pageSize.value,priceSort.value,salesSort.value,scoreSort.value,searchText,category_id.value)
  console.log(`current page: ${val}`)
}

const filters = ref([
  '按销量排序',
  '按价格排序',
  '按评分排序',
]);

const cates = ref([{name:'全部商品'}]);

const  getCategories= async() =>{  
      try {  
        const response = await getAllCategories();  
        cates.value = cates.value.concat(response.data); 
        console.log('cates.value',cates.value) 
      } catch (error) {  
        console.error('Failed to fetch:', error);  
      }  
}  



const selectedFilter = ref('按销量排序'); 
const selectedCate = ref(cates.value[0]); 



const toggleFilter = (filter) => {
  if (selectedFilter.value === filter) return;
  selectedFilter.value = filter;
};

const toggleCate = (filter) => {
  if (selectedCate.value === filter) return;
  selectedCate.value = filter;
};

watch(selectedFilter, (newVal) => {  
      if (newVal === '按价格排序') {  
        priceSort.value = true;  
        salesSort.value = null;  
        scoreSort.value = null;  
      } else if (newVal === '按销量排序') {  
        priceSort.value = null;  
        salesSort.value = true;  
        scoreSort.value = null;  
      } else if (newVal === '按评分排序') {  
        priceSort.value = null;  
        salesSort.value = null;  
        scoreSort.value = true;  
      }  
    });  

onMounted(()=>{
  getCategories()
  getGoods(1,8,priceSort.value,salesSort.value,scoreSort.value,searchText,category_id.value)
  })
</script>