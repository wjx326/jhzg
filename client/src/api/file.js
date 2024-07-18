import axios from 'axios';

const token = localStorage.getItem("userToken");

const headers = {
   token: `${token}`
};

export  async function uploadFile(file) {  
    try { 
        const body =
        {
            file:file,
        }
      const response = await axios.post('/api/user/common/upload',body,{headers});
      console.log('uploadFile',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error); 
      throw error; 
    }  
}