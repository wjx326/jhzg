<script setup>
import { h, ref } from 'vue'
import { ElDivider } from 'element-plus'
import { useUserStore } from '../stores/userStore';
import { ArrowRight } from '@element-plus/icons-vue'

const userStore = useUserStore(); 


const size = ref(40)
const spacer = h(ElDivider, { direction: 'vertical' })
</script>

<template>
    <el-space direction="vertical" class="info-box" >
      <el-card  class="box-card" style="width: 700px">
        <el-row>
            <el-col :span="4"><div class="grid-content ep-bg-purple" />
                <el-avatar  :size="85" :fit="'fill'" :src="userAvatarurl" />
            </el-col>
            <el-col :span="6"><div class="account">
                <span style="font-size: larger;">{{ userStore.nickname }}</span><br>
                <span style="font-size: small; color: gray;">我的账号</span><br>
                <span style="font-size: small; color: gray;">{{ userStore.name }}</span>
                </div>
            </el-col>
            <el-col :span="6" :offset="6"><div class="bg-grey box-card" @click="">
                <el-row>收货地址
                    <el-link href="#" :underline="false">  
                        <el-icon><ArrowRight /></el-icon>
                </el-link>
                </el-row><br>
                <el-row>
                    <el-tag type="warning">默认</el-tag>
                    {{ address }}
                </el-row>
            </div>
            </el-col>
        </el-row><br><br>
        <el-row>
            
                <el-space :size="size" :spacer="spacer" style="text-align: center;">
                <div>
                    {{0}}<br>待付款
                </div>
                <div>
                    {{0}}<br>待发货
                </div>
                <div>
                    {{0}}<br>待收货
                </div>
                <div>
                    {{0}}<br>待评价
                </div>
                <div>
                    {{0}}<br>退款/售后
                </div>
            </el-space>
           
        </el-row>
        
      </el-card>
      <el-card  class="box-card" style="width: 700px ">
        <span style="">我的物流</span><br><br>
        <div style="text-align: center; ">
            <span style=" font-size: small; color: gray;">当前没有物流信息</span>
        </div>
        
        
    </el-card>
    </el-space>
</template>

<style>
.box-card
{
    border-radius: 5px;
    padding: 10px;
}
.bg-grey
{
    background-color: #f3f6f8;

}
.info-box
{
}
.account
{
    margin-top: 10px;
}

</style>

