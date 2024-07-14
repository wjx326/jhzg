import { defineStore } from 'pinia'; 
import { getAllCategories } from '../api/category'
  
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
    async getAllCategories() {  
      try {  
        const response = await getAllCategories();  
        this.categories = response.data; // 更新state 
        console.log('this.categories',this.categories) 
      } catch (error) {  
        console.error('Failed to fetch:', error);  
      }  
    }  
   
      
  },  
  getters: {  
    
  },  
});