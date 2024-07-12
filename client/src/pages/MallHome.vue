<template>
    <div class="home_contain">
       <el-carousel :interval="4000" type="card" height="200px">
           <el-carousel-item key="1">
               <img src="../assets/img/banner1.jpg" alt="1" style="width: 100%; height: 100%;">
           </el-carousel-item>
           <el-carousel-item key="2">
               <img src="../assets/img/banner2.jpg" alt="2" style="width: 100%; height: 100%;">
           </el-carousel-item>
           <el-carousel-item key="3">
               <img src="../assets/img/banner3.jpg" alt="3" style="width: 100%; height: 100%;">
           </el-carousel-item>
       </el-carousel>
       <div class="home_sort">
           <div class="home_sort_head" style="display: flex; justify-content: space-between; align-items: center;">
               <div class="custom-font">商品分类</div>
               <el-button type="primary">进入分类</el-button>
           </div>
           <div class="home_sort_contain">
               <el-space wrap :size="25">
                   <el-card class="box-card" style="width: 300px">
                      <div class="contain_img" style="height:80px"><img src="../assets/img/banner1.jpg" style="width: 100%; height: 100%;"></div>
                      <div class="contain_img_detail" style=" height:70px">
                       <div style="font-size:medium;font-weight: bold;margin-bottom: 3px;margin-top: 3px;">电子产品</div>
                       <div style="font-size:small;margin-bottom: 2px;">描述描述描述</div>
                       <el-link type="info">查看详情</el-link>
                      </div>
                   </el-card>
                   <el-card class="box-card" style="width: 300px">
                      <div class="contain_img" style="height:80px"><img src="../assets/img/banner3.jpg" style="width: 100%; height: 100%;"></div>
                      <div class="contain_img_detail" style=" height:70px">
                       <div style="font-size:medium;font-weight: bold;margin-bottom: 3px;margin-top: 3px;">电子产品</div>
                       <div style="font-size:small;margin-bottom: 2px;">描述描述描述</div>
                       <el-link type="info">查看详情</el-link>
                      </div>
                   </el-card>
                   <el-card class="box-card" style="width: 300px">
                      <div class="contain_img" style="height:80px"><img src="../assets/img/banner2.jpg" style="width: 100%; height: 100%;"></div>
                      <div class="contain_img_detail" style=" height:70px">
                       <div style="font-size:medium;font-weight: bold;margin-bottom: 3px;margin-top: 3px;">电子产品</div>
                       <div style="font-size:small;margin-bottom: 2px;">描述描述描述</div>
                       <el-link type="info">查看详情</el-link>
                      </div>
                   </el-card>
                   <el-card class="box-card" style="width: 300px">
                      <div class="contain_img" style="height:80px"><img src="../assets/img/banner2.jpg" style="width: 100%; height: 100%;"></div>
                      <div class="contain_img_detail" style=" height:70px">
                       <div style="font-size:medium;font-weight: bold;margin-bottom: 3px;margin-top: 3px;">电子产品</div>
                       <div style="font-size:small;margin-bottom: 2px;">描述描述描述</div>
                       <el-link type="info">查看详情</el-link>
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
                   <el-card class="box-card" style="width: 250px">
                      <div class="contain_img" style="height:100px"><img src="../assets/img/banner3.jpg" style="width: 100%; height: 100%;"></div>
                      <div class="contain_img_detail" style=" height:70px">
                       <div style="font-size:small;font-weight: bold;margin-bottom: 5px;margin-top: 5px;">电子产品</div>
                       <div style="font-size:x-small;margin-bottom: 5px;color:red">￥12.05</div>
                       <el-button type="primary" size="small">加入购物车</el-button>
                      </div>
                   </el-card>
                   <el-card class="box-card" style="width: 250px">
                      <div class="contain_img" style="height:100px"><img src="../assets/img/banner3.jpg" style="width: 100%; height: 100%;"></div>
                      <div class="contain_img_detail" style=" height:70px">
                       <div style="font-size:small;font-weight: bold;margin-bottom: 5px;margin-top: 5px;">电子产品</div>
                       <div style="font-size:x-small;margin-bottom: 5px;color:red">￥12.05</div>
                       <el-button type="primary" size="small">加入购物车</el-button>
                      </div>
                   </el-card>
                   <el-card class="box-card" style="width: 250px">
                      <div class="contain_img" style="height:100px"><img src="../assets/img/banner3.jpg" style="width: 100%; height: 100%;"></div>
                      <div class="contain_img_detail" style=" height:70px">
                       <div style="font-size:small;font-weight: bold;margin-bottom: 5px;margin-top: 5px;">电子产品</div>
                       <div style="font-size:x-small;margin-bottom: 5px;color:red">￥12.05</div>
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
                   <el-card class="box-card" style="width: 250px">
                      <div class="contain_img" style="height:100px"><img src="../assets/img/banner1.jpg" style="width: 100%; height: 100%;"></div>
                      <div class="contain_img_detail" style=" height:70px">
                       <div style="font-size:small;font-weight: bold;margin-bottom: 5px;margin-top: 5px;">电子产品</div>
                       <div style="font-size:x-small;margin-bottom: 5px;color:red">￥12.05</div>
                       <el-button type="primary" size="small">加入购物车</el-button>
                      </div>
                   </el-card>
                   <el-card class="box-card" style="width: 250px">
                      <div class="contain_img" style="height:100px"><img src="../assets/img/banner2.jpg" style="width: 100%; height: 100%;"></div>
                      <div class="contain_img_detail" style=" height:70px">
                       <div style="font-size:small;font-weight: bold;margin-bottom: 5px;margin-top: 5px;">电子产品</div>
                       <div style="font-size:x-small;margin-bottom: 5px;color:red">￥12.05</div>
                       <el-button type="primary" size="small">加入购物车</el-button>
                      </div>
                   </el-card>
                   <el-card class="box-card" style="width: 250px">
                      <div class="contain_img" style="height:100px"><img src="../assets/img/banner3.jpg" style="width: 100%; height: 100%;"></div>
                      <div class="contain_img_detail" style=" height:70px">
                       <div style="font-size:small;font-weight: bold;margin-bottom: 5px;margin-top: 5px;">电子产品</div>
                       <div style="font-size:x-small;margin-bottom: 5px;color:red">￥12.05</div>
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
                   <el-card class="box-card" style="width: 250px">
                      <div class="contain_img" style="height:100px"><img src="../assets/img/banner3.jpg" style="width: 100%; height: 100%;"></div>
                      <div class="contain_img_detail" style=" height:70px">
                       <div style="font-size:small;font-weight: bold;margin-bottom: 5px;margin-top: 5px;">电子产品</div>
                       <div style="font-size:x-small;margin-bottom: 5px;color:red">￥12.05</div>
                       <el-button type="primary" size="small">加入购物车</el-button>
                      </div>
                   </el-card>
                   <el-card class="box-card" style="width: 250px">
                      <div class="contain_img" style="height:100px"><img src="../assets/img/banner2.jpg" style="width: 100%; height: 100%;"></div>
                      <div class="contain_img_detail" style=" height:70px">
                       <div style="font-size:small;font-weight: bold;margin-bottom: 5px;margin-top: 5px;">电子产品</div>
                       <div style="font-size:x-small;margin-bottom: 5px;color:red">￥12.05</div>
                       <el-button type="primary" size="small">加入购物车</el-button>
                      </div>
                   </el-card>
                   <el-card class="box-card" style="width: 250px">
                      <div class="contain_img" style="height:100px"><img src="../assets/img/banner1.jpg" style="width: 100%; height: 100%;"></div>
                      <div class="contain_img_detail" style=" height:70px">
                       <div style="font-size:small;font-weight: bold;margin-bottom: 5px;margin-top: 5px;">电子产品</div>
                       <div style="font-size:x-small;margin-bottom: 5px;color:red">￥12.05</div>
                       <el-button type="primary" size="small">加入购物车</el-button>
                      </div>
                   </el-card>
                  
               </el-space>
           </div>
       </div>
    </div>
</template>
   
   <script>
   </script>
   
   <style scoped>
   .home_contain{
       width: 90%;
       margin: auto;
   }
   .custom-font {  
     color:#333333;
     font-size: 25px; 
     padding: 20px;
     font-family: Arial, sans-serif;
   }  
   </style>