/* =========================================================
   未命名项目 · 交互原型
   Vanilla JS · 单页多屏
   ========================================================= */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const img = (name) => `assets/img/${name}.jpg`;

/* ---------------------------------------------------------
   Data
   --------------------------------------------------------- */
const PRODUCTS = [
  {
    id: "white",
    title: "海风白色法式长裙",
    price: 129,
    deposit: 500,
    rating: 4.9,
    reviews: 86,
    img: "white-dress",
    gallery: ["white-dress", "floral-dress", "desert-set"],
    styles: ["海岛", "法式"],
    badge: "本周人气 TOP1",
    sizes: ["S", "M", "L"],
    fit: "宽松 · 面料微弹",
    model: "168cm / 50kg · 穿 S",
    merchant: "阿岚旅拍礼服馆",
    includes: "长裙 + 草帽 + 藤编包",
    real: ["white-dress", "floral-dress", "model-2"],
  },
  {
    id: "floral",
    title: "海边碎花度假裙",
    price: 139,
    deposit: 500,
    rating: 4.8,
    reviews: 64,
    img: "floral-dress",
    gallery: ["floral-dress", "white-dress", "hero-beach"],
    styles: ["海岛", "法式"],
    sizes: ["S", "M", "L"],
    fit: "收腰 · 无弹",
    model: "165cm / 48kg · 穿 S",
    merchant: "小野旅拍礼服馆",
    includes: "连衣裙 + 发带",
    real: ["floral-dress", "hero-beach", "model-3"],
  },
  {
    id: "desert",
    title: "沙丘白色套装",
    price: 149,
    deposit: 600,
    rating: 4.8,
    reviews: 42,
    img: "desert-set",
    gallery: ["desert-set", "white-dress", "mountain"],
    styles: ["海岛", "城市"],
    sizes: ["S", "M", "L"],
    fit: "高腰 · 微弹",
    model: "170cm / 52kg · 穿 M",
    merchant: "小野旅拍礼服馆",
    includes: "上衣 + 短裤 + 腰封",
    real: ["desert-set", "mountain", "model-1"],
  },
  {
    id: "blue",
    title: "米兰蓝色风衣",
    price: 159,
    deposit: 600,
    rating: 4.7,
    reviews: 38,
    img: "blue-coat",
    gallery: ["blue-coat", "italy", "venice"],
    styles: ["城市", "法式"],
    sizes: ["S", "M", "L"],
    fit: "廓形 · 有腰带",
    model: "168cm / 50kg · 穿 M",
    merchant: "陈一城市衣橱",
    includes: "风衣 + 腰带",
    real: ["blue-coat", "italy", "model-2"],
  },
  {
    id: "black",
    title: "夜色黑色长外套",
    price: 169,
    deposit: 700,
    rating: 4.9,
    reviews: 51,
    img: "black-coat",
    gallery: ["black-coat", "old-street", "venice"],
    styles: ["城市", "复古"],
    sizes: ["S", "M", "L"],
    fit: "直筒 · 垂坠",
    model: "167cm / 49kg · 穿 S",
    merchant: "陈一城市衣橱",
    includes: "外套 + 胸针",
    real: ["black-coat", "old-street", "model-1"],
  },
  {
    id: "red",
    title: "日落复古红卫衣",
    price: 99,
    deposit: 400,
    rating: 4.7,
    reviews: 29,
    img: "red-sweat",
    gallery: ["red-sweat", "model-1", "yellow-set"],
    styles: ["复古", "城市"],
    sizes: ["S", "M", "L"],
    fit: "宽松 · 加绒",
    model: "166cm / 47kg · 穿 M",
    merchant: "后海小卖部",
    includes: "卫衣 + 棒球帽",
    real: ["red-sweat", "model-1", "yellow-set"],
  },
  {
    id: "yellow",
    title: "柠檬黄 citywalk 套装",
    price: 119,
    deposit: 450,
    rating: 4.8,
    reviews: 33,
    img: "yellow-set",
    gallery: ["yellow-set", "italy", "blue-coat"],
    styles: ["城市", "复古"],
    sizes: ["S", "M", "L"],
    fit: "运动廓形",
    model: "170cm / 52kg · 穿 M",
    merchant: "陈一城市衣橱",
    includes: "卫衣 + 阔腿裤",
    real: ["yellow-set", "italy", "model-3"],
  },
  {
    id: "green",
    title: "复古绿针织上衣",
    price: 89,
    deposit: 350,
    rating: 4.6,
    reviews: 22,
    img: "green-top",
    gallery: ["green-top", "model-3", "floral-dress"],
    styles: ["复古", "法式"],
    sizes: ["S", "M", "L"],
    fit: "短款 · 微弹",
    model: "164cm / 46kg · 穿 S",
    merchant: "后海小卖部",
    includes: "针织上衣 + 珍珠项链",
    real: ["green-top", "model-3", "floral-dress"],
  },
];

const PHOTOGRAPHERS = [
  {
    id: "alan",
    name: "阿岚",
    title: "海岛情绪片 / 胶片感",
    avatar: "photographer-2",
    cover: "white-dress",
    rating: 4.9,
    orders: 268,
    price: 699,
    tags: ["海岛", "闺蜜", "胶片"],
    works: ["white-dress", "floral-dress", "hero-beach"],
    bio: "常驻三亚，擅长把海风、逆光和笑声拍进画面。不摆拍，先聊天再按快门。",
    package: {
      title: "2 小时海岛跟拍",
      desc: "适合 1-2 人 · 海边/椰林 · 含路线建议",
      price: 899,
      deposit: 269,
      includes: ["1 套服装", "9 张精修", "全部底片", "路线建议"],
    },
  },
  {
    id: "xiaoye",
    name: "小野",
    title: "椰林故事感 / 新中式",
    avatar: "model-3",
    cover: "old-street",
    rating: 4.8,
    orders: 156,
    price: 599,
    tags: ["新中式", "椰林", "情侣"],
    works: ["old-street", "temple", "design-set"],
    bio: "喜欢自然光和旧街巷，拍过 300+ 组游客。会提前帮你踩点，告诉你几点光线最好。",
    package: {
      title: "1.5 小时椰林跟拍",
      desc: "适合 1-2 人 · 椰林/老街 · 可加妆造",
      price: 699,
      deposit: 209,
      includes: ["1 套服装", "6 张精修", "全部底片", "妆造建议"],
    },
  },
  {
    id: "chenyi",
    name: "陈一",
    title: "城市夜景 / 辣妹风",
    avatar: "model-1",
    cover: "venice",
    rating: 4.9,
    orders: 203,
    price: 799,
    tags: ["夜景", "街拍", "辣妹"],
    works: ["venice", "italy", "blue-coat"],
    bio: "三亚夜景和海边蓝调时刻爱好者。擅长用一盏灯，把普通街角拍成电影。",
    package: {
      title: "2 小时夜景街拍",
      desc: "适合 1-2 人 · 夜景/街头 · 含补光",
      price: 999,
      deposit: 299,
      includes: ["1 套服装", "10 张精修", "全部底片", "补光设备"],
    },
  },
];

const MAKEUP_ARTISTS = [
  {
    id: "m1",
    name: "小雅",
    title: "清透海岛妆",
    avatar: "model-1",
    desc: "擅长防晒不脱妆、原生感睫毛，海边拍摄 8 小时不花。",
    tags: ["清透", "海岛", "持妆"],
    price: 299,
  },
  {
    id: "m2",
    name: "可可",
    title: "新中式 / 簪花",
    avatar: "model-2",
    desc: "汉服、新中式、簪花造型，可上门，含发型和配饰。",
    tags: ["新中式", "簪花", "上门"],
    price: 399,
  },
  {
    id: "m3",
    name: "阿蔓",
    title: "泰妆 / 辣妹",
    avatar: "model-3",
    desc: "泰式混血妆、截断眼妆，适合夜景和街拍。",
    tags: ["泰妆", "辣妹", "夜景"],
    price: 359,
  },
];

const POSTS = [
  {
    id: "p1",
    user: "林小鹿",
    avatar: "model-2",
    city: "三亚 · 亚龙湾",
    time: "2 小时前",
    images: ["white-dress", "hero-beach"],
    text: "在三亚的第三天，白裙真的不会出错。租的这套含草帽和藤编包，送到酒店前台，离店直接让骑手取走，押金当天就退了。",
    tags: ["#三亚穿什么", "#海边穿搭", "#租衣体验"],
    product: "white",
    likes: 1286,
    comments: 84,
  },
  {
    id: "p2",
    user: "阿梨",
    avatar: "model-3",
    city: "三亚 · 后海村",
    time: "昨天",
    images: ["floral-dress", "resort"],
    text: "闺蜜旅拍全记录：租衣 139 + 妆造 299 + 摄影 899，比买一套裙子再找店便宜，而且不用自己洗。",
    tags: ["#闺蜜旅拍", "#后海村"],
    product: "floral",
    likes: 892,
    comments: 56,
  },
  {
    id: "p3",
    user: "Momo",
    avatar: "model-1",
    city: "三亚 · 天涯镇",
    time: "3 天前",
    images: ["blue-coat"],
    text: "蓝白小巷配蓝色风衣，被路人问了三次链接。其实是租的，三天 159，太适合只穿一次的场景。",
    tags: ["#天涯镇", "#城市街拍"],
    product: "blue",
    likes: 643,
    comments: 31,
  },
];

