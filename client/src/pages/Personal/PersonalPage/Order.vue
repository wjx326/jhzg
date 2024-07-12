<template>
    <div style="width: 96%;background-color: white;margin:20px auto;">
        <div class="order_header" style="margin: 15px;">
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
            >
                <el-menu-item index="1">所有订单</el-menu-item>
                <el-menu-item index="2" >待付款</el-menu-item>
                <el-menu-item index="3">待发货</el-menu-item>
                <el-menu-item index="4">待收货</el-menu-item>
                <el-menu-item index="5">待评价</el-menu-item>
                <el-menu-item index="6">分阶段</el-menu-item>
            </el-menu>
        </div>
        <div style="padding:10px">
            <el-input
                v-model="input1"
                style="max-width: 400px"
                placeholder="输入商品标题或订单号进行搜索"
                class="input-with-select"
                >
                <template #append>
                    <el-button >订单搜索</el-button>
                </template>
            </el-input>
        </div>
        <div style="margin-top: 10px;padding: 10px;">
            <el-row style="text-align: center;line-height: 50px;background-color: #f1f1f1;height: 50px;border:1px solid #f1f1f1;margin-bottom: 10px;">
                <el-col :span="10">宝贝</el-col>
                <el-col :span="2">单价</el-col>
                <el-col :span="2">数量</el-col>
                <el-col :span="2">商品操作</el-col>
                <el-col :span="2">实付款</el-col>
                <el-col :span="2">交易状态</el-col>
                <el-col :span="4">交易操作</el-col>
            </el-row>
            <el-row style="text-align: center;">
                <el-col :span="4" :offset="20">
                    <el-button type="small">上一页</el-button>
                    <el-button type="small">下一页</el-button>
                </el-col>
            </el-row>
        </div>
        <div style="padding: 10px;">
            <div style="border:1px solid #f1f1f1;border-radius: 5px;">
                    <el-row style="line-height: 50px;background-color: #f1f1f1;height: 50px;border:1px solid #f1f1f1;margin-bottom: 10px;">
                        <el-col :span="10" style="padding-left: 5px;">
                            <el-checkbox   size="large" />
                            <span style="margin-left: 5px;">2024-07-06</span>
                            <span>订单号0xxxxxxxxxxxx</span>
                        </el-col>
                        <el-col :span="5">
                            <span style="color: #333333;">店铺：店铺名称</span>
                        </el-col>
                        <el-col :span="1" :offset="8">
                            <el-icon><Delete /></el-icon>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="10" style="display: flex;">
                            <div style="width: 100px;height: 100px;margin: 10px;"><img style="width: 100%;height: 100%;" src="../../../assets/img/storelogo.png"></div>
                            <div style="height: 150px;">miaoshuachiahcahchaucuh</div>
                        </el-col>
                        <el-col :span="2" style="text-align: center;">￥12.05</el-col>
                        <el-col :span="2" style="text-align: center;">5</el-col>
                        <el-col :span="2" style="text-align: center;">
                            <div><el-button link >申请售后</el-button></div>
                            <div><el-button link >投诉卖家</el-button></div>
                        </el-col>
                        <el-col :span="2" style="text-align: center;">￥12.05</el-col>
                        <el-col :span="2" style="text-align: center;">
                            <div>交易成功/失败</div>
                            <div><el-button link >订单详情</el-button></div>
                            <div><el-button link >查看物流</el-button></div>
                        </el-col>
                        <el-col :span="4" style="text-align: center;"><el-button link >追加评论</el-button></el-col>
                    </el-row>
            </div>
            <div style="border:1px solid #f1f1f1;border-radius: 5px;">
                    <el-row style="line-height: 50px;background-color: #f1f1f1;height: 50px;border:1px solid #f1f1f1;margin-bottom: 10px;">
                        <el-col :span="10" style="padding-left: 5px;">
                            <el-checkbox   size="large" />
                            <span style="margin-left: 5px;">2024-07-06</span>
                            <span>订单号0xxxxxxxxxxxx</span>
                        </el-col>
                        <el-col :span="5">
                            <span style="color: #333333;">店铺：店铺名称</span>
                        </el-col>
                        <el-col :span="1" :offset="8">
                            <el-icon><Delete /></el-icon>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="10" style="display: flex;">
                            <div style="width: 100px;height: 100px;margin: 10px;"><img style="width: 100%;height: 100%;" src="../../../assets/img/storelogo.png"></div>
                            <div style="height: 150px;">miaoshuachiahcahchaucuh</div>
                        </el-col>
                        <el-col :span="2" style="text-align: center;">￥12.05</el-col>
                        <el-col :span="2" style="text-align: center;">5</el-col>
                        <el-col :span="2" style="text-align: center;">
                            <div><el-button link >申请售后</el-button></div>
                            <div><el-button link >投诉卖家</el-button></div>
                        </el-col>
                        <el-col :span="2" style="text-align: center;">￥12.05</el-col>
                        <el-col :span="2" style="text-align: center;">
                            <div>交易成功/失败</div>
                            <div><el-button link >订单详情</el-button></div>
                            <div><el-button link >查看物流</el-button></div>
                        </el-col>
                        <el-col :span="4" style="text-align: center;"><el-button link >追加评论</el-button></el-col>
                    </el-row>
            </div>

            <div style="border:1px solid #f1f1f1;border-radius: 5px;">
                    <el-row style="line-height: 50px;background-color: #f1f1f1;height: 50px;border:1px solid #f1f1f1;margin-bottom: 10px;">
                        <el-col :span="10" style="padding-left: 5px;">
                            <el-checkbox   size="large" />
                            <span style="margin-left: 5px;">2024-07-06</span>
                            <span>订单号0xxxxxxxxxxxx</span>
                        </el-col>
                        <el-col :span="5">
                            <span style="color: #333333;">店铺：店铺名称</span>
                        </el-col>
                        <el-col :span="1" :offset="8">
                            <el-icon><Delete /></el-icon>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="10" style="display: flex;">
                            <div style="width: 100px;height: 100px;margin: 10px;"><img style="width: 100%;height: 100%;" src="../../../assets/img/storelogo.png"></div>
                            <div style="height: 150px;">miaoshuachiahcahchaucuh</div>
                        </el-col>
                        <el-col :span="2" style="text-align: center;">￥12.05</el-col>
                        <el-col :span="2" style="text-align: center;">5</el-col>
                        <el-col :span="2" style="text-align: center;">
                            <div><el-button link >申请售后</el-button></div>
                            <div><el-button link >投诉卖家</el-button></div>
                        </el-col>
                        <el-col :span="2" style="text-align: center;">￥12.05</el-col>
                        <el-col :span="2" style="text-align: center;">
                            <div>交易成功</div>
                            <div><el-button link >订单详情</el-button></div>
                            <div><el-button link >查看物流</el-button></div>
                        </el-col>
                        <el-col :span="4" style="text-align: center;"><el-button link >追加评论</el-button></el-col>
                    </el-row>
            </div>


        </div>
    </div>
</template>
<script setup>
import{Delete} from '@element-plus/icons-vue'
</script>