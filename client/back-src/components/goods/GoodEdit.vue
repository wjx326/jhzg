<template>
  <div class="outter">
    <el-container>
      <el-header>编辑商品</el-header>
      <el-main>
        <el-form :model="form" label-width="120px">
          <el-row :gutter="0">
            <h4 style="float: left">1.商品基本信息</h4>
          </el-row>
          <el-row :gutter="0">
            <el-form-item label="平台商品分类" prop="">
              <el-select v-model="form.category" style="width: 400px" placeholder="请选择商品分类">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-row>
          <el-row :gutter="0">
            <el-form-item label="商品标题">
              <el-input v-model="form.name"> </el-input>
            </el-form-item>
          </el-row>
          <el-row :gutter="0">
            <el-form-item label="商品描述">
              <el-input
                style="width: 600px"
                type="textarea"
                v-model="form.description"
              >
              </el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="商品图片" prop="" style="">
              <el-upload
                class="avatar-uploader"
                action="#"
                :auto-upload="false"
                :on-change="handleChange"
                :headers="headers"
                :show-file-list="false"
                :before-upload="beforeAvatarUpload"
                style="width: 200px; height: 200px; background-color: aliceblue"
              >
                <img v-if="form.url" :src="form.url" class="avatar" />
                <el-icon
                  style="top: 75px"
                  size="48px"
                  v-else
                  class="avatar-uploader-icon"
                  ><Plus
                /></el-icon>
              </el-upload>
            </el-form-item>
          </el-row>
          <el-row :gutter="0">
            <h4 style="float: left">2.商品库存与价格信息</h4>
          </el-row>
          <el-row :gutter="0">
            <el-form-item label="商品价格" prop="">
              <el-input v-model="form.price"></el-input>
            </el-form-item>
          </el-row>
          <el-row :gutter="0">
            <el-form-item label="商品库存" prop="">
              <el-input v-model="form.stock"></el-input>
            </el-form-item>
          </el-row>
        </el-form>
        <el-button type="success" @click="onSubmit">提交</el-button>
      </el-main>
    </el-container>
  </div>
</template>


<script setup>
import { ref, reactive, onMounted } from "vue";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import axios from "axios";
import inputNum from '../../utils/inputNum.js';
import inputNumPoint from '../../utils/inputNumPoint.js';
import LocalCache from '../../utils/cache.js';
import { useRouter } from "vue-router";
const image = ref();
let goods_id = -1;
const token = localStorage.getItem("userToken");


const router = useRouter();
// 图片头文件
const headers = {
  "Content-Type": "multipart/form-data",
  token: `${token}`
};
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

  form.url = "";
  // if (this.fileList.length > 0) {
  //   confirmUpload();
  // }
  if (file.size > 0) confirmUpload();
};
const confirmUpload = function () {
  console.log("upload!!" + "file: " + typeof image.value);

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
        console.log(this.imageUrl);
        ElMessage.success("商品提交成功");
      } else {
        console.log(res);
        ElMessage.error(res.data.msg);
      }
    });
};

// 商品分类表单
const options = [
  {
    value: 1,
    label: "服饰鞋帽箱包类",
  },
  {
    value: 2,
    label: "家居家具家装类",
  },
  {
    value: 3,
    label: "数码家电类",
  },
  {
    value: 4,
    label: "美妆个护类",
  },
  {
    value: 5,
    label: "母婴玩具乐器类",
  },
  {
    value: 6,
    label: "食品酒类生鲜类",
  },
  {
    value: 7,
    label: "运动户外类",
  },
  {
    value: 8,
    label: "图书音像教育类",
  },
  {
    value: 9,
    label: "收藏礼品鲜花类",
  },
  {
    value: 10,
    label: "宠物农资绿植类",
  },
];

// 提交部分
const form = reactive({
  category: 1,
  name: "",
  description: "",
  url: "",
  price: "",
  stock: "",
});
// 提交
const onSubmit = function () {
  // 修改商品
  axios
    .post(
      "/api/admin/goods/create",
      {
        category_id: form.category,
        description: form.description,
        image: form.url,
        name: form.name,
        price: form.price,
        status: 1,
        store: form.stock,
        id: goods_id
      }
      ,{headers:headers}
    )
    .then((res) => {
      if (res.data.code == 0) {
        ElMessage.success("商品修改成功");
        router.push('/index')
      } else {
        ElMessage.error("商品修改失败");
      }
    });
};

// 初始化
onMounted(() => {
  // LocalCache中获取数据
  goods_id = LocalCache.getCache('goods_id');

  if(goods_id)
  {
    // 初始化数据
    axios.get('/api/admin/goods/' + goods_id,{headers:headers})
    .then((res) => {
      if(res.data.code == 0)
    {
      form.category = res.data.data.category_id;
      form.name =  res.data.data.name;
      form.description =  res.data.data.description;
      form.url =  res.data.data.image;
      form.price = res.data.data.price;
      form.stock = res.data.data.store;
      console.log(form)
    }
    else{
      ElMessage.error(res.data.msg)
      router.push('/index')
    }

    });

  }else{
    ElMessage.error('编辑的商品id' + goods_id +'无效');
    router.push('/index')
  }
});
</script>