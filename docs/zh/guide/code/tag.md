# 图层标签

图层标签能够改变转代码的行为, 目前F2C定义了以下这些图层标签。

| 标签类别 | 标签名称  |                                                   作用                                                    | 
| -------- | :-------- | :-------------------------------------------------------------------------------------------------------: |
| 常用标签 | bg        | 在转代码过程中将图层强转为图片，被标记的图层将以 png 格式的图片导出。用于解决复杂特效图层，减少分析成本。 |
| &nbsp;   | var       | 标记过的节点，会在生成阶段为节点创建 React 组件的 Properties，使一个图层（JSX 片段）拥有二次开发的能力。  |
| &nbsp;   | subComp   |              被标记节点将会以子组件形式提取出来，并放置到同文件下                |
| &nbsp;   | module       |               被标记节点将会以子组件形式抽取为子组件文件夹               |
| &nbsp;   | slot      |                                 添加过该标签的图层，会生成 slot 变量插槽                                  |
| 列表标签  | list      |                       使用 list 标签添加到列表的父图层，需要结合 item 标签一起使用                        |
| &nbsp;   | item      |                                   使用 item 标签添加到列表的 item 图层                                    |
| Tab 标签 | tabList   |                                     用于标记可以点击切换节点的父容器                                      |
| &nbsp;   | tabPane   |                                        用于标记要切换内容的节点。                                         |
| &nbsp;   | tabSlider |                                       可选标记，用于标记的滑块节点                                        |
