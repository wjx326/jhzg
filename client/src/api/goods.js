import axios from 'axios';


const token = localStorage.getItem("userToken");

const headers = {
  'Authorization': `Bearer ${token}`
};


export  async function goodsOpt() {  
    try {   
      const response = await axios.get('http://127.0.0.1:4523/m1/4784568-4438548-default/user/goods/opt',{headers});
      console.log('goodsOpt',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error);  
      throw error; 
    }  
}

export  async function goodsBrand() {  
  try {  
    const response = await axios.get('http://127.0.0.1:4523/m1/4784568-4438548-default/user/goods/brand',{headers});
    console.log('goodsBrand',response.data)   
    return response.data
  } catch (error) {  
    console.error('Error:', error);  
    throw error; 
}  
}

export  async function goodsSpi() {  
    try {  
      const response = await axios.get('http://127.0.0.1:4523/m1/4784568-4438548-default/user/goods/spi',{headers});
      console.log('goodsSpi',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error);  
      throw error; 
    }  
}

export  async function goodsGraph() {  
    try {  
      const response = await axios.get('http://127.0.0.1:4523/m1/4784568-4438548-default/user/goods/graph',{headers});
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
      const response = await axios.get('http://127.0.0.1:4523/m1/4784568-4438548-default/user/goods/page?apifoxApiId=192155649',
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
    // const response = await axios.get('/user/goods/{good_id}');

      const response = await axios.get('http://127.0.0.1:4523/m1/4784568-4438548-default/user/goods/1',{headers});
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
      const response = await axios.get('http://127.0.0.1:4523/m1/4784568-4438548-default/user/goods/page?apifoxApiId=192382279',
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
      const response = await axios.post('http://127.0.0.1:4523/m1/4784568-4438548-default/user/goods/buyNow',body,{ headers });
      console.log('BuyGoodsNow',response.data)   
      return response.data
  } catch (error) {  
      console.error('Error:', error);
      throw error;  
  }  
}





