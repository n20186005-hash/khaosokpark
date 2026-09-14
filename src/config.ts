export const siteConfig = {
  // 多语言名称（站点名 / 当地名）
  name: {
    th: 'อุทยานแห่งชาติเขาสก',
    en: 'Khao Sok National Park',
    zh: '考索国家公园',
  },
  nameLocal: 'อุทยานแห่งชาติเขาสก', // 当地（泰文）名称
  domain: 'https://khaosokpark.com',

  phone: '+6677395155',
  phoneDisplay: '+66 77 395 155',

  // 评分 / 评价数——同步自 Google 地图商家实体（2026 年 9 月）
  // 仅用于页面展示与来源标注；第三方聚合评分不写入 JSON-LD
  rating: 4.7,
  reviewCount: '8,924',
  ratingSyncedAt: {
    th: 'กันยายน 2569',
    en: 'September 2026',
    zh: '2026 年 9 月',
  },

  // 实际坐标（用于天气 / 日落 API 与地图嵌入）—— 考索国家公园总部 / Khlong Sok
  coords: { lat: 8.9333, lng: 98.5167 },

  // 统一 Google Maps 链接（首屏 / 照片 / 评价 / 页脚 共 4 处 + JSON-LD sameAs）
  mapsUrl: 'https://maps.app.goo.gl/CdsMQbv2pSAoRrk37',

  // Google Maps 嵌入代码 src（与上方 mapsUrl 指向同一商家实体）
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.9395145303015!2d98.63818789999999!3d8.977713399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3051287e3275975f%3A0x8e7f172ecc1fad30!2sKhao%20Sok%20National%20Park!5e0!3m2!1sen!2sus',

  // 结构化数据 sameAs（权威资料页）
  sameAs: [
    'https://maps.app.goo.gl/CdsMQbv2pSAoRrk37',
    'https://www.tourismthailand.org/',
    'https://nps-office.dnp.go.th/parksdetail.php?id=21&name=%E0%B8%AD%E0%B8%8A.%E0%B9%80%E0%B8%82%E0%B8%B2%E0%B8%AA%E0%B8%81',
  ],

  address: 'Khao Phang, Ban Takun District, Surat Thani 84250, Thailand',
  plusCode: 'XJHQ+37',

  /* ------------------------------------------------------------------
   * 单景点 SEO 实体绑定配置（与 Google 地图商家实体一一对应）
   * 仅需替换本节变量即可复用到其他单景点站点
   * ------------------------------------------------------------------ */
  entity: {
    // ATTRACTION_FULL_NAME —— 景点官方全称
    fullName: {
      th: 'อุทยานแห่งชาติเขาสก',
      en: 'Khao Sok National Park',
      zh: '考索国家公园',
    },
    // ATTRACTION_SHORT_NAME —— 域名对应含义 / 常用俗称
    shortName: 'Khao Sok',
    // CITY_NAME —— 所在城镇（区）
    city: 'Ban Ta Khun',
    // 次级行政区（街道 / 片区）
    subLocality: 'Khao Phang',
    // STATE_PROVINCE
    stateProvince: 'Surat Thani',
    // COUNTRY_NAME / COUNTRY_CODE_2LETTER
    country: 'Thailand',
    countryCode: 'TH',
    // POSTAL_CODE
    postalCode: '84230',
    // LATITUDE / LONGITUDE —— 与 Google 地图实体锚点一致（Plus code XJHQ+37）
    latitude: 8.9777134,
    longitude: 98.6381879,
    // 周边核心地标
    nearbyLandmark1: 'Cheow Lan Lake',
    nearbyLandmark2: 'Ratchaprapha Dam',
    // 权威旅游局 / 政府外链
    govtTourismUrl: 'https://www.tourismthailand.org/',
    govtTourismLabel: {
      th: 'พอร์ทัลการท่องเที่ยวอย่างเป็นทางการของประเทศไทย / สุราษฎร์ธานี',
      en: 'Thailand / Surat Thani Official Tourism Portal',
      zh: '泰国 / 素叻他尼官方旅游门户',
    },
    govtParkLabel: {
      th: 'ข้อมูลอุทยานแห่งชาติเขาสก (กรมอุทยานแห่งชาติ)',
      en: 'Khao Sok National Park (Dept. of National Parks)',
      zh: '考索国家公园（泰国国家公园厅）',
    },
    govtParkUrl:
      'https://nps-office.dnp.go.th/parksdetail.php?id=21&name=%E0%B8%AD%E0%B8%8A.%E0%B9%80%E0%B8%82%E0%B8%B2%E0%B8%AA%E0%B8%81',
    /* 园区开放（检票进入）时段。游客中心/售票窗口实际约 08:00–16:30，
       湖区长尾船禁航时段为日落后至日出前；值班规则详见 i18n 的 guide.hours */
    openingHours: { opens: '06:00', closes: '18:00' },
    // 结构化数据图片（首图 + 备选）
    images: [
      '/gallery/khao-sok-national-park-24.jpg',
      '/gallery/khao-sok-national-park-1.jpg',
      '/gallery/khao-sok-national-park-2.jpg',
    ],
  },

  // 画廊图片前缀（配合 public/gallery/khao-sok-national-park-1..N.jpg）
  galleryPrefix: 'khao-sok-national-park-',

  // 社交 / 资料链接（科普站占位，上线前请替换为官方或可运营账号）
  socialLinks: [
    {
      name: 'Tourism Thailand',
      href: 'https://www.tourismthailand.org/',
      icon: 'globe',
    },
    {
      name: 'DNP Thailand',
      href: 'https://nps-office.dnp.go.th/parksdetail.php?id=21&name=%E0%B8%AD%E0%B8%8A.%E0%B9%80%E0%B8%82%E0%B8%B2%E0%B8%AA%E0%B8%81',
      icon: 'tree',
    },
    {
      name: 'Google Maps',
      href: 'https://maps.app.goo.gl/CdsMQbv2pSAoRrk37',
      icon: 'map',
    },
  ],

  // 资料来源（页脚引用，需与页脚 per-language name 结构一致）
  sources: [
    {
      name: { th: 'การท่องเที่ยวแห่งประเทศไทย', en: 'Tourism Thailand', zh: '泰国国家旅游局' },
      url: 'https://www.tourismthailand.org/',
    },
    {
      name: { th: 'กรมอุทยานแห่งชาติ สัตว์ป่า และพันธุ์พืช', en: 'DNP Thailand', zh: '泰国国家公园厅' },
      url: 'https://www.dnp.go.th/',
    },
    {
      name: { th: 'อุทยานแห่งชาติเขาสก (กรมอุทยาน)', en: 'Khao Sok NP (DNP)', zh: '考索国家公园（国家公园厅）' },
      url: 'https://nps-office.dnp.go.th/parksdetail.php?id=21&name=%E0%B8%AD%E0%B8%8A.%E0%B9%80%E0%B8%82%E0%B8%B2%E0%B8%AA%E0%B8%81',
    }
  ],
};
