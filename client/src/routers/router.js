import {createRouter,createWebHashHistory} from 'vue-router'
// 导入Vue组件
import Mall from "../pages/Mall.vue"
import Home from '../pages/MallHome.vue'
import Shop from '../pages/Shop.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import ChangePassword from '../pages/ChangePassword.vue'
import Personal from "../pages/personal/index.vue"
import Cart from "../pages/Personal/PersonalPage/Cart.vue"
import Front from "../pages/Personal/PersonalPage/Front.vue"
import Order from "../pages/Personal/PersonalPage/Order.vue"
import Footprint from "../pages/Personal/PersonalPage/Footprint.vue"
import CollectGoods from "../pages/Personal/PersonalPage/CollectGoods.vue"
import CollectShops from "../pages/Personal/PersonalPage/CollectShops.vue"
import Comment from "../pages/Personal/PersonalPage/Comment.vue"
import AddressList from "../pages/Personal/PersonalPage/AddressList.vue"
import ChangeSelfPassword from "../pages/Personal/PersonalPage/ChangePassword.vue"
import ChangeSelfEmile from "../pages/Personal/PersonalPage/ChangeEmile.vue"
import ChangeSelfInfo from "../pages/Personal/PersonalPage/ChangeSelfInfo.vue"
import MessageList from '../pages/MessageList.vue'
import Recharge from '../pages/Personal/PersonalPage/Recharge.vue'
import CreateStore from '../pages/Personal/PersonalPage/CreateStore.vue'
import FGoodsList from '../pages/GoodsList.vue'
import GoodsComment from  '../pages/GoodsComment.vue'
import Goodsdetail from '../pages/GoodsDetail/Detail.vue'
import BackShop from '../../back-src/components/shop.vue'



import MainPanel from "../../back-src/components/MainPanel.vue";
import EditProfile from "../../back-src/components/EditProfile.vue"
import GoodsList from "../../back-src/components/GoodsList.vue"
import GoodEdit from "../../back-src/components/goods/GoodEdit.vue"
import GoodPublish from "../../back-src/components/goods/GoodPublish.vue"
import OrderList from "../../back-src/components/OrderList.vue"
import OrderPay from "../../back-src/components/OrderPay.vue"
import OrderSend from "../../back-src/components/OrderSend.vue"
import OrderConfirm from "../../back-src/components/OrderConfirm.vue"

// 创建路由对象,声明路由规则
const router = createRouter({

    history : createWebHashHistory(),
    routes : [
        {
            path:'/back',
            redirect:'/goodsList',
            component:BackShop,
            children:[
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
                { path: "/test", component: OrderList }
            ]
        },
        {
            path:'/',
            redirect:'/login'

        },
        {  
            path: '/mall',  
            name: 'Mall',  
            component: Mall,  
            children: [  
              {  
                path: '/mall',  
                name: 'Home',  
                component: Home  
              },  
              {  
                path: '/shop',  
                name: 'Shop',  
                component: Shop  
              },
              {  
                path: '/message',  
                name: 'MessageList',  
                component: MessageList 
              },
              {
                path:'/goodsdetail',
                name:'GoodsDetail',
                component:Goodsdetail
            },
              {
                path : '/goodslist',
                name:'Goodslist',
                component:FGoodsList
                },
              {
                    path : '/goodscomment',
                    component:GoodsComment 
        
              },
              {
                path:'/personal',
                name:'Personal',
                component:Personal,
                children:[
                    {  
                        path: '',  
                        name: 'Front',  
                        component: Front  
                    },
                    {  
                        path: '/cart',  
                        name: 'Cart',  
                        component: Cart  
                    },
                    {  
                        path: '/order',  
                        name: 'Order',  
                        component: Order  
                    }
                    ,
                    {  
                        path: '/collectgoods',  
                        name: 'CollectGoods',  
                        component: CollectGoods  
                    }
                    ,
                    {  
                        path: '/collectshops',  
                        name: 'CollectShops',  
                        component: CollectShops  
                    }
                    ,
                    {  
                        path: '/footprint',  
                        name: 'Footprint',  
                        component: Footprint  
                    },
                    {  
                        path: '/comment',  
                        name: 'Comment',  
                        component: Comment  
                    },
                    {
                        path:'/addresslist',
                        name:'AddressList',
                        component:AddressList
                    },
                    
                    {
                        path:'/changepwd',
                        name:'ChangeSelfPassword',
                        component:ChangeSelfPassword
                    },
                    {
                        path:'/changeemile',
                        name:'ChangeSelfEmile',
                        component:ChangeSelfEmile
                    },
                    {
                        path:'/changeselfinfo',
                        name:'ChangeSelfInfo',
                        component:ChangeSelfInfo
                    },
                    {
                        path:'/recharge',
                        name:'Recharge',
                        component:Recharge
                    },
                    {
                        path:'/createstore',
                        name:'CreateStore',
                        component:CreateStore
                    },
                ]
              }
            ]  
        }, 
        {  
            path: '/login',  
            name: 'Login',  
            component: Login 
         },
        {
            path : '/register',
            component:Register
        },
        {
            path : '/changepassword',
            component:ChangePassword
        },
        
        
    ]
})
// 暴露路由对象
export default router