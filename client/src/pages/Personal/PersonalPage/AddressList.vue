<template>
<div style="width: 99%;margin: auto;  background-color: white;  border-radius: 5px; margin-top: 60px;padding-bottom: 20px;">
  <div style="width: 96%;margin: 20px auto; padding-top: 10px;">
    <h3 style="font-family: PingFangSC;color: #11192d;">我的收货地址</h3>
    <el-row>
      <el-col :span="10">
        <p style="margin-bottom: 24px;
          font-family: PingFangSC;
          font-weight: 400;
          font-size: 16px;
          color: #50607a;
          letter-spacing: 0;
          line-height: 16px;">常用地址</p>
      </el-col>
      <el-col :span="2" :offset="9">
        <el-button type="primary" @click="handleAdd"><el-icon><Plus /></el-icon>
            添加地址
          </el-button>
      </el-col>
    </el-row>
  </div>
  <div style="width: 96%;margin: 20px auto; padding-bottom: 20px;">
  <el-table :data="tableData" border 
    style="display: flex;
    align-items: center;
    min-height: 67px;
    vertical-align: middle;
    font-family: PingFangSC;
    font-weight: 400;
    font-size: 12px;
    color: #50607a;"
    >
    <el-table-column prop="name" label="收货人" width="80" />
    <el-table-column prop="sex" label="性别" width="80" />
    <el-table-column prop="phone" label="电话/手机" width="120" />
    <el-table-column prop="district" label="所在地区" width="180"/>
    <el-table-column prop="detailAddress" label="详细地址" width="240"/>
    <el-table-column prop="zipcode" label="邮编"  width="80"/>
    <el-table-column label="操作" width="150">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
            修改
          </el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
      <el-table-column  
      label="移动设置"
      width="100"
      >  
      <template v-slot:default="scope">  
        <span v-if="scope.row.status === 1">
          <el-tag type="warning">默认地址</el-tag>
        </span>  
        <span v-else> 
          <el-link :underline="false">设为默认</el-link>
        </span>  
      </template>  
    </el-table-column>  
  </el-table>
</div>

    <!-- AddressDialog component with msg prop -->
    <AddressDialog v-model="dialogVisible"   :title="dialogTitle" :item="formData"/>
</div>
</template>

<script  setup>
import { ref } from 'vue'; 
import AddressDialog from "../../../components/AddressDialog.vue"
import{ Plus } from '@element-plus/icons-vue'
const dialogVisible = ref(false) 
const dialogTitle = ref("") 
const formData = ref({
  name: '',
  sex:'',
  phoneNum:'',
  address:'',
  detailAddress:''
})
const handleAdd=()=>{
  dialogTitle.value ="添加地址"
  dialogVisible.value = true
  formData.value = {
  name: '',
  sex:'',
  phoneNum:'',
  address:'',
  detailAddress:''
}
}
const handleEdit = (index, row) => {
  dialogTitle.value ="修改地址"
  dialogVisible.value = true
  formData.value = {
  name: row.name,
  sex:row.sex,
  address:row.district,
  phoneNum:row.phone,
  detailAddress:row.detailAddress
}
console.log( formData.value)
  console.log(index, row)
}
const handleDelete = (index, row) => {
  
  console.log(index, row)
}

const tableData = [
  {
    name: 'Tom',
    sex:'女',
    phone:'12345678901',
    district:['湖北省','武汉市','洪山区'],
    detailAddress: 'No. 189, Grove St, Los Angeles',
    zipcode:'000000',
    status:1
  },
  {
    name: 'Tom',
    sex:'女',
    phone:'123456',
    district:['湖北省','武汉市','洪山区'],
    detailAddress: 'No. 189, Grove St, Los Angeles',
    zipcode:'000000',

    status:0
    
  },
  {
    name: 'Tom',
    sex:'女',
    phone:'123456',
    district:['湖北省','武汉市','洪山区'],
    detailAddress: 'No. 189, Grove St, Los Angeles',
    zipcode:'000000',

    status:0
  },
  {
    name: 'Tom',
    sex:'女',
    phone:'123456',
    district:['湖北省','武汉市','洪山区'],
    detailAddress: 'No. 189, Grove St, Los Angeles',
    zipcode:'000000',   

    status:0
  },
]

</script>