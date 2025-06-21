# JuJ Hub

一站式软件下载平台，提供常用软件、游戏必备、驱动下载、检测工具、直播推流、桌面美化等多种软件资源。

## 项目简介

JuJ Hub是专为软件下载需求打造的平台，采用现代化的UI设计，分类清晰，操作简便，用户可以轻松找到并下载所需软件。

## 技术栈

- **前端框架**: Next.js 15+
- **UI库**: React 19+
- **样式**: TailwindCSS 4+
- **动画**: Framer Motion 12+
- **语言**: TypeScript 5+
- **图标**: React Icons 5+, 阿里巴巴矢量图标库(iconfont)

## 功能特点

- 📱 响应式设计，适配移动端和桌面端
- 🔍 分类浏览，快速定位软件
- 📦 软件详情展示
- 🔄 丰富的动效和交互体验
- 🖼️ 图片加载失败处理机制
- ✨ 炫酷背景效果，包含渐变、粒子动画和光效
- 🎨 集成阿里巴巴矢量图标库，提供美观的软件图标
- ⬆️ 返回顶部按钮，提供快捷导航体验

## 使用指南

### 开发环境

1. 克隆项目
   ```
   git clone <仓库地址>
   cd jujhub
   ```

2. 安装依赖
   ```
   npm install
   ```

3. 启动开发服务器
   ```
   cd jujhub; npm run dev
```

4. 打开浏览器访问 http://localhost:3000

### 生产环境

1. 构建生产版本
   ```
   npm run build
   ```

2. 启动服务
   ```
   npm start
   ```

## 项目结构

```
jujhub/
├── app/                      # 应用目录
│   ├── components/           # 组件目录
│   │   ├── BackgroundEffect.tsx  # 背景效果组件
│   │   ├── BackToTop.tsx        # 返回顶部按钮组件
│   │   ├── CategorySection.tsx   # 分类区块组件
│   │   ├── Footer.tsx           # 页脚组件
│   │   ├── Hero.tsx             # 首页Hero区域组件
│   │   ├── IconFont.tsx         # 阿里巴巴矢量图标组件
│   │   ├── ImageWithFallback.tsx # 图片回退处理组件
│   │   ├── Navbar.tsx           # 导航栏组件
│   │   ├── SearchBar.tsx        # 搜索组件
│   │   └── SoftwareCard.tsx     # 软件卡片组件
│   ├── category/             # 分类页面
│   │   └── [id]/             # 动态路由分类页
│   │       └── page.tsx      # 分类详情页面
│   ├── software/            # 软件详情页面
│   │   └── [id]/            # 动态路由软件页
│   │       └── page.tsx     # 软件详情页面
│   ├── data/                # 数据文件
│   │   └── software.ts      # 软件数据和分类
│   ├── globals.css          # 全局样式
│   ├── layout.tsx           # 布局组件
│   ├── page.tsx             # 首页
│   ├── not-found.tsx        # 404页面
│   └── favicon.ico          # 网站图标
├── public/                  # 静态资源
├── next.config.mjs          # Next.js配置
├── next.config.js           # 额外的Next.js配置
├── next.config.ts           # TypeScript的Next.js配置
├── tailwind.config.ts       # TailwindCSS配置
├── postcss.config.mjs       # PostCSS配置
├── tsconfig.json            # TypeScript配置
├── eslint.config.mjs        # ESLint配置
├── next-env.d.ts            # Next.js类型声明
├── PROJECT_LOG.md           # 项目日志
└── README.md                # 项目说明
```

## 维护与更新

请参考 [PROJECT_LOG.md](./PROJECT_LOG.md) 文件查看项目开发日志和进度。

## 联系方式

微信号：JuJCSGO
