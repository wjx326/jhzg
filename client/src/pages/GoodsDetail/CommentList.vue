<template>
    <div class="commentList">
        <h2>用户评价</h2>
        <el-link  
        :class="{ 'is-active': active === 'all' }"   
        @click="setActive('all')" :underline="false"
        style="font-size: 16px;
        color: #666;
        margin-right: 32px;"
        >全部</el-link>  
        <el-link  
        :class="{ 'is-active': active === 'image' }"   
        @click="setActive('image')" :underline="false" style="font-size: 16px;
        color: #666;
        margin-right: 32px;">
        有图/视频</el-link> 
      <br><br>
    
        <div v-for="i in 4">
            <el-row>
                <el-col :span="1" >
                     <el-avatar :size="40" :src="userImgUrl" />
                </el-col>
                <el-col :span="20">
                    <span 
                    style=" font-family: PingFangSC-Medium;
                    font-weight: 500;
                    font-size: 14px;
                    color: #11192d;
                    line-height: 20px;">
                    {{ 'userNickname' }}
                    </span><br>
                    <span
                    style="font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: #50607a;
                    line-height: 20px;">
                        {{ 'createdTime' }}
                    </span><br><br>
                    <span
                    style="font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: #11192d;
                    line-height: 20px;">
                    {{ 'content' }}</span><br>
                </el-col>
            </el-row>
            <el-divider />
        </div>
    </div>
  
</template>
<script  setup>
import { ref } from 'vue'

let userImgUrl=ref('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg')
const active = ref('all');  
  
    // 定义一个函数来设置选中状态  
const setActive=(type)=> {  
    active.value = type; 
    console.log('active.value',active.value) 
}  


</script>

<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
}
.is-active {  
  font-weight: bold; /* 字体加粗 */ 
} 
.commentList
{
    width: 80%;
    height: fit-content;
    border-radius: 16px;
    padding: 5px 0px 1px 15px;
    background-color: white;
    margin-bottom: 35px;
    margin-left: 10%;
}
</style>