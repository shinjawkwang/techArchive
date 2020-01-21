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
	markdown: {
		anchor: {
			permalink: true, permalinkBefore: true, permalinkSymbol: octicons.link.toSVG()
		}
	},
	themeConfig: {
		smoothScroll: true,
        sidebar: CONST.sidebar,
    	nav: [
            { text: 'Home', link: '/' },
            { text: 'Archive', link: '/index/' },
			{ text: 'GitHub', link: 'https://github.com/shinjawkwang/' }
		]
  	}
}