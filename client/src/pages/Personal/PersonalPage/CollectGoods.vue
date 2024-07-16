<template>
    <div style="width: 98%; height: fit-content; margin: auto;">
    <div style="width: 98%;
    background-color: white;
    height: fit-content;
    margin: 10px 0px 20px 4px;">
 
</div>
<div div style="width: 98%;
    background-color: white;
    height: fit-content;
    margin: 10px 0px 20px 4px;">
  <el-row>
    <div style="margin: 38px;">
    <el-col :span="24">
        <el-space wrap :size="50">
            <el-card v-for="goods in collectGoods" 
            :key="i" 
            class="good-card" 
            shadow="hover"
            >
              <el-link :icon="Delete" :underline="false" @click="deleteCollect(goods.id)"></el-link>
            <div class="text item">
                <el-image style="width: 200px; height: 200px" :src="goods.image" :fit="'fill'"
                @click="PushToDetail(goods.goods_id)" /><br> 
            </div> <br>
            <div style="text-align: center;">
                 {{ goods.name }}
            </div>
            <div style="text-align: center; font-weight: bold;">
                ￥{{ goods.price }}
            </div><br>
            <hr>

            <el-space :size="size" :spacer="spacer">
                <div>
                    <el-link :icon="Goods" :underline="false">销量：  {{ goods.count }} </el-link>
                </div>
                <div>
                    <el-link :underline="false" :icon="Star">
                      评分：{{ goods.score }}</el-link>
                </div>
            </el-space>
            <br><br>
                <div class="card-footer">
                    <el-button text bg size="small"
                    @click="InsertToShoppingCart(goods.goods_id,1)"><el-icon :size="22"><ShoppingCart /></el-icon>加入购物车</el-button>  
                </div>
            </el-card>
        </el-space>
    </el-col>
  </div>
    <div style="margin-top: 30px; margin-bottom:30px; margin-left: 20px;">
      <el-pagination 
      v-model:current-page="currentPage"
      layout="prev, pager, next" 
      :total="total"
      :page-size="8"
      @current-change="handleCurrentChange" />
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
    padding: 5px; 
    border-radius: 5px;
}
.select-list-item.selected .el-link
{  
    color: white;  
    background-color: #e4393c;
    padding: 8px;
    border-radius: 5px;
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
import { h,onMounted,ref } from 'vue';
import { Delete,ShoppingCart,Goods,Star } from '@element-plus/icons-vue'
import { useGoodsCommentStore } from '../../../stores/goodsCommentStore'; 
import {collectPage,collectDelete} from '../../../api/collect'
import {getGoodsById} from '../../../api/goods'
import { shoppingCartInsert} from '../../../api/cart'
import { ElMessage } from 'element-plus'; 
import { ElDivider } from 'element-plus'
import { useRouter } from 'vue-router';  
import { footprintRecord } from '../../../api/footprint'



const router = useRouter(); 

const total=ref(0)
const currentPage = ref(1)

const size = ref(15)
const spacer = h(ElDivider, { direction: 'vertical' })

const goodsCommentStore = useGoodsCommentStore(); 

const collectGoods=ref([])

const deleteCollect=async (id)=>{
  const response=await collectDelete(id)
  if(response.code==='0'){
    getCollectGoods(currentPage,8)
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

const PushToDetail=async (id)=>{
  await footprintRecord(id)
  router.push({ name: 'GoodsDetail', query: { id } });  
}

const InsertToShoppingCart=async (id,num)=>{
      const response=await shoppingCartInsert(id,num)
      if(response.code==='0'){
        ElMessage({
        message: '加入购物车成功',
        type: 'success',
        })
      }else{
        ElMessage({
        message: '加入购物车失败',
        type: 'error',
        })
      }
    }

const getCollectGoods=async (page,pageSize)=>{
  const response=await collectPage(page,pageSize)
  total.value=response.data.total

  const goodsList= response.data.records.map(async (goods) => {  
        const goodsInfo = await getGoodsById(goods.goods_id);  
            return {  
                ...goods,
                name:goodsInfo.data.name,
                price: goodsInfo.data.price,  
                image: goodsInfo.data.image,
                score: goodsInfo.data.score,
                count:goodsInfo.data.count
            };  
        });  
  
    const processedGoods = await Promise.all(goodsList);  
    collectGoods.value = processedGoods; 
    console.log('collectGoods.value',collectGoods.value)

}

const handleCurrentChange = (val) => {
  getCollectGoods(val,8)
}

onMounted(()=>{
  getCollectGoods(1,8)
})

</script>