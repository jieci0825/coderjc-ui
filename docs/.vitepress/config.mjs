import { defineConfig } from 'vitepress'
import {
  containerPreview,
  componentPreview
} from '@vitepress-demo-preview/plugin'
import { sidebar } from './configs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Coderjc UI',
  description: '这一个基于Vue3开发的UI组件库',
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'dracula', // 日间主题
      dark: 'github-dark' // 夜间主题
    },
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: 'http://cos.coderjc.cn/my-resource/icon/logo.1.svg',
      dark: 'http://cos.coderjc.cn/my-resource/icon/icon.svg'
    },
    lastUpdated: '最后更新时间',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑此网站',
    repo: 'https://gitee.com/login',
    outline: {
      label: '页面导航',
      level: 'deep'
    },
    footer: {
      message: '大河之剑天上来',
      copyright: '版权所有 coderjc - Jc-Disign-ui'
    },
    nav: [
      { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
      {
        text: '组件',
        link: '/component/basic/button',
        activeMatch: '/component/'
      }
    ],

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local',
      options: {
        _render(src, env, md) {
          const html = md.render(src, env)
          if (env.frontmatter?.title)
            return md.render(`# ${env.frontmatter.title}`) + html
          return html
        }
      }
    }
  }
})
