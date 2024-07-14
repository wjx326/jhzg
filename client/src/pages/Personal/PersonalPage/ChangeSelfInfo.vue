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
                        <el-col :span="20"><el-avatar :size="100" :src="userImgUrl" @click="goToSecondTab"/></el-col>
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
                            <el-radio-group v-model="radio">
                                <el-radio :value="0">男</el-radio>
                                <el-radio :value="1">女</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-button type="primary" @click="">保存</el-button>

                </div>
            </el-tab-pane>
            <el-tab-pane name="second">
                <template #label>
                <span >
                    <el-icon><User /></el-icon>
                    <span>头像图片</span>
                </span>
                </template>
                上传头像
                <p style="margin: 20px;color: #606266;font-size: small;">支持jpg、jpeg、png 格式的图片<br>
                请不要上传公司、店铺、商品的图片，本网站保留对账户进行全网站处罚的权力</p>
                <div style="width:300px;height: 250px;margin: 20px;">
                    <el-upload 
                    action="#" 
                    :file-list="fileList"
                    list-type="picture-card" 
                    :auto-upload="false" 
                    :limit="1"
                    @change="handleChange">
                    <el-icon><Plus /></el-icon>

                    <template #file="{ file }">
                    <div>
                        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                        <span class="el-upload-list__item-actions">
                        <span
                            class="el-upload-list__item-preview"
                            @click="handlePictureCardPreview(file)"
                        >
                            <el-icon><zoom-in /></el-icon>
                        </span>
                       
                        <span
                            class="el-upload-list__item-delete"
                            @click="handleRemove(file)"
                        >
                            <el-icon><Delete /></el-icon>
                        </span>
                        </span>
                    </div>
                    </template>
                </el-upload>

                <el-dialog v-model="dialogVisible">
                    <img w-full :src="dialogImageUrl" alt="Preview Image" />
                </el-dialog>

                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import {Document,User} from '@element-plus/icons-vue'

import {getUserById} from '../../../api/user'

import { useUserStore } from '../../../stores/userStore';


import { Delete, Plus, ZoomIn } from '@element-plus/icons-vue'


const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)
const fileList = ref([]);


const handleRemove = (file) => {

}

const handlePictureCardPreview = (file) => {
   
  dialogImageUrl.value = file.url
  dialogVisible.value = true
}


const handleChange = (file, fileList) => {
      // 更新已上传的文件列表
      this.fileList = fileList;
      // 确保只有一个文件上传框
      if (fileList.length > 1) {
        fileList.splice(0, 1);
      }
}
    


const userStore = useUserStore();

const activeTab=ref('first') 

const userImgUrl=ref(userStore.image)
const nickname=ref('')
const radio = ref(0)

let goToSecondTab=()=>{
    activeTab.value = 'second';
}


</script>
<style>
.formitem{
    margin-top: 50px;
}
</style>