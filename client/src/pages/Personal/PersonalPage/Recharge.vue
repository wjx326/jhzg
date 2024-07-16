<template>
    <div style="background-color: white;width: 95%;margin:20px auto;padding: 20px;padding-bottom: 100px;">
        <div style="background-color: #26b0d5;border-radius: 8px;padding: 20px;">
            <div style="display: flex;">
                <div style="width: 50px;height: 50px;"><img src="../../../assets/img/硬币.png" style="width:100%;height: 100%;"></div>
                <div style="width: 100px;height: 50px;color: white;font-size: x-large;font-weight: bold;line-height: 50px;margin-left: 20px;">充值中心</div>
            </div>
            <p style="color: white;font-size: small;">1.为了您的账户安全，请在官方渠道进行充值操作，避免在非官方平台泄露个人信息及支付密码。</p>
            <p style="color: white;font-size: small;">2.请确认充值金额与所选充值方式，一旦支付成功，部分充值可能无法退款或更改。</p>
        </div>
        <div style="background-color: #def2f9;border-radius: 8px;padding: 20px;margin-top: 30px;">
            <el-row style="height: 60px;line-height: 50px;">
                <el-col :span="2" >
                    <el-avatar  @click="handleAvatarClick"
                        :size="50" :fit="contain" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                        />
                </el-col>
                <el-col :span="6" style="color: #606266;"> 充值账号：{xxxx} </el-col>
                <el-col :span="1" :offset="11" >
                    <img src="../../../assets/img/硬币.png" style="width: 30px;height: 30px;margin: 10px;">
                </el-col>
                <el-col :span="3" style="color: #606266;">
                    当前余额：{xxxx}
                </el-col>
            </el-row>
        </div>
        <el-row style="margin-top: 30px;color: #606266;">
            <el-col :span="3" v-for="(amount, index) in amounts" :key="index">
                <div
                    class="pay_card"
                    :class="{ selected: selectedAmount === amount }"
                    @click="selectAmount(amount)"
                >
                    {{ amount }}￥
                </div>
            </el-col>
            <el-col :span="3">
                <div
                    class="pay_card"
                    :class="{ selected: selectedAmount === 4 }"
                    @click="selectCustomAmount"
                >
                    自定义金额
                </div>
            </el-col>
            <el-col :span="3">
                <el-input
                    v-if="showCustomAmountInput"
                    type="number"
                    v-model.number="customAmount"
                    @blur="confirmCustomAmount"
                />
            </el-col>
        </el-row>
        <el-row style="margin-top: 50px;margin-bottom: 50px ;color: #606266;">
            <el-col :span="2">应付余额：</el-col>
            <el-col :span="2"  style="font-size: x-large;color: red;">{{ payMoney }}元</el-col>
        </el-row>
        <el-button type="primary" style="color: white;" color="#26b0d5" size="large" @click="confirmPay">确认支付</el-button>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { charge } from '../../../api/user';

const amounts = [10, 20, 30] // 定义金额选项
const selectedAmount = ref(null) // 用于存储选中的金额
const isCustomAmount = ref(false) // 用于判断是否选中了自定义金额
const showCustomAmountInput = ref(false) // 控制是否显示自定义金额输入框
const customAmount = ref(0) // 存储自定义金额
const payMoney = ref(0) // 应付余额

// 选择金额
const selectAmount = (amount) => {
  selectedAmount.value = amount
  isCustomAmount.value = false
  showCustomAmountInput.value = false
  payMoney.value = amount
}

// 选择自定义金额
const selectCustomAmount = () => {
    showCustomAmountInput.value=true
    selectedAmount.value = 4
}
const confirmCustomAmount=()=>{
    if (customAmount.value >=0) {
    isCustomAmount.value = true
    payMoney.value = customAmount.value
  }
}
const confirmPay = async () => { // 添加 async 关键字
  if (payMoney.value <= 0) {
    ElMessage({
      message: '充值金额必须大于0元',
      type: 'error'
    });
    return; // 添加 return 来终止函数执行
  }
  
  try {
    const response = await charge(payMoney.value);
    // 处理 response，例如显示支付成功的消息
    ElMessage({
      message: '支付成功',
      type: 'success'
    });
  } catch (error) {
    // 处理 charge 函数可能抛出的错误
    ElMessage({
      message: `支付失败: ${error.message}`,
      type: 'error'
    });
  }
};
</script>
<style>
.pay_card{
    width: 100px;
    height: 50px;
    border: 2px solid #ccc;
    border-radius: 5px;
    text-align: center;
    line-height: 50px;
}
.pay_card.selected{
    border:2px solid #26b0d5;
}
</style>