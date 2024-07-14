import axios from 'axios';

const token = localStorage.getItem("userToken");

const headers = {
  'Authorization': `Bearer ${token}`
};

export  async function categoryRecommend() {  
    try {  
     
      const response = await axios.get('http://127.0.0.1:4523/m1/4784568-4438548-default/user/category/recommend',{ headers });
      console.log('categoryRecommend',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error);  
      throw error; 
    }  
}

export  async function getAllCategories() {  
  try { 
    const response = await axios.get('http://127.0.0.1:4523/m1/4784568-4438548-default/user/category/list',{ headers });
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
      const response = await axios.get('http://127.0.0.1:4523/m1/4784568-4438548-default/user/category/1',{ headers });
      console.log('getCateById',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error);  
      throw error; 
    }  
}
