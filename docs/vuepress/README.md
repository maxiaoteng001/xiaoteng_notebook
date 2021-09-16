# VUEPRESS

1. 参考[https://vuepress.github.io/guide/](https://vuepress.github.io/guide/)
2. 总目录下
    - docs 所有文档所在目录,
        - README.md
        - .vuepress配置文件
            - config.js
        - guide
            - README.md
        - refrence
            - README.md
    - .gitignore
    - package.json yarn配置
3. 自定义frontmatter

    ```markdown
        // 加在最顶端, 覆盖config file中的文件
        ---
        lang: en-US
        title: Title of this page
        description: Description of this page
        ---
    ```

4. 静态文件默认位于`.vuepress/public`, 引用`/`
