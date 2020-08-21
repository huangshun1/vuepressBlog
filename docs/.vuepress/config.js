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
        title: 'vuepress汇总',
        collapsable: true,
        children: [{
            title: 'vuepress搭建',
            collapsable: true,
            path: '/pages/VuePressSummary/vuepressblog.md'
          },
          {
            title: '随机',
            collapsable: true,
            path: '/pages/VuePressSummary/press.md'
          }
        ]
      },
      {
        title: 'Vue汇总',
        collapsable: true,
        children: [{
            title: 'Vue',
            collapsable: true,
            path: '/pages/VueSummary/vue.md'
          },
          {
            title: 'Vue使用NProgress',
            collapsable: true,
            path: '/pages/VueSummary/Vue使用NProgress.md'
          }
        ]
      },
      {
        title: 'Javascript汇总',
        collapsable: true,
        children: [{
            title: 'JavaScript常用片段',
            collapsable: true,
            path: '/pages/JavaScriptSummary/JavaScript常用片段.md'
          },
        ]
      },
      {
        title: '计算机网络汇总',
        collapsable: true,
        children: [{
            title: '计算机网络1',
            collapsable: true,
            path: '/pages/ComputerNetworkSummary/计算机网络.md'
          },
          {
            title: '状态码',
            collapsable: true,
            path: '/pages/ComputerNetworkSummary/状态码.md'
          },
        ]
      },
      {
        title: '插件知识汇总',
        collapsable: true,
        children: [{
            title: 'js-cookie插件',
            collapsable: true,
            path: '/pages/PlugInSummary/js-cookie插件.md'
          },
        ]
      }
    ],
    sidebarDepth: 2
  }
};