<template>
    <div style="width: 98%;background-color: white;margin:20px auto;">
        <div v-if="totalInfo.todayinfo.count>0">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
            <div style="height: 75px;padding-top:10px;margin-left: 20px;margin-right: 20px;" >
                <el-divider content-position="left">
                    <span style="font-weight: bold;margin-right:5px;">{{ todayData }}</span>
                    <span style="font-weight: bold;font-size: large;margin-right:5px;">今天</span>
                    <span style="font-size:small;">{{totalInfo.todayinfo.count}}件宝贝</span>
                </el-divider>
            </div>
            <div style="margin-left: 20px;padding-bottom: 20px;"> 
                <el-space wrap :size="15">
                    <el-card class="box-card" style="width: 250px"  v-for="goods in totalInfo.todayinfo.items" :key="goods.goodsData.id">
                    <div class="contain_img" style="height:150px"><img :src="goods.goodsData.image" style="width: 100%; height: 100%;"></div>
                    <div class="contain_img_detail" style=" height:70px">
                            <div style="font-size:x-small;margin-bottom: 5px;margin-top: 10px;">
                                <span style="color:red;font-weight: bold;">￥{{goods.goodsData.price}}</span>
                                <span style="color: #8a8a8a; text-decoration: line-through;">￥{{goods.goodsData.price+90}}</span>
                            </div>
                            <div style="font-weight: bold;margin-bottom: 5px;margin-top: 5px;">{{goods.goodsData.name}}</div>
                            <p class="text-truncate">{{goods.goodsData.description}}</p>
                    </div>
                    </el-card>
                </el-space>
            </div>
        </div>
        <div v-if="totalInfo.weekinfo.count>0">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
            <div style="height: 75px;padding-top:10px;margin-left: 20px;margin-right: 20px;" >
                <el-divider content-position="left">
                    <span style="font-weight: bold;font-size: large;margin-right:5px;">7天内</span>
                    <span style="font-size:small;">{{totalInfo.weekinfo.count}}件宝贝</span>
                </el-divider>
            </div>
            <div style="margin-left: 20px;padding-bottom: 20px;"> 
                <el-space wrap :size="15">
                    <el-card class="box-card" style="width: 250px"  v-for="goods in totalInfo.weekinfo.items" :key="goods.goodsData.id">
                    <div class="contain_img" style="height:150px"><img :src="goods.goodsData.image" style="width: 100%; height: 100%;"></div>
                    <div class="contain_img_detail" style=" height:70px">
                            <div style="font-size:x-small;margin-bottom: 5px;margin-top: 10px;">
                                <span style="color:red;font-weight: bold;">￥{{goods.goodsData.price}}</span>
                                <span style="color: #8a8a8a; text-decoration: line-through;">￥{{goods.goodsData.price+90}}</span>
                            </div>
                            <div style="font-weight: bold;margin-bottom: 5px;margin-top: 5px;">{{goods.goodsData.name}}</div>
                            <p class="text-truncate">{{goods.goodsData.description}}</p>
                    </div>
                    </el-card>
                </el-space>
            </div>
        </div>
        <div v-if="totalInfo.agoinfo.count>0">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
            <div style="height: 75px;padding-top:10px;margin-left: 20px;margin-right: 20px;" >
                <el-divider content-position="left">
                    <span style="font-weight: bold;font-size: large;margin-right:5px;">7天之前</span>
                    <span style="font-size:small;">{{totalInfo.agoinfo.count}}件宝贝</span>
                </el-divider>
            </div>
            <div style="margin-left: 20px;padding-bottom: 20px;"> 
                <el-space wrap :size="15">
                    <el-card class="box-card" style="width: 250px"  v-for="goods in totalInfo.agoinfo.items" :key="goods.goodsData.id">
                    <div class="contain_img" style="height:150px"><img :src="goods.goodsData.image" style="width: 100%; height: 100%;"></div>
                    <div class="contain_img_detail" style=" height:70px">
                            <div style="font-size:x-small;margin-bottom: 5px;margin-top: 10px;">
                                <span style="color:red;font-weight: bold;">￥{{goods.goodsData.price}}</span>
                                <span style="color: #8a8a8a; text-decoration: line-through;">￥{{goods.goodsData.price+90}}</span>
                            </div>
                            <div style="font-weight: bold;margin-bottom: 5px;margin-top: 5px;">{{goods.goodsData.name}}</div>
                            <p class="text-truncate">{{goods.goodsData.description}}</p>
                    </div>
                    </el-card>
                </el-space>
            </div>
        </div>

    </div>
