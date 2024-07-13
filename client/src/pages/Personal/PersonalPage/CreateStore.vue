<template>
    <div style="background-color: white;width: 95%;margin:20px auto;padding-top: 50px;padding-bottom: 50px;">
        <h2 style=" max-width: 100px;margin: auto;margin-bottom: 50px;">创建店铺</h2>
        <el-form label-width="auto" style="max-width: 300px;margin: auto;">
            <el-form-item label="店铺图片">
                <el-upload
                    class="avatar-uploader"
                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                >
                    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
                </el-upload>
            </el-form-item>
            <el-form-item label="店铺名称">
                <el-input />
            </el-form-item>
            <el-form-item label="店铺描述">
                <el-input />
            </el-form-item>
            <el-form-item label="手机号">
                <el-input />
            </el-form-item>
        </el-form>
        <div style=" max-width: 100px;margin: auto;margin-bottom: 50px;">
            <el-button type="primary" style="color: white;" color="#26b0d5" size="large">确认创建</el-button>
        </div>
    </div>
</template>
<script setup>
import { Plus } from '@element-plus/icons-vue'
</script>
<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>