# Leone1111

这是一个使用 Astro 和 Markdown 构建的个人记录网站，用于长期记录想法、读书笔记、科研项目和个人项目。

网站是纯静态项目，不需要后端、数据库或登录系统。内容全部放在本地 Markdown 文件里，适合用 GitHub 管理，也适合部署到 Netlify。

## 后续如何维护

### 1. 新增一篇文章

所有文章都放在：

```text
src/content/notes/
```

新增文章时，复制一篇现有 Markdown，改文件名和 frontmatter 即可。建议文件名使用英文短横线，例如：

```text
src/content/notes/my-new-note.md
src/content/notes/vasp-convergence-test.md
```

每篇文章开头必须包含这些字段：

```yaml
---
title: "文章标题"
date: 2026-05-22
category: "ideas"
summary: "一句话摘要，显示在首页和分类页。"
featured: false
---
```

字段说明：

- `title`：文章标题
- `date`：发布日期或更新日期，建议使用 `YYYY-MM-DD`
- `category`：文章所属栏目
- `summary`：文章摘要
- `featured`：是否显示在首页“精选内容”模块，写 `true` 或 `false`

### 2. 可用栏目

目前支持这些栏目：

| category | 页面 | 用途 |
| --- | --- | --- |
| `ideas` | `/ideas` | 想法、观察、长期问题 |
| `books` | `/books` | 读书笔记、摘录、书评 |
| `projects` | `/projects` | 个人项目、工具原型、阶段成果 |
| `research` | `/research` | 科研项目、实验进展、阶段记录 |

如果以后要增加新栏目，需要同时更新：

```text
src/lib/content.ts
src/pages/
```

简单做法是复制一个现有分类页，例如 `src/pages/ideas.astro`，改成新栏目的路径和 `category`。

## 本地预览和修改

第一次使用时安装依赖：

```bash
npm install
```

启动本地开发服务器：

```bash
npm run dev
```

终端会显示一个本地地址，通常是：

```text
http://localhost:4321
```

打开这个地址后，就可以边修改边预览。常见修改位置：

| 想修改的内容 | 文件位置 |
| --- | --- |
| 首页内容和模块 | `src/pages/index.astro` |
| 文章内容 | `src/content/notes/*.md` |
| 栏目名称和描述 | `src/lib/content.ts` |
| 全站样式 | `src/styles/global.css` |
| 导航栏 | `src/layouts/BaseLayout.astro` |
| 文章详情页结构 | `src/layouts/PostLayout.astro` |

修改完成后，建议运行一次构建检查：

```bash
npm run build
```

如果构建通过，说明 Markdown frontmatter 和页面结构基本没有问题。

## 推荐的更新流程

日常维护可以按这个顺序：

1. 在 `src/content/notes/` 新增或修改 Markdown。
2. 运行 `npm run dev` 本地预览。
3. 检查首页、对应分类页和文章详情页。
4. 运行 `npm run build` 做构建检查。
5. 提交到 GitHub。
6. Netlify 自动重新部署。

## 上传到 GitHub

如果这是一个新仓库，可以在项目目录执行：

```bash
git init
git add .
git commit -m "Initial personal knowledge space"
```

然后在 GitHub 新建一个空仓库，把远程地址添加进来：

```bash
git remote add origin https://github.com/你的用户名/你的仓库名.git
git branch -M main
git push -u origin main
```

后续每次更新文章或样式：

```bash
git add .
git commit -m "Update notes"
git push
```

项目里的 `.gitignore` 已经忽略了这些不需要上传的内容：

```text
node_modules/
dist/
.astro/
.npm-cache/
.netlify/
```

所以 GitHub 里只会保留源码、Markdown 内容和配置文件。

## 部署到 Netlify

### 方法一：通过 GitHub 自动部署

这是最推荐的方式。

1. 把项目上传到 GitHub。
2. 登录 Netlify。
3. 点击 `Add new site`。
4. 选择 `Import an existing project`。
5. 选择你的 GitHub 仓库。
6. 构建设置保持如下：

```text
Build command: npm run build
Publish directory: dist
```

这些设置已经写在 `netlify.toml` 里：

```toml
[build]
command = "npm run build"
publish = "dist"
```

之后你每次 `git push` 到 GitHub，Netlify 都会自动重新构建并发布网站。

### 方法二：使用 Netlify CLI 手动部署

如果你想在本地手动发布，可以使用：

```bash
npx netlify login
npx netlify init
npx netlify deploy
```

预览确认没问题后，发布到正式站点：

```bash
npx netlify deploy --prod
```

如果已经通过 GitHub 自动部署，通常不需要手动执行这些命令。

## 自定义域名

部署成功后，Netlify 会先给你一个默认网址，例如：

```text
https://your-site-name.netlify.app
```

如果你有自己的域名，可以在 Netlify 的站点设置里进入：

```text
Domain management
```

然后添加自定义域名。Netlify 会提示你应该在域名服务商那里配置哪些 DNS 记录。

## 内容备份建议

这个网站的核心资产是 Markdown 文件。建议：

- 所有文章都写在 `src/content/notes/`
- 定期 `git push` 到 GitHub
- 不要只依赖本地文件夹保存长期笔记
- 图片、附件等资源以后可以统一放在 `public/` 目录

如果以后文章变多，可以再增加搜索、归档页、按年份浏览、RSS 或深色模式。
# Leone1111_SPACE
