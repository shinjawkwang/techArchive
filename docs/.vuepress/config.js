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
    /*head: [
        ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png"}],
        ['link', { rel: "manifest", href: "/assets/favicons/manifest.json"}],
        ['link', { rel: "shortcut icon", href: "/assets/favicons/favicon.ico"}],
        ['meta', { name: "msapplication-config", content: "/assets/favicons/browserconfig.xml"}],
    ],*/
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
            { text: 'Home', link: '/' },
            { text: 'Archive', link: '/index/' },
			{ text: 'GitHub', link: 'https://github.com/shinjawkwang/' }
		]
    },
    plugins: ['@vuepress/last-updated'],
    locales: {
        '/': { lang: 'ko-KR' }
    },
    ga: '{}'
}