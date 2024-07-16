<template>
  <div style="width: 98%;
    background-color: white;
    margin: 10px 0px 20px 4px;">
   <div style="height: 50px;margin: 20px;margin-top: 2.25rem;
    margin-bottom: 1.25rem;
    padding-bottom: .3rem;
    line-height: 1.25;
    font-size: 1.65rem;
    color: #606266;
    font-weight: 600;">关注的店铺</div>
  <div style="width: 98%;
    height: fit-content;
    margin: 50px;">



  <el-row>
    <el-col :span="24">
        <el-space direction="vertical" :size="60">
            <el-card v-for="item in focus" :key="i" class="box-card" shadow="hover">
              <el-link :icon="Delete" :underline="false" @click="deleteCollect(item.id)"></el-link>

            <div class="text item">
                <el-image style="width: 200px; height: 200px" :src="item.image" :fit="'fill'" /><br> 
            </div><br>
            <div style="text-align: center;">
                 {{ item.name }}
            </div><br>
            <div style="text-align: center; ">
              <el-rate
              v-model="item.score"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}分"
            />
            </div><br>
            <hr>
            <br>
                <div class="card-footer">
                    <el-button text bg  @click="goshop(item.shop_id)">
                      <el-icon :size="22"><Shop /></el-icon>进入店铺</el-button>  
                </div>

                <div class="divider">
                  <el-divider direction="vertical" style="height: 450px;" />
                </div>
                <div class="card-right-content">
                  <div>
                    关注时间：{{ item.created_time }}
                  </div><br><br>
                  <div>
                    描述：{{ item.description }}
                  </div><br><br>
                  <div>
                    联系方式：{{ item.phone }}
                  </div>
                    
                </div>
           
            </el-card>
            
        </el-space>
    </el-col>
    <div style="margin-top: 30px;">
      <el-pagination 
      v-model:current-page="currentPage" 
      layout="prev, pager, next" 
      :page-size="5"
      @current-change="handleCurrentChange"/>
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
    padding: 5px;
  
    border-radius: 5px;
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
  margin-left: 45px; 
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
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: left;
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
import { ref ,onMounted} from 'vue';
import { Shop,Delete } from '@element-plus/icons-vue'
import { ElDivider } from 'element-plus'
import router from '../../../routers/router'
import {focusPage,focusDelete} from '../../../api/focus'
import {getShopByShopId} from '../../../api/shop'
import { ElMessage } from 'element-plus'; 




const currentPage = ref(1)

const focus=ref([])

const deleteCollect=async (id)=>{
  const response=await focusDelete(id)
  if(response.code==='0'){
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

const getFocusPage=async (page,pageSize)=>{
  const response=await focusPage(page,pageSize)

  const focusList= response.data.map(async (focus) => {  
        const shopInfo = await getShopByShopId(focus.shop_id);  
            return {  
                ...focus,
                name:shopInfo.data.name,
                image: shopInfo.data.image,
                score: shopInfo.data.score,
                phone:shopInfo.data.phone,
                description:shopInfo.data.description,

            };  
        });  
  
    const processedFocus = await Promise.all(focusList);  
    focus.value = processedFocus; 
    console.log('focus.value',focus.value)


}

const handleCurrentChange = (val) => {
  getFocusPage(val,5)
}



function goshop(id){
  router.push({ name: 'Shop', query: { id } });  
}

onMounted(()=>{
  getFocusPage(1,5)
})
</script>