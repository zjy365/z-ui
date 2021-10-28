module.exports = {
    title: 'Z-UI',
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
                  { text: 'Chinese', link: '/language/chinese/' },
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
              // {
              //   title: '设计',
              //   collapsable: true,
              //   children: [
              //     'views/design/color/',
              //   ]
              // },
              {
                title: '组件',
                collapsable: false,
                children: [
                  'views/components/button/',
                  'views/components/radio/'
                ]
              },
        ]
    }
}