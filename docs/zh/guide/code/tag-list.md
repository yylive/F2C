# [进阶] list 用法

## 简介[​](http://localhost:3000/docs/showcase/list#%E7%AE%80%E4%BB%8B)

`list`标记主要用来处理`列表`中组件重复的使用场景。使用`list`标记列表的父组件，`item`标记列表中需要抽象出来的子组件。

例如：

![](https://rte.weiyun.baidu.com/wiki/attach/image/api/imageDownloadAddress?attachId=eab17d20237748fe8561cc81c809d3b3&docGuid=daQGrafbSLIhjy)

![](https://rte.weiyun.baidu.com/wiki/attach/image/api/imageDownloadAddress?attachId=590870142dce4c969a5e3386702f9432&docGuid=daQGrafbSLIhjy)

## 使用示例

若未安装f2c插件，请阅读[F2C 快速上手](https://ku.baidu-int.com/knowledge/HFVrC7hq1Q/M-wK0zh99p/mTQY0VEf8w/Z3NSVyUXRhnTxB)。

Figma设计稿：[https://www.figma.com/design/eQ6iQwUJPCVtZFwSPxdHBv/F2C%E8%BF%9B%E9%98%B6%E7%94%A8%E6%B3%95?node-id=460-1530&t=s3LEruNvD8zoVKK9-4](https://www.figma.com/design/eQ6iQwUJPCVtZFwSPxdHBv/F2C%E8%BF%9B%E9%98%B6%E7%94%A8%E6%B3%95?node-id=460-1530&t=s3LEruNvD8zoVKK9-4)

### 第一步，将list与item节点按如图添加tag

![](https://rte.weiyun.baidu.com/wiki/attach/image/api/imageDownloadAddress?attachId=dbf542dae4634b3191cfae5fb3059a2b&docGuid=daQGrafbSLIhjy)

### 第二步，生成代码

1. 首先是RankList的代码，我们为item节点生成了listData数据
2. list节点会自动创建列表循环代码

![](https://rte.weiyun.baidu.com/wiki/attach/image/api/imageDownloadAddress?attachId=1480385078f6471e884995bb307545b1&docGuid=daQGrafbSLIhjy)

1. Item组件被抽取，标记var-tag的节点被创建变量入参

![](https://rte.weiyun.baidu.com/wiki/attach/image/api/imageDownloadAddress?attachId=94ddeadb3ecf422e96aaebc99464e376&docGuid=daQGrafbSLIhjy)

## 更多进阶参考

list结合subComp用法 [F2C系列视频教程](http://learn.baidu.com/pages/index.html#/video/?courseId=50590&elementId=a964609b-86b5-44a9-bdf1-f8dcdeb5bdcb&userId=6826604&groupId=null&curPlayIndex=3)
