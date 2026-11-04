# Cloudflare Pages 部署

这个仓库是**纯静态站点**，没有构建步骤。Cloudflare Pages 的发布目录是 `public/`。

## 方式一：Git 集成（推荐）

1. 打开 Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**。
2. 选择 GitHub 仓库 `ine-entertainment/ClothTravel`。
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

之后每次推送到 `main`，Cloudflare Pages 会自动重新部署。

## 方式二：Wrangler CLI

需要 Node.js 18+。

```bash
# 第一次使用先登录
npx wrangler@latest login

# 在仓库根目录执行，首次会自动提示创建 Pages 项目
npx wrangler@latest pages deploy public --project-name cloth-travel
```

`wrangler.toml` 已经写好 `pages_build_output_dir = "public"`，所以也可以直接：

```bash
npx wrangler@latest pages deploy
```

部署完成后，终端会输出 `https://<project>.pages.dev` 地址。

## 方式三：自定义域名

1. Cloudflare Pages 项目 → **Custom domains** → **Set up a custom domain**。
2. 输入域名，按提示添加 CNAME 或使用 Cloudflare DNS。
3. HTTPS 证书由 Cloudflare 自动签发。

## 目录说明

```text
public/              # Cloudflare Pages 发布目录
├── index.html       # 前端原型入口
├── styles.css
├── app.js
├── assets/img/      # 演示图片
├── _headers         # Cloudflare Pages 响应头
└── 404.html         # 404 回首页
docs/                # 产品策划 / 技术方案，不参与部署
wrangler.toml        # Wrangler / Pages 配置
```

## 注意事项

- 这是前端原型，支付、库存、物流、商家接单都是模拟数据。
- 图片来自 Unsplash，仅用于原型演示；正式上线前替换为商家授权实拍/客片。
- `_headers` 里已经加了基础安全头和静态资源缓存；如果后续接入真实支付/地图/IM，需要同步调整 CSP。
- 如果 Cloudflare Pages 里填了 Root directory，请填仓库根目录，不要填 `public`；Build output directory 才是 `public`。
