import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '',
  title: '我的文档',
  layout: 'home',
  themeConfig: {
    nav: getNav(),
    socialLinks: [{ icon: 'github', link: 'https://github.com/kongweigen/pg-kit' }],
    sidebar: getSidebar(),
  },
})

function getNav() {
  return [
    { text: '指南', link: '/guide/' },
    { text: '组件', link: '/components/button' }
  ]
}

function getSidebar() {
  return {
    // 当用户在 `指南` 目录页面下将会展示这个侧边栏
    '/guide/': [
      {
        text: '指南',
        items: [
          // This shows `/guide/index.md` page.
          { text: '介绍', link: '/guide/' }, // /guide/index.md
          { text: '快速上手', link: '/guide/install' }, // /guide/one.md
          { text: '架构设计', link: '/guide/design' } // /guide/two.md
        ]
      }
    ],

    // 当用户在 `配置` 目录页面下将会展示这个侧边栏
    '/components/': [
      {
        text: '基本组件',
        items: [
          // This shows `/config/index.md` page.
          { text: 'Button 按钮', link: '/components/button' },
          { text: 'select 选择器', link: '/components/select' },
          { text: 'Tag 标签', link: '/components/tag' }
        ]
      },
      {
        text: '其他',
        items: [
          // This shows `/config/index.md` page.
          { text: 'Divider 分割线', link: '/components/divider' }
        ]
      }
    ]
  }
}