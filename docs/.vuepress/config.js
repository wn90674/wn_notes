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
        title: "不能存在readme",
        path: "git/不能存在readme.md"
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
    title: "linux222",
    collapsable: false,
    sidebarDepth: 1,
    children: [
      {
        title: "three",
        path: "linux222/three.md"
      },
      {
        title: "total",
        path: "linux222/total.md"
      },
      {
        title: "two",
        path: "linux222/two.md"
      }
    ]
  },
  {
    title: "nodejs",
    collapsable: false,
    sidebarDepth: 1,
    children: [
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
  }
],
  },
};
