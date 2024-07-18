<template>
    <div >
        <div style="background-image: url('./src/assets/img/background.jpg');background-size: cover; height: 630px; width: 100%; background-position: center;padding-top: 100px;">
            <div style="background-color: white; width: 700px;padding: 40px; border-radius: 10px;margin: auto;height: 300px;">
                <div style="width: 350px;float: left;" >
                    <img src="../assets/img/title.png" style="width: 40%;">
                    <img src="../assets/img/login.png" style="width: 80%;">
                </div>
                <div style="width: 350px; float: right;">
                    <div style="width: 100%;text-align: center;">
                        <h3>登录</h3>
                    </div>
                    <el-form label-width="auto" style="max-width: 100%">
                        <el-form-item label="账号">
                            <el-input  v-model="name"/>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input  type="password" v-model="password"/>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" style="margin: auto; width:80%;margin-top: 30px;" @click="handleLoginClick">登录</el-button>
                        </el-form-item>
                    </el-form>
                    <el-row >
                        <el-col :span="5" :offset="10">
                            <el-link type="info" @click="handleWordClick">忘记密码？</el-link>
                        </el-col>
                        <el-col :span="5" :offset="4">
                            <el-link type="info" @click="handleRegisterClick">立即注册!</el-link>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'; 
import {login,getUserById} from '../api/user'


import {useUserStore} from '../stores/userStore'

const userStore = useUserStore(); 

const name=ref('')
const password=ref('')



const router = useRouter();

async function handleLoginClick() {
    const response = await login(name.value,password.value)
    
    if(response.code===0)
    {
        const userInfo=await getUserById(response.data.id)
        console.log(userInfo.data)
        userStore.setUser(userInfo.data)
        router.push('/mall');
        ElMessage({
        message: '登录成功',
        type: 'success',
        })
    }else{
        ElMessage({
        message: '登录失败',
        type: 'error',
        })
    }
    // localStorage.setItem("userId",JSON.stringify(response.data.id));

    // const userInfo=await getUserById(response.data.id)
    // userStore.setUser(userInfo.data)
    // router.push('/mall');
    // ElMessage({
    //     message: '登录成功',
    //     type: 'success',
    // })
    
}
    

function handleRegisterClick() { 
 
    router.push('/register');
}  
function handleWordClick() {  
    router.push('/changepassword');
}  
</script>