let ORDERS = [
  {
    id: "r1",
    type: "rental",
    status: "待发货",
    statusSub: "商家正在消毒打包，预计 3/10 18:00 前发出",
    title: "海风白色法式长裙",
    image: "white-dress",
    date: "3/12 - 3/15 · 3 天",
    merchant: "阿岚旅拍礼服馆",
    orderNo: "YY202603120086",
    paid: 633,
    deposit: 500,
    timeline: [
      { label: "支付成功", time: "3/9 21:08", state: "done" },
      { label: "商家消毒打包", time: "预计 3/10 18:00 前", state: "current" },
      { label: "配送到酒店", time: "预计 3/11 14:00 前", state: "todo" },
      { label: "使用中", time: "3/12 - 3/15", state: "todo" },
      { label: "归还 / 退押金", time: "3/16 前", state: "todo" },
    ],
  },
  {
    id: "p1",
    type: "photo",
    status: "待服务",
    statusSub: "3/13 15:00 · 阿岚 · 亚龙湾海边",
    title: "阿岚 · 2 小时海岛跟拍",
    image: "floral-dress",
    date: "3/13 15:00",
    merchant: "阿岚摄影工作室",
    orderNo: "YYP202603130012",
    paid: 269,
    balance: 630,
    deposit: 269,
    timeline: [
      { label: "定金支付", time: "3/9 21:08", state: "done" },
      { label: "摄影师确认", time: "3/9 21:30", state: "done" },
      { label: "待拍摄", time: "3/13 15:00 · 亚龙湾", state: "current" },
      { label: "选片", time: "拍摄后 7 天内", state: "todo" },
      { label: "精修交付", time: "选片后 15 天内", state: "todo" },
    ],
  },
  {
    id: "r0",
    type: "rental",
    status: "已完成",
    statusSub: "押金 ¥500 已原路退回",
    title: "海边碎花度假裙",
    image: "floral-dress",
    date: "2/14 - 2/17 · 3 天",
    merchant: "小野旅拍礼服馆",
    orderNo: "YY202602140032",
    paid: 639,
    deposit: 500,
    timeline: [
      { label: "支付成功", time: "2/11 18:20", state: "done" },
      { label: "商家发货", time: "2/12 10:12", state: "done" },
      { label: "签收 / 使用", time: "2/13 14:06", state: "done" },
      { label: "归还 / 质检", time: "2/18 11:30", state: "done" },
      { label: "押金退回", time: "2/19 09:42", state: "done" },
    ],
  },
];

/* ---------------------------------------------------------
   State
   --------------------------------------------------------- */
const state = {
  screen: "home",
  tab: "home",
  productId: "white",
  photoId: "alan",
  orderId: "r1",
  galleryIndex: 0,
  size: "M",
  days: 3,
  delivery: "hotel",
  insurance: false,
  agreed: true,
  liked: {},
  likedPosts: {},
  homeStyle: "全部",
  rentStyle: "全部",
  photoStyle: "全部",
  communityTab: "推荐",
  orderFilter: "all",
  slot: "3/13 15:00",
  city: "三亚",
};

let history = [];
let toastTimer = null;

/* ---------------------------------------------------------
   Icons
   --------------------------------------------------------- */
const ICONS = {
  home: '<path d="M3 10.8 12 3l9 7.8"/><path d="M5.2 9.8V20h13.6V9.8"/><path d="M9.5 20v-5.4h5V20"/>',
  hanger: '<path d="M12 7.2a2.2 2.2 0 1 1 2.2-2.2"/><path d="M12 7.2v1.4"/><path d="m12 8.6-8.1 5.3c-.8.5-.5 1.8.5 1.8h15.2c1 0 1.3-1.3.5-1.8L12 8.6Z"/>',
  camera: '<path d="M4 8.5h3l1.2-1.8h7.6L17 8.5h3v10H4z"/><circle cx="12" cy="13.2" r="3.2"/>',
  heart: '<path d="M20.6 5.9a5 5 0 0 0-7.1 0L12 7.4l-1.5-1.5a5 5 0 0 0-7.1 7.1L12 21l8.6-8a5 5 0 0 0 0-7.1Z"/>',
  user: '<circle cx="12" cy="8" r="3.6"/><path d="M4.8 20c.7-3.4 3.6-5.4 7.2-5.4s6.5 2 7.2 5.4"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.2 4.2"/>',
  bell: '<path d="M18 9a6 6 0 1 0-12 0c0 7-2.5 7-2.5 7h17S18 16 18 9"/><path d="M10 20h4"/>',
  pin: '<path d="M20 10c0 5.2-8 11-8 11S4 15.2 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.6"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>',
  chevronLeft: '<path d="m15 18-6-6 6-6"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  shield: '<path d="M12 3 20 6v5.2c0 5-3.4 8.2-8 9.8-4.6-1.6-8-4.8-8-9.8V6l8-3Z"/><path d="m8.5 12 2.4 2.4 4.6-5"/>',
  truck: '<path d="M3 7h11v10H3z"/><path d="M14 10h4l3 3v4h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17.5" cy="18" r="1.6"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M7.5 3v4M16.5 3v4M3.5 9.5h17"/>',
  check: '<path d="m5 12.5 4.2 4.2L19 7"/>',
  arrowRight: '<path d="M4 12h15"/><path d="m13 6 6 6-6 6"/>',
  share: '<circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><path d="m8.3 10.7 7.4-4.2M8.3 13.3l7.4 4.2"/>',
  filter: '<path d="M3 5h18l-7 8v6l-4-2v-4L3 5Z"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  chat: '<path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.3 9.5 9.5 0 0 1-3.2-.5L4 21l1.7-4.3A8.2 8.2 0 0 1 4 11.5 8.4 8.4 0 0 1 12.5 3 8.4 8.4 0 0 1 21 11.5Z"/>',
  bookmark: '<path d="M6 3h12v18l-6-4-6 4V3Z"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.1 2.1-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21h-3v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-2.1-2.1.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H4v-3h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 2.1-2.1.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5V4h3v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 2.1 2.1-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1H21v3h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',
  bag: '<path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
  sparkle: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"/>',
  map: '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z"/><path d="M9 3v15M15 6v15"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
};

function icon(name, size = 20, stroke = 1.8) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;
}

/* ---------------------------------------------------------
   Helpers
   --------------------------------------------------------- */
const productById = (id) => PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
const photographerById = (id) => PHOTOGRAPHERS.find((p) => p.id === id) || PHOTOGRAPHERS[0];
const dayPrice = (p, days) =>
  days === 3 ? p.price : days === 5 ? Math.round(p.price * 1.5) : Math.round(p.price * 1.9);
const deliveryFee = () => (state.delivery === "hotel" ? 15 : state.delivery === "express" ? 18 : 0);
const deliveryLabel = () =>
  state.delivery === "hotel" ? "酒店配送" : state.delivery === "express" ? "顺丰快递" : "门店自提";
const bookingTotal = (p) => dayPrice(p, state.days) + p.deposit + deliveryFee() + (state.insurance ? 9 : 0) - 20;
const formatMoney = (n) => `¥${n}`;

function toast(message) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2300);
}

/* ---------------------------------------------------------
   Navigation
   --------------------------------------------------------- */
function switchTab(tab) {
  closeSheet();
  state.tab = tab;
  state.screen = tab;
  history = [];
  render();
}

function go(screen, extra = {}) {
  closeSheet();
  history.push({
    screen: state.screen,
    tab: state.tab,
    productId: state.productId,
    photoId: state.photoId,
    orderId: state.orderId,
    galleryIndex: state.galleryIndex,
  });
  state.screen = screen;
  Object.assign(state, extra);
  render();
}

function back() {
  closeSheet();
  const prev = history.pop();
  if (!prev) {
    switchTab("home");
    return;
  }
  state.screen = prev.screen;
  state.tab = prev.tab;
  state.productId = prev.productId;
  state.photoId = prev.photoId;
  state.orderId = prev.orderId;
  state.galleryIndex = prev.galleryIndex;
  render();
}

function openProduct(id) {
  const p = productById(id);
  go("product", {
    productId: id,
    galleryIndex: 0,
    size: p.sizes.includes("M") ? "M" : p.sizes[0],
    days: 3,
    delivery: "hotel",
    insurance: false,
    agreed: true,
  });
}

/* ---------------------------------------------------------
   Shared UI
   --------------------------------------------------------- */
function tabbar(active) {
  const items = [
    { id: "home", label: "首页", icon: "home" },
    { id: "rent", label: "租衣", icon: "hanger" },
    { id: "photo", label: "摄影", icon: "camera" },
    { id: "community", label: "社区", icon: "heart" },
    { id: "profile", label: "我的", icon: "user" },
  ];
  return `<nav class="tabbar">${items
    .map(
      (it) => `<button class="tab ${active === it.id ? "active" : ""}" data-action="tab" data-tab="${it.id}">
        <span class="tab-icon">${icon(it.icon, 20, active === it.id ? 2.2 : 1.8)}</span>
        <span>${it.label}</span>
      </button>`
    )
    .join("")}</nav>`;
}

