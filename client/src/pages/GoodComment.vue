<template>
  <el-card style="max-width: 900px" shadow="never" class="comment-card">
    <template #header>
        <el-row>
            <el-col :span="6">
                <span>评价宝贝</span>
            </el-col>
            <el-col :span="6" :offset="12">
                <span>卖家：{{ shopName }}</span>
            </el-col>
        </el-row>
    </template>
    <el-row>
        <el-col :span="8" style="text-align: center;">
            <el-image 
            style="width: 150px; height: 150px" 
            :src="goodsImgurl" 
            :fit="'fill'" /><br><br>
            <span>{{ goodsName }}</span>
        </el-col>
        <el-col :span="12">
            <el-rate v-model="goodsScore" :colors="colors" /><br><br>
            <div class="bg-blue">
                <el-input
                v-model="goodsComment"
                style="width: 500px"
                :rows="4"
                type="textarea"
                placeholder="请输入您的评价"
            /><br>
            <el-row>
                <el-col :span="6" >
                    <el-radio-group v-model="radio" class="ml-4">
                        <el-radio value="0" size="small">公开</el-radio>
                        <el-radio value="1" size="small">匿名</el-radio>
                    </el-radio-group>
                </el-col>
            </el-row>
            </div>
        </el-col>
    </el-row>    
    <template #footer>
        <el-row>
            <el-col :span="8" style="text-align: center; margin-top: 5px;">
                <span>店铺评分</span>
            </el-col>
            <el-col :span="16">
                <el-rate v-model="shopScore" :colors="colors" />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8" style="text-align: center;">
            </el-col>
            <el-col :span="16">
                <el-button type="primary" @click="postComment">发表评论</el-button>
            </el-col>
        </el-row>

    </template>
  </el-card>
</template>

<script setup>  
    import { onMounted, ref } from 'vue';
    import {commentSubmit}from '../api/comment';
    import {getShopByShopId} from '../api/shop'
    import { getGoodsById } from '../api/goods'
    import { useRoute, useRouter } from 'vue-router';
    import { ElMessage } from 'element-plus'

    const route = useRoute();
    const productId = route.query.productId;

    const shopName=ref('店铺名称')
    const goodsName=ref('商品名称')

    const goodsComment = ref('')
    const goodsScore = ref(0)
    const shopScore = ref(0)
    const radio = ref('0')

    const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900'])

    const goodsImgurl = ref('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg');  
  
    const fetchProductComments = async () => {
      const response = await getGoodsById(productId)
      goodsName.value=response.data.name
      goodsImgurl.value=response.data.image
      const shopInfo=await getShopByShopId(response.data.shop_id);
      shopName.value=shopInfo.data.name
    };

    const postComment=()=>{
      if(goodsComment.value===''||goodsScore.value===0||shopScore.value===0){
        ElMessage({
         message: '评论失败，评论内容和评分不能为空',
         type: 'error',
         })
      }
      else{
        commentSubmit(goodsComment.value,productId,goodsScore.value,radio.value,shopScore.value);
        ElMessage({
         message: '评论成功',
         type: 'success',
         })
      
      }

    }

    onMounted(()=>{
      fetchProductComments();
    })

 
</script>  

<style>
.comment-card
{
    margin: auto;
    width: 80%;
}
.bg-blue
{
    width: fit-content;
    height: fit-content;
    border: 1px solid #DAF1FC;
    padding: 3px;
    background: #EEF8FD;
    zoom: 1;
}
</style>