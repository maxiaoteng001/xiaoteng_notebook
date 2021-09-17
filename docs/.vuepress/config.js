const SidebarConfig = require('./configs/sidebar');


module.exports = {
  title: 'Xiaoteng Notebook',
  description: 'Just playing around',
  // 使用主题
  // theme: 'vuepress-theme-xx',
  // 根路径, 用于部署到github, 如果是https://foo.github.io/bar/，那么 base 的值就应该被设置为 "/bar/"
  // base: '/',
  themeConfig: {
    logo: '/lion.jpeg',
    navbar: [{ text: '首页', link: '/' }, ...SidebarConfig['NavbarConfig']],
    sidebar: SidebarConfig['SidebarConfig'],
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
  }
}
