import axios from 'axios';

export  async function getMessagesByShopid(id) {  
    try {  
        const params =
        {
            shop_id:id
        }
      const response = await axios.get('http://127.0.0.1:4523/m1/4784568-4438548-default/user/message/queryByShop',
        { params: params });
      console.log('getMessagesByShopid',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error);  
      throw error; 
    }  
}

export  async function getLatestMessage() {  
  try { 
    const response = await axios.get('http://127.0.0.1:4523/m1/4784568-4438548-default/user/message/new');
    console.log('getLatestMessage',response.data)   
    return response.data
  } catch (error) {  
    console.error('Error:', error);
    throw error; 
  
  }  
}

