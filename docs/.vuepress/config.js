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
    port: 8000,
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
                    // globalPagination: true,
                    },
                ],
             ],
    locales: {
        '/': { lang: 'ko-KR' }
    },
    ga: '{UA-159126573-1}'
}