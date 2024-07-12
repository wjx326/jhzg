import { defineStore } from 'pinia';  
  
export const useGoodsCommentStore = defineStore('goodscomment', {  
  state: () => ({
    comments:[
      {
        id: null, 
        count: 100,
        rate: '97%', 
      }
    ],  
    
  }),  
  actions: {  
   
   
    // 你可以在这里添加更多的actions，比如登录、登出、更新用户信息等  
  },  
  getters: {  
    
  },  
});