function pageHeader(title, right = "") {
  return `<div class="page-head">
    <button class="back" data-action="back" aria-label="返回">${icon("chevronLeft", 18)}</button>
    <h2>${title}</h2>
    <div class="right-slot">${right}</div>
  </div>`;
}

function productCard(p) {
  return `<div class="product-card" data-action="open-product" data-id="${p.id}" data-style="${p.styles.join(",")}" data-search="${p.title} ${p.styles.join(" ")}">
    <div class="product-img">
      <img src="${img(p.img)}" alt="${p.title}" loading="lazy" />
      <button class="fav ${state.liked[p.id] ? "active" : ""}" data-action="like-product" data-id="${p.id}" aria-label="收藏">${icon("heart", 15)}</button>
      ${p.badge ? `<span class="badge-top">${p.badge}</span>` : ""}
    </div>
    <div class="product-body">
      <p class="product-title">${p.title}</p>
      <div class="product-meta"><span class="stars">★★★★★</span>${p.rating} · ${p.reviews} 条</div>
      <div class="price-row"><span class="price">¥${p.price}<small>/3天</small></span></div>
      <div class="deposit">押金 ¥${p.deposit} · 可信用免押</div>
    </div>
  </div>`;
}

function orderCard(o) {
  const isPhoto = o.type === "photo";
  const actionButtons = isPhoto
    ? `<button class="mini-btn" data-action="toast" data-message="改期申请已提交">改期</button><button class="mini-btn primary" data-action="toast" data-message="摄影师会在 10 分钟内回复">联系摄影师</button>`
    : o.status === "待发货"
      ? `<button class="mini-btn" data-action="toast" data-message="退款申请已提交">申请退款</button><button class="mini-btn primary" data-action="toast" data-message="商家会在 10 分钟内回复">联系商家</button>`
      : `<button class="mini-btn primary" data-action="toast" data-message="已为你找到同款可租日期">再次租赁</button>`;

  return `<div class="order-card" data-action="open-order" data-id="${o.id}">
    <div class="order-card-head"><span>${isPhoto ? "摄影订单" : "租衣订单"} · ${o.orderNo}</span><b>${o.status}</b></div>
    <div class="order-card-body">
      <img src="${img(o.image)}" alt="${o.title}" loading="lazy" />
      <div class="info">
        <h3>${o.title}</h3>
        <p>${o.date}</p>
        <p>${o.merchant}</p>
        <div class="price">¥${o.paid}<small> ${isPhoto ? "已付定金" : "实付"}</small></div>
      </div>
    </div>
    <div class="order-card-foot">${actionButtons}</div>
  </div>`;
}

/* ---------------------------------------------------------
   Home
   --------------------------------------------------------- */
function homeScreen() {
  const heroProducts = PRODUCTS.slice(0, 4);
  return `<div class="screen">
    <div class="screen-scroll">
      <div class="home-top">
        <div class="home-head">
          <button class="loc" data-action="city-sheet">${icon("pin", 18)} ${state.city} ${icon("chevronDown", 13)}</button>
          <div class="head-actions">
            <button class="icon-btn" data-action="go-search" aria-label="搜索">${icon("search", 18)}</button>
            <button class="icon-btn" data-action="toast" data-message="暂时没有新消息" aria-label="消息">${icon("bell", 18)}</button>
          </div>
        </div>
        <div class="weather">
          <b>28° 晴</b><span class="dot"></span>海风 3 级<span class="dot"></span>适合白色 / 浅色
          <button class="link" data-action="go" data-screen="city">穿搭攻略 →</button>
        </div>
      </div>

      <div style="padding:0 20px">
        <div class="hero" data-action="open-product" data-id="white">
          <img src="${img("hero-beach")}" alt="三亚海边" />
          <span class="hero-float">今日可约 12 套</span>
          <div class="hero-content">
            <div class="eyebrow">SANYA · 海岛限定</div>
            <h2>海风白裙计划</h2>
            <p>租一套白裙 + 2 小时跟拍<br />送到酒店，离店归还</p>
            <button class="hero-btn">¥1,199 起 · 查看套装 ${icon("arrowRight", 12)}</button>
          </div>
        </div>
      </div>

      <div class="section" style="margin:16px 0 0">
        <div class="quick-grid">
          <button class="quick" data-action="tab" data-tab="rent">
            <span class="q-icon">${icon("hanger", 19)}</span><span>租衣</span>
          </button>
          <button class="quick" data-action="go" data-screen="photo">
            <span class="q-icon">${icon("camera", 19)}</span><span>找摄影</span>
          </button>
          <button class="quick" data-action="go" data-screen="makeup">
            <span class="q-icon">${icon("sparkle", 19)}</span><span>找化妆</span>
          </button>
          <button class="quick" data-action="go" data-screen="city">
            <span class="q-icon">${icon("map", 19)}</span><span>城市</span>
          </button>
        </div>
      </div>

      <div class="section" style="padding:0">
        <div class="section-head" style="padding:0 20px">
          <h3>精选客片</h3>
          <button class="more" data-action="tab" data-tab="community">看社区 ${icon("arrowRight", 12)}</button>
        </div>
        <div class="story-row">
          <div class="story" data-action="open-product" data-id="white">
            <img src="${img("white-dress")}" alt="白裙客片" /><div class="story-info"><b>白裙 + 海风</b><span>三亚 · 阿岚作品</span></div>
          </div>
          <div class="story" data-action="open-product" data-id="floral">
            <img src="${img("floral-dress")}" alt="碎花客片" /><div class="story-info"><b>碎花和日落</b><span>后海村 · 小野作品</span></div>
          </div>
          <div class="story" data-action="open-product" data-id="blue">
            <img src="${img("blue-coat")}" alt="蓝白小巷" /><div class="story-info"><b>蓝白小巷</b><span>天涯镇 · 陈一作品</span></div>
          </div>
          <div class="story" data-action="open-product" data-id="desert">
            <img src="${img("desert-set")}" alt="沙丘套装" /><div class="story-info"><b>沙丘电影感</b><span>亚龙湾 · 阿岚作品</span></div>
          </div>
        </div>
      </div>

      <div class="section home-styles">
        <div class="section-head">
          <h3>按风格选</h3>
          <button class="more" data-action="tab" data-tab="rent">全部 ${icon("arrowRight", 12)}</button>
        </div>
        <div class="chips" id="home-chips">
          ${["全部", "海岛", "法式", "城市", "复古"]
            .map(
              (s) =>
                `<button class="chip ${state.homeStyle === s ? "active" : ""}" data-action="filter-home" data-style="${s}">${s}</button>`
            )
            .join("")}
        </div>
      </div>

      <div class="section">
        <div class="section-head">
          <h3>热门可租</h3>
          <button class="more" data-action="tab" data-tab="rent">查看全部 ${icon("arrowRight", 12)}</button>
        </div>
        <div class="product-grid" id="home-grid">
          ${heroProducts.map(productCard).join("")}
        </div>
      </div>

      <div class="package">
        <span class="tag">闺蜜旅拍 · 2 人同行</span>
        <h4>租衣 + 妆造 + 摄影，¥1,199 起</h4>
        <p>白裙/碎花任选 · 2 小时跟拍 · 9 张精修 · 酒店送达</p>
        <button data-action="go" data-screen="photo">看看套餐 ${icon("arrowRight", 12)}</button>
      </div>
    </div>
    ${tabbar("home")}
  </div>`;
}

/* ---------------------------------------------------------
   Rent list
   --------------------------------------------------------- */
function rentScreen() {
  return `<div class="screen">
    <div class="screen-scroll">
      <div class="list-head">
        <div class="list-title">
          <div>
            <h1>租衣</h1>
            <div class="sub">三亚 · 326 件可租 · 支持酒店送达</div>
          </div>
          <button class="icon-btn" data-action="city-sheet" aria-label="切换城市">${icon("pin", 18)}</button>
        </div>
        <div class="search-bar">
          ${icon("search", 16)}
          <input type="search" placeholder="搜白裙 / 碎花 / 法式..." data-role="search" />
        </div>
        <div class="date-bar">
          <button class="date-pill" data-action="toast" data-message="日期选择器将在下一版开放">${icon("calendar", 13)} 3/12 - 3/15 ${icon("chevronDown", 12)}</button>
          <span class="date-note">含物流缓冲 · 3/10 发货</span>
        </div>
        <div class="chips" id="rent-chips">
          ${["全部", "海岛", "法式", "城市", "复古"]
            .map(
              (s) =>
                `<button class="chip ${state.rentStyle === s ? "active" : ""}" data-action="filter-rent" data-style="${s}">${s}</button>`
            )
            .join("")}
        </div>
        <div class="filter-row">
          <span>综合推荐</span>
          <button data-action="toast" data-message="筛选器将在下一版开放">筛选 ${icon("filter", 13)}</button>
        </div>
      </div>
      <div class="rent-grid-wrap">
        <div class="rent-count" id="rent-count">为你找到 ${PRODUCTS.length} 套 · 按可租日期排序</div>
        <div class="product-grid" id="rent-grid">${PRODUCTS.map(productCard).join("")}</div>
      </div>
    </div>
    ${tabbar("rent")}
  </div>`;
}

