# [进阶] list 用法

## 简介[​](http://localhost:3000/docs/showcase/list#%E7%AE%80%E4%BB%8B)

`list`标签主要用来处理`列表`中组件重复的使用场景，其需要和`item`标签结合使用。列表图层使用`list`标签，item图层使用`item`标签，会为其创建一个`<Item />`组件。

例如：

![](./tag-list.assets/44a35163bd4dff21a3d939dcb7154390.png)

![](./tag-list.assets/02bb51f2942a3df4b10345a4c5f2c324.png)

## 使用示例

若未安装f2c插件，请阅读[F2C 快速上手](https://ku.baidu-int.com/knowledge/HFVrC7hq1Q/M-wK0zh99p/mTQY0VEf8w/Z3NSVyUXRhnTxB)。

Figma设计稿：[https://www.figma.com/design/eQ6iQwUJPCVtZFwSPxdHBv/F2C%E8%BF%9B%E9%98%B6%E7%94%A8%E6%B3%95?node-id=460-1530&t=s3LEruNvD8zoVKK9-4](https://www.figma.com/design/eQ6iQwUJPCVtZFwSPxdHBv/F2C%E8%BF%9B%E9%98%B6%E7%94%A8%E6%B3%95?node-id=460-1530&t=s3LEruNvD8zoVKK9-4)

### 第一步，将list与item节点按如图添加tag

![](./tag-list.assets/59cb69dada4dfb28eb6ba1e719a76fce.png)

### 第二步，生成代码

1. 首先是RankList的代码，我们为item节点生成了listData数据
2. list节点会自动创建列表循环代码

![](./tag-list.assets/8aa6a73834b8800f84da637750ac8f37.png)

1. Item组件被抽取，带有var标签的节点被创建变量入参

![](./tag-list.assets/abffbc7305b0d08b14228106adedd917.png)

