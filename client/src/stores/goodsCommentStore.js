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
   
   
  },  
  getters: {  
    
  },  
});