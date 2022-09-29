module.exports = {
    title: 'Releases',
    description: 'Chevereto Releases',
    head: [
        ['link', {
            rel: 'icon',
            href: `/logo.svg`
        }],
        ['link', {
            rel: 'manifest',
            href: '/manifest.json'
        }],
        ['meta', {
            name: 'theme-color',
            content: '#23a8e0'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ['link', {
            rel: 'apple-touch-icon',
            href: '/logo.svg'
        }],
        ['link', {
            rel: 'mask-icon',
            href: '/logo.svg',
            color: '#3eaf7c'
        }],
        ['meta', {
            name: 'msapplication-TileImage',
            content: '/logo.svg'
        }],
        ['meta', {
            name: 'msapplication-TileColor',
            content: '#000000'
        }],
        ['script', {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-B97HXWGMEB',
        }],
        ['script', {},
            [
                "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-B97HXWGMEB');",
            ],
        ],
    ],
    themeConfig: {
        logo: '/logo.svg',
        // repo: 'chevereto/chevereto',
        docsRepo: 'chevereto/releases',
        docsBranch: 'main',
        smoothScroll: true,
        editLinks: false,
        lastUpdated: false,
    },
};
