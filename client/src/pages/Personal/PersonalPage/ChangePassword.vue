<template>
    <div style="width: 1100px;background-color: white;margin:20px auto;padding-bottom: 50px;height: 500px;">
        <div style="padding: 30px; text-align: center;"><h1 style="color: #303133;">修改密码</h1></div>
        <div style="margin: auto;width: 300px;">
            <el-form label-width="auto" style="max-width: 600px" >
                <el-form-item label="邮箱">
                    <el-input  style="width: 240px" placeholder="请输入邮箱" />
                </el-form-item>
                <el-form-item label="验证码">
                    <el-input  style="width: 240px" placeholder="请输入验证码" >
                        <template #append>
                            <el-button >发送验证码</el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item label="新密码">
                    <el-input   placeholder="请输入密码" style="width: 240px" type="password" show-password>
                    </el-input>
                </el-form-item>
                <el-form-item label="确认密码">
                    <el-input  style="width: 240px" placeholder="请输入新密码" type="password" show-password/>
                </el-form-item>
                <el-form-item style="margin-left: 100px;">
                    <el-button type="primary">修改密码</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>