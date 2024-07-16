<script setup>
import { h, ref,onMounted } from 'vue'
import { ElDivider } from 'element-plus'
import { useUserStore } from '../../../stores/userStore';
import { ArrowRight } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
import {getUserById} from '../../../api/user'
import {getOrderTypeCount} from '../../../api/order'
import {getAddressList} from '../../../api/address'


const router = useRouter();

const userStore = useUserStore(); 

const size = ref(50)
const spacer = h(ElDivider, { direction: 'vertical' })

const count=ref([])

const defaultAddress=ref('')

function handleAddress(){
    router.push('/addresslist')
}

async function getUser()
{
    const userId=localStorage.getItem('userId')
    const response=await getUserById(userId)
    userStore.setUser(response.data)
}

async function geTypeCount(){
    const response=await getOrderTypeCount()
    response.data.forEach(item => {  
    // 将每个对象的count属性添加到countArray中  
    count.value.push(item.count);  
    });  
}

async function getAddress()
{
    const response=await getAddressList()
    defaultAddress.value=response.data.filter(address => address.status === 1)[0];
    console.log('defaultAddress.value',defaultAddress.value)
}


onMounted(()=>{
    getUser()
    geTypeCount()
    getAddress()
});

</script>

<template>
    <div style="width: fit-content; margin: 50px auto;">
    <el-space direction="vertical" class="info-box" >
      <el-card  class="box-card" style="width: 900px">
        <el-row>
            <el-col :span="4"><div class="grid-content ep-bg-purple" />
                <el-avatar  :size="85" :fit="'fill'" :src="userStore.image" />
            </el-col>
            <el-col :span="6"><div class="account">
                <span style="font-size: larger;">{{ userStore.nickname }}</span><br>
                <span style="font-size: small; color: gray;">我的账号</span><br>
                <span style="font-size: small; color: gray;">{{ userStore.name }}</span>
                </div>
            </el-col>
            <el-col :span="9" :offset="3"><div class="bg-grey box-card" >
                <el-row @click="handleAddress">收货地址
                    <el-link  :underline="false">  
                        <el-icon><ArrowRight /></el-icon>
                </el-link>
                </el-row><br>
                <el-row>
                    <el-tag type="warning">默认</el-tag>
                    {{ defaultAddress.address }}
                </el-row>
            </div>
            </el-col>
        </el-row><br><br>
        <el-row>
                <el-space :size="size" :spacer="spacer" style="text-align: center; margin-left: 30px;">
                <div>
                    {{count[0]}}<br>待付款
                </div>
                <div>
                    {{count[1]}}<br>待发货
                </div>
                <div>
                    {{count[2]}}<br>待收货
                </div>
                <div>
                    {{count[3]}}<br>待评价
                </div>
                <div>
                    {{count[4]}}<br>退款/售后
                </div>
            </el-space>
        </el-row>
      </el-card>

      <el-card  class="box-card" style="width: 900px; padding: 5px 10px 55px 10px;">
        <span style="">我的物流</span><br><br>
        <div style="text-align: center; ">
            <span style=" font-size: small; color: gray;">当前没有物流信息</span>
        </div>
        
        
    </el-card>
    </el-space>
</div>
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

