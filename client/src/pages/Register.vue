<template>
    <div >
        <div style="background-image: url('./src/assets/img/background.jpg');background-size: cover; height: 630px; width: 100%; background-position: center;padding-top: 100px;">
            <div style="background-color: white; width: 700px;padding: 40px; border-radius: 10px;margin: auto;height: 300px;">
                <div style="width: 350px;float: left;" >
                    <img src="../assets/img/logo.png" style="width: 40%;">
                    <img src="../assets/img/login.png" style="width: 80%;">
                </div>
                <div style="width: 350px; float: right;">
                    <div style="width: 100%;text-align: center;margin-top: -10px;">
                        <h3>注册新用户</h3>
                    </div>
                    <el-form label-width="auto" style="max-width: 100%">
                        <el-form-item label="邮箱">
                            <el-input  style="width:100%" placeholder="请输入邮箱" />
                        </el-form-item>
                        <el-form-item label="验证码">
                            <el-input  style="width: 100%" placeholder="请输入验证码" >
                                <template #append>
                                    <el-button >发送验证码</el-button>
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item label="新密码">
                            <el-input   placeholder="请输入密码" style="width: 100%" type="password" show-password>
                            </el-input>
                        </el-form-item>
                        <el-form-item label="确认密码">
                            <el-input  style="width: 100%" placeholder="请输入新密码" type="password" show-password/>
                        </el-form-item>
                        <el-form-item style="margin-left: 100px;width: 50%">
                            <el-button type="primary" style="margin: auto; width:80%;">注册</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>