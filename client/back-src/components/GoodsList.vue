<template>
  <el-row :gutter="0">
    <el-col :span="24">
      <span>商品编码:</span>
      <el-input v-model="goodsId" style="width: 200px" :on-input="goodsId = inputNum(goodsId)"></el-input>
      <el-button type="primary" @click="search">查询</el-button>
      <el-button type="primary" plain @click="reset">重置</el-button>
    </el-col>
  </el-row>
  <el-row :gutter="0">
    <el-col :span="24">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-change="handleChange">
        <el-tab-pane label="全部" name="first">
          <goods-table-view :goodsList="tableData" />
        </el-tab-pane>
        <el-tab-pane label="在售中" name="second">
          <goods-table-view :goodsList="tableData" />
        </el-tab-pane>
        <el-tab-pane label="未上架" name="third">
          <goods-table-view :goodsList="tableData" />
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>
  

<script setup>
import { ref, reactive, onMounted } from "vue";
import inputNum from '../utils/inputNum.js'
import GoodsTableView from "./goods/GoodTableView.vue";
import '../style.css'

import axios from "axios";
import { ElMessage } from "element-plus";

const goodsId = ref(null);
const activeName = ref("first");
const token = localStorage.getItem("userToken");

const headers = {
  token: `${token}`
};

// 搜索商品
const search = () => {
  if(goodsId.value != null)
    axios.get('/api/admin/goods/' + goodsId.value,{headers:headers})
  .then((res) => {
    if( res.data.code == 0)
  {
    tableData.value.push({
      id: res.data.data.id,
      url: res.data.data.url,
      name: res.data.data.name,
      price: res.data.data.price,
      store: res.data.data.store
    });
  } 
  else{
    ElMessage.error(res.data.msg);
  }
  })
  else{
    getData();
  }
};
//重置
const reset = () =>{
  goodsId.value = null;
  getData();
}

const filter = reactive({
  page: 1,
  pageSize: 10,
  status: null,
});

// 切换筛选条件 status
const handleChange = () => {
  if (activeName.value == "first") {
    filter.status = null;
  } else if (activeName.value == "second") {
    filter.status = 1;
  } else if (activeName.value == "third") {
    filter.status = 0;
  }
  getData();
};
const tableData = ref([
  {
    id: "000001",
    url: "https://ai.ibiit.com/png/smartIcon1-e8eabbce.png",
    name: "冰糖心火龙果",
    price: 1000,
    store: 1000,
  },
]);

// 获取数据
const getData = function () {
  axios
    .get("/api/admin/goods/page", {
      params: {
        page: filter.page,
        pageSize: filter.pageSize,
        status: filter.status,
      },
      headers:headers
    })
    .then((res) => {
      if (res != 0) {
        tableData.value = res.data.data.records;
        
      } else {
        ElMessage.error(res.data.msg);
      }
    });
};

onMounted(() => {
  getData();
})

</script>