---
title: card
---


# card

#### 基本样式
::: demo
```html
<template>
    <z-card>
        <div slot="header">
            <span>卡片名称</span>
            <z-button plain style="float: right; padding: 0" >操作按钮</z-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
        </div>
    </z-card>
    <style>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }
    </style>
</template>
```
:::


#### 简单卡片
::: demo
```html
<template>
    <z-card>
        <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
        </div>
    </z-card>
    <style>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }
    </style>
</template>
```
:::


#### 卡片阴影
::: demo
```html
<template>
    <z-card >dasdasd</z-card>
    <div style="height: 25px;"></div>
    <z-card shadow="hover">dasdasd</z-card>
    <div style="height: 25px;"></div>
    <z-card shadow="never" >dasdasd</z-card>
    <div style="height: 25px;"></div>
</template>
```
:::





