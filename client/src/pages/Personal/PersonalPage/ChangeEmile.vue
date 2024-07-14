<template>
    <div style="width: 95%;background-color: white;margin:20px auto;padding-bottom: 50px;height: 500px;">
        <div style="width: 630px;margin: auto;padding-top: 50px;">
            <el-steps style="max-width: 600px" :active="active" finish-status="success">
                <el-step title="验证邮箱" :icon="Edit"></el-step>
                <el-step title="修改邮箱" :icon="Upload"/>
                <el-step title="成功" :icon="Picture"/>
            </el-steps>
        </div>
        <div id="part1" style="width: 300px;margin: auto;padding-top: 50px;text-align: center;">
            <el-form label-width="auto" style="max-width: 600px" >
                <el-form-item label="邮箱">
                    <el-input  style="width: 240px" placeholder="请输入邮箱" v-model="email1"/>
                </el-form-item>
                <el-form-item label="验证码">
                    <el-input  style="width: 240px" placeholder="请输入验证码" v-model="captcha1">
                        <template #append>
                            <el-button @click="handlecaptchaSend(email1)">发送验证码</el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <el-button style="margin-top: 12px" @click="testify">确认</el-button>
            </el-form>
        </div>
        <div id="part2" style="width: 300px;margin: auto;padding-top: 50px;text-align: center;display: none;">
            <el-form label-width="auto" style="max-width: 600px" >
                <el-form-item label="新邮箱">
                    <el-input  style="width: 240px" placeholder="请输入邮箱" v-model="email2"/>
                </el-form-item>
                <el-form-item label="验证码">
                    <el-input  style="width: 240px" placeholder="请输入验证码" v-model="captcha2">
                        <template #append>
                            <el-button @click="handlecaptchaSend(email2)">发送验证码</el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <el-button style="margin-top: 12px" @click="change">确认修改</el-button>
            </el-form>
        </div>
        <div  id="part3" style="width: 300px;margin: auto;padding-top: 50px;text-align: center;display: none;">
            <img src="../../../assets/img/success.png" style="width: 100px;height: 100px;">
            <p style="color:#303133;">修改成功</p>
            <el-button style="margin-top: 12px" @click="back">返回</el-button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { Edit, Picture, Upload } from '@element-plus/icons-vue'
import { captchaSend , captchaVertify} from '../../../api/email'
import { changeEmail } from '../../../api/user'

const active = ref(0)

const email1=ref('')
const email2=ref('')

const captcha1=ref('')
const captcha2=ref('')

let handlecaptchaSend=(email)=>{
    captchaSend(email)
}


const testify = () => {  
    active.value = 1; 
    const element1 = document.getElementById('part1');
    const element2 = document.getElementById('part2');
    const element3 = document.getElementById('part3'); 
    element1.style.display = 'none';
    element2.style.display = ''; 
    element3.style.display = 'none';
    captchaVertify(email1,captcha1)  

};
const change = async () => {
    active.value = 3
    const element1 = document.getElementById('part1');
    const element2 = document.getElementById('part2');
    const element3 = document.getElementById('part3'); 
    element1.style.display = 'none';
    element2.style.display = 'none'; 
    element3.style.display = '';
    changeEmail(captcha2,email2)

}
const back = () => {
  active.value = 0
  const element1 = document.getElementById('part1');
  const element2 = document.getElementById('part2');
  const element3 = document.getElementById('part3'); 
    element1.style.display = '';
    element2.style.display = 'none'; 
    element3.style.display = 'none';  
}
</script>