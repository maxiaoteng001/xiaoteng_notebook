# Config

## 配置内容

1. 目录通过`python3 vuepress_sidebar.py`来刷新配置

## deploy github pages

1. 配置`deploy.sh`脚本
    - CNAME 可以通过自定义域名访问
    - master:gh-pages 就推送到当前位置
2. 在域名解析中添加`notebook`的解析记录
    - 记录值`maxiaoteng001.github.io.`
    - 主机记录`notebook`
