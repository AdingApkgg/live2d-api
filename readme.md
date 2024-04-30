# Live2D-API

## 特性 Feature

1. 将 `Live2D` 完全 `cdn` 化，目录结构简单，便于编辑、添加和删除模型。
2. 为以 `CDN` 方式加载的 `Live2D` 模型，添加模型皮肤顺序切换的功能。
3. 将项目配置文件拆分成 `<link>` 与 `<script>` 标签的形式便于网站引入。

## 使用 Use

你可以使用 `CDN` 节点的方式来为你的网站引入相关文件..

1. 使用 `jsdelivr` 引入。

   ```html
   <link
     rel="stylesheet"
     href="https://cdn.jsdelivr.net/npm/live2d-api@latest/waifu.css"
   />
   <script src="https://cdn.jsdelivr.net/npm/live2d-api@latest/js/autoload.js"></script>
   ```

2. 使用其他 `CDN` 节点引入。

   ```html
   <link
     rel="stylesheet"
     href="https://registry.npmmirror.com/live2d-api/latest/files/waifu.css"
   />
   <script src="https://registry.npmmirror.com/live2d-api/latest/files/js/autoload.js"></script>
   ```
