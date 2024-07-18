// router.js
import { createRouter, createWebHistory } from "vue-router";

// 引入组件
import MainPanel from "../components/MainPanel.vue";
import EditProfile from "../components/EditProfile.vue"
import GoodsList from "../components/GoodsList.vue"
import GoodEdit from "../components/goods/GoodEdit.vue"
import GoodPublish from "../components/goods/GoodPublish.vue"
import OrderList from "../components/OrderList.vue"
import OrderPay from "../components/OrderPay.vue"
import OrderSend from "../components/OrderSend.vue"
import OrderConfirm from "../components/OrderConfirm.vue"
import BackShop from "../components/shop.vue"
// 定义路由
const routes = [
    {path:"/back",component:BackShop},
    { path: "/index", component: MainPanel },
    { path: "/shopedit", component: EditProfile },
    { path: "/goodsList", component: GoodsList },
    { path: "/orderList", component: OrderList},
    {
      path: "/orderList/pay",
      component: OrderPay
    },
    {
      path: "/orderList/send",
      component: OrderSend
    },
    {
      path: "/orderList/confirm",
      component: OrderConfirm
    },
    { path: "/uploadGoods", component: GoodPublish },
    { path: "/editGoods", component: GoodEdit },
    { path: "/test", component: OrderList },
];

// 创建router实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
