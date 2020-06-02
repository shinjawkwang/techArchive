var CONST = require("./const");
var fs = require("fs");
//const feather = require('feather-icons');
var octicons = require('octicons');
console.log(CONST);

module.exports = {
    title: 'JK\'s Tech Archive',
	description: 'personal technology wiki',
    base: "/techArchive/",
    dest: "build",
    head: [
        ['link', { rel: "shortcut icon", href: "/favicon.ico"}],
        ['meta', { name: "google-site-verification", content: "A323fBhZQ96dV9OaQQyRAcCy_YIFxi4PUt0p2HyTdFs"}],
    ],
	markdown: {
		anchor: {
			permalink: true, permalinkBefore: true, permalinkSymbol: octicons.link.toSVG()
        },
        lineNumbers: true
	},
	themeConfig: {
        smoothScroll: true,
        sidebar: CONST.sidebar,
        nav: [
            { text: 'Daily Coding', link: '/daily-coding/' },
            { text: 'Datastructure and Algorithm', link: '/datastructure-algorithm/' },
            { text: 'Tags', link: '/tag/' },
			{ text: 'GitHub', link: 'https://github.com/shinjawkwang/' }
		]
    },
    plugins: ['@vuepress/last-updated',
              '@vuepress/plugin-google-analytics',
              ['@vuepress/blog', 
                    {
                    directories: [
                        {
                            id: "dailyCoding",
                            dirname: "Daily_Coding",
                            title: "Daily Coding",
                            path: "/daily-coding/",
                            itemPermalink: "/daily-coding/:year/:month/:day/:slug",
                            pagination: {
                                lengthPerPage: 50,
                            },
                        },
                        {
                            id: "datastructureAndAlgorithm",
                            dirname: "Datastructure_and_Algorithm",
                            title: "Datastructure And Algorithm",
                            path: "/datastructure-algorithm/",
                            itemPermalink: "/datastructure-algorithm/:year/:month/:day/:slug",
                            pagination: {
                                lengthPerPage: 20,
                            },
                        }
                    ],
                    comment: {
                        service: 'vssue',
                        // The owner's name of repository to store the issues and comments.
                        owner: 'shinjawkwang',
                        // The name of repository to store the issues and comments.
                        repo: 'techArchive',
                        // The clientId & clientSecret introduced in OAuth2 spec.
                        clientId: 'b9533f01e91d293c0649',
                        clientSecret: '6b73673155f1323d8d365c7d8d53ddc3368f0cc1',
                        autoCreateIssue: true
                    },
                    frontmatters: [
                        {
                            // Unique ID of current classification
                            id: 'tag',
                            // Decide that the frontmatter keys will be grouped under this classification
                            keys: ['tags'],
                            // Path of the `entry page` (or `list page`)
                            path: '/tag/',
                            // Layout of the `entry page`
                            layout: 'Tags',
                            // Layout of the `scope page`
                            scopeLayout: 'Tag',
                            pagination: {
                                lengthPerPage: 50,
                            },
                        },
                    ]
                    },
                ],
             ],
    locales: {
        '/': { lang: 'ko-KR' }
    },
    ga: '{UA-159126573-1}'
}