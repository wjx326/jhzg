<template>
    <div style="width: 60%; margin: auto; background-color: white; border-radius: 5px; height: fit-content;">
        <h3 style="text-align: center;padding: 5px;">消息列表</h3>
        <el-row :gutter="80">
            <el-col :span="12">
                <el-scrollbar height="350px">
                <ul  class="message-list">
                    <li v-for="(message, index) in displayedMessages" 
                    :key="message.id" 
                    class="message-list-item"
                    @click="selectMessage(message.shop_id)">
                        <el-row :gutter="50">
                            <el-col :span="4">
                                <el-avatar 
                                :size="45" 
                                :src="message.shop_image" 
                                />
                            </el-col>
                            <el-col :span="19">
                                <span class="bold-text">{{ message.shop_name }}</span>
                                <br>
                                <span class="small-text">{{ message.new_message }}</span>
                            </el-col>
                        </el-row>
                    </li>
                </ul> 
            </el-scrollbar>
            </el-col>
            <el-col :span="12">
                <div>
                    <el-scrollbar height="400px">
                        <ul class="message-detail-list" style="list-style-type: none; ">
                    <el-space direction="vertical" :size="25">
                        <el-empty v-if="!currentMessage || currentMessage.length === 0" description="暂无消息">  
                        </el-empty>  
                        <el-card  
                            v-else  
                            v-for="(message, index) in currentMessage"  
                            :key="index"  
                            class="message-detail-item"  
                            style="width: 320px"  
                        >  
                            <el-row :gutter="20">  
                            <el-col :span="4">  
                                <el-avatar :size="45" :src="message.avatarUrl" />  
                            </el-col>  
                            <el-col :span="20">  
                                <div class="detail-content">  
                                <span class="bold-text">{{ message.storename }}</span>  
                                <p class="small-text">{{ message.content }}</p>  
                                <p class="small-text">{{ message.created_time }}</p>  
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
    import { ref ,onMounted} from 'vue';  
    import {getLatestMessage,getMessagesByShopid} from '../api/message'
    import {getShopByShopId} from '../api/shop'

    
    const currentMessage = ref(null); 

    const displayedMessages = ref('')

    let latestMessage= async()=>{
        const res=await getLatestMessage()
        displayedMessages.value=res.data
        console.log('displayedMessages.value',displayedMessages.value)
    }

    let selectMessage = async (id) => {
        const res=await getMessagesByShopid(id)
        const shops=await getShopByShopId(id)
        const updatedMessages = res.data.map(message => ({
            ...message,
            avatarUrl: shops.data.image // 假设头像的 URL 是 shopData.data.image
        }));

        // 更新 currentMessage
        currentMessage.value = updatedMessages;
        console.log('currentMessage.value', currentMessage.value);
    };

    

    onMounted(() => { 
        latestMessage();
        selectMessage()
        
    });

    

   
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