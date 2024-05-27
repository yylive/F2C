# 基本用法

## 背景
[F2C的Chrome插件](https://chromewebstore.google.com/detail/figma-node-inspect/gmcgpjgoiidajfjhdooaajaeonnmikfc)旨在解决 **Figma Web** 侧、**view-only** 情况下，查看图层CSS属性的问题。

## 使用步骤
1. 下载F2C的Chrome插件，地址为：https://chromewebstore.google.com/detail/figma-node-inspect/gmcgpjgoiidajfjhdooaajaeonnmikfc
2. 在chrome浏览器打开任意Figma设计稿
3. 选中相应图层，即可看到相关CSS属性代码
![演示图](https://hd-static.yystatic.com/9584196921095227.png)

## 注意事项
由于Fimga暂时封禁了view-only下全局属性，恢复时间未知，导致插件从0.1.0版本后采用模拟复制的做法获取图层属性，这就造成几点局限性：
1. 需要在Chrome中允许复制权限，一般在插件激活时产生
2. 需要保证Fimga网页中右侧面板切换至 Properties，如下图所示：
![演示图](https://hd-static.yystatic.com/32857028911464137.png)
3. 需要保证光标聚焦在设计稿中，否则插件会提示模拟复制失败
![演示图](https://hd-static.yystatic.com/6407438051758874.png)
4. 会遗失部分属性，例如 Autolayout 相关属性
5. 若后续Figma更改属性结构，插件需要重新解析并发布新版