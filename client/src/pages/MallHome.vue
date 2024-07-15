<template>
    <div class="home_contain">
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item
                v-for="(imageData, index) in CarouselImg"
                :key="index"
                >
            <img :src="imageData.image" alt="Image" style="width: 100%; height: 100%;">
            </el-carousel-item>
        </el-carousel>
        

       <div class="home_sort">
           <div class="home_sort_head" style="display: flex; justify-content: space-between; align-items: center;">
               <div class="custom-font">商品分类</div>
               <el-button type="primary" @click="handleSort">进入分类</el-button>
           </div>
           <div class="home_sort_contain">
               <el-space wrap :size="25">
                <el-card v-for="(category, index) in CategoriesRecommend" :key="index" class="box-card" style="width: 300px">
                    <div class="contain_img" style="height:80px">
                        <img :src="category.image" style="width: 100%; height: 100%;">
                    </div>
                    <div class="contain_img_detail" style=" height:70px">
                        <div style="font-size:medium;font-weight: bold;margin-bottom: 3px;margin-top: 3px;">
                        {{category.name}}
                        </div>
                        <div 
                        style="font-size:small;
                        margin-bottom: 2px;
                        overflow: hidden;  
                        text-overflow: ellipsis;  
                        display: -webkit-box;  
                        -webkit-line-clamp: 2; 
                        -webkit-box-orient: vertical;  
                        line-height: 1.2; 
                        height: 2.4em; ">
                            {{category.description}}
                        </div>
                       <el-link type="info" @click="handleSort">查看详情</el-link>
                    </div>
                </el-card>
               </el-space>
           </div>
       </div>


       <div class="home_goodthings">
           <div class="custom-font" >
               优品推荐
           </div>
           <div class="home_sort_contain">
               <el-space wrap :size="25">
                <el-card v-for="(goods, index) in goodsOpts" class="box-card" style="width: 250px">
                      <div class="contain_img" style="height:100px">
                        <img :src="goods.image" style="width: 100%; height: 100%;">
                    </div>
                      <div class="contain_img_detail" style=" height:70px">
                       <div style="font-size:small;font-weight: bold;margin-bottom: 5px;margin-top: 5px;">
                        {{goods.name}}
                        </div>
                       <div style="font-size:x-small;margin-bottom: 5px;color:red">
                        ￥{{goods.price}}
                        </div>
                       <el-button type="primary" size="small">加入购物车</el-button>
                      </div>
                   </el-card>
                  
               </el-space>
           </div>
       </div>

       <div class="home_goodthings">
           <div class="custom-font">
               品牌推荐
           </div>
           <div class="home_sort_contain">
               <el-space wrap :size="50">
                <el-card v-for="(goods, index) in goodsBrands" class="box-card" style="width: 250px">
                    <div class="contain_img" style="height:100px">
                        <img :src="goods.image" style="width: 100%; height: 100%;">
                    </div>
                      <div class="contain_img_detail" style=" height:70px">
                       <div style="font-size:small;font-weight: bold;margin-bottom: 5px;margin-top: 5px;">
                        {{goods.name}}
                        </div>
                       <div style="font-size:x-small;margin-bottom: 5px;color:red">
                        ￥{{goods.price}}
                        </div>
                       <el-button type="primary" size="small">加入购物车</el-button>
                      </div>
                   </el-card>
               </el-space>
           </div>
       </div>

       <div class="home_goodthings">
           <div class="custom-font">
               秒杀专区
           </div>
           <div class="home_sort_contain">
               <el-space wrap :size="50">
                <el-card v-for="(goods, index) in goodsSpis" class="box-card" style="width: 250px">
                    <div class="contain_img" style="height:100px">
                        <img :src="goods.image" style="width: 100%; height: 100%;">
                    </div>
                      <div class="contain_img_detail" style=" height:70px">
                       <div style="font-size:small;font-weight: bold;margin-bottom: 5px;margin-top: 5px;">
                        {{goods.name}}
                        </div>
                       <div style="font-size:x-small;margin-bottom: 5px;color:red">
                        ￥{{goods.price}}
                        </div>
                       <el-button type="primary" size="small">加入购物车</el-button>
                      </div>
                   </el-card>
               </el-space>
           </div>
       </div>
    </div>
