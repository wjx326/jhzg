

<template>
  <div>
    <el-form :model="form" label-width="auto">
      <el-form-item label="店铺名称: ">
        <el-input
          v-model="form.name"
          style="width: 400px"
          placeholder="小梁牛肉店"
        />
      </el-form-item>
      <el-form-item label="店铺简介: ">
        <el-input v-model="form.description" :rows="4" type="textarea" style="width: 400px"/>
      </el-form-item>
      <el-form-item label="店铺头像: ">
        <el-upload
          class="avatar-uploader"
          :show-file-list="false"
          action="#"
          :auto-upload="false"
          :on-change="handleChange"
          :headers="headers"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="form.image" :src="form.image" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon">
            <img src="../assets/empty.png" class="avatar" />
          </el-icon>
        </el-upload>
      </el-form-item>

      <el-form-item label="联系电话: ">
        <el-input v-model="form.phone" style="width: 240px" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">修改</el-button>
        <el-button type="primary" @click="onClear">清空</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import { reactive } from "vue";
import axios from "axios";
import "element-plus/dist/index.css";
import { getCurrentInstance, onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import '../style.css'

const currentInstance = ref();
const router = useRouter();

const token = localStorage.getItem("userToken");


// 图片头文件
const headers = {
  "Content-Type": "multipart/form-data",token: `${token}`
};
const image = ref();
// 图片校验
const beforeAvatarUpload = function (rawFile) {
  let types = ["image/jpeg", "image/jpg", "image/png"];

  const isImage = types.includes(rawFile.type);

  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isImage) {
    ElMessage.error("上传图片格式错误，格式只能为 png,jpg,jpeg!!");
    return false;
  }
  if (!isLt2M) {
    ElMessage.error("上传头像图片大小不能超过 2MB!");
    return false;
  }
  return true;
};

// 上传图片
const handleChange = function (file, fileList) {
  //文件数量改变
  image.value = file;

  form.image = "";
  // if (this.fileList.length > 0) {
  //   confirmUpload();
  // }
  if (file.size > 0) confirmUpload();
};
const confirmUpload = function () {
  //确认上传
  var param = new FormData();
  param.append("file", image.value.raw);
  // fileList.forEach((val, index) => {
  //   param.append("file", val.raw);
  // });
  // 发送图片
  axios
    .post(
      "/api/user/common/upload",
      param,{headers:headers}
    )
    .then((res) => {
      // 接收地址
      if (res.data.code == 0) {
        form.url = res.data.data;
        ElMessage.success("商品提交成功");
      } else {
        ElMessage.error(res.data.msg);
      }
    });
};

// 初始化
onMounted(() => {
  currentInstance.value = getCurrentInstance();
});

//  表单部分
const form = reactive({
  name: "",
  description: "",
  image: "",
  phone: "",
});
const onSubmit = () => {
  // 发送修改请求
  console.log("submit!");
  axios
    .post(
      "/api/admin/shop/update",
      {
        description: form.description,
        image: form.image,
        name: form.name,
        phone: form.phone,
      },  
      {  
        headers: headers, // 确保 headers 变量已经在此之前被定义  
      } 
    )
    .then((response) => {
      if (response.data.code == 0) {
        // 修改成功
        ElMessage.success("修改成功");
        router.push("/index");
      } else {
        ElMessage.error(response.data.msg);
      }
    });
};

const onClear = () => {
  form.name = "";
  form.description = "";
  form.image = "";
  form.phone = "";

  console.log("clear!");
};
</script>

<style scoped>
.avatar-uploader .avatar {
  width: 100px;
  height: 100px;
  display: block;
}

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
  border: 1px dashed var(--el-border-color);
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  text-align: center;
}
</style>
