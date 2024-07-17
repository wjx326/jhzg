<template>
    <div class="commentList">
        <h2>用户评价</h2>
        <!-- <el-link  
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
        有图/视频</el-link>  -->
      <br><br>
    
        <div v-for="comment in Comments">
            <el-row>
                <el-col :span="1" >
                     <el-avatar :size="40" :src="comment.image" />
                </el-col>
                <el-col :span="20">
                    <span 
                    style=" font-family: PingFangSC-Medium;
                    font-weight: 500;
                    font-size: 14px;
                    color: #11192d;
                    line-height: 20px;">
                    {{ comment.nickname }}
                    </span><br>
                    <span
                    style="font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: #50607a;
                    line-height: 20px;">
                        {{ comment.created_time }}
                    </span><br><br>
                    <span
                    style="font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: #11192d;
                    line-height: 20px;">
                    {{ comment.content }}</span><br>
                </el-col>
            </el-row>
            <el-divider />
        </div>
        <el-pagination
        v-model:current-page="currentPage"
        :page-size="5"
        layout="total, prev, pager, next"
        :total="total"
        @current-change="handleCurrentChange"
        />
    </div>
  
</template>
<script  setup>
import { ref ,onMounted} from 'vue'
import { useRoute } from 'vue-router';  
import {goodsCommentPage} from '../../api/comment'
import {getUserById} from '../../api/user'


const route = useRoute();  
const productId = route.query.id;

const total=ref(0)
const currentPage=ref(1)

const Comments=ref([])

const handleCurrentChange = (val) => {
    getCommentList(productId,val,5)
}

const getCommentList=async (productId,page,pageSize)=>{
    const response = await goodsCommentPage(productId, page, pageSize);  
    total.value = response.data.total;  
    const comments = response.data.records.map(async (comment) => {  
        const userInfo = await getUserById(comment.user_id);  
            return {  
                ...comment,  
                nickname: userInfo.data.nickname,  
                image: userInfo.data.image  
            };  
        });  
  
    const processedComments = await Promise.all(comments);  
    Comments.value = processedComments; 
    console.log('Comments.value',Comments.value)

}



onMounted(()=>{
    getCommentList(productId,currentPage.value,5)
})


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