# Karas Studio - 实现说明

## 项目概述

本项目是基于 Figma 设计稿 (node-id: 125:702) 实现的 Karas Studio 个人作品集网站。

## 技术栈

- **React** 19.2.0
- **HeroUI v3** (Beta 3) - UI 组件库
- **Tailwind CSS v4** - 样式框架
- **Vite** 7.2.4 - 构建工具

## 项目结构

```
src/
├── components/
│   ├── Header.jsx          # 顶部导航栏 (backup, Logo, 语言切换)
│   ├── Footer.jsx          # 底部 Logo
│   ├── MainTitle.jsx       # 主标题 "KARAS Design Studio"
│   ├── GridCard.jsx        # 通用卡片组件
│   ├── PersonalProfile.jsx # 个人简介卡片
│   ├── WorkList.jsx        # 作品列表卡片
│   ├── ImageGallery.jsx    # 图片展示卡片 (支持横向/纵向)
│   ├── Journey.jsx         # 旅程轮播卡片
│   └── PlaceholderCard.jsx # 占位符卡片组件
├── assets/
│   ├── logo-placeholder.svg # Logo 占位符
│   └── images/             # 图片资源目录
├── App.jsx                 # 主应用组件
├── index.css              # 全局样式和 CSS 变量
└── main.jsx               # 应用入口

## 设计规范

### 颜色
- 背景色: `#fcfcfc` (snow)
- 主文字: `#0f172a` (slate-900), `#18181b` (foreground)
- 次要文字: `#71717a` (muted)
- 卡片背景: `white`
- 默认按钮: `#ebebec`

### 字体
- **Rubik Glitch** - 主标题专用字体 (96px)
- **Inter** - 正文字体
  - Regular (400) - 小字 12px
  - Medium (500) - 正文 14-16px
  - Semi Bold (600) - 标题 16px

### 尺寸
- 容器宽度: 1336px
- 网格布局: 8列 × 24行
- 卡片圆角: 12px
- 按钮圆角: 24px
- 卡片间距: 20px

### 阴影
所有卡片使用统一阴影效果:
```css
shadow-[0px_2px_4px_0px_rgba(0,0,0,0.04),
        0px_1px_2px_0px_rgba(0,0,0,0.06),
        0px_0px_1px_0px_rgba(0,0,0,0.06)]
```

## 网格布局详情

页面使用 CSS Grid 布局,主要模块位置:

| 模块 | 网格位置 | 尺寸 |
|------|---------|------|
| Typewriter | 1-8行, 1-5列 | 大型 |
| Personal Profile | 1-3行, 6-8列 | 中型 |
| Work List | 4-7行, 6-8列 | 中型 |
| 刮开有奖 | 8行, 6-8列 | 小型 |
| AI-illustration (横) | 9-15行, 1-6列 | 大型 |
| AI-illustration (竖) | 9-19行, 7-8列 | 高型 |
| white-noise | 16-24行, 1-2列 | 高型 |
| Easter egg1 | 16-19行, 3-4列 | 中型 |
| OFF-ON | 16-19行, 5-6列 | 中型 |
| Journey | 20-24行, 3-5列 | 中型 |
| Easter egg2 | 20-24行, 7-8列 | 中型 |

## 组件说明

### Header
三栏布局:
- 左侧: "backup" 文字
- 中间: Karas Logo
- 右侧: CN/EN 语言切换 (Tabs 组件样式)

### MainTitle
使用 Rubik Glitch 字体显示:
```
KARAS
Design Studio
```

### PersonalProfile
包含:
- 猴子图标占位符 (🐵)
- 两行个人介绍文字

### WorkList
显示三个作品项:
- Baiwang
- 国家税务系统（金税四期）
- 鲸洗舱

每项右侧有箭头按钮。

### ImageGallery
支持横向和纵向两种变体,包含:
- 图片展示区域
- 左右切换按钮
- "more" 按钮

### Journey
包含:
- 图片展示区域
- 标题 "Journey"
- 8个分页指示器 (第一个高亮)

## 开发命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview

# 代码检查
npm run lint
```

## 待完善功能

当前实现为静态布局版本,以下功能可在后续迭代中添加:

1. **打字机效果** - Typewriter 卡片的动画效果
2. **图片轮播** - ImageGallery 和 Journey 的左右切换功能
3. **语言切换** - CN/EN 双语支持
4. **刮刮卡** - "刮开有奖" 交互效果
5. **白噪音** - white-noise 音频播放
6. **彩蛋** - Easter egg 隐藏功能
7. **实际图片** - 替换当前的占位符图片
8. **实际 Logo** - 替换 Logo 占位符

## 图片资源说明

当前使用占位符图片,需要替换为实际资源:
- Logo (66×42px 和 50×32px 两种尺寸)
- 个人头像/图标
- AI 插图 (横向和纵向)
- Journey 图片

图片应放置在 `src/assets/images/` 目录下。

## 注意事项

1. **Figma 节点追溯**: 所有主要元素都包含 `data-node-id` 属性,可追溯到原始 Figma 设计
2. **CSS 变量**: 使用 CSS 变量定义设计 tokens,便于主题定制
3. **响应式**: 当前为固定宽度 1336px,适配桌面端
4. **HeroUI v3**: 使用 Beta 版本,API 可能变化

## 自定义主题

可通过修改 `src/index.css` 中的 CSS 变量来自定义主题:

```css
:root {
  --colors-snow: #fcfcfc;
  --colors-slate-900: #0f172a;
  /* ... 更多变量 */
}
```

## 浏览器支持

- Chrome/Edge (最新版)
- Firefox (最新版)
- Safari (最新版)

需要支持 CSS Grid、CSS 变量和现代 JavaScript 特性。

