<template>
    <div  class="cart_contain">
        <div class="cart_product" >
            <div >
                <div style="font-weight:bold;">全部商品(numer)</div>
                <div style="display: flex; gap: 20px;height: 50px;align-items: center;">
                    <el-checkbox  label="全部" size="large" />
                    <el-button>删除</el-button>
                    <el-button>移入收藏夹</el-button>
                </div>
            </div>
            <div class="cart_item">
                <div class="cart_item_store" >
                    <el-checkbox   size="large" />
                    <span style="display: inline-block;width: 20px;height: 20px;">
                        <img style="width: 100%;height: 100%;" src="../../../assets/img/storelogo.png">
                    </span>
                    <span style="color: #333333;">店铺：店铺名称</span>
                </div>
                <div class="cart_item_product" >
                    <el-checkbox   size="large" />
                    <div class="cart_item_product_card"><img src="../../../assets/img/banner2.jpg" style="width: 100%; height: 100%;"></div>
                    <div class="cart_item_product_card">
                        <p>商品标题标题标题</p>
                    </div>
                    <div class="cart_item_product_card">
                        <p>商品描述描述描述</p>
                    </div>
                    <div class="cart_item_product_card">
                        <p style="color: red;">￥12.52</p>
                    </div>
                    <div class="cart_item_product_number">
                        <el-input-number v-model="num" :min="1" :max="10" @change="handleChange" />
                    </div>
                </div>

                <div class="cart_item_product" >
                    <el-checkbox   size="large" />
                    <div class="cart_item_product_card"><img src="../../../assets/img/banner2.jpg" style="width: 100%; height: 100%;"></div>
                    <div class="cart_item_product_card">
                        <p>商品标题标题标题</p>
                    </div>
                    <div class="cart_item_product_card">
                        <p>商品描述描述描述</p>
                    </div>
                    <div class="cart_item_product_card">
                        <p style="color: red;">￥12.52</p>
                    </div>
                    <div class="cart_item_product_number">
                        <el-input-number v-model="num" :min="1" :max="10" @change="handleChange" />
                    </div>
                </div>

            </div>

            <div class="cart_item">
                <div class="cart_item_store" >
                    <el-checkbox   size="large" />
                    <span style="display: inline-block;width: 20px;height: 20px;">
                        <img style="width: 100%;height: 100%;" src="../../../assets/img/storelogo.png">
                    </span>
                    <span style="color: #333333;">店铺：店铺名称</span>
                </div>
                <div class="cart_item_product" >
                    <el-checkbox   size="large" />
                    <div class="cart_item_product_card"><img src="../../../assets/img/banner2.jpg" style="width: 100%; height: 100%;"></div>
                    <div class="cart_item_product_card">
                        <p>商品标题标题标题</p>
                    </div>
                    <div class="cart_item_product_card">
                        <p>商品描述描述描述</p>
                    </div>
                    <div class="cart_item_product_card">
                        <p style="color: red;">￥12.52</p>
                    </div>
                    <div class="cart_item_product_number">
                        <el-input-number v-model="num" :min="1" :max="10" @change="handleChange" />
                    </div>
                </div>
            </div>

        </div>
        <div style="background-color: white;border:1px solid #f1f1f1;border-radius: 10px;width: 300px;height: 220px;padding: 20px;">
            <div style="height: 40px;">
               <span style="font-weight: bold;font-size: large;margin-right: 10px;">结算明细</span>
               <span>已选(number)件商品</span> 
            </div>
            <div style="border-top:2px solid #f1f1f1 ;border-bottom: 2px solid #f1f1f1;text-align: center;min-height: 100px;line-height: 100px;">
                <p style="color: #8a8a8a">还没有待结算的商品</p>
            </div>
            <div style="display: flex;height: 50px;line-height: 50px;justify-content: space-between;">
                <div>
                    <span style="font-size: large;font-weight: bold;">合计:</span>
                    <span style="font-size: large;font-weight: bold;color: #ff5000;">0.00</span>
                </div>
                <div>
                    <el-button type="warning" color="#ff5000" size="large" ><span style="font-weight: bold;font-size: medium;">结 算</span></el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

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