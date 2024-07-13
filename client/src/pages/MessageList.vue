<template>
    <div style="width: fit-content; margin: auto; background-color: white; border-radius: 5px; height: fit-content;">
        <h3 style="text-align: center;padding: 5px;">消息列表</h3>
        <el-row :gutter="80">
            <el-col :span="12">
                
                <el-scrollbar height="350px">
                <ul v-infinite-scroll="load" class="message-list">
                    <li v-for="(message, index) in displayedMessages" 
                    :key="message.id" 
                    class="message-list-item"
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
            </el-scrollbar>
            </el-col>
            <el-col :span="12">
                <div class="">
                    <el-scrollbar height="400px">
                        <ul class="message-detail-list" style="list-style-type: none; ">
                    <!-- 遍历当前选中消息的所有详情 -->
                    <el-space direction="vertical" :size="25">
                    <el-card 
                    v-if="currentMessage" 
                    v-for="(detail, index) in currentMessage.detail" 
                    :key="index" 
                    class="message-detail-item" 
                    style="width: 320px">
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
            </el-scrollbar>
                </div>
               
            </el-col>
        </el-row>
       

        
    </div>
</template>

<script setup>
    import { computed, ref ,onMounted} from 'vue';  
    import { useMessageStore } from '../stores/messageStore'; 

    const messageStore = useMessageStore(); 
    const count = ref(0)
    const currentMessage = ref(null); 

    const displayedMessages = computed(() => {  
      return messageStore.messages.slice(0, count.value);  
    });

    onMounted(() => { 
        load(); 
        currentMessage.value = displayedMessages.value[0]; 
        
    });

    let selectMessage = (message) => {
    currentMessage.value = message; // 更新响应式状态
    };

    const load = () => {
        if (count.value < 20) {  
        count.value += 10;  
        messageStore.loadMoreMessages()
        console.log("messageStore.messages",messageStore.messages)
      }
       
    }
</script>

<style>
.message-list
{
    list-style-type: none;
}

.message-list-item
{
    margin-bottom: 20px;
    padding: 10px;
}
.message-list-item:hover
{
background-color: aliceblue;
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
.message-detail-list
{
    margin-left: -50px;
    margin-top: 20px;
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