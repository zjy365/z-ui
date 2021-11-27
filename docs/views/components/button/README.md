---
title: button
---


# button

#### 基本样式
::: demo
```html
<template>
    <z-button type="default">主要按钮</z-button>
    <z-button type="success">成功按钮</z-button>
    <z-button type="danger">危险按钮</z-button>
    <z-button type="info">信息按钮</z-button>
    <z-button type="warn">警告按钮 </z-button>
    <div style="height: 25px;"></div>
    <z-button type="default" round>主要按钮</z-button>
    <z-button type="success" round >成功按钮</z-button>
    <z-button type="danger" round>危险按钮</z-button>
    <z-button type="info" round>信息按钮</z-button>
    <z-button type="warn" round>警告按钮 </z-button>
    <div style="height: 25px;"></div>

    <z-button type="default"  icon="icon-icon-test3" circle> </z-button>
    <z-button type="success" icon="icon-icon-test3" circle> </z-button>
    <z-button type="danger" icon="icon-icon-test3" circle> </z-button>
    <z-button type="info" icon="icon-icon-test3" circle> </z-button>
    <z-button type="warn" icon="icon-icon-test3" circle> </z-button>
</template>
```
:::

#### 朴素按钮
::: demo
```html
<template>
    <z-button plain >BUTTON</z-button>
    <z-button plain >BUTTON</z-button>
    <z-button plain >BUTTON</z-button>
    <z-button  raised >BUTTON</z-button>
    <z-button type="success" raised >BUTTON</z-button>
    <z-button type="danger" raised >BUTTON</z-button>
</template>
```
:::

#### 带图标的按钮
::: demo
```html
<template>
    <z-button icon="icon-icon-test7">设置</z-button>
    <z-button icon="icon-icon-test6">分享</z-button>
    <z-button icon="icon-icon-test3" >搜索</z-button>
    <z-button icon="icon-icon-test18" >消息</z-button>
    <z-button icon="icon-icon-test12" >通知</z-button>
    <z-button loading >加载中</z-button>
</template>
```
:::



#### 禁用状态
::: demo
```html
<template>
    <z-button type="default" disabled>主要按钮</z-button>
    <z-button type="success" disabled>成功按钮</z-button>
    <z-button type="danger" disabled>危险按钮</z-button>
    <z-button type="info" disabled>信息按钮</z-button>
    <z-button type="warn" disabled>警告按钮 </z-button>
</template>
```
:::


