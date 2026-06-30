# 拾光 (Shiguang)

个人日记 / 数字手账，一个受密码保护的网页端应用，用 Notion 做数据存储。

## 功能

- **密码锁屏** — 进入前需输入密码，点击锁定按钮可返回锁屏界面
- **七种卡片类型** — 灵感想法、好句摘录、忧虑心事、摘抄（带感悟）、小目标、开心小事、书单（含阅读状态）
- **Notion 后端** — 数据存储在 Notion 数据库中，通过 Cloudflare Worker 代理调用 Notion API，避免跨域问题
- **完整 CRUD** — 支持新建、查看、编辑（卡片内联编辑）、删除笔记
- **筛选与搜索** — 按类型过滤 + 文本搜索（搜索内容、感悟、书名）
- **响应式设计** — 适配桌面和移动端

## 技术栈

- 单文件 HTML（内嵌 CSS + 原生 JavaScript），无框架，无构建步骤
- Notion API + Cloudflare Worker 代理
- 配置信息（API Token、Database ID）存储在 localStorage

## 使用方式

直接用浏览器打开 `index.html`，输入 Notion API Token 和 Database ID 连接数据库即可使用。
