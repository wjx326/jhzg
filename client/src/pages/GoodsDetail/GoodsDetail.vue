<template>
    <div class="shop-header">
  <el-row >
        <el-col :span="4">
            <el-avatar  :src="shopImgUrl" />
            <div class="shopname">
                {{ 'shopname' }}
            </div>
        </el-col>
        <el-col :span="8">
            <el-tag type="warning" style="margin-top: 10px;">
                <el-rate
                v-model="shopScore"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}.0"
                size="small"
                />        
            </el-tag>
        </el-col>
        <el-col :span="4" :offset="8">
            <el-button  :icon="Shop">进入店铺</el-button>
        </el-col>
    
        
  </el-row>
</div>
<div class="goods-detail">
  <el-row>
    <el-col :span="9" :offset="2">
        <el-image style="width: 400px; height: 400px" :src="goodsImgUrl" :fit="'fill'" />
    </el-col>
    <el-col :span="10" :offset="2">
        <div class="goodsname">
            {{ 'goodsname' }}
        </div><br>
        <div class="goodscount">
            已售{{ 'goodscount' }}
        </div><br>
        
        评分：<el-rate
                style="margin-top: 5px;"
                v-model="goodsScore"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}.0"
                /> <br><br>
        <div class="goodsdescription">
            <span>详细：{{ 'goodsdescriptioffnvhghfhghghdsvsvdsvsvsdfeefw' }}</span>
        </div>
        <br>
        <div>
          价格：
          <span style="
            line-height: 28px;
            vertical-align: baseline;
            color: rgb(255, 79, 0);
            font-family: AlibabaSans102v1TaoBao-Bold;
          ">
            ￥
          </span>
          <span style="
            font-size: 28px;
            line-height: 28px;
            vertical-align: baseline;
            color: rgb(255, 79, 0);
            font-family: AlibabaSans102v1TaoBao-Bold;
          ">
            {{ 'goodsStore.price' }}
          </span>  
        </div>
        <br>
        数量：  <el-input-number v-model="num" :min="1" /><br><br><br>
        <el-button-group>
            <el-button   
            style="background: linear-gradient(90deg, rgb(255, 119, 0), rgb(255, 73, 0));
             font-size: 16px;
            font-weight: bold;
            padding: 23px 30px; 
            color: rgb(255, 255, 255);">
            立即购买</el-button>
            <el-button 
            style="background: linear-gradient(90deg, rgb(255, 203, 0), rgb(255, 148, 2));
            font-size: 16px;
            font-weight: bold;
            padding: 23px 30px; 
            color: rgb(255, 255, 255);">
            加入购物车
            </el-button>
        </el-button-group>

        <el-button :icon="Star" size="large" 
        style="margin-left: 17px;font-size: 16px;
            font-weight: bold;
            padding: 23px 30px; ">收藏</el-button>

    </el-col>
  </el-row>
</div>
</template>

<script setup>
    import {ref} from 'vue'
    import { Shop,Star } from '@element-plus/icons-vue'

    const num = ref(1)
    const shopScore = ref(3)
    const goodsScore = ref(3)

    let shopImgUrl='https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    let goodsImgUrl='https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'

</script>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  
}
.shopname
{
    font-family: PingFangSC-Medium;
    font-size: 20px;
    line-height: 18px;
    color: #11192d;
    margin-bottom: 35px;
    margin-top: -33px;
    margin-left: 45px;
}
.goodsname
{
    font-family: PingFangSC-Semibold;
    font-weight: 600;
    font-size: 28px;
    line-height: 30px;
    color: #11192d;
    letter-spacing: 0;
}
.goodscount
{
    margin-top: 12px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    line-height: 14px;
    color: #7c889c;
}
.goodsdescription
{
    display: block; /* 确保是块级元素 */
    width: 300px;
    white-space: normal; /* 允许换行 */
    overflow-wrap: break-word; /* 替代word-break: break-word; 在某些情况下更有效 */
    word-break: break-word; /* 确保长单词可以换行 */
    box-sizing: border-box; /* 确保padding和border不会增加宽度 */
}
.shop-header
{
    width: 80%;
    height: fit-content;
    border-radius: 16px;
    padding: 25px 5px 5px 5px;
    background-color: white;
    margin-bottom: 35px;
    margin-left: 10%;
}
.goods-detail
{
  width: 80%;
    height: fit-content;
    border-radius: 16px;
    padding: 45px 6px 45px 5px;
    background-color: white;
    margin-bottom: 35px;
    margin-left: 10%;
}
</style>