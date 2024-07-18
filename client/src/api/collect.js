import axios from 'axios';


const token = localStorage.getItem("userToken");

const headers = {
   token: `${token}`
};

//商品收藏
export  async function collectPage(page,pageSize) {  
  try { 
    const params =
    {
        page:page,
        pageSize:pageSize
    }
    const response = await axios.get('/api/user/collect/page',
        { 
          params: params,
          headers:headers
        }
    );
    console.log('collectPage',response.data)   
    return response.data
  } catch (error) {  
    console.error('Error:', error); 
    throw error; 
  }  
}


export  async function collectDelete(id) {  
    try {
    const body=
    {
        id:id
    }  
      const response = await axios.delete('/api/user/collect/delete',
        { 
            data: body,
            headers:headers 
        });
      console.log('collectDelete',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error);
      throw error;  
    }  
}

export  async function getcollectById(collect_id) {  
    try { 
      const response = await axios.get(`/api/user/collect/${collect_id}`,{ headers });
      console.log('getcollectById',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error); 
      throw error; 
    }  
  }

export  async function setCollect(goods_id) {  
    try { 
        const body =
        {
            goods_id:goods_id
        }
      const response = await axios.post('/api/user/collect',body,{ headers });
      console.log('setCollect',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error); 
      throw error; 
    }  
}







