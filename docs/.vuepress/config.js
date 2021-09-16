const SidebarConfig = require('./configs/sidebar');


module.exports = {
  title: 'Xiaoteng Notebook',
  description: 'Just playing around',
  // 使用主题
  // theme: 'vuepress-theme-xx',
  // 根路径, 如果是https://foo.github.io/bar/，那么 base 的值就应该被设置为 "/bar/"
  // base: '/',
  themeConfig: {
    // .vuepress/public 是默认的base
    logo: '/lion.jpeg',
    navbar: [{ text: '首页', link: '/' }, ...SidebarConfig['NavbarConfig']],
    // navbar: [
    //   { text: '首页', link: '/' },
    //   { text: 'python', link: '/python' },
    //   { text: 'go', link: '/go' },
    //   { text: 'guide', link: '/guide' },
    //   { text: 'vuepress', link: '/vuepress' },
    // ],
    // sidebar: 'auto',
    // sidebar: sidebar,
    sidebar: SidebarConfig['SidebarConfig'],
    // sidebar: {
      // sidebarItem
      // '/vuepress/': [{'text': 'Vuepress', 'link': '/vuepress/', 'children': [{'/config/': [{'text': 'Vuepress config', 'link': '/config/', 'children': [{'text': 'More config', 'link': '/config/more_config.md'}]}]}]}]
    // },
    // sidebar: [
    //   {'text': 'Vuepress', 'link': '/vuepress', 'children': [{'text': 'Vuepress config', 'link': '/vuepress/config', 'children': [{'text': 'More config', 'link': '/vuepress/config/more_config.md'}]}]}
    // ],
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
  }
}
