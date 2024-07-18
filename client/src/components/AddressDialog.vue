<template>
  <el-dialog
    v-model="localVisible"
    :title="title"
    width="500"
    :before-close="handleClose"
  >
  <el-form :model="form" label-width="auto" style="max-width: 600px">
    <el-form-item label="收货人">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="性别">
      <el-radio-group v-model="form.sex" >
        <el-radio value="0">男</el-radio>
        <el-radio value="1">女</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="手机号">
      <el-input v-model="form.phoneNum" />
    </el-form-item>
    <el-form-item label="地址">
      <el-cascader 
      v-model=" form.address"
      :options="options"
      @change="handleChange"
      placeholder="请选择"
    />
    </el-form-item>
    <el-form-item label="详细地址">
      <el-input
    v-model="form.detailAddress"
    style="width: 240px"
    :rows="2"
    type="textarea"
    placeholder="请输入详细地址"
  />
    </el-form-item>
  </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="closeDialog">取消</el-button>
        <el-button type="primary" @click="confirmDialog">
          确认
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, watch, toRefs, defineProps, defineEmits } from 'vue'
import {addressPage,addressSubmit,addressUpdate,addressDelete,setDefaultAddress} from '../api/address'
import { ElMessage } from 'element-plus'; 



const props = defineProps({
  modelValue: Boolean, // 接收 v-model 传递的值
  title: String,
  item:Object
})

const { item } = toRefs(props) // 使用 toRefs 来保持 props 的响应性
const {title}= toRefs(props)
const form = ref({ ...props.item }) // 使用展开运算符初始化 form

watch(item, (newValue) => {
  form.value = { ...newValue } // 当 item 变化时，更新 form
  console.log('form.value',form.value)
})
const emit = defineEmits(['update:modelValue'])

const { modelValue } = toRefs(props) // 使用 toRefs 来响应式地处理 props

const localVisible = ref(modelValue.value)

// 监听 modelValue 的变化，更新 localVisible
watch(modelValue, (newValue) => {
  localVisible.value = newValue
})

// 当 localVisible 变化时，发出 update:modelValue 事件
watch(localVisible, (newValue) => {
  emit('update:modelValue', newValue)
})

const handleClose = (done) => {
  done()
}

const closeDialog = () => {

  localVisible.value = false
  emit('update:modelValue', false)
}

const confirmDialog = async() => {
  console.log('title.value',title.value)
  localVisible.value = false
  emit('update:modelValue', false)
  if(title.value=='添加地址')
  {
    const response=await addressSubmit(form.value.address[1],form.value.name,form.value.detailAddress,
    form.value.address[2],form.value.phoneNum,form.value.address[0],form.value.sex)
    if(response.code==='0')
      {
        addressPage(1,5)
          ElMessage({
          message: '添加成功',
          type: 'success',
          })
      }else{
          ElMessage({
          message: '添加失败',
          type: 'error',
          })
      }
  }else{
    const response=await addressUpdate(form.value.id,form.value.address[1],form.value.name,form.value.detailAddress,
    form.value.address[2],form.value.phoneNum,form.value.address[0],form.value.sex)
    if(response.code==='0')
      {
        addressPage(1,5)
          ElMessage({
          message: '编辑成功',
          type: 'success',
          })
      }else{
          ElMessage({
          message: '编辑失败',
          type: 'error',
          })
      }

  }
  

}


const handleChange = (selectedValues) => {
  console.log(selectedValues)
}


const options = [
  {
    value: '湖北省',
    label: '湖北省',
    children: [
      {
        value: '武汉市',
        label: '武汉市',
        children: [
          {
            value: '洪山区',
            label: '洪山区',
          },
          {
            value: '武昌区',
            label: '武昌区',
          },
          {
            value: '汉阳区',
            label: '汉阳区',
          }
        ],
      },
    ],
  },
  {
    value: '河南省',
    label: '河南省',
    children: [
      {
        value: '郑州市',
        label: '郑州市',
        children: [
          {
            value: '金水区',
            label: '金水区',
          }
        ],
      },
      {
        value: '洛阳市',
        label: '洛阳市',
        children: [
          {
            value: '洛龙区',
            label: '洛龙区',
          }
        ],
      }
    ],
  },
  {
    value: '北京市',
    label: '北京市',
    children: [
      {
        value: '朝阳区',
        label: '朝阳区',
      }
    ],
  },
]
</script>


<style scoped>
/* Add scoped styles if needed */
</style>
