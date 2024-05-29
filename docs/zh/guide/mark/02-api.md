# 组件标记 API

![](https://rte.weiyun.baidu.com/wiki/attach/image/api/imageDownloadAddress?attachId=64630b22913e46a08051dc8b6aea1c2f&docGuid=BqRvYe-4gvtg7q)

## getComponentData()

> **ReturnType<typeof getComponentData>**

| 参数         | 说明                                 | 类型                              | 备注 |
| -------------- | -------------------------------------- | ----------------------------------- | ------ |
| export       | 组件的导出模块名                     | string                            |      |
| typeExport   | 组件类型的导出模块名                 | string                            |      |
| importLib    | 组件npm库名称                        | string                            |      |
| constProps   | 组件属性是否转为json，再通过解构传入 | boolean                           |      |
| dynamicProps | 组件的参数映射表                     | { [propKey: string]: IPropValue } |      |

## dynamicProps

> {[propKey:string]:IDynamicPropsValue}

| 参数                    | 说明                                                                                                                                                                           | 类型                                                                                                                                                                                                                                | 示例                                                                                                                                                   |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| propKey                 | 组件参数名称,可以使用'a.b'这种格式                                                                                                                                             | string                                                                                                                                                                                                                              | style | 'style.background'                                                                                                                             |
| **IDynamicPropsValue** | 组件参数的映射配置                                                                                                                                                             | **IPropValueObject**                                                                                                                                                                                                               | 两种情况如下                                                                                                                                           |
| nodePath                | 组件路径，使用‘>’连接                                                                                                                                                        | string | string[]                                                                                                                                                                                                                   | 如‘Button>content’,多个变体的层级不一样，可以传入不同层级下的nodePath数组兼容                                                                        |
| getPropValue            | getPropValue的值是string，调用[*内置方法*](https://ku.baidu-int.com/knowledge/HFVrC7hq1Q/M-wK0zh99p/mTQY0VEf8w/BqRvYe-4gvtg7q#anchor-a9aa74c0-5153-11ee-99fd-cb8a4acf3497)得到值 | string                                                                                                                                                                                                                              | {collor: {nodePath:'Button>content',*// 获取按钮颜色*getPropValue:'getTextColor',}}                                                                   |
| getPropValue            | getPropValue是function，通过node上的figma原生属性拿到值                                                                                                                        | function(node, _) {}/** param node */Figma原始node，文档：[https://www.figma.com/plugin-docs/api/nodes/](https://www.figma.com/plugin-docs/api/nodes/)/** param _ */_里面包含了F2C的工具函数，如_.getNodeImg(node),传入figma的原生node | {textStyle:{nodePath:'Button>content',*// 获取图层字体大小* **getPropValue** :(node, _)=>{return{bg: _.getNodeImg(node),fontSize:node.fontSize,}},}} |

## 使用场景和示例

### **场景1** : Figma原生属性映射、

直接在组件节点上获取变体参数，映射到对应的props上

如以下代码会解析为`<Button type='primary' danger={true} disabled={false} />`

```js
function getComponentData(component) {
  const {variantProperties} = component
  return {
    dynamicProps: {
      type: {
        主要按钮: 'primary',
        次要按钮: 'default',
        线形按钮: 'default',
        虚线按钮: 'dashed',
        文本按钮: 'text',
        链接按钮: 'link',
      }[variantProperties.样式],
      danger: variantProperties.类型 === '危险',
      disabled: variantProperties.状态 === '禁用',
    },
  }
}
```

### **场景2** ：dynamicProps获取节点属性

定义object的nodePath和getPropValue结合使用，可以获取图层节点的信息转化为组件的props，

如以下代码会解析为`<Button textStyle={{fontSize: 14}} />`

```js
function getComponentData() {
  return {
    dynamicProps: {
      textStyle: {
        // 图层位置路径
        nodePath: 'Button>content',
        // 获取图层字体大小
        getPropValue: node => {
          return {
            fontSize: node.fontSize,
          }
        },
      },
    },
  }
}
```

### **场景3** ：Key的链式写法

接场景二，以下代码同样会解析为`<Button textStyle={{fontSize: 14}} />`

```js
function getComponentData() {
  return {
    dynamicProps: {
      'textStyle.fontSize': {
        nodePath: 'Button>content',
        getPropValue: node => {
          return node.fontSize
        },
      },
    },
  }
}
```

### **场景4** ：getPropValue 工具函数调用

以下配置解析为`<Button textStyle={{color: '#FFF'}} />`

#### 写法1：function写法

```js
function getComponentData() {
  return {
    dynamicProps: {
      'textStyle.color': {
        nodePath: 'Button>content',
        getPropValue: (node, _) => {
          return _.getTextColor(node)
        },
      },
    },
  }
}
```

#### 写法2：直接填赋值为方法名，可减少代码量
```js
function getComponentData() {
  return {
    dynamicProps: {
      'textStyle.color': {
        nodePath: 'Button>content',
        getPropValue: 'getTextColor'
      },
    },
  }
}
```
#### 写法3：字符串模板写法 ，(注意使用引号）

解析为`<Button textStyle={{fontSize: '14px'}} />`

```js
function getComponentData() {
  return {
    dynamicProps: {
      'textStyle.fontSize': {
        nodePath: 'Button>content',
        // 使用单引号或双引号
        getPropValue: '${getFontSize}px'
        // 也可以用如下写法
        // getPropValue: (node, _) => `${_.getFontSize(node)}`
      },
    },
  }
}
```

### **场景4** ：使用合并配置到单个Key

#### 写法1：约定数组每一项的`getPropValue`返回值返回 `object`，生成后将合并

以下配置解析为`<Button style={{ fontSize: 14, backgroundColor: '#ccc' }} />`

```js
function getComponentData() {
  return {
    dynamicProps: {
      'style': [
          {
            nodePath: 'Button>content',
            getPropValue:(node) => {
              return{
                fontSize: node.fontSize
              }
            }
          },
          {
            nodePath: 'Button',
            getPropValue:(node，_) => {
              return{
                backgroundColor: _.getBackgroundColor(node)
              }
            }
          },
      ]
    },
  }
}
```

#### 写法2：约定数组每一项的`getPropValue`返回值返回 `非object`，则会以数组形式合并

以下配置解析为`<Button style={[14, '#ccc']} />`
```js
function getComponentData() {
  return {
    dynamicProps: {
      'style': [
          {
            nodePath: 'Button>content',
            getPropValue:(node) => node.fontSize
          },
          {
            nodePath: 'Button',
            getPropValue:(node，_) => {
              return _.getBackgroundColor(node)
            }
          },
      ]
    },
  }
}
```
## getPropValue节点解析函数

| 函数名                          | 类型                       | 作用                                             | 返回值示例                                                                                                         | 备注                                                                                                 |
| --------------------------------- | ---------------------------- | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **getStyles**                  | () => {}                         | 获取节点css属性                                  | {width: "123px", height: "123px"}                                                                                  | [getStyles详细用法](https://ku.baidu-int.com/knowledge/HFVrC7hq1Q/M-wK0zh99p/mTQY0VEf8w/9f1b425018a041) |
| getGradientColors               | string[]                   | 获取节点的渐变色数组                             | [''#fff', '#000']                                                                                                  |                                                                                                      |
| getNodeImg                      | string                     | 获取节点的图片资源地址                           | require('./assets/ImageAsset2.png'),预览时返回图片的cdn地址                                                        |                                                                                                      |
| getNodeText                     | string                     | 获取节点文案内容                                 | ‘昵称’                                                                                                           |                                                                                                      |
| setNodeMarkInfo                 | (node, key, value) => void | 用于打tag （beta）                               | _.setNodeMarkInfo(node, 'tags', ['innerProps_class']) _.setNodeMarkInfo(node, 'layerInfo', {varName: 'rollupBox'}) |                                                                                                      |
| getComponentInfoByNode          | () => {}                         | 用于嵌套组件的标记信息和组件参数                 | {info: {} // 标记内容props: {} // 组件入参}                                                                        |                                                                                                      |

## 参考

Figma Node 官方文档：[https://www.figma.com/plugin-docs/api/nodes/](https://www.figma.com/plugin-docs/api/nodes/)
