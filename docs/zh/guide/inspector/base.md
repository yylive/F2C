# 基本使用
:::tip
[视频演示](https://www.bilibili.com/video/BV1D5gPeLETb/?vd_source=7fcf31abc7924b3dd8be9356b65e1c92)
:::

该功能的作用是查看图层的相关信息，类似于Figma的**Dev Mode**功能，并提供切图批量下载和上传功能。


:::warning
上传功能目前仅供内部使用，后续将开放
:::

## 标注信息

![标注信息示意图](https://hd-static.yystatic.com/9914176356035016.jpeg)

上图为图层信息示意图，具体介绍如下

### 平台

平台分为Web、Android、IOS，会根据平台切换更新单位，例如："px"、"dp"。也可以自定义倍率，填入相应倍率后，所有样式属性相关数值将于该倍率相乘。

![平台信息示意图](https://hd-static.yystatic.com/08436609250895377.jpeg)

### 图层信息

图层信息将以可视化的形式展示，包括了宽高、边距、颜色、字体大小等。

### 切图相关代码信息

![平台信息示意图](https://hd-static.yystatic.com/8946432383318821.jpeg)

该部分会展示切图缩略图，以及相关CSS代码（后续会迭代更多平台代码），用户只需点击复制按钮即可快速使用。

## 切图与上传

[视频演示](https://www.bilibili.com/video/BV1S5gPeLEUo/?vd_source=7fcf31abc7924b3dd8be9356b65e1c92)

![切图示意图](https://hd-static.yystatic.com/032402725539329325.jpeg)

YY F2C也提供切图的下载和上传功能（对内）。插件将会收集所选图层中添加了Export的图层信息，展示在页面切图Tab中，你可以选中你想要的图层批量下载或上传。