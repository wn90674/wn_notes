module.exports = {
  title: '前端学习笔记',
  description: 'Just playing around',
  dest: '.vuepress/dist',
  markdown: {
    lineNumbers: true,
  },
  evergreen: true,
  themeConfig: {
    displayAllHeaders: true, // 默认值：false
    lastUpdated: 'Last Updated', // string | boolean    
    sidebar: [
      {
        title: 'linux',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          {
            title: '统计',   // 必要的
            path: '/linux/统计',      // 可选的, 应该是一个绝对路径         
          },                       
          {
            title: 'two',   // 必要的
            path: '/linux/two',      // 可选的, 应该是一个绝对路径       
          },
        ]
      },
      { 
        title: 'git',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          {
            title: 'https/ssh',   // 必要的
            path: '/git/协议',      // 可选的, 应该是一个绝对路径        
          },
          {
            title: '版本回退',   // 必要的
            path: '/git/版本回退',      // 可选的, 应该是一个绝对路径         
          },                  
        ]
      }      
    ]
  },
}