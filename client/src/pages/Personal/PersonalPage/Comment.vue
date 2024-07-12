<template>
    <div style="width: 1100px;background-color: white;margin:20px auto;">
        <div class="order_header" style="margin: 15px;">
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
            >
                <el-menu-item index="1">来自卖家的评价</el-menu-item>
                <el-menu-item index="2">给他人的评价</el-menu-item>
                <el-menu-item index="3">已处理的评价</el-menu-item>
            </el-menu>
        </div>
        <div style="margin: 15px;">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column >
                    <template #header>
                        <el-select  placeholder="评价" style="width: 100px">
                            <el-option label="好评"/>
                            <el-option label="中评"/>
                            <el-option label="差评"/>
                        </el-select>
                    </template>
                </el-table-column>
                <el-table-column >
                    <template #header>
                        <el-select  placeholder="评论" style="width: 100px">
                            <el-option label="有评价内容"/>
                            <el-option label="无评价内容"/>
                        </el-select>
                    </template>
                </el-table-column>
                <el-table-column prop="score" label="评价人" width="180" />
                <el-table-column prop="name" label="宝贝信息" width="180" />
                <el-table-column prop="address" label="操作" />
            </el-table>
        </div>
    </div>
</template>