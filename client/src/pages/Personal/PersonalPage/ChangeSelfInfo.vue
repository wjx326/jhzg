<template>
    <div style="width: 1100px;background-color: white;margin:30px auto;">
        <el-tabs  style="padding: 50px;">
            <el-tab-pane>
                <template #label>
                    <span >
                        <el-icon><Document /></el-icon>
                        <span>基本资料</span>
                    </span>
                </template>
                <div style="margin: 20px;color: #606266;">
                    <p >亲爱的(xxxx),填写真实的资料，有助于好友找到你哦。</p>
                    <el-row class="formitem" >
                        <el-col :span="4" style="line-height: 104px;"><span >当前头像</span></el-col>
                        <el-col :span="20"><el-avatar :size="100" :src="circleUrl" /></el-col>
                    </el-row>
                    <el-row class="formitem">
                        <el-col :span="4" style="line-height: 50px;"><span>昵称</span></el-col>
                        <el-col :span="20" style="line-height: 50px;"><el-input v-model="input" style="width: 240px" /></el-col>
                    </el-row>
                    <el-row class="formitem">
                        <el-col :span="4" style="line-height: 50px;">
                            <span>性别</span> <span style="color: red;">*</span>
                        </el-col>
                        <el-col :span="20" style="line-height: 50px;">
                            <el-radio-group v-model="radio">
                                <el-radio :value="3">Option A</el-radio>
                                <el-radio :value="6">Option B</el-radio>
                                <el-radio :value="9">Option C</el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                </div>
            </el-tab-pane>
            <el-tab-pane>
                <template #label>
                <span >
                    <el-icon><User /></el-icon>
                    <span>头像图片</span>
                </span>
                </template>
                <el-button type="primary">上传头像</el-button>
                <p style="margin: 20px;color: #606266;font-size: small;">支持jpg、jpeg、png 格式的图片<br>
                请不要上传公司、店铺、商品的图片，本网站保留对账户进行全网站处罚的权力</p>
                <div style="width:300px;height: 250px;margin: 20px;">
                    <img style="width: 100%;height: 100%;" src="../../../assets/img/defaultUserAvatar.png">
                </div>
                <el-button type="primary">保存</el-button>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script setup>
import {Document,User} from '@element-plus/icons-vue'
</script>
<style>
.formitem{
    margin-top: 50px;
}
</style>