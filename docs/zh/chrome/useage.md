## 下载

[点击跳转下载插件](https://chromewebstore.google.com/detail/f2c/gmcgpjgoiidajfjhdooaajaeonnmikfc)

## 功能

F2C 的 Chrome 插件能够让开发者在浏览器中在**只读**权限下进行：图层节点信息查看、切图下载或上传、生成代码等一系列动作。

### 切图

![](https://hd-static.yystatic.com/516777080685957.png)
选中要切图的图层节点即可看到该图层节点的预览图片，点击【添加至图层列表】即可在切图列表看到该图。
下方操作栏从左到右分别为：下载到本地、上传至 Bos（暂对内部）、tinypng 压缩、预览模式。

#### tinypng 压缩

![](https://hd-static.yystatic.com/23973485070432288.png)
点击压缩图片按钮能看到一个弹窗让用户选择：不压缩、自定义 Token、互动内部。其中选择后两项则在图片下载或者上传的时候进行自动压缩。
其中选择自定义 Token 可以通过前往 [tinypngtoken 获取链接](https://tinify.com/developers)获取到 token，每个用户每个月可以免费使用 500 次压缩。获取到 token 之后填入保存即可。
![](https://hd-static.yystatic.com/9270612721707413.png)

### 生成代码

![](https://hd-static.yystatic.com/956500220277446.png)
点击右上角的代码按钮可以生成代码，为了合法的拿到设计稿信息，我们需要为开发者生成一个 Figma 合法 Token 来访问设计稿【官方提供】。若之前未授权，点击会跳转至 Figma 官方授权页面，点击 Allow access 即可获得。

![](https://hd-static.yystatic.com/18299035089254667.png)
返回代码模块我们可以看到该图层节点的预览图，底下三个按钮分别为：下载代码文件到本地、浏览器预览代码、跳转至[Comate IDE](https://comate.baidu.com/zh/download/ai-ide)进行更多操作。

![](https://hd-static.yystatic.com/394303999575744.png)
其中跳转到 Comate IDE 后会自动开启 zulu 帮你生成代码！非常方便！
![](https://hd-static.yystatic.com/030820110872549322.png)

如果你使用的是非 Comate 的 IDE 则需要安装 MCP 辅助，你可以通过从浏览器插件中复制链接进行生成代码，参考：https://aicoding.juejin.cn/post/7507206037440856105 ![复制链接](https://hd-static.yystatic.com/9769596685646796.png)

### 标注信息

![](https://hd-static.yystatic.com/4732762241810631.png)
选择任意元素能看到类 devtool 的盒模型信息，相关的 CSS 代码或者 JavaScript 内联代码，相关的属性以及背景颜色。

### 插件

内部使用

## 对比和感谢

当然市面已经有一些相关的插件，例如：[tempad-dev](https://github.com/ecomfe/tempad-dev)。我们也参考了其一些优秀的功能，再次对他们的开发者表示尊敬和感谢。与其相比，我们能够压缩切图，更关键的是与 F2C&Comate 生态进行打通，实现了生成高还原度代码的能力。配合 [f2c-mcp](https://github.com/f2c-ai/f2c-mcp/blob/main/README-zh-CN.md)、[Comate IDE](https://comate.baidu.com/zh/download/ai-ide)，能够将生成的代码更加的拟人化，达到工业级别的代码输出，更便利于开发者采纳和使用。

## 未来

未来我们将结合 F2C&Comate 生态，配合 f2c-mcp、Comate IDE 实现更多功能，包括但不限于：

1. 图片上传服务自定义
2. 设计稿信息配置上传
3. prompt to figma，一句话生成设计稿
4. 智能识别设计与开发组件，打通 prompt to fimga to code 功能

其中 3 和 4 已经有实质性的进展，敬请期待。
