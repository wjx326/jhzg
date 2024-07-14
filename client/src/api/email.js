import axios from 'axios';

const token = localStorage.getItem("userToken");

const headers = {
  'Authorization': `Bearer ${token}`
};


export  async function captchaSend(email) {  
    try {  
        const params = {  
            email: email,  
        };  
      const response = await axios.get('http://127.0.0.1:4523/m1/4784568-4438548-default/user/captcha/send',
        { params: params,
          headers:headers
         });
      console.log('captchaSend',response.data)   
      return response.data
    } catch (error) {  
      console.error('Error:', error);  
      throw error; 
    }  
}

export  async function captchaVertify(email,captcha) {  
  try {  
      const params = {  
          email: email,
          captcha:captcha
      };  
    const response = await axios.get('http://127.0.0.1:4523/m1/4784568-4438548-default/user/captcha/vertify',
      { params: params,
        headers:headers
       });
    console.log('captchaVertify',response.data)   
    return response.data
  } catch (error) {  
    console.error('Error:', error);  
    throw error; 
  }  
}
