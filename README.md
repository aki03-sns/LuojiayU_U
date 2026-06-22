# 个人网站模板

## 📁 文件结构

```
个人网站/
├── index.html          # 主页面
├── style.css           # 样式文件
├── script.js           # JavaScript交互
├── fonts/              # 字体文件夹（放你的手写字体）
└── README.md           # 使用说明
```

## 🚀 快速开始

### 1. 基本信息修改

打开 `index.html`，修改以下内容：

```html
<!-- 修改标题 -->
<title>个人网站 - 你的名字</title>

<!-- 修改导航栏名字 -->
<a href="#" class="logo">你的名字</a>

<!-- 修改Hero区域 -->
<h1 class="hero-title">你好，我是 <span class="highlight">你的名字</span></h1>
<p class="hero-subtitle">你的职位 | 你的标签</p>

<!-- 修改联系方式 -->
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="https://github.com/yourusername">GitHub</a>
```

### 2. 添加项目视频

打开 `script.js`，修改视频配置：

```javascript
const videoConfig = {
  project1: '你的项目1的BV号',  // 例如：BV1xx411c7mD
  project2: '你的项目2的BV号',
  project3: '你的项目3的BV号',
};
```

### 3. 添加手写字体

1. 完成手写字体制作后，把字体文件放到 `fonts/` 文件夹
2. 打开 `style.css`，取消注释以下代码：

```css
@font-face {
  font-family: 'MyHandwriting';
  src: url('fonts/my-handwriting.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

h1, h2, h3, .logo, .highlight, .section-title {
  font-family: 'MyHandwriting', cursive;
}
```

## 🎨 自定义样式

### 修改颜色

打开 `style.css`，修改颜色变量：

```css
:root {
  --primary-color: #2563eb;    /* 主色调 */
  --primary-dark: #1d4ed8;     /* 深色主色调 */
  --secondary-color: #64748b;  /* 次要颜色 */
  /* ... 其他颜色 */
}
```

### 添加项目卡片

在 `index.html` 的 `.projects-grid` 中添加新的项目卡片：

```html
<div class="project-card">
  <div class="project-image">
    <div class="image-placeholder">
      <span>项目截图</span>
    </div>
  </div>
  <div class="project-info">
    <h3>新项目名称</h3>
    <p>项目简介...</p>
    <div class="tech-tags">
      <span class="tag">技术1</span>
      <span class="tag">技术2</span>
    </div>
    <div class="project-links">
      <a href="#" class="btn btn-small">在线演示</a>
      <a href="#" class="btn btn-small btn-outline">GitHub</a>
      <a href="#" class="btn btn-small btn-outline video-btn">观看视频</a>
    </div>
  </div>
</div>
```

## 📱 响应式设计

网站已经支持响应式，会在手机、平板、电脑上自动适配。

## 🌐 部署

### GitHub Pages（免费）

1. 创建 GitHub 仓库
2. 上传所有文件
3. 在仓库设置中启用 GitHub Pages
4. 访问 `https://你的用户名.github.io/仓库名`

### Vercel / Netlify（推荐）

1. 注册账号
2. 连接 GitHub 仓库
3. 自动部署，获得免费域名

## ✅ 检查清单

- [ ] 修改个人信息
- [ ] 添加项目截图
- [ ] 配置B站视频链接
- [ ] 添加手写字体
- [ ] 修改联系方式
- [ ] 测试所有链接
- [ ] 测试手机端显示
- [ ] 部署到线上

## 💡 提示

- 项目截图可以用 `截图工具` 或 `Snipaste`
- 视频建议压缩到 720p，控制在 50MB 以内
- 定期更新项目内容

---

有问题随时问我！