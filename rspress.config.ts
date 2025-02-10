import * as path from "node:path";
import rspressPluginSitemap from "rspress-plugin-sitemap";
import { defineConfig } from "rspress/config";

export default defineConfig({
	// lang: 'zh',
	base: "/",
	root: path.join(__dirname, "docs"),
	title: "YY F2C - Figma & AI相结合生成开发代码的一站式解决方案",
	description: "figma code react vue arks html css",
	icon: "/rspress-icon.png",
	lang: "zh",
	logo: {
		light: "/rspress-light-logo.png",
		dark: "/rspress-dark-logo.png",
	},
	globalStyles: path.join(__dirname, "theme", "index.scss"),
	markdown: {
		checkDeadLinks: true,
	},
	themeConfig: {
		socialLinks: [
			{
				icon: "github",
				mode: "link",
				content: "https://github.com/yylive/F2C",
			},
		],
		locales: [
			{
				lang: "en",
				label: "English",
				title: "emp",
				description: "The Rspack-based build tool for the web",
			},
			{
				lang: "zh",
				label: "简体中文",
				title: "emp",
				outlineTitle: "目录",
				prevPageText: "上一页",
				nextPageText: "下一页",
				description: "基于Rust生态打造的高性能前端构建系统",
			},
		],
	},
	builderConfig: {
		source: {
			alias: {
				"@components": path.join(__dirname, "theme/components"),
				"@en": path.join(__dirname, "docs/en"),
				"@zh": path.join(__dirname, "docs/zh"),
			},
		},
	},
  plugins: [
    rspressPluginSitemap({
      domain: "https://f2c.yy.com",
    }),
  ]
});
