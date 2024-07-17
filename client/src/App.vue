<template>  
    <div id="app">  
      <router-view />  
    </div>  
  </template>  
    
<script setup> 
import {ref,onMounted} from 'vue'
import {captchaSend,captchaVertify} from './api/email'
import {getUserById,updateInfo,changePassword,changeEmail,logout,register,charge} from './api/user'



</script>
