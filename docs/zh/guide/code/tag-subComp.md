# [进阶] subComp 用法

携带subComp标签的图层节点会抽取为子组件代码，起功能类似module，区别是subComp不会为你创建子目录，会直接在原代码文件下创建组件。

设计稿：[https://www.figma.com/design/eQ6iQwUJPCVtZFwSPxdHBv/var-tag-Guide?node-id=460-136&t=s3LEruNvD8zoVKK9-4](https://www.figma.com/design/eQ6iQwUJPCVtZFwSPxdHBv/var-tag-Guide?node-id=460-136&t=s3LEruNvD8zoVKK9-4)

## 基本使用

### 设计稿打上 SubComp Tag

1. 领取按钮图层名改为英文变量，打上subComp tag
2. 关闭按钮同理

![](https://rte.weiyun.baidu.com/wiki/attach/image/api/imageDownloadAddress?attachId=8b2b0cb4264f45f9baddbe5b55e966de&docGuid=TmYS4uwXcoXKq0)

### 生成代码

可以看到生成代码被划分为两个组件

![](https://rte.weiyun.baidu.com/wiki/attach/image/api/imageDownloadAddress?attachId=c3d5f1cbd0594d7caf8b6935b81da9be&docGuid=TmYS4uwXcoXKq0)

### 进阶使用 - 增加组件变量

1. 关闭按钮打上bg tag，让它转为<img />标签，同时也打上var Tag，让关闭按钮组件添加变量入参（如下图）
2. 领取按钮同理

![](https://rte.weiyun.baidu.com/wiki/attach/image/api/imageDownloadAddress?attachId=5f4e3ac2feea4a27a53bb0d5d89b5a31&docGuid=TmYS4uwXcoXKq0)

### 再次生成代码

1. 领取按钮和关闭按钮均带上了变量入参

![](https://rte.weiyun.baidu.com/wiki/attach/image/api/imageDownloadAddress?attachId=208894c9975c450093842fc30bd47317&docGuid=TmYS4uwXcoXKq0)

1. 根组件引用了这两个子组件

![](https://rte.weiyun.baidu.com/wiki/attach/image/api/imageDownloadAddress?attachId=474402e387fd4cebabe557a85267dc44&docGuid=TmYS4uwXcoXKq0)
