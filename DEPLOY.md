# Cloudflare 部署

## 先确认：你创建的是 Pages 还是 Worker？

如果构建日志里出现：

```text
Executing user deploy command: npx wrangler deploy
...
Missing entry-point to Worker script or to assets directory
```

说明当前 Cloudflare 项目是 **Worker（Workers Builds）**，不是 Pages。Worker 项目默认执行 `npx wrangler deploy`，需要仓库里有 Worker 或静态资源（assets）配置。

本仓库现在**同时兼容两种部署方式**，二选一即可。

---

## 方式 A：继续用当前 Worker 项目（最快修复）

`wrangler.toml` 已经配置为 **Workers Static Assets**：

```toml
name = "cloth-travel"
compatibility_date = "2026-01-01"

[assets]
directory = "./public"
not_found_handling = "404-page"
```

在 Cloudflare 当前项目里直接 **Retry deployment** 即可。

- Deploy command：保持 `npx wrangler deploy`
- Build command：不需要
- Build output directory：Worker 模式不需要填
- 部署结果：`https://<worker-name>.<account>.workers.dev`

如果 Cloudflare 项目名不是 `cloth-travel`，把 `wrangler.toml` 里的 `name` 改成实际项目名，或者把项目名改成 `cloth-travel`。

> 这是 Workers Static Assets，不是 Pages，但同样是一个静态站点，访问体验一样。

---

## 方式 B：新建 Cloudflare Pages 项目（你最初要的 Pages）

Worker 项目不能直接转换成 Pages，需要新建一个 Pages 项目：

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. 选择仓库 `ine-entertainment/ClothTravel`
3. 按下面填写：

| 配置项 | 值 |
| --- | --- |
| Project name | `cloth-travel`（或你喜欢的名字） |
| Production branch | `main` |
| Framework preset | `None` |
| Build command | 留空 |
| Build output directory | `public` |
| Root directory | 留空 |

4. 点击 **Save and Deploy**。

**不要**把 Deploy command 设置成 `npx wrangler deploy`；Pages 不需要 deploy command，它会直接上传 `public/`。

之后每次推送到 `main`，Pages 会自动重新部署。

---

## 方式 C：Wrangler CLI

需要 Node.js 18+。

### Worker 静态站点

```bash
npx wrangler@latest login
npx wrangler@latest deploy
```

### Pages

```bash
npx wrangler@latest login
npx wrangler@latest pages deploy public --project-name cloth-travel
```

首次部署如果项目不存在，Wrangler 会提示创建。

---

## 目录说明

```text
public/              # 静态资源目录（Pages 输出目录 / Worker assets 目录）
├── index.html       # 前端原型入口
├── styles.css
├── app.js
├── favicon.svg
├── assets/img/      # 演示图片
├── _headers         # Cloudflare 响应头
└── 404.html         # 404 回首页
docs/                # 产品策划 / 技术方案，不参与部署
wrangler.toml        # Worker Static Assets / Wrangler 配置
```

## 注意事项

- 这是前端原型，支付、库存、物流、商家接单都是模拟数据。
- 图片来自 Unsplash，仅用于原型演示；正式上线前替换为商家授权实拍/客片。
- `_headers` 里已经加了基础安全头和静态资源缓存；如果后续接入真实支付/地图/IM，需要同步调整 CSP。
- 如果你在 Cloudflare 里填了 Root directory，请填仓库根目录，不要填 `public`；输出目录才是 `public`。
- Worker 和 Pages 不要同时往同一个自定义域名上绑，先确定用哪一种。
