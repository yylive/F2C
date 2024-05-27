# [进阶] module 用法

module的用法与subComp一致，唯一的不同是，module标记会将子组件抽取到单独的目录。

subComp在简单的场景中带来了便利，但组件层级越来越多，这时候清晰的代码目录层级更容易维护，来看看如下例子

设计稿：[https://www.figma.com/design/eQ6iQwUJPCVtZFwSPxdHBv/var-tag-Guide?node-id=460-8&t=s3LEruNvD8zoVKK9-4](https://www.figma.com/design/eQ6iQwUJPCVtZFwSPxdHBv/var-tag-Guide?node-id=460-8&t=s3LEruNvD8zoVKK9-4)

## 使用

继续[subComp 用法](https://ku.baidu-int.com/knowledge/HFVrC7hq1Q/M-wK0zh99p/mTQY0VEf8w/TmYS4uwXcoXKq0)的例子，我们将该例子中的`subComp` tag改为 `module`tag

![](https://rte.weiyun.baidu.com/wiki/attach/image/api/imageDownloadAddress?attachId=f98fd4e82cac4275b94b791516532db8&docGuid=b_UMwzRNGM2tTe)

2. 将例子中的Main也达成module tag， 这时候Main下的ConfirmBtn已经处于第二层组件

![](https://rte.weiyun.baidu.com/wiki/attach/image/api/imageDownloadAddress?attachId=bef7ff97c7514408b1c8521217e964cb&docGuid=b_UMwzRNGM2tTe)

## 生成代码

代码将子组件抽取到单独的目录

![](https://rte.weiyun.baidu.com/wiki/attach/image/api/imageDownloadAddress?attachId=07166a4accaa4edc9e24673bbb7948b3&docGuid=b_UMwzRNGM2tTe)

可以看到 这里的结构更加清晰

![](https://rte.weiyun.baidu.com/wiki/attach/image/api/imageDownloadAddress?attachId=cdba465ea7004786974a85959e006989&docGuid=b_UMwzRNGM2tTe)

这里是Main引用ConfirmBtn

![](https://rte.weiyun.baidu.com/wiki/attach/image/api/imageDownloadAddress?attachId=6bbb9696e9e04e8e9aead42c9705cf05&docGuid=b_UMwzRNGM2tTe)

可以看到module tag在抽取子组件方面拥有更清晰的目录结构，这往往在复杂场景中方便我们的维护