</template>
   
<script setup>
    import {ref,onMounted} from 'vue'
    import { useRouter } from 'vue-router';
    import { goodsGraph,getGoodsById ,goodsOpt,goodsBrand,goodsSpi} from '../api/goods'
    import { categoryRecommend } from '../api/category'


    const router = useRouter();

    const CarouselImg= ref([])
    const CategoriesRecommend= ref([])
    const goodsOpts=ref([])
    const goodsBrands=ref([])
    const goodsSpis=ref([])

    

    function handleSort(){
        router.push('/goodlist')
    }

    async function showCategoryRecommend()
    {
        const response = await categoryRecommend()
        CategoriesRecommend.value = response.data
    }

    async function showCarouselImg()
    {
        const response = await goodsGraph()
        CarouselImg.value = response.data
    }

    async function showGoodsOpt()
    {
        try {  
            const response = await goodsOpt();  
            goodsOpts.value = response.data; 
    
            // 创建一个新数组来存储更新后的商品信息  
            let updatedGoods = [];  
    
            // 遍历 goodsOpts 中的每个商品  
            for (const good of goodsOpts.value) {  
                const goodDetail = await getGoodsById(good.id);  
                if (goodDetail && goodDetail.data) {  
                    good.image = goodDetail.data.image;  
                    updatedGoods.push(good);  
                } else {  
                    console.error(`Failed to fetch details for good with ID: ${good.id}`);  
                    updatedGoods.push({ ...good, error: "Failed to fetch image" });  
                }  
            }   
            goodsOpts.value = updatedGoods;  
            console.log('goodsOpts.value', goodsOpts.value);  

        } catch (error) {  
        console.error('Error updating goods images:', error);  
        }  
    }

    async function showGoodsSpi()
    {
        try {  
            const response = await goodsSpi();  
            goodsSpis.value = response.data; 
    
            // 创建一个新数组来存储更新后的商品信息  
            let updatedGoods = [];  
    
            // 遍历 goodsOpts 中的每个商品  
            for (const good of goodsSpis.value) {  
                const goodDetail = await getGoodsById(good.id);  
                if (goodDetail && goodDetail.data) {  
                    good.image = goodDetail.data.image;  
                    updatedGoods.push(good);  
                } else {  
                    console.error(`Failed to fetch details for good with ID: ${good.id}`);  
                    updatedGoods.push({ ...good, error: "Failed to fetch image" });  
                }  
            }   
            goodsSpis.value = updatedGoods;  
            console.log('goodsSpis.value', goodsSpis.value);  

        } catch (error) {  
        console.error('Error updating goods images:', error);  
        }  
    }

    async function showGoodsBrand()
    {
        try {  
            const response = await goodsBrand();  
            goodsBrands.value = response.data; 
    
            // 创建一个新数组来存储更新后的商品信息  
            let updatedGoods = [];  
    
            // 遍历 goodsOpts 中的每个商品  
            for (const good of goodsBrands.value) {  
                const goodDetail = await getGoodsById(good.id);  
                if (goodDetail && goodDetail.data) {  
                    good.image = goodDetail.data.image;  
                    updatedGoods.push(good);  
                } else {  
                    console.error(`Failed to fetch details for good with ID: ${good.id}`);  
                    updatedGoods.push({ ...good, error: "Failed to fetch image" });  
                }  
            }   
            goodsBrands.value = updatedGoods;  
            console.log('goodsBrands.value', goodsBrands.value);  

        } catch (error) {  
        console.error('Error updating goods images:', error);  
        }  
    }

    onMounted(()=>{
        showCarouselImg()
        showCategoryRecommend()
        showGoodsOpt()
        showGoodsBrand()
        showGoodsSpi()
    })

</script>
   
   <style scoped>
   .home_contain{
       width: 80%;
       margin: auto;
       background-color: white;
       padding-left: 50px;
       padding-right: 50px;
       border-radius: 10px;
   }
   .custom-font {  
     color:#333333;
     font-size: 25px; 
     padding: 20px;
     font-family: Arial, sans-serif;
   }  
   </style>