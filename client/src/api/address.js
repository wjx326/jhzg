import axios from 'axios';

const token = localStorage.getItem("userToken");

const headers = {
  'Authorization': `Bearer ${token}`
};

export  async function getAddressList() {  
    try {   
      const response = await axios.get('http://127.0.0.1:4523/m1/4784568-4438548-default/user/address/list',{ headers });
      console.log('getAddressList',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error);  
      throw error;
    }  
}

//地址分页查询
export  async function addressPage(page,pageSize) {  
  try { 
    const params =
    {
        page:page,
        pageSize:pageSize

    }
    const response = await axios.get('http://127.0.0.1:4523/m1/4784568-4438548-default/user/address/page',
        { params: params,
          headers: headers
         }
    );
    console.log('addressPage',response.data)   
    return response.data
  } catch (error) {  
    console.error('Error:', error); 
    throw error; 
  }  
}

export  async function addressSubmit(city_name,consignee,detail,district_name,phone,province_name,sex ) {  
    try {
        const body = {  
            city_name: city_name,
            consignee: consignee,
            detail: detail,
            district_name: district_name,
            phone: phone,
            province_name: province_name,
            sex: sex,

        }
      const response = await axios.post('http://127.0.0.1:4523/m1/4784568-4438548-default/user/address/submit',
        body,{ headers });
      console.log('addressSubmit',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error);
      throw error;  
    }  
}

export  async function addressUpdate(id,city_name,consignee,detail,district_name,phone,province_name,sex ) {  
    try {
        const body = {
            id:id,  
            city_name: city_name,
            consignee: consignee,
            detail: detail,
            district_name: district_name,
            phone: phone,
            province_name: province_name,
            sex: sex,

        }
      const response = await axios.post('http://127.0.0.1:4523/m1/4784568-4438548-default/user/address/update',
        body,{ headers });
      console.log('addressUpdate',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error);
      throw error;  
    }  
}

export  async function addressDelete(address_id) {  
    try {
    const body=
    {
        address_id:address_id
    }  
      const response = await axios.delete('http://127.0.0.1:4523/m1/4784568-4438548-default/user/address/delete',
        { 
            data: body,
            headers: headers
        });
      console.log('addressDelete',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error);
      throw error;  
    }  
}

export  async function setDefaultAddress(address_id) {  
    try { 
        const body =
        {
            address_id:address_id
        }
      const response = await axios.post('http://127.0.0.1:4523/m1/4784568-4438548-default/user/address/default',body,{headers});
      console.log('setDefaultAddress',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error); 
      throw error; 
    }  
}







