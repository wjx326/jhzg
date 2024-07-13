import axios from 'axios';


export  async function uploadFile(file) {  
    try { 
        const body =
        {
            file:file,
        }
      const response = await axios.post('http://127.0.0.1:4523/m1/4784568-4438548-default/user/common/upload',body);
      console.log('uploadFile',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error); 
      throw error; 
    }  
}