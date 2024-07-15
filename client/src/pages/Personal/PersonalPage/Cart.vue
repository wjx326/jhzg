<template>
    <div  class="cart_contain">
        <div class="cart_product" >
            <div >
                <div style="font-weight:bold;">全部商品({{totalGoods}})</div>
                <div style="display: flex; gap: 20px;height: 50px;align-items: center;">
                    <el-checkbox v-model="allChecked"  label="全部" size="large"  @change="handleAllChange()"/>
                    <el-button @click="deleteCart">删除</el-button>
                    <el-button @click="addCollectGoods">移入收藏夹</el-button>
                </div>
            </div>

            <div v-for="shop in info" :key="shop.shop_id">
                <div class="cart_item">
                    <div class="cart_item_store" >
                        <el-checkbox   size="large"  v-model="shop.shopChecked"   @change="handleShopChange(shop)"/>
                        <span style="display: inline-block;width: 20px;height: 20px;">
                            <img style="width: 100%;height: 100%;" src="../../../assets/img/storelogo.png">
                        </span>
                        <span style="color: #333333;">店铺：{{ shop.shopName }}</span>
                    </div>
                    <div v-for="goods in shop.goods" :key="goods.goods_id">
                        <div class="cart_item_product" >
                            <el-checkbox   v-model="goods.checked" @change="handleGoodsChange(shop)" size="large" />
                            <div class="cart_item_product_card"><img :src="goods.image"  style="width: 100%; height: 100%;"></div>
                            <div class="cart_item_product_card">
                                <p style="color: #333333;">{{goods.name}}</p>
                            </div>
                            <div class="cart_item_product_card">
                                <p style="color: #333333;overflow: hidden;text-overflow: ellipsis;width: 100%;height: 100%;">{{goods.description}}</p>
                            </div>
                            <div class="cart_item_product_card">
                                <p style="color: red;">￥{{goods.amount}}</p>
                            </div>
                            <div class="cart_item_product_number">
                                <el-input-number v-model=goods.number :min="1" :max="10" @change="handleChange(goods.goods_id,goods.number)" />
                            </div>
                        </div>
                    </div>
                </div>
                    
            </div>

        </div>
        <div style="display: block;">
            <div style="background-color: white;border:1px solid #f1f1f1;border-radius: 10px;width: 300px;padding: 20px;">
                <div style="height: 40px;">
                <span style="font-weight: bold;font-size: large;margin-right: 10px;">结算明细</span>
                <span>已选({{countNum}})件商品</span> 
                </div>
                <div style="border-top:2px solid #f1f1f1 ;border-bottom: 2px solid #f1f1f1;text-align: center;padding-top: 20px;padding-bottom:20px ;">
                    <el-row v-if="countNum !== 0">
                        <el-col :span="6" v-for="item in countGoods.countinfo" :key="item.good_id">
                            <img :src="item.img" style="width: 70px; height: 60px; border-radius: 5px; background-color: black;">
                        </el-col>
                    </el-row>
                    <p v-else style="color: #8a8a8a">还没有待结算的商品</p>
                </div>
                <div style="display: flex;height: 50px;line-height: 50px;justify-content: space-between;">
                    <div>
                        <span style="font-size: large;font-weight: bold;">合计:</span>
                        <span style="font-size: large;font-weight: bold;color: #ff5000;">{{countGoods.amount}}</span>
                    </div>
                    <div>
                        <el-button type="warning" color="#ff5000" size="large" @click="cartSettle"><span style="font-weight: bold;font-size: medium;">结 算</span></el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref,onMounted } from 'vue';
import { getShoppingCartList,shoppingCartUpdate, shoppingCartDelete,shoppingCartSettled} from '../../../api/cart';
import { getShopByShopId } from '../../../api/shop';
import { getGoodsById } from '../../../api/goods';
import {setCollect} from '../../../api/collect';

const allChecked=ref(false)
const categories = ref({});
const info = ref([]);
const totalGoods=ref(0);
const countNum=ref(0);
const countGoods=ref([])

