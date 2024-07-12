import { defineStore } from 'pinia';  
  
export const useGoodsCateStore = defineStore('goodscate', {  
  state: () => ({
    categories:[
      {
        id: 1,
        name: "string",
        image:null,
        description:null
      }
    ],  
    
  }),  
  actions: {  
   
   
    // 你可以在这里添加更多的actions，比如登录、登出、更新用户信息等  
  },  
  getters: {  
    
  },  
});