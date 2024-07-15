import axios from 'axios';

const token = localStorage.getItem("userToken");

const headers = {
  'Authorization': `Bearer ${token}`
};

export  async function getShoppingCartList() {  
    try {   
      const response = await axios.get('http://127.0.0.1:4523/m1/4784568-4438548-default/user/shoppingCart/list',{headers});
      console.log('getShoppingCartList',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error);  
      throw error;
    }
}

export  async function shoppingCartDelete(id) {  
    try {
        const body=
        {
            id:id
        }  
        const response = await axios.delete('http://127.0.0.1:4523/m1/4784568-4438548-default/user/shoppingCart/delete',
        { 
            data: body,
            headers:headers 
        });
        console.log('shoppingCartDelete',response.data)   
        return response.data
    } catch (error) {  
        console.error('Error:', error);
        throw error;  
    }  
}


export  async function shoppingCartSettled() {  
    try {
      const response = await axios.post('http://127.0.0.1:4523/m1/4784568-4438548-default/user/shoppingCart/settled',{ headers });
      console.log('shoppingCartSettled',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error);
      throw error;  
    }  
}

export  async function shoppingCartUpdate(id,number) {  
    try {
        const body=
        {
            id:id,
            number:number
        }  
        const response = await axios.post('http://127.0.0.1:4523/m1/4784568-4438548-default/user/shoppingCart/update',body,{ headers });
        console.log('shoppingCartUpdate',response.data)   
        return response.data
    } catch (error) {  
        console.error('Error:', error);
        throw error;  
    }  
}








