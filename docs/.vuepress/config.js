module.exports = {
    title: 'Z-UI',
    plugins: ['demo-container'],
    themeConfig: {
        // logo: '/assets/img/logo.png', // logo
        // lastUpdated: 'Last Updated', // string | boolean 时间戳
        nav: [
            { text: 'Home', link: '/' },
            // { text: 'Guide', link: '/guide/' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                  { text: '中文', link: '/language/chinese/' },
                  { text: 'English', link: '/language/english/' }
                ]
            },
            { text: 'GitHub', link: 'https://github.com/zjy365/z-ui-vue' },
        ],
        sidebar: [
            {
                title: '指南',
                collapsable: false,
                children: [
                  'views/guide/install.md',
                  'views/guide/get-started.md',
                  'views/guide/themes.md'
                ]
              },
              {
                title: '组件',
                collapsable: false,
                children: [
                  'views/components/button/',
                  'views/components/radio/',
                  'views/components/icons/',
                  'views/components/card/',
                  'views/components/row/',
                  'views/components/table/',
                ]
              },
        ]
    }
}