/* ---------------------------------------------------------
   Product detail
   --------------------------------------------------------- */
function productScreen() {
  const p = productById(state.productId);
  const price = dayPrice(p, state.days);
  const total = bookingTotal(p);
  return `<div class="screen has-bottom">
    <div class="screen-scroll">
      <div class="detail-hero">
        <img id="detail-img" src="${img(p.gallery[state.galleryIndex] || p.gallery[0])}" alt="${p.title}" />
        <div class="detail-top">
          <button class="glass-btn" data-action="back" aria-label="返回">${icon("chevronLeft", 18)}</button>
          <div class="detail-top-right">
            <button class="glass-btn" data-action="toast" data-message="分享链接已复制">${icon("share", 16)}</button>
            <button class="glass-btn ${state.liked[p.id] ? "active" : ""}" data-action="like-product" data-id="${p.id}" aria-label="收藏">${icon("heart", 16)}</button>
          </div>
        </div>
        <div class="detail-dots">
          ${p.gallery
            .map(
              (_, i) =>
                `<button class="dot ${i === state.galleryIndex ? "active" : ""}" data-action="gallery" data-index="${i}" aria-label="图片 ${i + 1}"></button>`
            )
            .join("")}
        </div>
      </div>

      <div class="detail-sheet">
        <h1>${p.title}</h1>
        <div class="detail-sub"><span class="stars">★★★★★</span>${p.rating} · ${p.reviews} 条真实评价 · ${p.merchant}</div>
        <div class="detail-price">
          <span class="price" data-role="detail-price">¥${price}<small>/${state.days}天</small></span>
          <span class="deposit-text">押金 ¥${p.deposit} · 可信用免押</span>
        </div>
        <div class="trust-row">
          <span class="trust">${icon("shield", 12)} 一客一洗一消毒</span>
          <span class="trust">${icon("check", 12)} 封签验货</span>
          <span class="trust">${icon("truck", 12)} 酒店送达</span>
        </div>

        <div class="selector">
          <div class="selector-head"><b>选尺码</b><span>${p.fit}</span></div>
          <div class="opt-row">
            ${p.sizes
              .map(
                (s) =>
                  `<button class="opt ${state.size === s ? "active" : ""}" data-action="select-size" data-size="${s}">${s}<small>${s === "S" ? "建议 45-52kg" : s === "M" ? "建议 50-58kg" : "建议 56-65kg"}</small></button>`
              )
              .join("")}
          </div>
        </div>

        <div class="selector">
          <div class="selector-head"><b>选租期</b><span>3/12 - 3/15</span></div>
          <div class="opt-row">
            ${[3, 5, 7]
              .map(
                (d) =>
                  `<button class="opt ${state.days === d ? "active" : ""}" data-action="select-days" data-days="${d}">${d} 天<small>¥${dayPrice(p, d)}</small></button>`
              )
              .join("")}
          </div>
        </div>

        <div class="selector">
          <div class="selector-head"><b>配送方式</b><span>三亚全城可送</span></div>
          <div class="opt-row">
            <button class="opt ${state.delivery === "hotel" ? "active" : ""}" data-action="select-delivery" data-delivery="hotel">酒店配送<small>¥15 · 前台代收</small></button>
            <button class="opt ${state.delivery === "express" ? "active" : ""}" data-action="select-delivery" data-delivery="express">快递<small>¥18 · 顺丰</small></button>
            <button class="opt ${state.delivery === "pickup" ? "active" : ""}" data-action="select-delivery" data-delivery="pickup">门店自提<small>免费 · 10:00-21:00</small></button>
          </div>
        </div>

        <div class="model-card">
          <img src="${img("model-2")}" alt="模特试穿" />
          <div><b>模特小林 · 168cm / 50kg</b><span>日常穿 S，这条裙子版型偏宽松</span></div>
          <em class="size-tag">穿 S</em>
        </div>

        <div class="section-head" style="margin-top:18px"><h3>真实客片</h3><span style="font-size:9px;color:var(--muted)">${p.reviews} 位女生穿过</span></div>
        <div class="real-look-row">
          ${p.real
            .map(
              (r, i) =>
                `<div class="real-look"><img src="${img(r)}" alt="客片" loading="lazy" /><span>${i === 0 ? "三亚 · 亚龙湾" : i === 1 ? "后海村 · 日落" : "酒店阳台"}</span></div>`
            )
            .join("")}
        </div>

        <div class="rules">
          <div class="rule"><span>清洗消毒</span><span>一客一洗 · 封签 · 可查记录</span></div>
          <div class="rule"><span>押金退还</span><span>质检后 1-3 个工作日</span></div>
          <div class="rule"><span>损坏 / 逾期</span><span>明示标准 · 平台仲裁 ${icon("chevronRight", 12)}</span></div>
        </div>
      </div>
    </div>

    <div class="detail-bottom">
      <button class="mini-action ${state.liked[p.id] ? "active" : ""}" data-action="like-product" data-id="${p.id}">${icon("heart", 20)}<span>收藏</span></button>
      <button class="mini-action" data-action="toast" data-message="客服将在 1 分钟内回复">${icon("chat", 20)}<span>客服</span></button>
      <div class="rest-price"><span class="price" data-role="detail-total">¥${total}</span><span data-role="detail-deposit-note">含押金 ¥${p.deposit} · 可退</span></div>
      <button class="btn-primary" data-action="go-booking">立即租</button>
    </div>
  </div>`;
}

function refreshDetail() {
  const p = productById(state.productId);
  const price = dayPrice(p, state.days);
  const total = bookingTotal(p);
  const priceEl = $('[data-role="detail-price"]');
  const totalEl = $('[data-role="detail-total"]');
  const noteEl = $('[data-role="detail-deposit-note"]');
  if (priceEl) priceEl.innerHTML = `¥${price}<small>/${state.days}天</small>`;
  if (totalEl) totalEl.textContent = `¥${total}`;
  if (noteEl) noteEl.textContent = `含押金 ¥${p.deposit} · 可退`;
}

/* ---------------------------------------------------------
   Booking
   --------------------------------------------------------- */
function bookingScreen() {
  const p = productById(state.productId);
  const price = dayPrice(p, state.days);
  const fee = deliveryFee();
  const insurance = state.insurance ? 9 : 0;
  const total = price + p.deposit + fee + insurance - 20;
  return `<div class="screen has-bottom">
    <div class="screen-scroll">
      ${pageHeader("确认订单")}
      <div class="booking-wrap">
        <div class="booking-card">
          <h3>收货地址</h3>
          <div class="address-row">
            <div class="address-icon">${icon("pin", 17)}</div>
            <div>
              <b>三亚亚龙湾云汀度假酒店</b>
              <span>前台代收 · 3/11 14:00 前送达<br />林小鹿 · 138****6621</span>
            </div>
            <button class="edit" data-action="toast" data-message="地址编辑将在下一版开放">修改</button>
          </div>
        </div>

        <div class="booking-card">
          <h3>租期与物流</h3>
          <div class="date-timeline">
            <div class="date-node done"><i></i><b>3/10</b><span>商家发货</span></div>
            <div class="date-line"></div>
            <div class="date-node done"><i></i><b>3/11</b><span>送达酒店</span></div>
            <div class="date-line"></div>
            <div class="date-node"><i></i><b>3/12</b><span>开始穿着</span></div>
            <div class="date-line"></div>
            <div class="date-node"><i></i><b>3/16</b><span>归还截止</span></div>
          </div>
          <div style="margin-top:12px;font-size:8.5px;color:var(--muted);line-height:1.6">含物流缓冲：3/12 穿，3/15 结束，3/16 前寄回或预约上门取件。</div>
        </div>

        <div class="booking-card">
          <h3>商品</h3>
          <div class="order-item-row">
            <img src="${img(p.img)}" alt="${p.title}" />
            <div class="info">
              <b>${p.title}</b>
              <span>尺码 ${state.size} · ${state.days} 天 · ${deliveryLabel()}</span>
              <span>${p.includes}</span>
              <div class="p">¥${price}</div>
            </div>
          </div>
        </div>

        <div class="booking-card">
          <h3>费用明细</h3>
          <div class="fee-row"><span>租金（${state.days} 天）</span><span>¥${price}</span></div>
          <div class="fee-row"><span>押金（可退）</span><span>¥${p.deposit}</span></div>
          <div class="fee-row"><span>配送费</span><span>¥${fee}</span></div>
          <div class="fee-row" data-role="insurance-fee" style="${state.insurance ? "" : "display:none"}"><span>租赁安心险</span><span>¥9</span></div>
          <div class="fee-row"><span>新人券</span><span style="color:var(--coral-2)">-¥20</span></div>
          <div class="insurance-row">
            <button class="switch ${state.insurance ? "on" : ""}" data-action="toggle-insurance" aria-label="租赁安心险"></button>
            <span>租赁安心险 ¥9 · 损坏/丢失最高赔 ¥2,000</span>
          </div>
          <div class="fee-row total"><span>合计</span><b data-role="booking-total">¥${total}</b></div>
          <div style="margin-top:6px;font-size:7.5px;color:var(--muted)">押金 ¥${p.deposit} 将在归还质检后原路退回</div>
        </div>

        <div class="agree-row">
          <button class="check ${state.agreed ? "on" : ""}" data-action="toggle-agree" aria-label="同意协议">${icon("check", 10, 3)}</button>
          <span>我已阅读并同意 <a href="#" data-action="toast" data-message="协议详情将在下一版开放">《租赁协议》</a> 和 <a href="#" data-action="toast" data-message="规则详情将在下一版开放">《押金与损赔规则》</a></span>
        </div>
      </div>
    </div>

    <div class="booking-bottom">
      <div class="total"><span>合计（含押金 ¥${p.deposit}）</span><b data-role="booking-bottom-total">¥${total}</b></div>
      <button class="btn-primary" data-action="open-pay">提交订单</button>
    </div>
  </div>`;
}

