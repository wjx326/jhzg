<template>
  <el-row>
    <el-col :span="24">
        <ul class="cata-select-list">
            <li class="cata-select-list-item selected"><el-link :underline="false" href="">全部店铺</el-link></li>
        </ul>
    </el-col>
    <el-col :span="17">
        <ul class="select-list">
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
    <el-col :span="2"> 
          <el-button @click="" style="margin-top: 30px;">全部删除</el-button>
        </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
        <el-space direction="vertical" :size="60">
            <el-card v-for="i in 4" :key="i" class="box-card" shadow="hover">
              <el-link>
                <el-checkbox v-model="checked1"  size="large" />
              </el-link>
            <div class="text item">
                <el-image style="width: 200px; height: 200px" :src="shopsImgurl" :fit="'fill'" /><br> 
            </div><br>
            <div style="text-align: center;">
                 {{ shopsStore.name }}
            </div><br>
            <div style="text-align: center; ">
              <el-icon><Star /></el-icon> {{shopsStore.rate  }}
            </div><br>
            <hr>
            <br>
                <div class="card-footer">
                    <el-button text bg size="small"><el-icon :size="22"><Shop /></el-icon>进入店铺</el-button>  
                    <el-button text bg size="small"><el-icon :size="22"><Service /></el-icon>联系客服</el-button> 
                </div>

                <div class="divider">
                  <el-divider direction="vertical" style="height: 450px;" />
                </div>
                <div class="card-right-content">

                      <el-tabs
                        v-model="activeName"
                        type="card"
                        class="demo-tabs"
                        @tab-click="handleClick"
                      >
                        <el-tab-pane label="热销" name="first">
                          <el-space wrap>
                              <div v-for="o in 4" :key="o" class="text item" style="text-align: center; margin-left: 30px; margin-top: 20px;">
                                <el-image style="width: 100px; height: 100px" :src="goodsImgurl" :fit="fill" /><br><br>
                                ￥{{ goodsStore.price }}
                              </div>
                          </el-space>
                        </el-tab-pane>
                        <el-tab-pane label="新品" name="second">
                          <el-space wrap>
                              <div v-for="o in 4" :key="o" class="text item" style="text-align: center; margin-left: 30px; margin-top: 20px;">
                                <el-image style="width: 100px; height: 100px" :src="goodsImgurl" :fit="fill" /><br><br>
                                ￥{{ goodsStore.price }}
                              </div>
                          </el-space>
                        </el-tab-pane>
                        <el-tab-pane label="活动" name="third">
                          <el-space wrap>
                              <div v-for="o in 4" :key="o" class="text item" style="text-align: center; margin-left: 30px; margin-top: 20px;">
                                <el-image style="width: 100px; height: 100px" :src="goodsImgurl" :fit="fill" /><br><br>
                                ￥{{ goodsStore.price }}
                              </div>
                          </el-space>
                        </el-tab-pane>
                      </el-tabs>
                    
                </div>
           
            </el-card>
            
        </el-space>
    </el-col>
    <div style="margin-top: 30px;">
      <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>

  </el-row>
  
  
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
.card-footer {  
  display: flex; /* 使用 Flexbox 布局 */  
  justify-content: flex-start; /* 子项靠左对齐 */  
  align-items: center; /* 垂直居中子项 */  
  /* 移除可能的默认间距（如果需要的话） */  
  font-size: 0; 
}  
.card-footer .el-button {  
  margin: 0; /* 给按钮之间添加一些间距 */ 
}
.box-card {  
  display: flex;  
  flex-direction: column; /* 默认为列方向，但这里主要是为了说明 Flexbox 的使用 */  
  position: relative; /* 为了能够定位内部的绝对元素 */  
  padding-right: 700px; /* 留出空间给右侧的元素 */  
  height: 450px;
}  
  
/* 添加一个新的类用于右侧的分割线和 Home 文本 */  
.card-right-content {  
  position: absolute;
    left: 300px;
    top: 100px;
    display: flex;
    /* flex-direction: column; */
    /* justify-content: space-between; */
    /* align-items: center; */
    padding: 10px;
    width: 609px;
}
.divider
{
  position: absolute;
    left: 250px;
    top: 0px;
    display: flex;
   
    padding: 10px;
}
</style>

<script setup>
import { h,ref } from 'vue';
import { Shop,Service,Star } from '@element-plus/icons-vue'
import { useGoodsCommentStore } from '../stores/goodsCommentStore'; 
import { useGoodsStore } from '../stores/goodsStore'; 
import { useShopsStore } from '../stores/shopsStore'; 

import { ElDivider } from 'element-plus'


const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}


const size = ref(15)
const spacer = h(ElDivider, { direction: 'vertical' })

const goodsCommentStore = useGoodsCommentStore(); 
const goodsStore = useGoodsStore(); 
const shopsStore = useShopsStore(); 

let shopsImgurl='https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'

let goodsImgurl='https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
const filters = ref([
  '全部店铺',
  '上新',
  '优惠券',
  '自营'
]);
const selectedFilter = ref('全部店铺'); // 默认选中'不限'

const toggleFilter = (filter) => {
  if (selectedFilter.value === filter) return;
  selectedFilter.value = filter;
};
</script>