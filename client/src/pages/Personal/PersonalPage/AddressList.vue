<template>
<div style="width: 99%;margin: auto;  background-color: white;  border-radius: 5px; margin-top: 60px;">
  <div style="width: 96%;margin: 20px auto; padding-top: 10px;">
    <h3 style="font-family: PingFangSC;color: #11192d;">我的收货地址</h3>
    <p style="margin-bottom: 24px;
    font-family: PingFangSC;
    font-weight: 400;
    font-size: 16px;
    color: #50607a;
    letter-spacing: 0;
    line-height: 16px;">常用地址</p>
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
</div>
</template>

<script  setup>

const handleEdit = (index, row) => {
  console.log(index, row)
}
const handleDelete = (index, row) => {
  console.log(index, row)
}

const tableData = [
  {
    name: 'Tom',
    phone:'12345678901',
    district:'No. 189, Grove St,',
    detailAddress: 'No. 189, Grove St, Los Angeles',
    zipcode:'000000',
    status:1
  },
  {
    name: 'Tom',
    phone:'123456',
    detailAddress: 'No. 189, Grove St, Los Angeles',
    zipcode:'000000',
    district:'No. 189, Grove St,',

    status:0
    
  },
  {
    name: 'Tom',
    phone:'123456',
    detailAddress: 'No. 189, Grove St, Los Angeles',
    zipcode:'000000',
    district:'No. 189, Grove St,',

    status:0
  },
  {
    name: 'Tom',
    phone:'123456',
    detailAddress: 'No. 189, Grove St, Los Angeles',
    zipcode:'000000',   
    district:'No. 189, Grove St,',

    status:0
  },
]
</script>