import { defineStore } from 'pinia'; 
  
export const useGoodsCateStore = defineStore('goodscate', {  
  state: () => ({
    categories:[
      {
        id: null,
        name: null,
        image:null,
        description:null,
        status:null,
        update_time:null
      }
    ],  
    
  }),  
  actions: {  
    
   
      
  },  
  getters: {  
    
  },  
});