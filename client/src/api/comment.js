import axios from 'axios';

const token = localStorage.getItem("userToken");

const headers = {
   token: `${token}`
};

//我的评论
export  async function commentPage(page,pageSize) {  
  try { 
    const params =
    {
        page:page,
        pageSize:pageSize
    }
    const response = await axios.get('/api/user/comment/page',
        { 
          params: params,
          headers:headers
        }
    );
    console.log('commentPage',response.data)   
    return response.data
  } catch (error) {
    console.error('Error:', error); 
    throw error; 
  }  
}

//商品评论
export  async function goodsCommentPage(goods_id,page,pageSize) {  
    try { 
      const params =
      {
        goods_id:goods_id,
        page:page,
        pageSize:pageSize
      }
      const response = await axios.get('/api/user/comment/goods/page',
          { 
            params: params,
            headers:headers 
          }
      );
      console.log('goodsCommentPage',response.data)   
      return response.data
    } catch (error) {
      console.error('Error:', error); 
      throw error; 
    }  
  }


export  async function commentSubmit(content,goods_id,goods_score,is_hide,shop_score) {  
    try { 
        const body =
        {
            content:content,
            goods_id:goods_id,
            goods_score:goods_score,
            is_hide:is_hide,
            shop_score:shop_score,
        }
      const response = await axios.post('/api/user/comment/submit',body,{headers:headers});
      console.log('commentSubmit',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error); 
      throw error; 
    }  
}







