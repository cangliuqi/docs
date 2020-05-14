module.exports = {
    base: '/docs/',
    title: '煮酒论前端',
    description: '助力前端开发者渐入佳境',
    head:[
        ['link',{
            rel:'icon',
            href:'/light.jpg'
        }]
    ],
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/cangliuqi/cangliuqi.github.io',
        // 自定义仓库链接文字。
        repoLabel: 'GitHub',
        nav: [
            { text: '首页', link: '/' },
            { text: '每日一问',link:'/question/' }
        ],
        sidebarDepth: 1,
        sidebar: [
            {
                title: 'JavaScript',
                collapsable: false,
                children: ['/question/javascript/背景.md']/*,'/question/javascript/basecontent/','/question/javascript/reftype/'*/
            },
            /*{
                title: 'Vue',
                collapsable: false,
                children: ['/question/vue/']
            }*/
        ]
    }
}