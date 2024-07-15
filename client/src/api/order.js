import axios from 'axios';

const token = localStorage.getItem("userToken");

const headers = {
  'Authorization': `Bearer ${token}`
};

export  async function getOrderTypeCount() {  
    try {   
      const response = await axios.get('http://127.0.0.1:4523/m1/4784568-4438548-default/user/order/count',{headers});
      console.log('getOrderTypeCount',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error);  
      throw error;
    }  
}

export  async function orderDetail(id) {  
  try { 
    const params =
    {
        order_id:id,
    }
    const response = await axios.get('http://127.0.0.1:4523/m1/4784568-4438548-default/user/order/details',
        { params: params,
          headers:headers
         }
    );
    console.log('orderDetail',response.data)   
    return response.data
  } catch (error) {  
    console.error('Error:', error); 
    throw error; 
  }  
}

export  async function deleteOrder(id) {  
    try {
        const body = {  
            id: id
        }
      const response = await axios.delete('http://127.0.0.1:4523/m1/4784568-4438548-default/user/order/delete',
        { 
            data: body,
            headers:headers 
        }
      );
      console.log('deleteOrder',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error);
      throw error;  
    }  
}

export  async function orderPay(order_id) {  
    try {
    const body=
    {
        order_id:order_id
    }  
      const response = await axios.post('http://127.0.0.1:4523/m1/4784568-4438548-default/user/order/pay',body,{headers});
      console.log('orderPay',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error); 
      throw error; 
    }  
}

export  async function orderReceived(order_id) {  
    try {
    const body=
    {
        order_id:order_id
    }  
      const response = await axios.post('http://127.0.0.1:4523/m1/4784568-4438548-default/user/order/received',body,{headers});
      console.log('orderReceived',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error);
      throw error;  
    }  
}

export  async function orderPage(page,pageSize,status,number,goods_name) {  
    try { 
        const params =
        {
            page:page,
            pageSize:pageSize,
            status:status,
            number:number,
            goods_name:goods_name
        }
      const response = await axios.get('http://127.0.0.1:4523/m1/4784568-4438548-default/user/order/page',
        { params: params,
          headers:headers
         });
      console.log('orderPage',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error); 
      throw error; 
    }  
}