const handleAllChange=()=>{
    info.value.forEach((s)=>{
        s.shopChecked=allChecked.value;
        s.goods.forEach((g)=>{
            g.checked=allChecked.value;
        })
    })
    handleCount()
}
const handleShopChange=(shop)=> {
      // 当店铺的多选框状态改变时，更新该店铺下所有商品的选中状态
      shop.goods.forEach((goods) => {
        goods.checked = shop.shopChecked;
      });
      const sChecked = info.value.every((g)=>g.shopChecked);
      allChecked.value = sChecked ? true :  false;
      handleCount()
    }
const handleGoodsChange=(shop) =>{
      // 当商品的多选框状态改变时，更新该商品所在店铺的选中状态
      console.log(shop)
      const gChecked = shop.goods.every((g) => g.checked);
      shop.shopChecked = gChecked ? true :false ;
      const sChecked = info.value.every((g)=>g.shopChecked);
      allChecked.value = sChecked ? true :  false;
      handleCount()
    }
const handleChange=( id,number )=> {
      // 处理商品数量变化的逻辑
      handleCount()
      shoppingCartUpdate(id,number);
    }

const handleCount=()=>{
    countNum.value=0;
    let amount=0;
    let countinfo=[]
    info.value.forEach((s)=>{
        s.goods.forEach((g)=>{
            if(g.checked===true){
                countNum.value++;
                amount+=g.amount*g.number;
                countinfo.push({good_id:g.goods_id,img:g.image})
                console.log(countinfo)
            }
        })
    })
    countGoods.value = { amount: amount, countinfo: countinfo };
    console.log("结算信息=",countGoods.value.amount);
}

const getCartList = async () => {
  try {
    const response = await getShoppingCartList();
    const cartValue = response.data;
    totalGoods.value=cartValue.length;
    categories.value = cartValue;
    let transformedData = [];
    for (const item of cartValue) {
        const { shop_id, name, image, amount,goods_id,number } = item;
        const shopNameResponse=await getShopByShopId(shop_id);
        const shopName=shopNameResponse.data.name
        let shopEntry = transformedData.find(entry => entry.shop_id === shop_id);
        const shopChecked=false
        // 如果不存在，创建一个新的条目
        if (!shopEntry) {
            shopEntry = { shop_id,shopChecked,shopName, goods:[] };
            transformedData.push(shopEntry);
        }
        // 将商品信息添加到对应的shop_id下的goods数组中
        const goodsResponse=await getGoodsById(goods_id);
        const description=goodsResponse.data.description;
        const checked=false
        const truncatedDescription = description.length > 20 ? description.substring(0, 20) + '...' : description;
        shopEntry.goods.push({ name, checked,image, amount,goods_id , description: truncatedDescription,number});

    }
    info.value=transformedData;
    console.log(info.value);
  } catch (error) {
    console.error('Failed to fetch categories:', error); 
  }
};
onMounted(()=>{
    getCartList();
})


const deleteCart = ()=>{
   if(countNum.value!=0)
    {countGoods.value.countinfo.forEach((g)=>{
        shoppingCartDelete(g.good_id);
    })
    allChecked.value=false;
    getCartList();}
}
const addCollectGoods=()=>{
    if(countNum.value!=0)
    {countGoods.value.countinfo.forEach((g)=>{
        setCollect(g.good_id);
    })}
}
const cartSettle=()=>{
    if(countNum.value!=0)
    {countGoods.value.countinfo.forEach((g)=>{
        shoppingCartSettled(g.good_id);
        shoppingCartDelete(g.good_id);
    })
    allChecked.value=false;
    getCartList();}
}

// 调用 getCartList 函数来获取购物车列表
</script>
<style>
.cart_contain{
    display: flex;
    margin: 40px;
}
.cart_product{
    background-color: white;
    border:1px solid #f1f1f1;
    border-radius: 5px;
    width: 700px;
    padding: 20px;
    margin-right: 10px;
}
.cart_item{
    border: 1px solid #f1f1f1;
    border-radius: 5px;
    margin-top: 20px;
}
.cart_item_store{
    background-color:#f3f6f8;
    padding-left:10px;
    display: flex;
    gap: 20px;
    align-items: center;
}
.cart_item_product{
    padding-left:10px;
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    gap: 20px;
}
.cart_item_product_card{
    width:100px;height:100px;
}
.cart_item_product_number{
    width:100px;height:100px;line-height: 100px;
}
</style>