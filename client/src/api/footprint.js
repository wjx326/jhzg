import axios from 'axios';

const token = localStorage.getItem("userToken");

const headers = {
  'Authorization': `Bearer ${token}`
};

//我的足迹
export  async function footprintPage(page,pageSize) {  
  try { 
    const params =
    {
        page:page,
        pageSize:pageSize
    }
    const response = await axios.get('http://127.0.0.1:4523/m1/4784568-4438548-default/user/footprint/page',
        { params: params,
          headers:headers
         }
    );
    console.log('footprintPage',response.data)   
    return response.data
  } catch (error) {
    console.error('Error:', error); 
    throw error; 
  }  
}


export  async function footprintRecord(goods_id) {  
    try { 
        const body =
        {
            goods_id:goods_id,
        }
      const response = await axios.post('http://127.0.0.1:4523/m1/4784568-4438548-default/user/footprint/recording',body,{headers});
      console.log('footprintRecord',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error); 
      throw error; 
    }  
}







