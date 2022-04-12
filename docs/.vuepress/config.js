const moment = require('moment');

/**
 * @typedef { import("vuepress/config").DefaultThemeConfig } DefaultThemeConfig
 * @type { import("vuepress/config").Config<DefaultThemeConfig> }
 */
module.exports = {
  title: "Tomo's文档",
  description: '前端文档blog',
  head: [
    ['link', { rel: 'icon', href: '/asset/logo.jpg' }],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1',
      },
    ],
  ],
  base: '/blog/',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  theme: 'reco',
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          moment.locale(lang);
          return moment(timestamp).fromNow();
        },
      },
    ],
    [
      '@vuepress/search',
      {
        searchMaxSuggestions: 10,
      },
    ],
  ],
  themeConfig: {
    lastUpdated: '上次更新',
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'Tomo的前端文档',
        items: [{ text: 'Github', link: 'https://github.com/tomoyd' }],
      },
    ],
    sidebar: [
      {
        title: '深入CSS',
        collapsable: false,
        path: '/',
        children: [
          {
            title: 'BFC',
            path: '/css/BFC',
          },
        ],
      },
    ],
  },
};
