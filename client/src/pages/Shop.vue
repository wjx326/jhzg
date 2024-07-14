<template>
    <div style=" width: 90%; margin: auto;padding:20px;">
        <div style="background-color: white;border-radius: 10px;padding: 20px;width: 100%;margin-bottom: 30px;">
            <el-row >
                <el-col :span="3"><el-avatar shape="square" :size="120" :src="squareUrl" /></el-col>
                <el-col :span="15">
                    <div style="font-size: larger;">店铺名称</div>
                    <img src="../assets/img/logo1.png" style="width: 76px;height: 16px;" >
                    <el-rate
                        v-model="value"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}分"
                    />
                    <div>描述描述描述描述cccccccccccccc</div>
                </el-col>
                <el-col :span="6">
                    <el-button :icon="Plus">关注店铺</el-button>
                    <el-button :icon="Service">联系客服</el-button>
                </el-col>
            </el-row>
        </div>
        <div style="background-color: white;border-radius: 10px;padding: 20px;width: 100%;margin-bottom: 50px;padding-bottom: 50px;">
            <el-row>
                <el-col :span="4" style="font-size: x-large;">
                    全部商品
                </el-col>
                <el-col :span="8" :offset="6">
                    <el-input
                        v-model="input"
                        style="width: 150px"
                        placeholder="最低价格"
                        :formatter="(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                        :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
                    />
                    <el-icon style="margin-left: 10px;margin-right: 10px;"><Minus /></el-icon>
                    <el-input
                        v-model="input"
                        style="width: 150px"
                        placeholder="最高价格"
                        :formatter="(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                        :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
                    />
                </el-col>
                <el-col :span="5" >
                    <el-input
                        v-model="input3"
                        placeholder="搜索商品"
                        class="input-with-select"
                        >
                            <template #append>
                                <el-button :icon="Search" />
                            </template>
                        </el-input>
                </el-col>
            </el-row>
            <el-row style="text-align: center;margin-top: 30px;" :gutter="80">
                <el-col :span="1"><div class="sort_tag selected">销量</div></el-col>
                <el-col :span="1"><div class="sort_tag">新品</div></el-col>
                <el-col :span="1"><div class="sort_tag">收藏</div></el-col>
                <el-col :span="1"><div class="sort_tag" style="width: 70px;">价格<el-icon style="display: none;"><CaretTop /></el-icon><el-icon><CaretBottom /></el-icon></div></el-col>
            </el-row>
            <div style="margin-top: 20px;">
                <el-space wrap :size="50">
                    <div style="border-radius: 10px;width: 250px;">
                      <div class="contain_img" style="height:200px;">
                        <img src="../assets/img/banner3.jpg" style="border-radius: 10px;width: 100%; height: 100%;"></div>
                        <div class="contain_img_detail" style=" height:70px">
                            <div style="margin-bottom: 5px;margin-top: 5px;color:#303133;">电子产品absahdhjassadk</div>
                            <div style="font-size:x-large;font-weight: bold; margin-bottom: 5px;color:red">￥12.05</div>
                            <div style="font-size:x-small;margin-bottom: 5px;color:#606266">1000人已付款</div>
                        </div>
                    </div>
                    <div style="border-radius: 10px;width: 250px;">
                      <div class="contain_img" style="height:200px;">
                        <img src="../assets/img/banner3.jpg" style="border-radius: 10px;width: 100%; height: 100%;"></div>
                        <div class="contain_img_detail" style=" height:70px">
                            <div style="margin-bottom: 5px;margin-top: 5px;color:#303133;">电子产品absahdhjassadk</div>
                            <div style="font-size:x-large;font-weight: bold; margin-bottom: 5px;color:red">￥12.05</div>
                            <div style="font-size:x-small;margin-bottom: 5px;color:#606266">1000人已付款</div>
                        </div>
                    </div>
                    <div style="border-radius: 10px;width: 250px;">
                      <div class="contain_img" style="height:200px;">
                        <img src="../assets/img/banner3.jpg" style="border-radius: 10px;width: 100%; height: 100%;"></div>
                        <div class="contain_img_detail" style=" height:70px">
                            <div style="margin-bottom: 5px;margin-top: 5px;color:#303133;">电子产品absahdhjassadk</div>
                            <div style="font-size:x-large;font-weight: bold; margin-bottom: 5px;color:red">￥12.05</div>
                            <div style="font-size:x-small;margin-bottom: 5px;color:#606266">1000人已付款</div>
                        </div>
                    </div>
                    <div style="border-radius: 10px;width: 250px;">
                      <div class="contain_img" style="height:200px;">
                        <img src="../assets/img/banner3.jpg" style="border-radius: 10px;width: 100%; height: 100%;"></div>
                        <div class="contain_img_detail" style=" height:70px">
                            <div style="margin-bottom: 5px;margin-top: 5px;color:#303133;">电子产品absahdhjassadk</div>
                            <div style="font-size:x-large;font-weight: bold; margin-bottom: 5px;color:red">￥12.05</div>
                            <div style="font-size:x-small;margin-bottom: 5px;color:#606266">1000人已付款</div>
                        </div>
                    </div>
                    <div style="border-radius: 10px;width: 250px;">
                      <div class="contain_img" style="height:200px;">
                        <img src="../assets/img/banner3.jpg" style="border-radius: 10px;width: 100%; height: 100%;"></div>
                        <div class="contain_img_detail" style=" height:70px">
                            <div style="margin-bottom: 5px;margin-top: 5px;color:#303133;">电子产品absahdhjassadk</div>
                            <div style="font-size:x-large;font-weight: bold; margin-bottom: 5px;color:red">￥12.05</div>
                            <div style="font-size:x-small;margin-bottom: 5px;color:#606266">1000人已付款</div>
                        </div>
                    </div>
                    <div style="border-radius: 10px;width: 250px;">
                      <div class="contain_img" style="height:200px;">
                        <img src="../assets/img/banner3.jpg" style="border-radius: 10px;width: 100%; height: 100%;"></div>
                        <div class="contain_img_detail" style=" height:70px">
                            <div style="margin-bottom: 5px;margin-top: 5px;color:#303133;">电子产品absahdhjassadk</div>
                            <div style="font-size:x-large;font-weight: bold; margin-bottom: 5px;color:red">￥12.05</div>
                            <div style="font-size:x-small;margin-bottom: 5px;color:#606266">1000人已付款</div>
                        </div>
                    </div>
                    <div style="border-radius: 10px;width: 250px;">
                      <div class="contain_img" style="height:200px;">
                        <img src="../assets/img/banner3.jpg" style="border-radius: 10px;width: 100%; height: 100%;"></div>
                        <div class="contain_img_detail" style=" height:70px">
                            <div style="margin-bottom: 5px;margin-top: 5px;color:#303133;">电子产品absahdhjassadk</div>
                            <div style="font-size:x-large;font-weight: bold; margin-bottom: 5px;color:red">￥12.05</div>
                            <div style="font-size:x-small;margin-bottom: 5px;color:#606266">1000人已付款</div>
                        </div>
                    </div>
                </el-space>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import {Plus,Service,Search,CaretBottom,CaretTop,Minus} from '@element-plus/icons-vue'
const value = ref(3)
</script>
<style>
.sort_tag{
    background-color: #EBEEF5;color: #606266; border-radius:5px ;width: 60px;height: 30px;line-height: 30px;
}
.sort_tag.selected{
    background-color: #FFEFE6;color: #FF5000; border-radius:5px ;width: 60px;height: 30px;line-height: 30px;
}
</style>