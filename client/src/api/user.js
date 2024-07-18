import axios from 'axios'; 

let setAuthToken=(token)=> {  
    localStorage.setItem('userToken', token);  
}

const token = localStorage.getItem("userToken");

const headers = {
   token: `${token}`
};

  //登录
export async function login(name, password) {  
    try {  
      // 构造请求体  
      const body = {  
        name: name,  
        password: password  
      };  
      const response = await axios.post('/api/user/user/login', body);  
      const token = response.data.data.token; // 假设token在响应数据的token属性中  
      setAuthToken(token); // 保存token 
      return response.data

    } catch (error) {  
      console.error('Error:', error);
      throw error;  
    }  
  }

  //根据id查用户信息
  export  async function getUserById(user_id) {  
    try {  
      const response = await axios.get(`api/user/user/${user_id}`,
        { headers });   
      console.log('getUserById',response.data)
      return response.data
    } catch (error) {  
      console.error('Error:', error); 
      throw error; 
    }  
  }

  //更新用户基本信息
  export  async function updateInfo(image, nickname,sex) {  
    try {  
      const body = {  
        image: image,  
        nickname: nickname,
        sex:sex 
      };  
      const response = await axios.post('/api/user/user/update', body,{ headers });  
      console.log('updateInfo',response.data)
      return response.data 
    } catch (error) {  
      console.error('Error:', error); 
      throw error; 
    }  
  }

  //用户修改密码
  export async function changePassword(captcha, email,password) {  
    try {  
      // 构造请求体  
      const body = {  
        captcha: captcha,  
        email: email,
        password:password 
      };  
    
      const response = await axios.post('/api/user/user/change/password', body,{ headers });  
      } catch (error) {  
      console.error('Error:', error); 
      throw error; 
    }  
  }
  
  //修改邮箱
  export  async function changeEmail(captcha, email) {  
    try {  
      // 构造请求体  
      const body = {  
        captcha: captcha,  
        email: email,
      };  
      const response = await axios.post('/api/user/user/change/email', body,{ headers });
      console.log('changeEmail',response.data)  

      } catch (error) {
      console.error('Error:', error); 
      throw error; 
    }  
  }

  //用户登出
  export async function logout() {  
    try {  
      const response = await axios.post('/api/user/user/logout',{ headers });
      console.log('logout',response.data)  
      } catch (error) {  
      console.error('Error:', error);
      throw error;  
    }  
  }

  //用户注册
  export  async function register(captcha, email,password) {  
    try {  
      const body = {  
        captcha: captcha,
        email: email,
        password: password  
      };  
      const response = await axios.post('/api/user/user/register', body);  
      console.log('register',response.data)
      return response.data
    } catch (error) {  
      console.error('Error:', error); 
      throw error; 
    }  
  }

  //用户充值
  export  async function charge(amount) {  
    try {  
      // 构造请求体  
      const body = {  
        amount: amount, 
      }
      const response = await axios.post('/api/user/user/charge', body,{ headers });  
      console.log('charge',response.data)
      return response.data
    } catch (error) {  
      console.error('Error:', error); 
      throw error; 
    }  
  }
