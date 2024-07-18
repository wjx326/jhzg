<template>
    <ve-histogram :data="chartData" :extend="chartExtend"></ve-histogram>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const chartData = ref({
    columns: ["日期", "访问用户"],
    rows: [
      { 日期: "1/1", 访问用户: 1393 },
      { 日期: "1/2", 访问用户: 3530 },
      { 日期: "1/3", 访问用户: 2923 },
      { 日期: "1/4", 访问用户: 1723 },
      { 日期: "1/5", 访问用户: 3792 },
      { 日期: "1/6", 访问用户: 4593 },
    ],
  });
  
  const chartExtend = {
    series: (v) => {
      v.forEach((i, index) => {
        i.itemStyle = {
          normal: {
            color: (params) => {
              var colorList = [
                "#C1232B", "#B5C334", "#FCCE10", "#E87C25", "#27727B",
                "#FE8463", "#9BCA63", "#FAD860", "#F3A43B", "#60C0DD",
                "#D7504B", "#C6E579", "#F4E001", "#F0805A", "#26C0C0",
              ];
              return colorList[params.dataIndex];
            },
          },
        };
        console.log(i, index);
      });
      return v;
    },
  };
  
  </script>
  