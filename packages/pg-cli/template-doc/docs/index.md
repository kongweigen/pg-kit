---
layout: home

hero:
  name: My Doc  # `text' 的字符串所示。带有品牌颜色，通常会很短，例如项目名称。
  text: 年轻人自己的文档模板 # hero 部分的文本。这将被定义成`h1`标签
  tagline: 练习、完善、使用 # Tagline 会展示在 `text` 下面.
  actions: # 操作按钮
    - theme: brand # 主题色 'brand' | 浅色 'alt'
      text: 快速开始 # 按钮的文案.
      link: /guide/ # 跳转路径
    - theme: alt
      text:  去官网
      link: https://vitepress.vuejs.org/

features: # 功能块，根据具体数量自适应布局
  - icon: ⚡️ # 在 feature 框里展示icon，目前只支持emoji
    title: 模块一的标题
    details: 模块一的描述信息
  - icon: 🖖
    title: 模块二
    details: 模块二 details
  # - # icon:''
  #   title: 模块二
  #   details: 模块二 details
  # - # icon:''
  #   title: 模块二
  #   details: 模块二 details
---