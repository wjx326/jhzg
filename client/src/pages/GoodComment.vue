<template>
  <el-card style="max-width: 900px" shadow="never" class="comment-card">
    <template #header>
        <el-row>
            <el-col :span="6">
                <span>评价宝贝</span>
            </el-col>
            <el-col :span="6" :offset="12">
                <span>卖家：{{ 'aaa' }}</span>
            </el-col>
        </el-row>
    </template>
    <el-row>
        <el-col :span="8" style="text-align: center;">
            <el-image 
            style="width: 150px; height: 150px" 
            :src="goodsImgurl" 
            :fit="'fill'" /><br><br>
            <span>{{ 'goodsname' }}</span>
        </el-col>
        <el-col :span="12">
            <el-rate v-model="goodsScore" :colors="colors" /><br><br>
            <div class="bg-blue">
                <el-input
                v-model="goodsComment"
                style="width: 500px"
                :rows="4"
                type="textarea"
                placeholder="请输入您的评价"
            /><br>
            <el-row>
                <el-col :span="6" >
                    <el-radio-group v-model="radio" class="ml-4">
                        <el-radio value="0" size="small">公开</el-radio>
                        <el-radio value="1" size="small">匿名</el-radio>
                    </el-radio-group>
                </el-col>
            </el-row>
            </div>
        </el-col>
    </el-row>    
    <template #footer>
        <el-row>
            <el-col :span="8" style="text-align: center; margin-top: 5px;">
                <span>店铺评分</span>
            </el-col>
            <el-col :span="16">
                <el-rate v-model="shopScore" :colors="colors" />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8" style="text-align: center;">
            </el-col>
            <el-col :span="16">
                <el-button type="primary">发表评论</el-button>
            </el-col>
        </el-row>

    </template>
  </el-card>
</template>

<script setup>  
    import { ref } from 'vue';  

    const goodsComment = ref('')
    const goodsScore = ref(0)
    const shopScore = ref(0)

    const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900'])

    const radio = ref('0')

    const goodsImgurl = ref('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg');  
  
    import { ElMessage, ElMessageBox } from 'element-plus'




const fileList = ref([])

const handleRemove = (file, uploadFiles) => {
  console.log(file, uploadFiles)
}

const handlePreview = (uploadFile) => {
  console.log(uploadFile)
}

const handleExceed = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`
  )
}

const beforeRemove = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(
    `Cancel the transfer of ${uploadFile.name} ?`
  ).then(
    () => true,
    () => false
  )
}
 
</script>  

<style>
.comment-card
{
    margin: auto;
    width: 80%;
}
.bg-blue
{
    width: fit-content;
    height: fit-content;
    border: 1px solid #DAF1FC;
    padding: 3px;
    background: #EEF8FD;
    zoom: 1;
}
</style>