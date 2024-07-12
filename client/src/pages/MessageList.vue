<template>
    <div>
        <el-row :gutter="200">
            <el-col :span="10">
                <div class="grid-content ep-bg-purple" />
                <h3 style="text-align: center;">消息列表</h3>
                <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto;">
                    <li v-for="(message, index) in displayedMessages" 
                    :key="message.id" 
                    class="infinite-list-item"
                    @click="selectMessage(message)">
                        <el-row :gutter="50">
                            <el-col :span="4">
                                <el-avatar 
                                :size="45" 
                                :src="message.avatarUrl" 
                                />
                            </el-col>
                            <el-col :span="20">
                                <span class="bold-text">{{ message.storename }}</span>
                                <br>
                                <span class="small-text">{{ message.detail[message.detail.length - 1].description }}</span>
                            </el-col>
                        </el-row>
                    </li>
                </ul> 
            </el-col>
            <el-col :span="10">
                <div class="grid-content ep-bg-purple" />
                <ul class="message-detail-list" style="list-style-type: none; padding: 0;">
                    <!-- 遍历当前选中消息的所有详情 -->
                    <el-space direction="vertical" :size="25">
                    <el-card 
                    v-if="currentMessage" 
                    v-for="(detail, index) in currentMessage.detail" 
                    :key="index" 
                    class="box-card" 
                    style="width: 350px">
                        <el-row :gutter="20">
                        <el-col :span="4">
                            <el-avatar :size="45" :src="currentMessage.avatarUrl" /> 
                        </el-col>
                        <el-col :span="20">
                            <div class="detail-content">
                            <span class="bold-text">{{ currentMessage.storename }}</span>
                            <p class="small-text">{{ detail.description }}</p> 
                            <p class="small-text">{{ detail.time }}</p> 
                            </div>
                        </el-col>
                        </el-row>
                    </el-card>
                </el-space>
                </ul>
            </el-col>
        </el-row>
       

        
    </div>
</template>

<script  setup>
    import { computed, ref } from 'vue';  
    import { useMessageStore } from '../stores/messageStore'; 

    const messageStore = useMessageStore(); 
    const count = ref(10)
    const currentMessage = ref(null); 

    const displayedMessages = computed(() => {  
      return messageStore.messages.slice(0, count.value);  
    });

    // onMounted(() => {
    //     currentMessage.value = displayedMessages.value[0];
    // });

    let selectMessage = (message) => {
    currentMessage.value = message; // 更新响应式状态
    };

    const load = () => {
        // if (count.value < messageStore.messages.length) {  
        count.value += 10;  
        messageStore.loadMoreMessages()
        console.log("messageStore.messages",messageStore.messages)
    //   }
       
    }
</script>

<style>
.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list li:first-child {
  background-color: #d9ecff;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;
  margin: 10px;
  line-height: 25px;
  color: rgb(0, 0, 0);

}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
.infinite-list-item:hover
{
    background-color: #ecf5ff;
}

/* 滚动条整体宽度 */  
.infinite-list::-webkit-scrollbar {  
    width: 5px;  
}  
  
/* 滚动条滑块 */  
.infinite-list::-webkit-scrollbar-thumb {  
    background: #888; /* 滑块颜色 */  
    border-radius: 10px; /* 滑块边角圆滑度 */  
}  
  
/* 滚动条轨道 */  
.infinite-list::-webkit-scrollbar-track {  
    background: #f1f1f1; /* 轨道颜色 */  
    border-radius: 10px; /* 轨道边角圆滑度 */  
}  
  
/* 当鼠标悬停在滚动条滑块上时 */  
.infinite-list::-webkit-scrollbar-thumb:hover {  
    background: #555; /* 滑块颜色 */  
}
.message-list
{
    width: 30%;
}

.bold-text {  
    font-weight: bold; /* 加粗文本 */  
}  
.small-text
{
    font-size: small;
    font-weight:400;
    color: #888;
}
.message-detail-item
{
    margin-bottom: 30px;

}
.detail-content{
    padding: 5px;
    line-height: 15px;
    background-color: rgb(217, 250, 231);
    border-radius: 5px;
}

</style>