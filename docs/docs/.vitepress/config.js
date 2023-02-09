import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'

export default defineConfig({
  base: '/pg-kit/',
  title: 'pg-kit 文档',
  layout: 'home',
  themeConfig: {
    nav: getNav(),
    socialLinks: [{ icon: 'github', link: 'https://github.com/kongweigen/pg-kit' }],
    sidebar: getSidebar(),
  },
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin)
    }
  }
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

function getDemoblock() {
  return {
    '/': {
      'hide-text': 'Hide',
      'show-text': 'Expand',
      'copy-button-text': 'Copy',
      'copy-success-text': 'Copy success'
    },
    '/zh': {
      'hide-text': '隐藏代码',
      'show-text': '显示代码',
      'copy-button-text': '复制代码片段',
      'copy-success-text': '复制成功'
    }
  }
}