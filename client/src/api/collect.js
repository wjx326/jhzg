import axios from 'axios';


const token = localStorage.getItem("userToken");

const headers = {
  'Authorization': `Bearer ${token}`
};

//商品收藏
export  async function collectPage(page,pageSize) {  
  try { 
    const params =
    {
        page:page,
        pageSize:pageSize
    }
    const response = await axios.get('http://127.0.0.1:4523/m1/4784568-4438548-default/user/collect/page',
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
      const response = await axios.delete('http://127.0.0.1:4523/m1/4784568-4438548-default/user/collect/delete',
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
            //   const response = await axios.get(`api/user/collect/{collect_id}`);
      const response = await axios.get('http://127.0.0.1:4523/m1/4784568-4438548-default/user/collect/1',{ headers });
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
      const response = await axios.post('http://127.0.0.1:4523/m1/4784568-4438548-default/user/collect',body,{ headers });
      console.log('setCollect',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error); 
      throw error; 
    }  
}