function refreshBooking() {
  const p = productById(state.productId);
  const total = bookingTotal(p);
  const feeRow = $('[data-role="insurance-fee"]');
  const switchEl = $('[data-action="toggle-insurance"]');
  const totalEl = $('[data-role="booking-total"]');
  const bottomEl = $('[data-role="booking-bottom-total"]');
  if (feeRow) feeRow.style.display = state.insurance ? "flex" : "none";
  if (switchEl) switchEl.classList.toggle("on", state.insurance);
  if (totalEl) totalEl.textContent = `¥${total}`;
  if (bottomEl) bottomEl.textContent = `¥${total}`;
}

/* ---------------------------------------------------------
   Payment sheet
   --------------------------------------------------------- */
function openPaySheet() {
  if (!state.agreed) {
    toast("请先阅读并同意租赁协议");
    return;
  }
  const p = productById(state.productId);
  const total = bookingTotal(p);
  const overlay = $("#overlay");
  overlay.innerHTML = `<div class="overlay-backdrop" data-action="close-sheet"></div>
    <div class="sheet">
      <div class="sheet-handle"></div>
      <h3>确认支付</h3>
      <div class="pay-amount"><small>¥</small>${total}</div>
      <div class="pay-method">
        <span class="wx">微</span>
        <div><b>微信支付</b><span>零钱 / 银行卡</span></div>
        <span class="check-mark">${icon("check", 11, 3)}</span>
      </div>
      <div style="font-size:8.5px;color:var(--muted);line-height:1.6;margin-bottom:14px;text-align:center">含押金 ¥${p.deposit} · 归还质检后原路退回</div>
      <button class="btn-primary" data-action="confirm-pay">确认支付 ¥${total}</button>
    </div>`;
  overlay.classList.add("open");
}

function closeSheet() {
  const overlay = $("#overlay");
  overlay.classList.remove("open");
  setTimeout(() => {
    if (!overlay.classList.contains("open")) overlay.innerHTML = "";
  }, 300);
}

function confirmPay() {
  closeSheet();
  const p = productById(state.productId);
  const total = bookingTotal(p);
  const order = {
    id: "r" + Date.now(),
    type: "rental",
    status: "待发货",
    statusSub: "商家正在消毒打包，预计 3/10 18:00 前发出",
    title: p.title,
    image: p.img,
    date: "3/12 - 3/15 · 3 天",
    merchant: p.merchant,
    orderNo: "YY20260312" + Math.floor(1000 + Math.random() * 9000),
    paid: total,
    deposit: p.deposit,
    timeline: [
      { label: "支付成功", time: "刚刚", state: "done" },
      { label: "商家消毒打包", time: "预计 3/10 18:00 前", state: "current" },
      { label: "配送到酒店", time: "预计 3/11 14:00 前", state: "todo" },
      { label: "使用中", time: "3/12 - 3/15", state: "todo" },
      { label: "归还 / 退押金", time: "3/16 前", state: "todo" },
    ],
  };
  ORDERS.unshift(order);
  state.orderId = order.id;
  state.screen = "success";
  history = [{ screen: "orders", tab: "profile" }];
  render();
  setTimeout(() => toast("支付成功，商家已收到订单"), 180);
}

function openPhotoPaySheet() {
  const p = photographerById(state.photoId);
  const overlay = $("#overlay");
  overlay.innerHTML = `<div class="overlay-backdrop" data-action="close-sheet"></div>
    <div class="sheet">
      <div class="sheet-handle"></div>
      <h3>支付定金 · 锁定档期</h3>
      <div class="pay-amount"><small>¥</small>${p.package.deposit}</div>
      <div class="pay-method">
        <span class="wx">微</span>
        <div><b>微信支付</b><span>尾款 ¥${p.package.price - p.package.deposit} 拍摄前支付</span></div>
        <span class="check-mark">${icon("check", 11, 3)}</span>
      </div>
      <div style="font-size:8.5px;color:var(--muted);line-height:1.6;margin-bottom:14px;text-align:center">${state.slot} · ${p.name} · 提前 48 小时可免费改期一次</div>
      <button class="btn-primary" data-action="confirm-photo-pay">确认支付 ¥${p.package.deposit}</button>
    </div>`;
  overlay.classList.add("open");
}

function confirmPhotoPay() {
  closeSheet();
  const p = photographerById(state.photoId);
  const order = {
    id: "p" + Date.now(),
    type: "photo",
    status: "待服务",
    statusSub: `${state.slot} · ${p.name} 将在 2 小时内确认`,
    title: `${p.name} · ${p.package.title}`,
    image: p.cover,
    date: state.slot,
    merchant: `${p.name}摄影工作室`,
    orderNo: "YYP20260313" + Math.floor(100 + Math.random() * 900),
    paid: p.package.deposit,
    balance: p.package.price - p.package.deposit,
    deposit: p.package.deposit,
    timeline: [
      { label: "定金支付", time: "刚刚", state: "done" },
      { label: "摄影师确认", time: "预计 2 小时内", state: "current" },
      { label: "拍摄", time: state.slot, state: "todo" },
      { label: "选片 / 精修", time: "拍摄后 7-15 天", state: "todo" },
      { label: "交付 / 尾款", time: "精修完成后", state: "todo" },
    ],
  };
  ORDERS.unshift(order);
  state.orderId = order.id;
  state.screen = "success";
  history = [{ screen: "orders", tab: "profile" }];
  render();
  setTimeout(() => toast("预约成功，摄影师将在 2 小时内确认"), 180);
}

/* ---------------------------------------------------------
   Success
   --------------------------------------------------------- */
function successScreen() {
  const o = ORDERS.find((x) => x.id === state.orderId) || ORDERS[0];
  const isPhoto = o.type === "photo";
  return `<div class="screen">
    <div class="screen-scroll" style="padding-bottom:0">
      <div class="success-screen">
        <div class="success-mark">${icon("check", 34, 3)}</div>
        <h1>支付成功</h1>
        <p>${isPhoto ? "摄影师将在 2 小时内确认档期<br/>行前可随时沟通拍摄细节" : "商家将在 24 小时内消毒打包<br/>预计 3/11 送达酒店前台"}</p>
        <div class="success-card">
          <div class="success-card-row"><span>订单号</span><b>${o.orderNo}</b></div>
          <div class="success-card-row"><span>${isPhoto ? "服务" : "商品"}</span><b>${o.title}</b></div>
          <div class="success-card-row"><span>${isPhoto ? "已付定金" : "实付"}</span><b>¥${o.paid}</b></div>
          <div class="success-card-row"><span>${isPhoto ? "尾款" : "押金"}</span><b>${isPhoto ? `¥${o.balance}` : `¥${o.deposit} · 可退`}</b></div>
        </div>
        <div class="success-actions">
          <button class="btn-primary" data-action="view-order">查看订单</button>
          <button class="btn-ghost" data-action="tab" data-tab="home">返回首页</button>
        </div>
      </div>
    </div>
  </div>`;
}

/* ---------------------------------------------------------
   Orders
   --------------------------------------------------------- */
function filteredOrders() {
  return state.orderFilter === "all" ? ORDERS : ORDERS.filter((o) => o.type === state.orderFilter);
}

function ordersScreen() {
  return `<div class="screen">
    <div class="screen-scroll">
      ${pageHeader("我的订单")}
      <div class="orders-head" style="padding-top:0">
        <div class="segment">
          ${[
            ["all", "全部"],
            ["rental", "租衣"],
            ["photo", "摄影"],
          ]
            .map(
              ([key, label]) =>
                `<button class="${state.orderFilter === key ? "active" : ""}" data-action="filter-orders" data-filter="${key}">${label}</button>`
            )
            .join("")}
        </div>
      </div>
      <div class="order-list" id="order-list">
        ${filteredOrders().map(orderCard).join("") || '<div class="empty">还没有订单<br/>去首页看看今天的可租款吧</div>'}
      </div>
    </div>
  </div>`;
}

