import axios from 'axios';


const token = localStorage.getItem("userToken");

const headers = {
  'Authorization': `Bearer ${token}`
};

export  async function focusPage(page,pageSize) {  
  try { 
    const params =
    {
        page:page,
        pageSize:pageSize
    }
    const response = await axios.get('/api/user/focus/page',
        { params: params,
          headers:headers
         }
    );
    console.log('focusPage',response.data)   
    return response.data
  } catch (error) {  
    console.error('Error:', error); 
    throw error; 
  }  
}


export  async function focusDelete(focus_id) {  
    try {
    const body=
    {
        focus_id:focus_id
    }  
      const response = await axios.delete('/api/user/focus/delete',
        { 
            data: body,
            headers:headers 
        });
      console.log('focusDelete',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error);
      throw error;  
    }  
}



export  async function setFocus(shop_id) {  
    try { 
        const body =
        {
            shop_id:shop_id
        }
      const response = await axios.post('/api/user/focus/focus',body,{headers});
      console.log('setFocus',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error); 
      throw error; 
    }  
}







