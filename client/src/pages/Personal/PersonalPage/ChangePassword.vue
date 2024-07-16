<template>
    <div style="width: 1100px;background-color: white;margin:20px auto;padding-bottom: 50px;height: 500px;">
        <div style="padding: 30px; text-align: center;"><h1 style="color: #303133;">修改密码</h1></div>
        <div style="margin: auto;width: 300px;">
            <el-form :model="form" label-width="auto" style="max-width: 600px" >
                <el-form-item label="邮箱">
                    <el-input type="email" v-model="form.email" style="width: 240px" placeholder="请输入邮箱" />
                </el-form-item>
                <el-form-item label="验证码">
                    <el-input v-model="form.code" style="width: 240px" placeholder="请输入验证码" >
                        <template #append>
                            <el-button @click="handleGetCode">发送验证码</el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item label="新密码">
                    <el-input v-model="form.newPassword"  placeholder="请输入密码" style="width: 240px" type="password" show-password>
                    </el-input>
                </el-form-item>
                <el-form-item label="确认密码">
                    <el-input v-model="form.confirmPassword" style="width: 240px" placeholder="请输入新密码" type="password" show-password/>
                </el-form-item>
                <el-form-item style="margin-left: 100px;">
                    <el-button type="primary" @click="ConfirmChange">修改密码</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script setup>
import { ElMessage } from 'element-plus'
import { captchaSend ,captchaVertify} from '../../../api/email';
import { changePassword } from '../../../api/user';
import { ref } from 'vue';
const form = ref({
  email: '',
  code: '',
  newPassword: '',
  confirmPassword: ''
})
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
    } catch (error) {
        // 捕获并处理可能出现的错误
        ElMessage({
        message: `发送验证码失败: ${error.message}`,
        type: 'error'
        });
    }
}
</script>