</template>
<script setup>
import { onMounted,ref } from 'vue';
import { footprintPage } from '../../../api/footprint'
import { getGoodsById } from '../../../api/goods'
const total=ref(0);
const todayData=ref('')
const totalInfo = ref({
  todayinfo: {
    count: 0,
    items: []
  },
  weekinfo: {
    count: 0,
    items: []
  },
  agoinfo: {
    count: 0,
    items: []
  }
});
// 辅助函数：获取当前日期并格式化为 "yyyy-mm-dd"
const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始，需要+1
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`; // 返回格式化的日期字符串
};


// 辅助函数：判断是否是今天
const isToday = (date) => {
    const today = new Date(); // 获取当前日期的 Date 对象
    const targetDate = new Date(date); // 将传入的日期字符串转换为 Date 对象
    return targetDate.getDate() === today.getDate() &&
           targetDate.getMonth() === today.getMonth() &&
           targetDate.getFullYear() === today.getFullYear();
};

// 辅助函数：判断是否是一周内
const isWithinWeek = (date) => {
    const today = new Date(); // 获取当前日期的 Date 对象
    const targetDate = new Date(date); // 将传入的日期字符串转换为 Date 对象
    const diff = today - targetDate; // 计算时间差
    return diff >= 0 && diff < 7 * 24 * 60 * 60 * 1000; // 一周的毫秒数
};

const fetchFootprint = async () => {
    try {
        const response = await footprintPage();
        total.value = response.data.total;
        const footInfo = [];

        for (const g of response.data.records) {
            const goodsResponse = await getGoodsById(g.goods_id);
            console.log(g.goods_id);
            footInfo.push({
                created_time: g.created_time,
                goodsData: goodsResponse.data
            });
        }
        console.log("排序前", footInfo);

        // 根据 created_time 排序，日期越新的排在前面
        footInfo.sort((a, b) => {
            const dateA = new Date(a.created_time);
            const dateB = new Date(b.created_time);
            return dateB - dateA; // 降序排序
        });
        console.log("排序后", footInfo);

        // 分离 todayinfo, weekinfo, agoinfo
        const todayinfo = [];
        const weekinfo = [];
        const agoinfo = [];

        const today = getCurrentDate();
        todayData.value=today
        console.log(today)
        for (const item of footInfo) {
            const createdDate = new Date(item.created_time);
            if (isToday(createdDate)) {
                todayinfo.push(item);
            } else if (isWithinWeek(createdDate)) {
                weekinfo.push(item);
            } else {
                agoinfo.push(item);
            }
        }

        // 将分离后的信息及计数存储在 totalInfo 中
        totalInfo.value = {
            todayinfo: {
                count: todayinfo.length,
                items: todayinfo
            },
            weekinfo: {
                count: weekinfo.length,
                items: weekinfo
            },
            agoinfo: {
                count: agoinfo.length,
                items: agoinfo
            }
        };
        todayData.value = getCurrentDate();
        console.log("分离后的数据及计数", totalInfo.value);
    } catch (error) {
        console.error("An error occurred:", error);
    }
};

onMounted(()=>{
    fetchFootprint();
})
</script>
<style>
.text-truncate {
  display: inline-block;
  max-width: 100%; /* 你可以根据需要设置最大宽度 */
  white-space: nowrap; /* 不换行 */
  overflow: hidden; /* 隐藏溢出的内容 */
  text-overflow: ellipsis; /* 使用省略号(...)来表示文本的截断 */
}
</style>