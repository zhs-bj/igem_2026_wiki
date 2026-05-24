# Fudan iGEM 2026 Wiki — Glycogarden

复旦大学 iGEM 2026 团队 Wiki 站点，项目主题为 **Glycogarden（糖塑有道）**，聚焦糖基化工程（Glycoengineering）。

## 简介

本站基于 **VitePress** 构建，采用自定义 Vue 3 组件主题，首页实现了推开窗户进入花园的沉浸式动画效果。五种不同形状与颜色的花朵分别代表不同的糖基类型，象征糖基化修饰赋予蛋白质的多样功能。

## 技术栈

- **VitePress** v1.6 — 静态站点生成
- **Vue 3** — 组件化开发
- **GSAP + ScrollTrigger** — 动画与视差滚动
- **@vite-pwa/vitepress** — PWA 支持
- **markdown-it-mathjax3** — 数学公式渲染

## 项目结构

```
fudan_2026_wiki/
├── .vitepress/
│   ├── components/        # 自定义 Vue 组件
│   │   ├── HomePage.vue   # 首页（开窗动画 + 花园场景）
│   │   ├── CustomNavbar.vue
│   │   ├── CustomLayout.vue
│   │   └── CustomFooter.vue
│   ├── config.mts         # VitePress 站点配置
│   └── theme/
├── pages/                 # Markdown 内容页
│   ├── index.md           # 首页入口
│   ├── description.md
│   ├── design.md
│   ├── experiments.md
│   ├── team.md
│   └── ... (共 28 个页面)
├── package.json
└── README.md
```

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 更新日志

### 2025-05-24
- 初始化 VitePress 自定义主题工程
- 实现首页推开窗进入花园的 GSAP 动画
- 完成五种糖基花朵 SVG（菱形/圆形/三角形/方形/圆形）
- 自定义顶部导航栏（Project / Technology / Community / Team 四级下拉）
- 生成 28 个内容页面骨架
- 配置 PWA 与本地搜索

## License

本项目为 Fudan iGEM 2026 团队内部使用。
