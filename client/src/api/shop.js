import axios from 'axios';

const token = localStorage.getItem("userToken");

const headers = {
  'Authorization': `Bearer ${token}`
};


export  async function getShopByGoodsId(goods_id) {  
  try { 
    const params =
    {
        goods_id:goods_id
    }
    const response = await axios.get('/api/user/shop/queryByGoodsId',
        { params: params,
          headers:headers
         }
    );
    console.log('getShopByGoodsId',response.data)   
    return response.data
  } catch (error) {  
    console.error('Error:', error); 
    throw error; 
  }  
}


export  async function getShopByShopId(shop_id) {  
    try { 
      const response = await axios.get(`api/user/shop/${shop_id}`,{headers});
      console.log('getShopByShopId',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error); 
      throw error; 
    }  
}

export  async function getShopByUserId(user_id) {  
    try { 
      const params =
      {
        user_id:user_id
      }
      const response = await axios.get('/api/user/shop/queryByUser',
          { params: params,
            headers:headers
           }
      );
      console.log('getShopByUserId',response.data)   
      const token = response.data.data; 
      localStorage.setItem('UserAndShopToken', token);  
      return response.data
    } catch (error) {  
      console.error('Error:', error); 
      throw error; 
    }  
  }



export  async function createShop(description,image,name,phone) {  
    try { 
        const body =
        {
            description:description,
            image:image,
            name:name,
            phone:phone,
        }
      const response = await axios.post('/api/user/shop/create',body,{headers});
      console.log('createShop',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error); 
      throw error; 
    }  
}







