# 介绍

## 简介

`组件标记`是创建`Figma组件库`与`代码组件库`之间的映射关系的一种解决方案。

## 背景

YY设计团队维护一套 Figma的手Y基础组件，其对应ReactNative端一侧的代码组件库实现，通过组件标记手段可以将其关联起来。

![](https://rte.weiyun.baidu.com/wiki/attach/image/api/imageDownloadAddress?attachId=d3f2bf99bebb4be7b8dac303b12f5a00&docGuid=6n4FiPS6ibqq03)

![](https://rte.weiyun.baidu.com/wiki/attach/image/api/imageDownloadAddress?attachId=7f153dffb1154dd9819a08f75fb5030b&docGuid=6n4FiPS6ibqq03)

## 收益

1. 设计侧通过Figma组件开发，实现设计端的统一。
2. 通过`组件标记`能直接生成组件代码，能够：
   
   1. 降低团队组件使用的接入成本，实现0文档接入。
   2. 降低还原设计稿 => 组件代码过程中的出错几率。

## 原理

以 按钮组件（[设计稿](https://www.figma.com/design/cNJ4lpXYaDxqU8ONk2pWck/%E7%BB%84%E4%BB%B6%E5%BA%93-C%E7%AB%AF-%E7%A7%BB%E5%8A%A8%E7%AB%AF-(Copy)?node-id=192-10756&t=zk317WUGDV8XLCVZ-4)）为例，其映射原理如下，具体的标记API可以查看：[【文档】Figma组件配置API](https://ku.baidu-int.com/knowledge/HFVrC7hq1Q/M-wK0zh99p/mTQY0VEf8w/BqRvYe-4gvtg7q)

![](https://rte.weiyun.baidu.com/wiki/attach/image/api/imageDownloadAddress?attachId=07c4d23e2d6e4a89adf5ba0a8ef235e4&docGuid=6n4FiPS6ibqq03)

### 完整示例

* 按钮组件的完整标记

![](https://rte.weiyun.baidu.com/wiki/attach/image/api/imageDownloadAddress?attachId=693fb5a6135640c386b403f9f68136c8&docGuid=6n4FiPS6ibqq03)

* 按钮组件映射为YYRN组件库代码

![](https://rte.weiyun.baidu.com/wiki/attach/image/api/imageDownloadAddress?attachId=746f4a05a9d94549a27ac33f6b18ab1a&docGuid=6n4FiPS6ibqq03)

## 资料

手Y - Figma组件库：[https://www.figma.com/file/k3GFjuD7URDyW0m60BY6Fr?node-id=3-3&t=PG0dT9l2XQMiSsbM-0&type=design&mode=design&fuid=999578870654951439&editor_type=design](https://www.figma.com/file/k3GFjuD7URDyW0m60BY6Fr?node-id=3-3&t=PG0dT9l2XQMiSsbM-0&type=design&mode=design&fuid=999578870654951439&editor_type=design)

手Y - RN组件库: [https://npm.yy.com/package/@yyrn/yyui](https://npm.yy.com/package/@yyrn/yyui)
