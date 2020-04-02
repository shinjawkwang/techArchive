function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}
var fs = require('fs');
var dir = fs.readdirSync(__dirname+'/../');
var name = [];
var mdList = [];
var sidebarList = [];
// TODO: delete unused folders completely (current: depend on order)
dir.splice(dir.length-1, 1); // README, index
dir.shift(); // .vuepress

for(i in dir) {
    name[i] = replaceAll(dir[i], '_', ' ');
}
for(i in dir) {
    mdList[i] = fs.readdirSync(__dirname+'/../'+dir[i]);
    for(j in mdList[i]) {
        if(mdList[i][j] === "README.md") {
            mdList[i].splice(j, 1);
            continue;
        }
        mdList[i][j] = dir[i] + '/' + mdList[i][j];
        sidebarList[i] = {
            title: name[i],
            children: mdList[i]
        };
    }
}
exports.sidebar = sidebarList;
