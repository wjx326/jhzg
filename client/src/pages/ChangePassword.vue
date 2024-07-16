<template>
    <div >
        <div style="background-image: url('./src/assets/img/background.jpg');background-size: cover; height: 630px; width: 100%; background-position: center;padding-top: 100px;">
            <div style="background-color: white; width: 700px;padding: 40px; border-radius: 10px;margin: auto;height: 300px;">
                <div style="width: 350px;float: left;" >
                    <img src="../assets/img/title.png" style="width: 40%;">
                    <img src="../assets/img/login.png" style="width: 80%;">
                </div>
                <div style="width: 350px; float: right;">
                    <div style="width: 100%;text-align: center;margin-top: -10px;">
                        <h3>修改密码</h3>
                    </div>
                    <el-form :model="form" label-width="auto" style="max-width: 100%">
                        <el-form-item label="邮箱">
                            <el-input type="email" v-model="form.email" style="width:100%" placeholder="请输入邮箱" />
                        </el-form-item>
                        <el-form-item label="验证码">
                            <el-input v-model="form.code"  style="width: 100%" placeholder="请输入验证码" >
                                <template #append>
                                    <el-button @click="handleGetCode">发送验证码</el-button>
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item label="新密码">
                            <el-input v-model="form.newPassword"  placeholder="请输入密码" style="width: 100%" type="password" show-password>
                            </el-input>
                        </el-form-item>
                        <el-form-item label="确认密码">
                            <el-input v-model="form.confirmPassword" style="width: 100%" placeholder="请输入新密码" type="password" show-password/>
                        </el-form-item>
                        <el-form-item style="margin-left: 100px;width: 50%">
                            <el-button type="primary" style="margin: auto; width:40%;" @click="handleBackClick">返回</el-button>
                            <el-button type="primary" style="margin: auto; width:40%;" @click="ConfirmChange">修改</el-button>
                         </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ElMessage } from 'element-plus'
import { captchaSend ,captchaVertify} from '../api/email';
import { changePassword } from '../api/user';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const form = ref({
  email: '',
  code: '',
  newPassword: '',
  confirmPassword: ''
})
const router = useRouter();
function handleBackClick() {
    router.push('/login');
} 
function handleConfirmClick() {
    ElMessage({
    message: '修改成功',
    type: 'success',
  })
    router.push('/login');
} 
const handleGetCode = async () => {
  // 正则表达式用于校验邮箱格式
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (form.value.email === '') {
    ElMessage({
      message: '邮箱不能为空',
      type: 'error'
    });
    return; // 终止函数执行
  }

  // 使用正则表达式校验邮箱格式
  if (!emailRegex.test(form.value.email)) {
    ElMessage({
      message: '邮箱格式不正确',
      type: 'error'
    });
    return; // 终止函数执行
  }

  try {
    // 使用 await 等待异步操作完成
    const response = await captchaSend(form.value.email);
    // 根据 response 处理结果，例如显示成功消息
    ElMessage({
      message: '验证码已发送，请查收',
      type: 'success'
    });
  } catch (error) {
    // 捕获并处理可能出现的错误
    ElMessage({
      message: `发送验证码失败: ${error.message}`,
      type: 'error'
    });
  }
};
const ConfirmChange= async()=>{
    if (form.value.email === '') {
        ElMessage({
        message: '邮箱不能为空',
        type: 'error'
        });
        return; // 终止函数执行
    }
    if (form.value.newPassword === ''|| form.value.confirmPassword === '') {
        ElMessage({
        message: '密码不能为空',
        type: 'error'
        });
        return; // 终止函数执行
    }
    try {
    const response=await changePassword(form.value.code,form.value.email,form.value.newPassword);
    ElMessage({
      message: '修改成功',
      type: 'success'
    });
    router.push('/login');
    } catch (error) {
        // 捕获并处理可能出现的错误
        ElMessage({
        message: `发送验证码失败: ${error.message}`,
        type: 'error'
        });
    }
}
</script>