const moment = require('moment');
const routes = require('../routes');

/**
 * @typedef { import("vuepress/config").DefaultThemeConfig } DefaultThemeConfig
 * @type { import("vuepress/config").Config<DefaultThemeConfig> }
 */
module.exports = {
  title: "Tomo's前端",
  description: '前端文档blog',
  head: [
    ['link', { rel: 'icon', href: '/asset/logo.jpg' }],
    [
      'script',
      {},
      `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?aed7d99443c8742447879b147243186d";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
          </script>`,
    ],
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
    (options, ctx) => {
      return {
        name: 'vuepress-plugin-code-try',
        clientRootMixin: path.resolve(
          __dirname,
          'vuepress-plugin-code-try/index.js',
        ),
      };
    },
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
        text: 'Tomo的前端',
        items: [{ text: 'Github', link: 'https://github.com/tomoyd' }],
      },
    ],
    sidebar: routes,
  },
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },

    extendMarkdown: (md) => {
      md.use(function (md) {
        const fence = md.renderer.rules.fence;
        md.renderer.rules.fence = (...args) => {
          let rawCode = fence(...args);
          if (rawCode.includes('try-link=https')) {
            rawCode = rawCode.replace(
              /<span class="token comment">\/\/ try-link=https:\/\/(.*)<\/span>\n/gi,
              '<a href="$1" class="try-button" target="_blank">Try</a>',
            );
          }
          return `${rawCode}`;
        };
      });
    },
  },
};
