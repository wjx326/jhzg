<template>
    <div style="width: 1100px;background-color: white;margin:30px auto;">
        <el-tabs  style="padding: 50px;" v-model="activeTab">
            <el-tab-pane name="first">
                <template #label>
                    <span >
                        <el-icon><Document /></el-icon>
                        <span>基本资料</span>
                    </span>
                </template>
                <div style="margin: 20px;color: #606266;">
                    <p >亲爱的{{userStore.nickname}},填写真实的资料，有助于好友找到你哦。</p>
                    <el-row class="formitem" >
                        <el-col :span="4" style="line-height: 104px;"><span >当前头像</span></el-col>
                        <el-upload
                            class="avatar-uploader"
                            action="/api/user/user/update"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                        >
                            <el-avatar v-if="imageUrl" :src="imageUrl" class="avatar" shape="square" :size="100"/>
                            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
                        </el-upload>                    
                    </el-row>
                    <el-row class="formitem">
                        <el-col :span="4" style="line-height: 50px;"><span>昵称</span></el-col>
                        <el-col :span="20" style="line-height: 50px;"><el-input v-model="nickname" style="width: 240px" /></el-col>
                    </el-row>
                    <el-row class="formitem">
                        <el-col :span="4" style="line-height: 50px;">
                            <span>性别</span> <span style="color: red;">*</span>
                        </el-col>
                        <el-col :span="20" style="line-height: 50px;">
                            <el-radio-group v-model="sex">
                                <el-radio :value="0">男</el-radio>
                                <el-radio :value="1">女</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-button type="primary" @click="submit">保存</el-button>

                </div>
            </el-tab-pane>
            
        </el-tabs>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import {Document} from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'; 
import {getUserById,updateInfo} from '../../../api/user'

import { useUserStore } from '../../../stores/userStore';


import {  Plus} from '@element-plus/icons-vue'


const userStore = useUserStore();

const activeTab=ref('first') 

const imageUrl=ref(userStore.image)
const nickname=ref('')
const sex = ref(0)

const handleAvatarSuccess = (response, file, fileList) => { 
      imageUrl.value = response.data || '';  
}

const submit=async ()=>{
    const response = await updateInfo(imageUrl,nickname,sex)
    if(response.code==='200'){
        const userId=localStorage.getItem('userId')
        const response=await getUserById(userId)
        userStore.setUser(response.data)
        ElMessage({
        message: '修改成功',
        type: 'success',
        })
      }else{
        ElMessage({
        message: '修改失败',
        type: 'error',
        })
      }

}




</script>
<style>
.formitem{
    margin-top: 50px;
}
</style>