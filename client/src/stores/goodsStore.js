import { defineStore } from 'pinia';  
  
export const useGoodsStore = defineStore('goods', {  
  state: () => ({
    goods:[{
      id: null, 
      image: null,
      name: '123', 
      price:'111',
      checked:null,
      count:1000,
      score:'5'
    }],
  }),  
  actions: {  
    // 示例：设置用户信息  
    
    
    // 你可以在这里添加更多的actions，比如登录、登出、更新用户信息等  
  },  
  getters: {  
    
  },  
});