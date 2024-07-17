import axios from 'axios';

const token = localStorage.getItem("userToken");

const headers = {
  'Authorization': `Bearer ${token}`
};

export  async function categoryRecommend() {  
    try {  
     
      const response = await axios.get('/api/user/category/recommend',{ headers });
      console.log('categoryRecommend',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error);  
      throw error; 
    }  
}

export  async function getAllCategories() {  
  try { 
    const response = await axios.get('/api/user/category/list',{ headers });
    console.log('getAllCategories',response.data)   
    return response.data
  } catch (error) {  
    console.error('Error:', error);  
    throw error; 
}  
}

export  async function getCateById(id) {  
    try {  
      const response = await axios.get(`/api/user/category/${id}`,{ headers });
      console.log('getCateById',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error);  
      throw error; 
    }  
}
