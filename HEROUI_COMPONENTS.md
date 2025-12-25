# HeroUI v3 组件使用说明

本项目已全面使用 HeroUI v3 (Beta 3) 的组件库替换原有的HTML元素实现。

## 已使用的 HeroUI v3 组件

### 1. **Button** 组件
用于所有可点击的按钮元素。

**使用位置：**
- `WorkList.jsx` - 工作列表中的箭头按钮
- `ImageGallery.jsx` - 图片切换按钮和 "more" 按钮

**变体 (variant)：**
- `ghost` - 透明背景按钮（导航箭头）
- `secondary` - 次要按钮（"more" 按钮）

**属性示例：**
```jsx
<Button 
  isIconOnly 
  variant="ghost" 
  size="sm"
  isDisabled={false}
>
  <ArrowIcon />
</Button>

<Button 
  variant="secondary"
  size="sm"
>
  more
  <ArrowIcon />
</Button>
```

**特点：**
- 使用 `onPress` 而非 `onClick`（React Aria 标准）
- 支持 `isIconOnly` 仅图标模式
- 支持 `isDisabled` 禁用状态
- 支持 `isPending` 加载状态

---

### 2. **Tabs** 组件
用于语言切换功能。

**使用位置：**
- `Header.jsx` - 顶部导航栏的 CN/EN 语言切换

**结构：**
```jsx
<Tabs defaultSelectedKey="cn">
  <Tabs.ListContainer>
    <Tabs.List aria-label="Language selection">
      <Tabs.Tab id="cn">
        CN
        <Tabs.Indicator />
      </Tabs.Tab>
      <Tabs.Tab id="en">
        EN
        <Tabs.Indicator />
      </Tabs.Tab>
    </Tabs.List>
  </Tabs.ListContainer>
</Tabs>
```

**特点：**
- 复合组件模式（Compound Components）
- 使用 `Tabs.Indicator` 显示选中状态
- 支持 `defaultSelectedKey` 和 `selectedKey` 控制选中项
- 支持 `onSelectionChange` 回调

---

### 3. **Surface** 组件
用于卡片容器，提供表面层样式。

**使用位置：**
- `GridCard.jsx` - 通用卡片组件的基础
- `PlaceholderCard.jsx` - 刮刮卡等特殊卡片

**变体 (variant)：**
- `default` - 默认表面（白色背景）
- `secondary` - 次要表面（用于刮刮卡的灰色背景）
- `tertiary` - 三级表面
- `quaternary` - 四级表面

**示例：**
```jsx
<Surface variant="default" className="rounded-xl p-6">
  {children}
</Surface>
```

**特点：**
- 自动应用 HeroUI 的表面层样式
- 支持主题切换（亮色/暗色模式）
- 提供一致的视觉层级

---

## 组件映射对照表

| 原HTML元素 | HeroUI v3 组件 | 使用位置 |
|-----------|---------------|---------|
| `<button>` | `<Button>` | WorkList, ImageGallery |
| `<div>` (语言切换) | `<Tabs>` | Header |
| `<div>` (卡片容器) | `<Surface>` | GridCard, PlaceholderCard |

---

## 未使用但可用的组件

以下 HeroUI v3 组件在当前设计中未使用，但在后续功能扩展时可以考虑：

### 交互组件
- **Modal** - 可用于弹窗展示作品详情
- **Tooltip** - 可用于按钮悬停提示
- **Popover** - 可用于更多选项菜单
- **Alert Dialog** - 可用于确认操作

### 表单组件
- **Input** / **TextField** - 可用于搜索功能
- **Select** / **ComboBox** - 可用于筛选功能
- **Switch** - 可用于设置开关（如 OFF-ON 卡片）
- **Checkbox** / **Radio** - 可用于多选/单选

### 布局组件
- **Card** - 可替代自定义的 GridCard
- **Accordion** - 可用于折叠面板
- **Separator** - 可用于分隔线

### 数据展示
- **Skeleton** - 可用于加载占位
- **Spinner** - 可用于加载动画
- **Avatar** - 可用于用户头像

