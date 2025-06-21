# JuJ Hub 技术文档及开发指南

## 提示词模板（便于后续开发）

当您想要开发新功能或页面时，可以使用以下模板向开发者或AI助手提供信息：

```
需求：[简要描述新功能/页面]
页面类型：[详情页/列表页/管理页/表单页等]
主要功能点：
1. [功能点1]
2. [功能点2]
...
参考样式：[现有页面，如"首页的卡片样式"或"分类页的布局"]
特殊要求：[任何特定的交互/动效/响应式需求]
```

## 技术架构文档

### 1. 项目架构
- **框架**：Next.js 15+（App Router）
- **UI库**：React 19+
- **样式方案**：TailwindCSS 4+
- **状态管理**：React Hooks
- **动画库**：Framer Motion 12+
- **图标**：React Icons + 阿里巴巴iconfont
- **构建工具**：内置SWC编译器

### 2. 目录结构
```
jujhub/
├── app/                      # 应用目录
│   ├── components/           # 共享组件
│   ├── category/[id]/        # 分类页面
│   ├── software/[id]/        # 软件详情页
│   ├── data/                 # 数据模型
│   ├── globals.css           # 全局样式
│   ├── layout.tsx            # 布局组件
│   ├── page.tsx              # 首页
│   └── not-found.tsx         # 404页面
├── public/                   # 静态资源
└── next.config.ts            # Next.js配置
```

### 3. 核心组件库

| 组件名 | 用途 | 关键特性 |
|--------|------|---------|
| `Navbar` | 导航栏 | 响应式、滚动渐变、下拉菜单 |
| `Footer` | 页脚 | 联系信息、版权 |
| `Hero` | 首页横幅 | 动画文字、特性卡片 |
| `SoftwareCard` | 软件卡片 | 图片/图标切换、悬停效果 |
| `CategorySection` | 分类区块 | 标题、软件列表、边框效果 |
| `BackgroundEffect` | 背景效果 | 渐变、网格、粒子动画 |
| `ImageWithFallback` | 图片处理 | 加载状态、错误回退、优化 |
| `IconFont` | 图标组件 | 阿里巴巴矢量图标封装 |
| `SearchBar` | 搜索组件 | 实时搜索、结果筛选 |
| `BackToTop` | 返回顶部 | 滚动检测、平滑动画 |

### 4. 设计规范

#### 颜色系统
- **主色**：紫色系 (`from-purple-400 to-blue-500`)
- **背景**：深灰/黑色 (`bg-gray-900`, `bg-gray-800/50`)
- **文字**：白色/浅灰 (`text-white`, `text-gray-300`)
- **强调**：渐变色 (多种渐变组合)
- **边框**：半透明灰/紫 (`border-gray-700/30`, `border-purple-500/10`)

#### 间距
- 页面内边距：`px-4 sm:px-6 lg:px-8`
- 组件间距：`gap-4 sm:gap-6`
- 区块间距：`my-20`, `py-10`

#### 阴影与模糊效果
- 卡片阴影：`shadow-md shadow-purple-500/15`
- 模糊背景：`backdrop-blur-lg`
- 透明度变化：`bg-gray-800/50`, `/80`, `/90`等

#### 动画效果
- 渐入：`initial={{ opacity: 0 }} animate={{ opacity: 1 }}`
- 悬停：`hover:scale-[1.02]`, `hover:-translate-y-1`
- 背景粒子：背景特效中的浮动粒子

#### 响应式断点
- 移动端优先设计
- 主要断点：`sm:`, `md:`, `lg:`

### 5. 数据模型

#### Software接口
```typescript
interface Software {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  description: string;
  imageUrl: string;
  downloadUrl?: string;
  officialUrl?: string;
  iconType?: string;
}
```

#### Category接口
```typescript
interface CategoryInfo {
  id: string;
  name: string;
  description: string;
}
```

### 6. 性能优化策略
- 图片优化：WebP/AVIF格式、适当尺寸
- CSS加载优化：异步加载非关键CSS
- JS优化：客户端/服务端组件分离
- 预加载关键资源
- 延迟加载非关键组件
- 缓存控制：适当的Cache-Control头
- 资源压缩：开启gzip/brotli
- 代码分割：动态导入组件

### 7. 无障碍性考量
- 所有交互元素设置`tabIndex`和`aria-label`
- 合理的标题层级
- 键盘导航支持
- 适当的颜色对比度
- 屏幕阅读器友好的标记
- 跳过导航链接

### 8. 开发流程建议
1. 先确定页面结构和数据模型
2. 开发核心功能组件
3. 实现页面骨架布局
4. 添加动画和交互效果
5. 优化性能和资源加载
6. 测试（设备兼容性、无障碍性）

### 9. 后续扩展方向
- 管理后台（软件增删改查）
- 用户系统（收藏、评论）
- 软件版本追踪
- 多语言支持
- 暗色/亮色主题切换
- 离线支持 (PWA)
- 移动应用包装 (Capacitor/Cordova)

## 常见问题解决方案

### 1. 图片加载失败处理
使用`ImageWithFallback`组件，它会自动处理图片加载失败情况，显示默认占位图：

```tsx
<ImageWithFallback
  src={imageUrl}
  alt={name}
  fill
  className="object-contain"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### 2. 性能改进
如果页面加载速度变慢，考虑以下方案：
- 检查不必要的动画效果
- 优化大型图片资源
- 延迟加载非首屏内容
- 减少第三方库的使用

### 3. 添加新分类/软件
更新`app/data/software.ts`文件中的`categories`和`software`数组：

```typescript
// 添加新分类
categories.push({
  id: 'new-category',
  name: '新分类名称',
  description: '分类描述'
});

// 添加新软件
software.push({
  id: 'new-software',
  name: '软件名称',
  category: '分类名称',
  categoryId: 'category-id',
  description: '软件描述',
  imageUrl: '图片URL',
  downloadUrl: '下载URL',
  officialUrl: '官方网站URL',
  iconType: '图标类型（可选）'
});
```

## 部署指南

### 开发环境
```bash
# 开发服务器
npm run dev

# 构建
npm run build

# 生产环境启动
npm start
```

### 生产环境部署
1. 执行`npm run build`构建生产版本
2. 使用`npm start`启动服务
3. 或将构建产物部署到静态托管服务

## 联系方式与支持

如有疑问或需要支持，请联系：
- 微信号：JuJCSGO 