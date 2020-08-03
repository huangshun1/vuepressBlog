module.exports = {
  title: '个人文档',
  description: 'Personal Website',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', {
      rel: 'icon',
      href: '/images/main.png'
    }],
    // ['link', { rel: 'manifest', href: '/images/main.png' }],
    ['link', {
      rel: 'apple-touch-icon',
      href: '/images/main.png'
    }],
    ['meta', {
      'http-quiv': 'pragma',
      cotent: 'no-cache'
    }],
    ['meta', {
      'http-quiv': 'pragma',
      cotent: 'no-cache,must-revalidate'
    }],
    ['meta', {
      'http-quiv': 'expires',
      cotent: '0'
    }]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    nav: [ // 导航栏配置
      {
        text: '前端基础',
        link: '/accumulate/'
      },
      {
        text: '算法题库',
        link: '/algorithm/'
      },
      {
        text: '诗和远方',
        link: '/others/'
      },
      {
        text: '微博',
        link: 'https://baidu.com'
      }
    ],
    search: true, //搜索
    searchMaxSuggestions: 10,
    sidebar: [{
        title: 'vuepress',
        collapsable: true,
        children: [{
          title: 'vuepress搭建',
          collapsable: true,
          path: '/pages/VuePressSummary/vuepressblog.md'
        }]
      },
      {
        title: 'Vue',
        collapsable: true,
        children: [{
          title: 'Vue',
          collapsable: true,
          path: '/pages/VueSummary/vue.md'
        }]
      }
    ],
    sidebarDepth: 2
  }
};