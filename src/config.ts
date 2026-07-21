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

  rating: 4.7,
  reviewCount: '8,791',

  // 实际坐标（用于天气 / 日落 API 与地图嵌入）—— 考索国家公园总部 / Khlong Sok
  coords: { lat: 8.9333, lng: 98.5167 },

  // 统一 Google Maps 链接（首屏 / 照片 / 评价 / 页脚 共 4 处 + JSON-LD sameAs）
  mapsUrl: 'https://maps.app.goo.gl/CdsMQbv2pSAoRrk37',

  // 结构化数据 sameAs（权威资料页）
  sameAs: [
    'https://maps.app.goo.gl/CdsMQbv2pSAoRrk37',
    'https://nps-office.dnp.go.th/parksdetail.php?id=21&name=%E0%B8%AD%E0%B8%8A.%E0%B9%80%E0%B8%82%E0%B8%B2%E0%B8%AA%E0%B8%81',
  ],

  address: 'Khao Phang, Ban Takun District, Surat Thani 84250, Thailand',
  plusCode: 'XJHQ+37',

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
    },
    {
      name: { th: 'Thai National Parks (คู่มือเอกชน)', en: 'Thai National Parks (Private Guide)', zh: 'Thai National Parks（民间指南）' },
      url: 'https://www.thainationalparks.com/khao-sok-national-park',
    },
  ],
};
