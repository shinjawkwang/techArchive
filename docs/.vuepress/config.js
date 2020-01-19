var CONST = require("./const");
const feather = require('feather-icons');
var octicons = require('octicons');

module.exports = {
 	title: 'JK\'s Tech Archive',
	description: 'personal technology wiki',
	base: "/techArchive/",
	markdown: {
		anchor: {
			permalink: true, permalinkBefore: true, permalinkSymbol: octicons.link.toSVG()
		}
	},
	themeConfig: {
		smoothScroll: true,
		sidebar: [
			{
				title: 'Datastructure and Algorithm',
				children: CONST.DatastructureAndAlgorithmList
			}, {
				title: 'Daily Coding',
				children: CONST.DailyCodingList
			}
		],
    	nav: [
			{ text: 'Home', link: '/' },
			{ text: 'GitHub', link: 'https://github.com/shinjawkwang/' }
		]
  	}
}