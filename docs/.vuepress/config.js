module.exports = {
  title: '学习笔记',
  description: 'Just playing around11',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://gitmoji.carloscuesta.me/static/apple-icon-57x57.png',
      },
    ],
  ],
  base: '/wn_notes/',
  dest: './dist',
  markdown: {
    lineNumbers: true,
  },
  evergreen: true,
  themeConfig: {
    displayAllHeaders: true, // 默认值：false
    lastUpdated: 'Last Updated', // string | boolean
    sidebar: [
  {
    title: "git",
    collapsable: false,
    sidebarDepth: 1,
    children: [
      {
        title: "rebase",
        path: "git/rebase.md"
      },
      {
        title: "协议",
        path: "git/协议.md"
      },
      {
        title: "版本回退",
        path: "git/版本回退.md"
      }
    ]
  },
  {
    title: "http",
    collapsable: false,
    sidebarDepth: 1,
    children: [
      {
        title: "content-length和chunk",
        path: "http/content-length和chunk.md"
      },
      {
        title: "csrf",
        path: "http/csrf.md"
      },
      {
        title: "refer和origin",
        path: "http/refer和origin.md"
      }
    ]
  },
  {
    title: "linux",
    collapsable: false,
    sidebarDepth: 1,
    children: [
      {
        title: "three",
        path: "linux/three.md"
      },
      {
        title: "total",
        path: "linux/total.md"
      },
      {
        title: "two",
        path: "linux/two.md"
      }
    ]
  },
  {
    title: "nodejs",
    collapsable: false,
    sidebarDepth: 1,
    children: [
      {
        title: "异步模块",
        path: "nodejs/异步模块.md"
      },
      {
        title: "读取pdf信息",
        path: "nodejs/读取pdf信息.md"
      }
    ]
  },
  {
    title: "vue",
    collapsable: false,
    sidebarDepth: 1,
    children: [
      {
        title: "nextTick",
        path: "vue/nextTick.md"
      }
    ]
  },
  {
    title: "工程设计",
    collapsable: false,
    sidebarDepth: 1,
    children: [
      {
        title: "事件绑定",
        path: "工程设计/事件绑定.md"
      },
      {
        title: "渲染性能",
        path: "工程设计/渲染性能.md"
      },
      {
        title: "组件和路由",
        path: "工程设计/组件和路由.md"
      }
    ]
  },
  {
    title: "移动端",
    collapsable: false,
    sidebarDepth: 1,
    children: [
      {
        title: "codova环境搭建",
        path: "移动端/codova环境搭建.md"
      },
      {
        title: "fastclick兼容",
        path: "移动端/fastclick兼容.md"
      },
      {
        title: "scroll兼容",
        path: "移动端/scroll兼容.md"
      },
      {
        title: "sticky兼容",
        path: "移动端/sticky兼容.md"
      },
      {
        title: "定位兼容",
        path: "移动端/定位兼容.md"
      },
      {
        title: "禁止滚动",
        path: "移动端/禁止滚动.md"
      },
      {
        title: "输入框数字校验",
        path: "移动端/输入框数字校验.md"
      }
    ]
  }
],
  },
};
