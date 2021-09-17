const SidebarConfig = require('./configs/sidebar');


module.exports = {
  title: 'Xiaoteng Notebook',
  description: 'Just playing around',
  // 使用主题, reco在官方默认主题上开发, 为了设置右侧边栏 https://vuepress-theme-reco.recoluan.com/views/1.x/
  // theme: 'reco', 
  // 根路径, 用于部署到github, 如果是https://foo.github.io/bar/，那么 base 的值就应该被设置为 "/bar/"
  // base: '/',
  themeConfig: {
    logo: '/lion.jpeg',
    navbar: [{ text: '首页', link: '/' }, ...SidebarConfig['NavbarConfig']],
    sidebar: SidebarConfig['SidebarConfig'],
    subSidebar: 'auto',
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
  }
}