---

## 关键差异：HeroUI v3 vs v2

⚠️ **重要提示：** 本项目使用的是 HeroUI v3 Beta，与 v2 有重大差异

### 主要变化

1. **复合组件模式**
   - v3 使用复合组件（如 `Tabs.Tab`, `Card.Header`）
   - v2 使用扁平 props（如 `<Card title="...">`）

2. **事件处理**
   - v3 使用 `onPress`（React Aria 标准）
   - v2 使用 `onClick`

3. **样式系统**
   - v3 基于 Tailwind CSS v4
   - v2 基于 Tailwind CSS v3

4. **类型安全**
   - v3 提供完整的 TypeScript 支持
   - 更好的类型推断和自动补全

---

## 最佳实践

### 1. 按钮使用
```jsx
// ✅ 推荐：使用 onPress
<Button onPress={() => console.log('clicked')}>
  Click me
</Button>

// ❌ 避免：使用 onClick
<Button onClick={() => console.log('clicked')}>
  Click me
</Button>
```

### 2. 图标按钮
```jsx
// ✅ 推荐：使用 isIconOnly
<Button isIconOnly variant="ghost">
  <Icon />
</Button>

// ❌ 避免：手动设置尺寸
<Button className="w-9 h-9">
  <Icon />
</Button>
```

### 3. 禁用状态
```jsx
// ✅ 推荐：使用 isDisabled
<Button isDisabled>
  Disabled
</Button>

// ❌ 避免：使用 disabled
<Button disabled>
  Disabled
</Button>
```

### 4. 加载状态
```jsx
// ✅ 推荐：使用 isPending
<Button isPending>
  {({isPending}) => (
    <>
      {isPending && <Spinner size="sm" />}
      Submit
    </>
  )}
</Button>
```

---

## 导入示例

```jsx
// 单个组件导入
import { Button } from '@heroui/react';

// 多个组件导入
import { Button, Tabs, Surface } from '@heroui/react';

// 带类型导入（TypeScript）
import { Button, type ButtonProps } from '@heroui/react';
```

---

## 样式自定义

HeroUI v3 组件可以通过 `className` 属性添加自定义样式：

```jsx
<Button 
  variant="secondary"
  className="rounded-full px-6"
>
  Custom Style
</Button>

<Surface 
  variant="default"
  className="hover:shadow-lg transition-shadow"
>
  Hover Effect
</Surface>
```

---

## 主题支持

所有 HeroUI v3 组件都支持亮色/暗色模式，自动适配系统主题：

```css
/* 在 index.css 中配置 */
:root {
  /* Light mode colors */
}

[data-theme="dark"] {
  /* Dark mode colors */
}
```

---

## 注意事项

1. **Beta 版本**：HeroUI v3 仍在 Beta 阶段，API 可能变化
2. **文档参考**：https://v3.heroui.com
3. **浏览器支持**：需要现代浏览器（Chrome 90+, Firefox 88+, Safari 14+）
4. **性能**：HeroUI v3 基于 React Aria，提供出色的可访问性和性能
5. **迁移**：从 v2 到 v3 的迁移工具将在 v3 稳定版发布时提供

---

## 后续优化建议

### 短期（静态功能）
1. 使用 `Skeleton` 组件替换图片占位符
2. 使用 `Card` 组件优化卡片布局
3. 添加 `Tooltip` 提供按钮说明

### 中期（交互功能）
1. 实现 `Tabs` 的 `onSelectionChange` 支持语言切换
2. 使用 `Modal` 展示作品详情
3. 使用 `Switch` 实现 OFF-ON 功能

### 长期（高级功能）
1. 使用 `Accordion` 实现折叠面板
2. 集成 `Form` 组件用于联系表单
3. 使用 `Alert` 组件显示通知消息

---

## 相关文档

- [HeroUI v3 官方文档](https://v3.heroui.com)
- [React Aria 文档](https://react-spectrum.adobe.com/react-aria/)
- [Tailwind CSS v4 文档](https://tailwindcss.com)
- [项目实现说明](./IMPLEMENTATION.md)

