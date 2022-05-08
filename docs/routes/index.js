module.exports = [
  {
    title: 'Tomo的前端',
    collapsable: false,
    path: '/',
    children: [
      {
        title: '介绍',
        path: '/',
      },
      {
        title: '深入react',
        path: '/react/',
        children: [
          {
            title: '前言',
            path: '/react/',
          },
          {
            title: '运行机制',
            path: '/react/loop',
          },
          {
            title: '主要对象',
            path: '/react/main-obj',
          },
        ],
      },
    ],
  },
];
