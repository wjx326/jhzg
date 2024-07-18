import axios from 'axios';

const token = localStorage.getItem("userToken");

const headers = {
   token: `${token}`
};

export  async function getMessagesByShopid(id) {  
    try {  
        const params =
        {
            shop_id:id
        }
      const response = await axios.get('/api/user/message/queryByShop',
        { params: params,
          headers:headers
         });
      console.log('getMessagesByShopid',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error);  
      throw error; 
    }  
}

export  async function getLatestMessage() {  
  try { 
    const response = await axios.get('/api/user/message/new',{headers});
    console.log('getLatestMessage',response.data)   
    return response.data
  } catch (error) {  
    console.error('Error:', error);
    throw error; 
  
  }  
}

