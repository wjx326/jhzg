<template>
    <div style="width: 98%; height: fit-content; margin: auto;">
    <div style="width: 98%;
    background-color: white;
    height: fit-content;
    margin: 10px 0px 20px 4px;">
  <el-row>
    <el-col :span="24">
        <ul class="cate-select-list">分类：
            <li class="cate-select-list-item selected"><el-link :underline="false" href="">全部分类</el-link></li>
        </ul>
    </el-col>
    <el-col :span="20">
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
    <el-col :span="2"> 
          <el-button @click="" style="margin-top: 30px;">全部删除</el-button>
        </el-col>
  </el-row>
</div>
<div div style="width: 98%;
    background-color: white;
    height: fit-content;
    margin: 10px 0px 20px 4px;">
  <el-row>
    <div style="margin: 38px;">
    <el-col :span="24">
        <el-space wrap :size="50">
            <el-card v-for="i in 4" :key="i" class="good-card" shadow="hover">
              <el-link>
                <el-checkbox v-model="checked1"  size="large" />
    </el-link>
            <div class="text item">
                <el-image style="width: 200px; height: 200px" :src="goodsImgurl" :fit="'fill'" /><br> 
            </div> <br>
            <div style="text-align: center;">
                 {{ goodsStore.name }}
            </div>
            <div style="text-align: center; font-weight: bold;">
                ￥{{ goodsStore.price }}
            </div><br>
            <hr>

            <el-space :size="size" :spacer="spacer">
                <div>
                    <el-link :icon="ChatDotSquare" :underline="false">  {{ goodsCommentStore.count }} 条评价</el-link>
                </div>
                <div>
                    <el-link :underline="false"><svg t="1720521349119" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2727" width="20" height="20"><path d="M190.193225 471.411583c14.446014 0 26.139334-11.718903 26.139334-26.13831 0-14.44499-11.69332-26.164916-26.139334-26.164916-0.271176 0-0.490164 0.149403-0.73678 0.149403l-62.496379 0.146333c-1.425466-0.195451-2.90005-0.295735-4.373611-0.295735-19.677155 0-35.621289 16.141632-35.621289 36.114522L86.622358 888.550075c0 19.949354 15.96767 35.597753 35.670407 35.597753 1.916653 0 3.808746 0.292666 5.649674 0l61.022819 0.022513c0.099261 0 0.148379 0.048095 0.24764 0.048095 0.097214 0 0.146333-0.048095 0.24457-0.048095l0.73678 0 0-0.148379c13.413498-0.540306 24.174586-11.422144 24.174586-24.960485 0-13.55983-10.760065-24.441669-24.174586-24.981974l0-0.393973-50.949392 0 1.450025-402.275993L190.193225 471.409536z" fill="#5D5D5D" p-id="2728"></path><path d="M926.52241 433.948343c-19.283182-31.445176-47.339168-44.172035-81.289398-45.546336-1.77032-0.246617-3.536546-0.39295-5.380544-0.39295l-205.447139-0.688685c13.462616-39.059598 22.698978-85.58933 22.698978-129.317251 0-28.349675-3.193739-55.962569-9.041934-82.542948l-0.490164 0.049119c-10.638291-46.578852-51.736315-81.31498-100.966553-81.31498-57.264215 0-95.466282 48.15065-95.466282 106.126063 0 3.241834-0.294712 6.387477 0 9.532097-2.996241 108.386546-91.240027 195.548698-196.23636 207.513194l0 54.881958-0.785899 222.227314 0 229.744521 10.709923 0 500.025271 0.222057 8.746198-0.243547c19.35686 0.049119 30.239721-4.817726 47.803749-16.116049 16.682961-10.761088 29.236881-25.50079 37.490869-42.156122 2.260483-3.341095 4.028757-7.075139 5.106298-11.20111l77.018118-344.324116c1.056052-4.053316 1.348718-8.181333 1.056052-12.160971C943.643346 476.446249 938.781618 453.944769 926.52241 433.948343zM893.82573 486.837924l-82.983993 367.783411-0.099261-0.049119c-2.555196 6.141884-6.879688 11.596106-12.872169 15.427364-4.177136 2.727111-8.773827 4.351098-13.414521 4.964058-1.49812-0.195451-3.046383 0-4.620227 0l-477.028511-0.540306-0.171915-407.408897c89.323375-40.266076 154.841577-79.670527 188.596356-173.661202 0.072655 0.024559 0.124843 0.049119 0.195451 0.072655 2.99931-9.137101 6.313799-20.73423 8.697079-33.164331 5.551436-29.185716 5.258771-58.123792 5.258771-58.123792-4.937452-37.98001 25.940812-52.965306 44.364417-52.965306 25.304316 0.860601 50.263777 33.656541 50.263777 52.326762 0 0 5.600555 27.563776 5.649674 57.190537 0.048095 37.366026-4.6673 56.847729-4.6673 56.847729l-0.466628 0c-5.872754 30.879288-16.214287 60.138682-30.464849 86.964654l0.36839 0.342808c-2.358721 4.815679-3.709485 10.220782-3.709485 15.943111 0 19.922748 19.088754 21.742187 38.765909 21.742187l238.761895 0.270153c0 0 14.666024 0.465604 14.690584 0.465604l0 0.100284c12.132318-0.638543 24.221658 5.207605 31.100322 16.409738 5.504364 9.016351 6.437619 19.6045 3.486404 28.988218L893.82573 486.837924z" fill="#5D5D5D" p-id="2729"></path><path d="M264.827039 924.31872c0.319272 0.024559 0.441045 0.024559 0.295735-0.024559 0.243547-0.048095 0.367367-0.074701-0.295735-0.074701s-0.539282 0.026606-0.271176 0.074701C264.43409 924.343279 264.532327 924.343279 264.827039 924.31872z" fill="#5D5D5D" p-id="2730"></path></svg>{{ goodsCommentStore.rate }}</el-link>
                </div>
            </el-space>
            <br><br>
                <div class="card-footer">
                    <el-button text bg size="small"><el-icon :size="22"><ShoppingCart /></el-icon>加入购物车</el-button>  
                    <el-button text bg size="small"><el-icon :size="22"><BottomRight /></el-icon>降价通知</el-button> 
                </div>
            </el-card>
        </el-space>
    </el-col>
  </div>
    <div style="margin-top: 30px; margin-bottom:30px; margin-left: 20px;">
      <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>

  </el-row>
</div>
</div>

</template>

<style scoped>
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
  width:60%;  

}
.cate-select-list-item.selected .el-link 
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
.cate-select-list
{
    display: flex; 
    align-items:center;   
    justify-content: space-between; 
    width: 15%; 
}
.cate-select-list-item
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

</style>

<script setup>
import { h,ref } from 'vue';
import { BottomRight,ShoppingCart,ChatDotSquare } from '@element-plus/icons-vue'
import { useGoodsCommentStore } from '../../../stores/goodsCommentStore'; 
import { useGoodsStore } from '../../../stores/goodsStore'; 

import { ElDivider } from 'element-plus'


const size = ref(15)
const spacer = h(ElDivider, { direction: 'vertical' })

const goodsCommentStore = useGoodsCommentStore(); 
const goodsStore = useGoodsStore(); 

let goodsImgurl='https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
const filters = ref([
  '不限',
  '降价',
  '满减',
  '优惠券',
  '下柜'
]);
const selectedFilter = ref('不限'); // 默认选中'不限'

const toggleFilter = (filter) => {
  if (selectedFilter.value === filter) return;
  selectedFilter.value = filter;
};
</script>