function orderScreen() {
  const o = ORDERS.find((x) => x.id === state.orderId) || ORDERS[0];
  const isPhoto = o.type === "photo";
  return `<div class="screen">
    <div class="screen-scroll">
      ${pageHeader(isPhoto ? "摄影订单" : "租衣订单")}
      <div class="status-card">
        <div class="status-eyebrow">ORDER STATUS</div>
        <h2>${o.status}</h2>
        <p>${o.statusSub}</p>
      </div>

      <div class="detail-info-card">
        <h3>订单进度</h3>
        <div class="status-timeline">
          ${o.timeline
            .map(
              (t) => `<div class="timeline-step ${t.state}">
                <span class="timeline-dot"></span>
                <div class="timeline-text"><b>${t.label}</b><span>${t.time}</span></div>
              </div>`
            )
            .join("")}
        </div>
      </div>

      <div class="detail-info-card">
        <h3>${isPhoto ? "服务信息" : "物流信息"}</h3>
        ${
          isPhoto
            ? `<div class="info-line"><span>摄影师</span><b>${o.merchant}</b></div>
               <div class="info-line"><span>档期</span><b>${o.date}</b></div>
               <div class="info-line"><span>地点</span><b>亚龙湾海边</b></div>
               <div class="info-line"><span>含</span><b>9 张精修 · 全部底片</b></div>`
            : `<div class="info-line"><span>配送方式</span><b>顺丰同城 · 酒店前台代收</b></div>
               <div class="info-line"><span>运单号</span><b>SF1234 8890 6621</b></div>
               <div class="info-line"><span>预计送达</span><b>3/11 14:00 前</b></div>
               <div class="info-line"><span>商家</span><b>${o.merchant}</b></div>`
        }
      </div>

      <div class="detail-info-card">
        <h3>${isPhoto ? "拍摄套餐" : "商品"}</h3>
        <div class="order-item-row">
          <img src="${img(o.image)}" alt="${o.title}" />
          <div class="info">
            <b>${o.title}</b>
            <span>${o.date}</span>
            <span>${isPhoto ? "含服装建议 / 9 张精修" : "含配饰 · 已消毒封签"}</span>
            <div class="p">¥${o.paid}${isPhoto ? " 定金" : ""}</div>
          </div>
        </div>
      </div>

      ${
        isPhoto
          ? `<div class="detail-info-card">
              <h3>费用</h3>
              <div class="info-line"><span>套餐价</span><b>¥${o.paid + o.balance}</b></div>
              <div class="info-line"><span>已付定金</span><b>¥${o.paid}</b></div>
              <div class="info-line"><span>拍摄前尾款</span><b>¥${o.balance}</b></div>
            </div>`
          : `<div class="detail-info-card">
              <h3>押金</h3>
              <div class="info-line"><span>押金金额</span><b>¥${o.deposit}</b></div>
              <div class="deposit-progress"><i></i></div>
              <div class="info-line"><span>状态</span><b>质检后 1-3 个工作日原路退回</b></div>
            </div>`
      }

      <div class="order-actions">
        <button class="btn-ghost" data-action="toast" data-message="客服将在 1 分钟内回复">联系客服</button>
        <button class="btn-primary" data-action="toast" data-message="${isPhoto ? "改期申请已提交，摄影师会与你确认" : "归还预约已提交，骑手将在 2 小时内联系你"}">${isPhoto ? "申请改期" : "预约归还"}</button>
      </div>
    </div>
  </div>`;
}

/* ---------------------------------------------------------
   Photography
   --------------------------------------------------------- */
function photoScreen() {
  return `<div class="screen">
    <div class="screen-scroll">
      <div class="list-head">
        <div class="list-title">
          <div>
            <h1>找摄影</h1>
            <div class="sub">三亚 · 42 位摄影师 · 档期实时更新</div>
          </div>
          <button class="icon-btn" data-action="city-sheet" aria-label="切换城市">${icon("pin", 18)}</button>
        </div>
      </div>

      <div class="photo-hero">
        <img src="${img("photographer-2")}" alt="摄影师" />
        <div class="photo-hero-content">
          <div class="eyebrow">TRAVEL PORTRAIT</div>
          <h2>把旅途拍成电影</h2>
          <p>看作品 · 选档期 · 行前沟通 · 平台担保</p>
        </div>
      </div>

      <div class="chips" id="photo-chips" style="padding:0 20px 16px">
        ${["全部", "海岛", "新中式", "夜景", "胶片"]
          .map(
            (s) =>
              `<button class="chip ${state.photoStyle === s ? "active" : ""}" data-action="filter-photo" data-style="${s}">${s}</button>`
          )
          .join("")}
      </div>

      <div id="photo-list">
        ${PHOTOGRAPHERS.map(
          (p) => `<div class="photographer-card" data-action="open-photographer" data-id="${p.id}" data-tags="${p.tags.join(",")}">
            <div class="photographer-cover">
              <img src="${img(p.cover)}" alt="${p.name}作品" loading="lazy" />
              <span class="cover-tag">${p.tags[0]} · 三亚</span>
              <span class="cover-price">¥${p.price} 起</span>
            </div>
            <div class="photographer-info">
              <img src="${img(p.avatar)}" alt="${p.name}" />
              <div class="who">
                <h3>${p.name}<span>${p.title}</span></h3>
                <p>${p.tags.join(" · ")} · 已拍 ${p.orders} 组</p>
              </div>
              <div class="rating"><b>${p.rating}</b><span class="stars">★★★★★</span></div>
            </div>
            <div class="tag-row">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
          </div>`
        ).join("")}
      </div>
      <div style="height:12px"></div>
    </div>
    ${tabbar("photo")}
  </div>`;
}

function photographerScreen() {
  const p = photographerById(state.photoId);
  return `<div class="screen has-bottom">
    <div class="screen-scroll">
      <div class="photo-detail-hero">
        <img src="${img(p.cover)}" alt="${p.name}作品" />
        <div class="detail-top">
          <button class="glass-btn" data-action="back" aria-label="返回">${icon("chevronLeft", 18)}</button>
          <div class="detail-top-right">
            <button class="glass-btn" data-action="toast" data-message="分享链接已复制">${icon("share", 16)}</button>
          </div>
        </div>
        <div class="photo-profile">
          <img src="${img(p.avatar)}" alt="${p.name}" />
          <div><h2>${p.name}</h2><p>${p.title} · 三亚</p></div>
          <div class="photo-rating"><b>${p.rating}</b><span>${p.orders} 组拍摄</span></div>
        </div>
      </div>

      <div class="photo-body">
        <p class="photo-bio">${p.bio}</p>

        <div class="section-head"><h3>作品集</h3><span style="font-size:9px;color:var(--muted)">近期客片</span></div>
        <div class="works-grid">
          ${p.works.map((w) => `<img src="${img(w)}" alt="作品" loading="lazy" />`).join("")}
        </div>

        <div class="package-card">
          <div class="package-card-head">
            <div><h3>${p.package.title}</h3><p>${p.package.desc}</p></div>
            <span class="price">¥${p.package.price}</span>
          </div>
          <div class="includes">${p.package.includes.map((i) => `<span>${i}</span>`).join("")}</div>
          <div class="schedule-row">
            ${["3/12 09:00", "3/12 15:00", "3/13 09:00", "3/13 15:00"]
              .map(
                (s) =>
                  `<button class="slot ${state.slot === s ? "active" : ""}" data-action="select-slot" data-slot="${s}">${s}</button>`
              )
              .join("")}
          </div>
        </div>

        <div class="rules">
          <div class="rule"><span>定金</span><span>30% · 拍摄前付尾款</span></div>
          <div class="rule"><span>改期</span><span>提前 48 小时免费一次</span></div>
          <div class="rule"><span>交付</span><span>7 天选片 · 15 天精修</span></div>
        </div>
      </div>
    </div>

    <div class="detail-bottom">
      <div class="rest-price"><span class="price">¥${p.package.price}</span><span>定金 ¥${p.package.deposit} · 锁定档期</span></div>
      <button class="btn-primary" data-action="open-photo-pay">付定金预约</button>
    </div>
  </div>`;
}

/* ---------------------------------------------------------
   City
   --------------------------------------------------------- */
