// 注意：live2d_path 参数应使用绝对路径
// const live2d_path =
//   "https://fastly.jsdelivr.net/gh/nova1751/live2d-widget@latest/";

// const live2d_path = "https://cdn.staticaly.com/gh/adingapkgg/live2d-api@main/";
// const live2d_path = "https://jsd.onmicrosoft.cn/gh/adingapkgg/live2d-api@main/";
const live2d_path = "https://live2d-api.saop.cc/";

// 封装异步加载资源的方法
function loadExternalResource(url, type) {
  return new Promise((resolve, reject) => {
    let tag;

    if (type === "css") {
      tag = document.createElement("link");
      tag.rel = "stylesheet";
      tag.href = url;
    } else if (type === "js") {
      tag = document.createElement("script");
      tag.src = url;
    }
    if (tag) {
      tag.onload = () => resolve(url);
      tag.onerror = () => reject(url);
      document.head.appendChild(tag);
    }
  });
}

// 加载 waifu.css live2d.min.js waifu-tips.js
if (screen.width >= 768) {
  Promise.all([
    loadExternalResource(live2d_path + "js/live2d.min.js", "js"),
    loadExternalResource(live2d_path + "js/waifu-tips.js", "js"),
  ]).then(() => {
    // 配置选项的具体用法见 README.md
    initWidget({
      waifuPath: live2d_path + "waifu-tips.json",

      // apiPath: "https://live2d.fghrsh.net/api/",
      cdnPath: "https://live2d-api.saop.cc/",
      // cdnPath: "/",

      tools: [
        "hitokoto",
        "asteroids",
        "switch-model",
        "switch-texture",
        "photo",
        "info",
        "quit",
      ],
    });
  });
}
