# 设计规范
> 一般来说，我们建议遵循一些基本的设计规范，以便让F2C的还原度更高。**（持续更新中 ... ）**

- ​【避免】 ​：需要规避的做法，影响还原度

- 【推荐】 ​：推荐遵循的规范，非强制，可以优化转码效果，使生成代码更符合研发习惯




## **【避免】蒙板组包含非图片内容**

* 对于使用<span data-morpho-text="Mask">Mask</span>的图层，<span data-morpho-text="F2C">F2C</span>会将其整个节点转为图片，对于后续代码编辑会有一定影响。我们建议将 **有需要作为变量的内容** 作为蒙版组的**兄弟节点**的形式出现。

| **不建议**                                                                                                                                                                                         | **建议**                                                                                                                                                                                                       | **对应设计稿**                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 文本内容和按钮节点放置在蒙版组中，整个节点会被视为图片﻿![](https://rte.weiyun.baidu.com/wiki/attach/image/api/imageDownloadAddress?attachId=953e6470d8f045d780b1cb0c2f959a05&docGuid=RKfo1XzSl_OY9X) | 将文本和按钮分别成组；使用了Mask的复杂的特效图层单独成组，视为底图；![](https://rte.weiyun.baidu.com/wiki/attach/image/api/imageDownloadAddress?attachId=7d91ae94b61e49dd8e40093c4ffbfcdb&docGuid=RKfo1XzSl_OY9X) | ![](https://rte.weiyun.baidu.com/wiki/attach/image/api/imageDownloadAddress?attachId=796d3693d3f14e05be18fb15df65f265&docGuid=RKfo1XzSl_OY9X) |



## **【推荐】优化分组**

> F2C支持自动分组，但是优化分组更方便切图

* ​**图层分组处理**​：对于较多的图层在一个 <span data-morpho-text="Group">Group</span>或 <span data-morpho-text="Frame">Frame</span> 下，我们建议对图层进行分组，一般大致可分为：背景、文字、图片。
* ​**背景图归组和命名处理**​：我们建议包含复杂特效的背景图层单独成组，并打上 <span data-morpho-text="bg">bg</span> 标签（参考 [Tag使用说明](https://ku.baidu-int.com/knowledge/HFVrC7hq1Q/pKzJfZczuc/TfJeM3b51S/ZhyUEbOEJPVSp-) 中<span data-morpho-text="bg">bg</span>的作用介绍）或者直接命名为 "bg"，F2C可以知道该图层节点可以被转为图片作为背景，便于切图，同时避免多余的​**HTML标签渲染**​。

| **不建议**                                                                                                                                 | **建议**                                                                                                                                     | **对应设计稿**                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](https://rte.weiyun.baidu.com/wiki/attach/image/api/imageDownloadAddress?attachId=64655578b16d40c4b2bc02a441e71b6e&docGuid=RKfo1XzSl_OY9X) | ![](https://rte.weiyun.baidu.com/wiki/attach/image/api/imageDownloadAddress?attachId=18cb2ac6a2ee4e308ce15507fe7e8f80&docGuid=RKfo1XzSl_OY9X)﻿ | ![](https://rte.weiyun.baidu.com/wiki/attach/image/api/imageDownloadAddress?attachId=85d70d9f95f943459edf57e8240270d2&docGuid=QozMs_e5kZXAEy)﻿ |

﻿

## **【推荐】使用Auto Layout**

* ​**优先使用**​：<span data-morpho-text="Auto%20Layout">Auto Layout</span>转码结果对应的<span data-morpho-text="Flexbox">Flexbox</span>布局，当需要设计稿具有更好的弹性效果时，可以优先使用，能优化前端代码的输出结构。
