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
import GoodList from '../pages/GoodsList.vue'
import Goodsdetail from '../pages/GoodsDetail/Detail.vue'
// 创建路由对象,声明路由规则
const router = createRouter({

    history : createWebHashHistory(),
    routes : [
        {  
            path: '/',  
            name: 'Mall',  
            component: Mall,  
            children: [  
              {  
                path: '',  
                name: 'Home',  
                component: Home  
              },  
              {  
                path: 'shop',  
                name: 'Shop',  
                component: Shop  
              },
              {  
                path: 'message',  
                name: 'MessageList',  
                component: MessageList 
              },
              {
                path : 'goodlist',
                name:'Goodlist',
                component:GoodList
                },
                {
                    path : '/goodsdetail',
                    name:'GoodsDetail',
                    component:Goodsdetail
                },
              {
                path:'personal',
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