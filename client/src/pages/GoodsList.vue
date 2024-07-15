<template>
  <template>
  <div style="width: 90%;margin: auto;padding-top: 10px;">
    <div style="background-color: white;border-radius: 10px;">
      <el-row>
        <el-col :span="24">
          <ul class="select-list">分类：
            <li
                class="select-list-item"
                :class="{ selected: selectedCate === cate }"
                @click="toggleCate(cate)"
                >
                <el-link :underline="false" href="">全部商品</el-link>
                </li>
                <li
                v-for="(cate, index) in cates" 
                :key="index"
                class="select-list-item"
                :class="{ selected: selectedCate === cate }"
                @click="toggleCate(cate)"
                >
                <el-link :underline="false" href="">{{ cate.name }}</el-link>
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
                <el-link :underline="false" href="">{{ filter }}</el-link>
                </li>
            </ul> 
        </el-col>
      </el-row>
    </div>

    <div style="background-color: white;border-radius: 10px;margin-top: 10px;padding:20px;">
      <el-row>
        <el-space wrap :size="40">
        <el-card v-for="i in 4" :key="i"  style="width: 250px" shadow="hover">
          <template #header>
            <div class="card-header">
              <el-image style="width: 210px; height: 210px" :src="goodsImgurl" :fit="'fill'" />
              <div style="text-align: center; ">
                    {{ goodsStore.name }}
                    <br>
                    <el-rate
                      v-model="score"
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
                    ￥{{ goodsStore.price }}
                </div>
                <div style="color:#666;font-size:x-small;margin-top: 10px;">
                  {{ goodsStore.count }}人购买
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
import { h,ref ,onMounted} from 'vue';
import { useGoodsCommentStore } from '../stores/goodsCommentStore'; 
import { useGoodsStore } from '../stores/goodsStore';
import {useGoodsCateStore} from '../stores/goodsCateStore'
import { getAllCategories } from '../api/category'



import { ElDivider } from 'element-plus'


const size = ref(15)
const spacer = h(ElDivider, { direction: 'vertical' })

const goodsCommentStore = useGoodsCommentStore(); 
const goodsStore = useGoodsStore();
const GoodsCateStore = useGoodsCateStore(); 

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

onMounted(()=>{
  getCategories()
})




let goodsImgurl='https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'




const selectedFilter = ref('按销量排序'); 
const selectedCate = ref(cates.value[0]); 

let score=goodsStore.score

const toggleFilter = (filter) => {
  if (selectedFilter.value === filter) return;
  selectedFilter.value = filter;
};

const toggleCate = (filter) => {
  if (selectedCate.value === filter) return;
  selectedCate.value = filter;
};
</script>