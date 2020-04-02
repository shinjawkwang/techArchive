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
                                lengthPerPage: 30,
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
                    globalPagination: true,
                    },
                ],
             ],
    locales: {
        '/': { lang: 'ko-KR' }
    },
    ga: '{UA-159126573-1}'
}