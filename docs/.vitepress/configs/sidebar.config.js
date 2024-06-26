export default {
  '/guide/': [
    {
      text: '指南',
      items: [
        { text: '安装', link: '/guide/installation' },
        { text: '快速开始', link: '/guide/quie-start' }
      ]
    }
  ],
  '/component/': [
    {
      text: 'Basic 基础组件',
      items: [
        { text: 'Button 按钮', link: '/component/basic/button' },
        { text: 'Icon 图标', link: '/component/basic/icon' }
      ]
    },
    {
      text: 'Form 表单组件',
      items: [
        { text: 'Checkbox 多选框', link: '/component/form/checkbox' },
        { text: 'Form 表单', link: '/component/form/form' },
        { text: 'Input 输入框', link: '/component/form/input' }
      ]
    },
    {
      text: 'Data 数据展示',
      items: [
        { text: 'Tree 树形控件', link: '/component/data/tree' },
        { text: 'Collapse 折叠面板', link: '/component/data/collapse' }
      ]
    },
    {
      text: 'Feedback 反馈组件',
      items: [{ text: 'Message 消息提示', link: '/component/feedback/message' }]
    }
  ]
}
