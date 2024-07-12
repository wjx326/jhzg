import { defineStore } from 'pinia';  
  
export const useUserStore = defineStore('user', {  
  state: () => ({  
    id: null, 
    salt: null,
    name: 'aaaaa', 
    nickname: 'abc', 
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
    // 示例：设置用户信息  
    setUser(userInfo) {  
      this.id = userInfo.id;  
      this.salt = userInfo.salt;  
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
    // 你可以在这里添加更多的actions，比如登录、登出、更新用户信息等  
  },  
  getters: {  
    
  },  
});