function cityScreen() {
  return `<div class="screen">
    <div class="screen-scroll">
      ${pageHeader("三亚")}
      <div class="city-hero">
        <img src="${img("hero-beach")}" alt="三亚海边" />
        <div class="city-hero-content">
          <h1>三亚</h1>
          <p>28°C · 海风 3 级 · 适合白裙和浅色</p>
        </div>
      </div>

      <div class="city-stats">
        <div class="city-stat"><b>12</b><span>个旅拍机位</span></div>
        <div class="city-stat"><b>326</b><span>件可租衣服</span></div>
        <div class="city-stat"><b>8</b><span>家合作酒店</span></div>
      </div>

      <div class="section" style="padding:0">
        <div class="section-head" style="padding:0 20px"><h3>必拍机位</h3><span style="font-size:9px;color:var(--muted)">按光线排序</span></div>
        <div class="spot-row">
          <div class="spot-card"><img src="${img("beach")}" alt="亚龙湾" /><div><b>亚龙湾 · 白沙滩</b><span>上午 8-10 点 · 逆光最柔</span></div></div>
          <div class="spot-card"><img src="${img("hero-beach")}" alt="后海村" /><div><b>后海村 · 冲浪店</b><span>下午 4-6 点 · 胶片感</span></div></div>
          <div class="spot-card"><img src="${img("amalfi")}" alt="天涯镇" /><div><b>天涯镇 · 蓝白小巷</b><span>上午 9 点 · 人少</span></div></div>
          <div class="spot-card"><img src="${img("beach-2")}" alt="椰梦长廊" /><div><b>椰梦长廊 · 日落</b><span>18:20 · 金色时刻</span></div></div>
        </div>
      </div>

      <div class="section" style="margin-top:22px">
        <div class="section-head"><h3>住这里，衣服送到前台</h3><button class="more" data-action="toast" data-message="更多酒店将在下一版开放">更多 ${icon("arrowRight", 12)}</button></div>
        <div class="hotel-card">
          <img src="${img("hotel")}" alt="酒店" />
          <div class="info"><b>亚龙湾云汀度假酒店</b><p>步行到沙滩 5 分钟 · 前台代收</p><span>住客免配送费 · 延迟退房</span></div>
        </div>
        <div class="hotel-card">
          <img src="${img("hotel-2")}" alt="民宿" />
          <div class="info"><b>后海 · 白房子民宿</b><p>步行到海边 3 分钟 · 冲浪友好</p><span>住客租衣 9 折 · 免费寄存</span></div>
        </div>
      </div>

      <div class="guide-card">
        <div class="guide-kicker">3 天 2 晚 · 穿搭路线</div>
        <h3>白裙、碎花和一件蓝风衣</h3>
        <p>按天气和拍摄时段排的轻量行程，不用带一箱衣服，也能每天出片。</p>
        <div class="guide-steps">
          <div class="guide-step"><i>1</i>Day 1 · 亚龙湾白裙 + 日落跟拍</div>
          <div class="guide-step"><i>2</i>Day 2 · 后海碎花 + 冲浪店咖啡</div>
          <div class="guide-step"><i>3</i>Day 3 · 天涯镇蓝风衣 + 返程</div>
        </div>
      </div>

      <div style="padding:0 20px 20px">
        <button class="btn-primary" style="width:100%" data-action="tab" data-tab="rent">按目的地选衣 ${icon("arrowRight", 14)}</button>
      </div>
    </div>
  </div>`;
}

/* ---------------------------------------------------------
   Makeup
   --------------------------------------------------------- */
