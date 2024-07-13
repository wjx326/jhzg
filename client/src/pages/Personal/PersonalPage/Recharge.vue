<template>
    <div style="background-color: white;width: 95%;margin:20px auto;padding: 20px;padding-bottom: 100px;">
        <div style="background-color: #26b0d5;border-radius: 8px;padding: 20px;">
            <div style="display: flex;">
                <div style="width: 50px;height: 50px;"><img src="../../../assets/img/硬币.png" style="width:100%;height: 100%;"></div>
                <div style="width: 100px;height: 50px;color: white;font-size: x-large;font-weight: bold;line-height: 50px;margin-left: 20px;">充值中心</div>
            </div>
            <p style="color: white;font-size: small;">1.为了您的账户安全，请在官方渠道进行充值操作，避免在非官方平台泄露个人信息及支付密码。</p>
            <p style="color: white;font-size: small;">2.请确认充值金额与所选充值方式，一旦支付成功，部分充值可能无法退款或更改。</p>
        </div>
        <div style="background-color: #def2f9;border-radius: 8px;padding: 20px;margin-top: 30px;">
            <el-row style="height: 60px;line-height: 50px;">
                <el-col :span="2" >
                    <el-avatar  @click="handleAvatarClick"
                        :size="50" :fit="contain" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                        />
                </el-col>
                <el-col :span="6" style="color: #606266;"> 充值账号：{xxxx} </el-col>
                <el-col :span="1" :offset="11" >
                    <img src="../../../assets/img/硬币.png" style="width: 30px;height: 30px;margin: 10px;">
                </el-col>
                <el-col :span="3" style="color: #606266;">
                    当前余额：{xxxx}
                </el-col>
            </el-row>
        </div>
        <el-row style="margin-top: 30px;color: #606266;">
            <el-col :span="3">
                <div style="width: 100px;height: 50px;border: 2px solid #ccc;border-radius: 5px;text-align: center;line-height: 50px;">10￥</div>
            </el-col>
            <el-col :span="3">
                <div style="width: 100px;height: 50px;border: 2px solid #ccc;border-radius: 5px;text-align: center;line-height: 50px;">20￥</div>
            </el-col>
            <el-col :span="3">
                <div style="width: 100px;height: 50px;border: 2px solid #ccc;border-radius: 5px;text-align: center;line-height: 50px;">30￥</div>
            </el-col>
            <el-col :span="3">
                <div style="width: 100px;height: 50px;border: 2px solid #ccc;border-radius: 5px;text-align: center;line-height: 50px;">自定义金额</div>
            </el-col>
        </el-row>
        <el-row style="margin-top: 50px;margin-bottom: 50px ;color: #606266;">
            <el-col :span="2">应付余额：</el-col>
            <el-col :span="2">{xxxx}元</el-col>
        </el-row>
        <el-button type="primary" style="color: white;" color="#26b0d5" size="large">确认支付</el-button>
    </div>
</template>