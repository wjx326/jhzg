<template>
    <div style="width: 98%;background-color: white;margin:20px auto;">
        <div class="order_header" style="margin: 15px;">
            <el-menu
                default-active="1"
                class="el-menu-demo"
                mode="horizontal"
            >
                <el-menu-item index="1">给商品的评价</el-menu-item>
            </el-menu>
        </div>
        <div style="margin: 15px;">
            <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="goodName" label="商品名称" width="180" />
            <el-table-column prop="goodsScore" label="商品评分" width="180" />
            <el-table-column label="评价类型" width="180">
                <template #default="scope">
                {{ scope.row.isHidden === 0 ? '非匿名' : '匿名' }}
                </template>
            </el-table-column>
            <el-table-column prop="shopName" label="店铺名称" width="180" />
            <el-table-column prop="shopScore" label="店铺评分" width="180" />
            </el-table>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { commentPage } from '../../../api/comment';
import { getGoodsById } from '../../../api/goods';
import { getShopByShopId } from '../../../api/shop';

const tableData = ref([]);
const currentPage=ref(1);
const currentPageSize=ref(5)

const fetchCommentData = async () => {
  try {
    const response = await commentPage(currentPage.value,currentPageSize.value);

    // 确保response.data.records是一个数组
    if (!Array.isArray(response.data.records)) {
      throw new Error('Expected an array from response.data.records');
    }

    for (let i = 0; i < response.data.records.length; i++) {
      const c = response.data.records[i];
      const responseGood = await getGoodsById(c.goods_id);
      const responseShop = await getShopByShopId(c.shop_id);
      const goodName = responseGood.data.name;
      const shopName = responseShop.data.name;

      // 将处理后的数据添加到tableData中
      tableData.value.push({
        id: c.id,
        goodName: goodName,
        content: c.content,
        goodsScore: c.goods_score,
        shopScore: c.shop_score,
        isHidden: c.is_hidden,
        shopName: shopName
      });
    }
  } catch (error) {
    console.error('Error fetching comment data:', error);
  }
};

onMounted(() => {
  fetchCommentData();
});
</script>