function makeupScreen() {
  return `<div class="screen">
    <div class="screen-scroll">
      ${pageHeader("找化妆")}
      <div class="makeup-hero">
        <img src="${img("model-3")}" alt="妆造" />
        <div><h2>妆造跟着衣服走</h2><p>到店 / 上门 · 和租衣摄影打包更省心</p></div>
      </div>

      <div class="section-head" style="padding:0 20px"><h3>三亚人气妆造师</h3><span style="font-size:9px;color:var(--muted)">可约本周</span></div>
      ${MAKEUP_ARTISTS.map(
        (a) => `<div class="artist-card">
          <img src="${img(a.avatar)}" alt="${a.name}" />
          <div class="info">
            <h3>${a.name}<span>${a.title}</span></h3>
            <p>${a.desc}</p>
            <div class="tags">${a.tags.map((t) => `<span>${t}</span>`).join("")}</div>
            <div class="bottom"><b>¥${a.price} 起</b><button data-action="toast" data-message="预约需求已记录，${a.name}会联系你">预约</button></div>
          </div>
        </div>`
      ).join("")}

      <div style="padding:0 20px 20px">
        <div class="guide-card" style="margin:0">
          <div class="guide-kicker">打包更省心</div>
          <h3>租衣 + 妆造 + 摄影</h3>
          <p>同一行程一次约好，妆造师按你的服装和拍摄场景出妆，省去反复沟通。</p>
          <div class="guide-steps">
            <div class="guide-step"><i>1</i>先选衣服，确认拍摄风格</div>
            <div class="guide-step"><i>2</i>再约妆造，上传参考图</div>
            <div class="guide-step"><i>3</i>摄影师按妆造和光线排档期</div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

/* ---------------------------------------------------------
   Community
   --------------------------------------------------------- */
function filteredPosts() {
  if (state.communityTab === "关注") return POSTS.filter((p) => p.user === "林小鹿");
  if (state.communityTab === "同城") return POSTS.filter((p) => p.city.includes("三亚"));
  return POSTS;
}

function communityScreen() {
  return `<div class="screen">
    <div class="screen-scroll">
      <div class="community-head">
        <div class="community-head-top">
          <h1>社区</h1>
          <button class="icon-btn" data-action="toast" data-message="搜索功能将在下一版开放" aria-label="搜索">${icon("search", 18)}</button>
        </div>
        <div class="community-tabs">
          ${["推荐", "同城", "关注"]
            .map(
              (t) =>
                `<button class="${state.communityTab === t ? "active" : ""}" data-action="community-tab" data-tab="${t}">${t}</button>`
            )
            .join("")}
        </div>
      </div>

      <div class="feed" id="feed">
        ${filteredPosts().map(postCard).join("") || '<div class="empty">这里还没有内容<br/>去推荐看看大家的客片吧</div>'}
      </div>
    </div>
    <button class="compose" data-action="toast" data-message="发布功能将在二期开放" aria-label="发布">${icon("plus", 22)}</button>
    ${tabbar("community")}
  </div>`;
}

function postCard(p) {
  const liked = !!state.likedPosts[p.id];
  const product = p.product ? productById(p.product) : null;
  return `<article class="post">
    <div class="post-head">
      <img src="${img(p.avatar)}" alt="${p.user}" />
      <div class="who"><b>${p.user}</b><span>${p.city} · ${p.time}</span></div>
      <button class="follow" data-action="toast" data-message="已关注 ${p.user}">关注</button>
    </div>
    <div class="post-images ${p.images.length === 1 ? "single" : ""}">
      ${p.images.map((i) => `<img src="${img(i)}" alt="客片" loading="lazy" />`).join("")}
    </div>
    <div class="post-body">
      <p>${p.text}</p>
      <div class="post-tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
      ${
        product
          ? `<div class="post-product" data-action="open-product" data-id="${product.id}">
              <img src="${img(product.img)}" alt="${product.title}" />
              <span>同款可租 · ${product.title}</span>
              <b>¥${product.price}/3天</b>
            </div>`
          : ""
      }
      <div class="post-actions">
        <button class="${liked ? "liked" : ""}" data-action="like-post" data-id="${p.id}">${icon("heart", 15)} <span>${p.likes + (liked ? 1 : 0)}</span></button>
        <button data-action="toast" data-message="评论功能将在下一版开放">${icon("chat", 15)} ${p.comments}</button>
        <button class="save" data-action="toast" data-message="已收藏这篇笔记">${icon("bookmark", 15)} 收藏</button>
      </div>
    </div>
  </article>`;
}

/* ---------------------------------------------------------
   Profile
   --------------------------------------------------------- */
function profileScreen() {
  return `<div class="screen">
    <div class="screen-scroll">
      <div class="profile-head">
        <div class="profile-top">
          <h1>我的</h1>
          <button class="icon-btn" data-action="toast" data-message="设置将在下一版开放" aria-label="设置">${icon("settings", 18)}</button>
        </div>

        <div class="profile-user">
          <img src="${img("model-2")}" alt="林小鹿" />
          <div>
            <h2>林小鹿</h2>
            <p>三亚 · 旅行第 3 天</p>
            <span class="profile-tag">168cm / 50kg · 常穿 S</span>
          </div>
        </div>

        <div class="member-card">
          <div class="member-kicker">TRAVEL MEMBER</div>
          <h3>旅行会员 · 免押额度 ¥2,000</h3>
          <p>生日月 8 折 · 优先档期 · 专属客服</p>
          <button class="member-btn" data-action="toast" data-message="会员中心将在下一版开放">查看权益</button>
        </div>

        <div class="profile-stats">
          <div class="profile-stat"><b>6</b><span>订单</span></div>
          <div class="profile-stat"><b>18</b><span>收藏</span></div>
          <div class="profile-stat"><b>32</b><span>足迹</span></div>
        </div>

        <div class="order-shortcuts">
          ${[
            ["待付款", "bag", ""],
            ["待发货", "truck", "1"],
            ["使用中", "clock", "1"],
            ["待归还", "calendar", ""],
            ["售后", "chat", ""],
          ]
            .map(
              ([label, ic, badge]) =>
                `<button class="shortcut" data-action="go" data-screen="orders">
                  <span class="s-icon">${icon(ic, 17)}${badge ? `<em>${badge}</em>` : ""}</span>${label}
                </button>`
            )
            .join("")}
        </div>

        <div class="menu-list">
          <button class="menu-item" data-action="toast" data-message="收藏夹将在下一版开放"><span class="m-icon">${icon("heart", 16)}</span>我的收藏<span class="m-arrow">${icon("chevronRight", 14)}</span></button>
          <button class="menu-item" data-action="toast" data-message="身材档案将在下一版开放"><span class="m-icon">${icon("user", 16)}</span>身材档案<span class="m-arrow">${icon("chevronRight", 14)}</span></button>
          <button class="menu-item" data-action="toast" data-message="优惠券将在下一版开放"><span class="m-icon">${icon("sparkle", 16)}</span>优惠券 / 会员<span class="m-arrow">${icon("chevronRight", 14)}</span></button>
          <button class="menu-item" data-action="toast" data-message="地址簿将在下一版开放"><span class="m-icon">${icon("pin", 16)}</span>地址簿<span class="m-arrow">${icon("chevronRight", 14)}</span></button>
          <button class="menu-item" data-action="toast" data-message="客服将在 1 分钟内回复"><span class="m-icon">${icon("chat", 16)}</span>客服与帮助<span class="m-arrow">${icon("chevronRight", 14)}</span></button>
          <button class="menu-item" data-action="toast" data-message="设置将在下一版开放"><span class="m-icon">${icon("settings", 16)}</span>设置<span class="m-arrow">${icon("chevronRight", 14)}</span></button>
        </div>
      </div>
    </div>
    ${tabbar("profile")}
  </div>`;
}

/* ---------------------------------------------------------
   Overlays
   --------------------------------------------------------- */
function openCitySheet() {
  const overlay = $("#overlay");
  overlay.innerHTML = `<div class="overlay-backdrop" data-action="close-sheet"></div>
    <div class="sheet">
      <div class="sheet-handle"></div>
      <h3>选择目的地</h3>
      <div class="city-list">
        ${["三亚", "大理", "厦门", "重庆", "西安"]
          .map(
            (c) =>
              `<button class="city-option ${c === "三亚" ? "active" : ""}" data-action="select-city" data-city="${c}">
                ${c}<span>${c === "三亚" ? "已开放 · 28°C" : "即将开放"}</span>
              </button>`
          )
          .join("")}
      </div>
    </div>`;
  overlay.classList.add("open");
}

/* ---------------------------------------------------------
   Render
   --------------------------------------------------------- */
const SCREENS = {
  home: homeScreen,
  rent: rentScreen,
  product: productScreen,
  booking: bookingScreen,
  success: successScreen,
  orders: ordersScreen,
  order: orderScreen,
  photo: photoScreen,
  photographer: photographerScreen,
  city: cityScreen,
  makeup: makeupScreen,
  community: communityScreen,
  profile: profileScreen,
};

function render() {
  const app = $("#app");
  const screen = SCREENS[state.screen] || homeScreen;
  app.innerHTML = screen();
  const statusbar = $("#statusbar");
  if (statusbar) {
    statusbar.classList.toggle("on-image", state.screen === "product" || state.screen === "photographer");
  }
}

/* ---------------------------------------------------------
   Events
   --------------------------------------------------------- */
document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-action]");
  if (!el) return;
  const action = el.dataset.action;

  // Links inside agreement should not jump
  if (el.tagName === "A") e.preventDefault();

  switch (action) {
    case "tab":
      switchTab(el.dataset.tab);
      break;

    case "go":
      go(el.dataset.screen);
      break;

    case "back":
      back();
      break;

    case "go-search":
      switchTab("rent");
      setTimeout(() => $('[data-role="search"]')?.focus(), 60);
      break;

    case "open-product":
      openProduct(el.dataset.id);
      break;

    case "like-product": {
      const id = el.dataset.id;
      state.liked[id] = !state.liked[id];
      $$(`[data-action="like-product"][data-id="${id}"]`).forEach((btn) =>
        btn.classList.toggle("active", state.liked[id])
      );
      toast(state.liked[id] ? "已收藏，行前记得回来看档期" : "已取消收藏");
      break;
    }

    case "gallery": {
      state.galleryIndex = Number(el.dataset.index);
      const p = productById(state.productId);
      const imgEl = $("#detail-img");
      if (imgEl) imgEl.src = img(p.gallery[state.galleryIndex]);
      $$(".detail-dots .dot").forEach((dot, i) =>
        dot.classList.toggle("active", i === state.galleryIndex)
      );
      break;
    }

    case "select-size":
      state.size = el.dataset.size;
      $$('[data-action="select-size"]').forEach((b) =>
        b.classList.toggle("active", b.dataset.size === state.size)
      );
      break;

    case "select-days":
      state.days = Number(el.dataset.days);
      $$('[data-action="select-days"]').forEach((b) =>
        b.classList.toggle("active", Number(b.dataset.days) === state.days)
      );
      refreshDetail();
      break;

    case "select-delivery":
      state.delivery = el.dataset.delivery;
      $$('[data-action="select-delivery"]').forEach((b) =>
        b.classList.toggle("active", b.dataset.delivery === state.delivery)
      );
      refreshDetail();
      break;

    case "go-booking":
      go("booking");
      break;

    case "toggle-insurance":
      state.insurance = !state.insurance;
      refreshBooking();
      break;

    case "toggle-agree":
      state.agreed = !state.agreed;
      el.classList.toggle("on", state.agreed);
      break;

    case "open-pay":
      openPaySheet();
      break;

    case "confirm-pay":
      confirmPay();
      break;

    case "close-sheet":
      closeSheet();
      break;

    case "view-order":
      state.screen = "order";
      render();
      break;

    case "open-order":
      state.orderId = el.dataset.id;
      go("order");
      break;

    case "filter-orders": {
      state.orderFilter = el.dataset.filter;
      $$(".segment button").forEach((b) =>
        b.classList.toggle("active", b.dataset.filter === state.orderFilter)
      );
      const list = $("#order-list");
      if (list) {
        list.innerHTML =
          filteredOrders().map(orderCard).join("") ||
          '<div class="empty">还没有订单<br/>去首页看看今天的可租款吧</div>';
      }
      break;
    }

    case "open-photographer":
      state.photoId = el.dataset.id;
      state.slot = "3/13 15:00";
      go("photographer");
      break;

    case "select-slot":
      state.slot = el.dataset.slot;
      $$('[data-action="select-slot"]').forEach((b) =>
        b.classList.toggle("active", b.dataset.slot === state.slot)
      );
      break;

    case "open-photo-pay":
      openPhotoPaySheet();
      break;

    case "confirm-photo-pay":
      confirmPhotoPay();
      break;

    case "filter-home":
      state.homeStyle = el.dataset.style;
      $$("#home-chips .chip").forEach((c) =>
        c.classList.toggle("active", c.dataset.style === state.homeStyle)
      );
      renderHomeGrid();
      break;

    case "filter-rent":
      state.rentStyle = el.dataset.style;
      $$("#rent-chips .chip").forEach((c) =>
        c.classList.toggle("active", c.dataset.style === state.rentStyle)
      );
      renderRentGrid();
      break;

    case "filter-photo":
      state.photoStyle = el.dataset.style;
      $$("#photo-chips .chip").forEach((c) =>
        c.classList.toggle("active", c.dataset.style === state.photoStyle)
      );
      $$("#photo-list .photographer-card").forEach((card) => {
        const tags = card.dataset.tags.split(",");
        card.classList.toggle("hidden", state.photoStyle !== "全部" && !tags.includes(state.photoStyle));
      });
      break;

    case "community-tab":
      state.communityTab = el.dataset.tab;
      render();
      break;

    case "like-post": {
      const id = el.dataset.id;
      const post = POSTS.find((p) => p.id === id);
      state.likedPosts[id] = !state.likedPosts[id];
      el.classList.toggle("liked", state.likedPosts[id]);
      const countEl = el.querySelector("span");
      if (countEl && post) countEl.textContent = post.likes + (state.likedPosts[id] ? 1 : 0);
      break;
    }

    case "city-sheet":
      openCitySheet();
      break;

    case "select-city":
      if (el.dataset.city === "三亚") {
        state.city = "三亚";
        closeSheet();
        toast("已切换到三亚");
      } else {
        toast(`${el.dataset.city} 正在筹备，首发先开放三亚`);
      }
      break;

    case "toast":
      toast(el.dataset.message || "功能正在开发中");
      break;

    default:
      break;
  }
});

document.addEventListener("input", (e) => {
  if (!e.target.matches('[data-role="search"]')) return;
  const q = e.target.value.trim().toLowerCase();
  const cards = $$("#rent-grid .product-card");
  cards.forEach((card) => {
    const text = (card.dataset.search || "").toLowerCase();
    card.classList.toggle("hidden", !!q && !text.includes(q));
  });
  const count = $("#rent-count");
  if (count) {
    const visible = cards.filter((card) => !card.classList.contains("hidden")).length;
    count.textContent = visible
      ? `为你找到 ${visible} 套 · 按可租日期排序`
      : "没有找到匹配的款式，换个关键词试试";
  }
});

/* ---------------------------------------------------------
   Home/rent grid filters (without full re-render)
   --------------------------------------------------------- */
function renderHomeGrid() {
  const list =
    state.homeStyle === "全部"
      ? PRODUCTS.slice(0, 4)
      : PRODUCTS.filter((p) => p.styles.includes(state.homeStyle)).slice(0, 4);
  const el = $("#home-grid");
  if (el) {
    el.innerHTML = list.length
      ? list.map(productCard).join("")
      : '<div class="empty" style="grid-column:1/-1">这个风格暂时没有可租款<br/>看看全部吧</div>';
  }
}

function renderRentGrid() {
  const list =
    state.rentStyle === "全部"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.styles.includes(state.rentStyle));
  const el = $("#rent-grid");
  if (el) el.innerHTML = list.map(productCard).join("");
  const count = $("#rent-count");
  if (count) count.textContent = `为你找到 ${list.length} 套 · 按可租日期排序`;
}

/* ---------------------------------------------------------
   Boot
   --------------------------------------------------------- */
render();
