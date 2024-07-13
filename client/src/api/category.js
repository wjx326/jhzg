import axios from 'axios';

export  async function categoryRecommend() {  
    try {  
     
      const response = await axios.get('http://127.0.0.1:4523/m1/4784568-4438548-default/user/category/recommend');
      console.log('categoryRecommend',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error);  
      throw error; 
    }  
}

export  async function getAllCategories() {  
  try { 
    const response = await axios.get('http://127.0.0.1:4523/m1/4784568-4438548-default/user/category/list');
    console.log('getAllCategories',response.data)   
    return response.data
  } catch (error) {  
    console.error('Error:', error);  
    throw error; 
}  
}

export  async function getCateById(id) {  
    try {  
    // const response = await axios.get('/user/category/{id}');
      const response = await axios.get('http://127.0.0.1:4523/m1/4784568-4438548-default/user/category/1');
      console.log('getCateById',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error);  
      throw error; 
    }  
}
