<script setup>
    import { ref } from 'vue'
    import { Search,Message,ShoppingCart } from '@element-plus/icons-vue'
    import { useRouter } from 'vue-router';
    import {logout} from '../api/user'
    import {allGoodsPage} from '../api/goods'

    import { useUserStore } from '../stores/userStore';

    const userStore = useUserStore(); 

    const searchText = ref(null)
    const titleImgUrl = ref('src/assets/img/title.png'); 
    const router = useRouter();

    const handleSearch=()=>{
        console.log('searchText',searchText.value)
        router.push({ name: 'Goodslist', query: { searchText: searchText.value } });
        searchText.value=' '
    }

    

    function handleAvatarClick() { 
        //这里条件判断，若当前无用户登录，则跳转登录，若有用户跳转个人界面
        if(true){ 
            router.push('/personal');
        }
        else{
            router.push('/login');
        }
    }
    function handletitle(){
        router.push('/mall')
    }

    function handlelogout(){
        logout()
    }
</script>

<template>
    <div class="">
        <el-row>
            <el-col :span="5" :offset="1"><div class="" />
                <el-image
                style="width: 200px; height:90px"
                :src="titleImgUrl"
                :zoom-rate="1.2"
                :max-scale="7"
                :min-scale="0.2"
                :initial-index="4"
                :fit="'contain'"
                @click="handletitle()"
                />
            </el-col>

            <el-col :span="10"><div class="grid-content" />
                <el-input
                v-model="searchText"
                style="max-width: 600px"
                placeholder="请输入搜索内容..."
                class="input-with-select"
                size="large"
                >
            <template #append>
                <el-button :icon="Search" type="primary" @click="handleSearch"/>
            </template>
            </el-input>
            </el-col>

            <el-col :span="2" :offset="1"><div class="avatar" />
                <el-avatar  @click="handleAvatarClick"
                :size="55" :fit="'contain'" :src="userStore.image"
                />
            </el-col>

            <el-col :span="2"><div class="icon-2"/>
                <el-link href="#/message" :underline="false">  
                    <el-icon class="icon" :size="32" ><Message /></el-icon>消息中心  
                </el-link>
            </el-col>

            <el-col :span="1"><div class="icon-2" />
                <el-link href="#/cart" :underline="false">  
                    <el-icon class="icon" :size="32" ><ShoppingCart /></el-icon>  
                </el-link>
            </el-col>

            <el-col :span="2"><div class="icon-2" />
                <el-link href="#/login" :underline="false" @click="handlelogout">  
                    注销
                </el-link>
            </el-col>
        </el-row>
        <el-divider />
        </div>
  
</template>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 25px;
}
.avatar
{
    min-height: 15px;
}
.icon-2
{
    min-height: 30px;

}
.gradient-background {  
 
    background: linear-gradient(to right, rgb(164, 164, 228), rgb(159, 72, 225));  
   
}

</style>