import axios from 'axios';


export  async function focusPage(page,pageSize) {  
  try { 
    const params =
    {
        page:page,
        pageSize:pageSize
    }
    const response = await axios.get('http://127.0.0.1:4523/m1/4784568-4438548-default/user/focus/page',
        { params: params }
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
      const response = await axios.delete('http://127.0.0.1:4523/m1/4784568-4438548-default/user/focus/delete',
        { 
            data: body 
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
      const response = await axios.post('http://127.0.0.1:4523/m1/4784568-4438548-default/user/focus/focus',body);
      console.log('setFocus',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error); 
      throw error; 
    }  
}







