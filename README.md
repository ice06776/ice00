# Pixel Portfolio

极致像素风+星河谷风格个人在线作品集

## 特色
- React + Vite 构建，极速开发
- 像素风UI、星空背景、丰富动效
- 响应式设计，移动端适配
- 适合部署到GitHub Pages

## 本地开发
```bash
npm install
npm run dev
```

## 构建与部署
1. 构建静态文件：
   ```bash
   npm run build
   ```
2. 将 `dist/` 目录内容推送到 GitHub 仓库的 `gh-pages` 分支
3. 在仓库设置中启用 GitHub Pages，选择 `gh-pages` 分支

## 依赖
- React
- Three.js
- GSAP
- Howler.js

## 目录结构
- `src/components/` 主要组件
- `src/styles/` 全局与像素风样式
- `public/assets/` 像素图标与素材

---
如需自定义作品内容，请编辑 `src/data/projects.js` 或相关组件。 