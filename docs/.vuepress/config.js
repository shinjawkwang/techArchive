var CONST = require("./const");

module.exports = {
 	title: 'JK\'s Tech Archive',
	description: 'personal technology wiki',
	base: "/techArchive/",
	themeConfig: {
		smoothScroll: true,
		sidebar: [
			{
				title: 'Datastructure And Algorithm',
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