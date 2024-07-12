import { defineStore } from 'pinia';  
  
export const useShopsStore = defineStore('shops', {  
  state: () => ({
    shops:[{
      id: null, 
      img: null,
      name: '小米京东自营店', 
      rate:'97',
      checked:null
    }]  
    

  }),  
  actions: {  
    // 示例：设置用户信息  
    
    // 你可以在这里添加更多的actions，比如登录、登出、更新用户信息等  
  },  
  getters: {  
    
  },  
});