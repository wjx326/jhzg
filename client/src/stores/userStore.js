import { defineStore } from 'pinia';



export const useUserStore = defineStore('user', {  
  state: () => ({  
    id: null, 
    salt: null,
    name: null, 
    nickname: null, 
    password: null, 
    phone: null, 
    image: null,
    sex: null,
    isCertification: null, 
    isIdentityAuthentication: null, 
    balance: null, 
    status: null, 
    flag: null, 
    createdTime: null, 
  }),  
  actions: {  
    //设置用户信息
    setUser(userInfo) {  
      this.name = userInfo.name;  
      this.nickname = userInfo.nickname;  
      this.password = userInfo.password;  
      this.phone = userInfo.phone;  
      this.image = userInfo.image;  
      this.sex = userInfo.sex;  
      this.isCertification = userInfo.isCertification;  
      this.isIdentityAuthentication = userInfo.isIdentityAuthentication;  
      this.balance = userInfo.balance;  
      this.status = userInfo.status;  
      this.flag = userInfo.flag;  
      this.createdTime = userInfo.createdTime;  
    },  

    
      
    

  },  
  getters: {  
    
  },  
});
