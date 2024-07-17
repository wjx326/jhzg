import axios from 'axios';


const token = localStorage.getItem("userToken");

const headers = {
  'Authorization': `Bearer ${token}`
};


export  async function goodsOpt() {  
    try {   
      const response = await axios.get('/api/user/goods/opt',{headers});
      console.log('goodsOpt',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error);  
      throw error; 
    }  
}

export  async function goodsBrand() {  
  try {  
    const response = await axios.get('/api/user/goods/brand',{headers});
    console.log('goodsBrand',response.data)   
    return response.data
  } catch (error) {  
    console.error('Error:', error);  
    throw error; 
}  
}

export  async function goodsSpi() {  
    try {  
      const response = await axios.get('/api/user/goods/spi',{headers});
      console.log('goodsSpi',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error);  
      throw error; 
    }  
}

export  async function goodsGraph() {  
    try {  
      const response = await axios.get('/api/user/goods/graph',{headers});
      console.log('goodsGraph',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error);  
      throw error; 
    }  
}

export  async function shopGoodsPage(page,pageSize,
    priceSort,salesSort,shop_id,timeSort,collectionSort) {  
    try { 
        const params =
        {
            collectionSort:collectionSort,
            page:page,
            pageSize:pageSize,
            priceSort:priceSort,
            salesSort:salesSort,
            shop_id:shop_id,
            timeSort:timeSort,
        }
      const response = await axios.get('/api/user/goods/page',
        { params: params,
          headers:headers
         });
      console.log('goodsPage',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error);  
      throw error; 
    }  
}

export  async function getGoodsById(good_id) {  
    try {  

      const response = await axios.get(`/api/user/goods/${good_id}`,{headers});
      console.log('getGoodsById',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error);  
      throw error; 
    }  
}

export async function allGoodsPage(page,pageSize,
    priceSort,salesSort,scoreSort,name,category_id) {  
    try { 
        const params =
        {
            page:page,
            pageSize:pageSize,
            priceSort:priceSort,
            salesSort:salesSort,
            scoreSort:scoreSort,
            name:name,
            category_id:category_id
        }
      const response = await axios.get('/api/user/goods/page',
        { params: params,
          headers:headers
         })
      console.log('allGoodsPage',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error)  
      throw error; 
    }  
}

export  async function BuyGoodsNow(goods_id,number) {  
  try {
      const body=
      {
        goods_id:goods_id,
          number:number
      }  
      const response = await axios.post('/api/user/goods/buyNow',body,{ headers });
      console.log('BuyGoodsNow',response.data)   
      return response.data
  } catch (error) {  
      console.error('Error:', error);
      throw error;  
  }  
}





